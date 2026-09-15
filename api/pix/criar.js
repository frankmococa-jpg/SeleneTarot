// POST /api/pix/criar  { valor, item, sessao }  ->  { txid, qrcode, copiaECola, expiraEm }
const { getEfi, cors } = require("../_efi");
const { kv } = require("@vercel/kv");

module.exports = async (req, res) => {
  cors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ erro: "use POST" });
  try {
    const { valor, item, sessao } = req.body || {};
    if (!valor || !item) return res.status(400).json({ erro: "valor e item obrigatórios" });
    const efi = getEfi();
    const cob = await efi.pixCreateImmediateCharge({}, {
      calendario: { expiracao: 1800 },
      valor: { original: Number(valor).toFixed(2) },
      chave: process.env.EFI_PIX_KEY,
      solicitacaoPagador: ("Selene · " + item).slice(0, 140)
    });
    const qr = await efi.pixGenerateQRCode({ id: cob.loc.id });
    const imagem = qr.imagemQrcode && qr.imagemQrcode.startsWith("data:") ? qr.imagemQrcode : "data:image/png;base64," + qr.imagemQrcode;
    await kv.set("pix:" + cob.txid, { status: "ATIVA", sessao, item, valor }, { ex: 86400 });
    res.status(200).json({ txid: cob.txid, qrcode: imagem, copiaECola: qr.qrcode, expiraEm: 1800 });
  } catch (e) {
    console.error(e);
    res.status(500).json({ erro: "falha ao criar cobrança" });
  }
};
