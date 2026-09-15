// GET /api/pix/status/:txid  ->  { status }
const { cors } = require("../../_efi");
const { kv } = require("@vercel/kv");

module.exports = async (req, res) => {
  cors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  const c = await kv.get("pix:" + req.query.txid);
  if (!c) return res.status(404).json({ status: "DESCONHECIDA" });
  res.status(200).json({ status: c.status });
};
