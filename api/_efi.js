// Cliente Efí compartilhado pelas funções da Vercel.
const EfiPay = require("sdk-node-apis-efi");

let efi;
function getEfi() {
  if (efi) return efi;
  efi = new EfiPay({
    sandbox: process.env.EFI_SANDBOX === "true",
    client_id: process.env.EFI_CLIENT_ID,
    client_secret: process.env.EFI_CLIENT_SECRET,
    certificate: process.env.EFI_CERT_BASE64,   // conteúdo do .p12 em base64 (variável de ambiente)
    cert_base64: true
  });
  return efi;
}

function cors(res) {
  const origin = (process.env.SITE_ORIGIN || "*").trim().replace(/[\r\n]+/g, "") || "*";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

module.exports = { getEfi, cors };
