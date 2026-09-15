// GET /api/pix/configurar-webhook?token=SEU_TOKEN
const { req, getToken } = require("../_efiRaw");
const { cors } = require("../_efi");

module.exports = async (req_, res) => {
  cors(res);
  const token = process.env.ADMIN_TOKEN;
  if (!token || req_.query.token !== token) return res.status(401).json({ erro: "token inválido" });
  try {
    const access = await getToken();
    const host = req_.headers["x-forwarded-host"] || req_.headers.host;
    const webhookUrl = "https://" + host + "/api/pix/webhook";
    const chave = encodeURIComponent(process.env.EFI_PIX_KEY);
    await req("PUT", "/v2/webhook/" + chave, { token: access, body: { webhookUrl } });
    const atual = await req("GET", "/v2/webhook/" + chave, { token: access });
    res.status(200).json({ ok: true, cadastrado: atual.webhookUrl, criadoEm: atual.criacao });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, erro: (e && e.body) ? e.body : String(e) });
  }
};
