// Chamada direta à API Pix da Efí (bypassa o SDK, que erra o host para webhook).
const https = require("https");

function pfxAgent() {
  const pfx = Buffer.from((process.env.EFI_CERT_BASE64 || "").trim(), "base64");
  return new https.Agent({ pfx, passphrase: "" });
}

function host() {
  return process.env.EFI_SANDBOX === "true" ? "pix-h.api.efipay.com.br" : "pix.api.efipay.com.br";
}

function req(method, path, { body, token, basicAuth } = {}) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const headers = { "Content-Type": "application/json" };
    if (token) headers.Authorization = "Bearer " + token;
    if (basicAuth) headers.Authorization = "Basic " + basicAuth;
    if (data) headers["Content-Length"] = Buffer.byteLength(data);
    headers["x-skip-mtls-checking"] = "true";

    const r = https.request({ host: host(), path, method, headers, agent: pfxAgent() }, (res) => {
      let out = "";
      res.on("data", (c) => (out += c));
      res.on("end", () => {
        let json;
        try { json = JSON.parse(out); } catch (e) { json = { raw: out }; }
        if (res.statusCode >= 200 && res.statusCode < 300) resolve(json);
        else reject(Object.assign(new Error("Efí " + res.statusCode), { status: res.statusCode, body: json }));
      });
    });
    r.on("error", reject);
    if (data) r.write(data);
    r.end();
  });
}

async function getToken() {
  const basic = Buffer.from(process.env.EFI_CLIENT_ID + ":" + process.env.EFI_CLIENT_SECRET).toString("base64");
  const r = await req("POST", "/oauth/token", { basicAuth: basic, body: { grant_type: "client_credentials" } });
  return r.access_token;
}

module.exports = { req, getToken };
