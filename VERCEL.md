# Selene — publicar no Vercel

## 0. ANTES DE TUDO — separe as chaves
Dentro do ZIP há a pasta **`CHAVES-NAO-ENVIAR`**. Mova-a para fora (ex.: Área de Trabalho) e **não a envie ao Vercel**.
Dentro dela está o `.env.local` com as chaves da Efí, o certificado e a chave Pix. Você vai só copiar linhas dali para o painel do Vercel.
(O projeto também tem um `.vercelignore` que bloqueia esse arquivo, mas não confie só nisso.)

## A. Subir o site
1. Entre em vercel.com → **Add New → Project** → arraste a pasta do projeto (sem a `CHAVES-NAO-ENVIAR`) ou conecte o GitHub.
2. Framework: **Other**. Build command: vazio. Output: vazio. **Deploy**.
3. Anote o endereço gerado (ex.: `https://selene-taro.vercel.app`).

## B. Variáveis (Settings → Environment Variables)
Abra o `.env.local` da pasta `CHAVES-NAO-ENVIAR` e cole cada linha como uma variável: nome à esquerda do `=`, valor à direita.
Preencha `SITE_ORIGIN` com o endereço do passo A.3.

## C. Banco (Storage → Create Database → KV / Upstash Redis)
Crie e clique **Connect Project**. As variáveis `KV_*` entram sozinhas.

## D. Webhook na Efí (API → Webhooks)
Para a chave Pix `32e21669-6a41-4155-b4df-f6bad7de523c`, cadastre:
`https://SEU-SITE.vercel.app/api/pix/webhook`

## E. Redeploy
Deployments → ⋯ → **Redeploy**. Pronto: o QR é real e a leitura libera sozinha quando o Pix cai.

## F. Conferir segurança
Abra `https://SEU-SITE.vercel.app/.env.local` no navegador. Tem que dar **404**. Se abrir algum texto, apague o projeto no Vercel, gere novas chaves na Efí e refaça sem a pasta de chaves.

Depois de colar tudo no Vercel, apague a pasta `CHAVES-NAO-ENVIAR` do computador.
