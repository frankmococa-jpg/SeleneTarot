// POST /api/pix/criar  { valor, item, sessao }  ->  { txid, qrcode, copiaECola, expiraEm }
const { req, getToken } = require("../_efiRaw");
const { cors } = require("../_efi");
const { kv } = require("@vercel/kv");

module.exports = async (req_, res) => {
  cors(res);
  if (req_.method === "OPTIONS") return res.status(200).end();
  if (req_.method !== "POST") return res.status(405).json({ erro: "use POST" });
  try {
    const { valor, item, sessao } = req_.body || {};
    if (!valor || !item) return res.status(400).json({ erro: "valor e item obrigatórios" });
    const token = await getToken();
    const cob = await req("POST", "/v2/cob", {
      token,
      body: {
        calendario: { expiracao: 1800 },
        valor: { original: Number(valor).toFixed(2) },
        chave: process.env.EFI_PIX_KEY,
        solicitacaoPagador: ("Selene · " + item).slice(0, 140)
      }
    });
    const qr = await req("GET", "/v2/loc/" + cob.loc.id + "/qrcode", { token });
    const imagem = qr.imagemQrcode && qr.imagemQrcode.startsWith("data:") ? qr.imagemQrcode : "data:image/png;base64," + qr.imagemQrcode;
    await kv.set("pix:" + cob.txid, { status: "ATIVA", sessao, item, valor }, { ex: 86400 });
    res.status(200).json({ txid: cob.txid, qrcode: imagem, copiaECola: qr.qrcode, expiraEm: 1800 });
  } catch (e) {
    console.error(e, e && e.body);
    res.status(500).json({ erro: "falha ao criar cobrança", detalhe: e && e.body ? e.body : String(e) });
  }
};
