// GET /api/pix/configurar-webhook?token=SEU_TOKEN
// Cadastra (uma vez) o webhook Pix na Efí apontando para este site. Protegido por token para não ser chamado por terceiros.
const { getEfi, cors } = require("../_efi");

module.exports = async (req, res) => {
  cors(res);
  const token = process.env.ADMIN_TOKEN;
  if (!token || req.query.token !== token) return res.status(401).json({ erro: "token inválido" });
  try {
    const efi = getEfi();
    const host = req.headers["x-forwarded-host"] || req.headers.host;
    const webhookUrl = "https://" + host + "/api/pix/webhook";
    const headers = { "x-skip-mtls-checking": "true", "User-Agent": "Mozilla/5.0 (Selene/1.0)" };
    let ultimo;
    for (let i = 0; i < 3; i++) {
      try {
        await efi.pixConfigWebhook({ chave: process.env.EFI_PIX_KEY }, { webhookUrl }, headers);
        ultimo = null;
        break;
      } catch (e) {
        ultimo = e;
        await new Promise(r => setTimeout(r, 1500 * (i + 1)));
      }
    }
    if (ultimo) throw ultimo;
    const atual = await efi.pixDetailWebhook({ chave: process.env.EFI_PIX_KEY }, headers);
    res.status(200).json({ ok: true, cadastrado: atual.webhookUrl, criadoEm: atual.criacao });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, erro: e && e.error_description ? e.error_description : String(e) });
  }
};
