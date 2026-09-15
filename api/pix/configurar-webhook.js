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
    await efi.pixConfigWebhook(
      { chave: process.env.EFI_PIX_KEY },
      { webhookUrl },
      { "x-skip-mtls-checking": "true" }
    );
    const atual = await efi.pixDetailWebhook({ chave: process.env.EFI_PIX_KEY });
    res.status(200).json({ ok: true, cadastrado: atual.webhookUrl, criadoEm: atual.criacao });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, erro: e && e.error_description ? e.error_description : String(e) });
  }
};
