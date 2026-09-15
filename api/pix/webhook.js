// Webhook da Efí. Cadastre no painel: https://SEU-SITE.vercel.app/api/pix/webhook
// A Efí chama essa mesma URL com sufixo /pix ao confirmar pagamento; o rewrite no vercel.json redireciona para aqui.
const { kv } = require("@vercel/kv");

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();
  const lista = (req.body && req.body.pix) || [];
  for (const p of lista) {
    const c = await kv.get("pix:" + p.txid);
    if (c) await kv.set("pix:" + p.txid, { ...c, status: "CONCLUIDA" }, { ex: 86400 });
  }
  res.status(200).end();
};
