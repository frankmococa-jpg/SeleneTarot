# Roteiro Completo — Plataforma Selene (Tarô Simbólico)

Documento operacional. Tudo aqui já está implementado em `Selene.dc.html`, `baralho.js` e `motor.js`, ou serve de especificação para integração externa.

---

## 1. Princípio do produto

Selene vende **clareza sobre uma área da vida**, não previsão de fato. A consulente paga para:

1. ter um ritual próprio (respira, embaralha 78 cartas, corta em dois montes de 39, escolhe o monte, separa as suas cartas, vira uma a uma);
2. receber uma interpretação **longa, específica e argumentada** para cada carta, ancorada no que está visível na imagem Rider-Waite;
3. receber uma síntese que costura as cinco cartas e responde à pergunta com nível de confiança;
4. sair com três passos verificáveis em sete dias.

O que ela paga é o **porquê**. Uma frase por carta não vende; um argumento de quatro parágrafos por carta vende e fideliza.

Regras invioláveis (já aplicadas no código e no prompt): linguagem condicional; sem diagnóstico, gravidez, investimento, garantia de volta, acusação de inveja/trabalho; transparência de que a interpretação é automatizada antes de qualquer pagamento; sem contagem regressiva ou desconto falso.

---

## 2. Copy persuasiva das 12 áreas

Formato por área: **nome comercial · preço · reposicionamento · headline · subheadline · o que ela recebe · carta gratuita (gancho) · texto de desbloqueio · CTA · aviso obrigatório**.

### 2.1 Caminhos do Amor — R$ 67
**Reposicionamento:** de "amor e relacionamento" (genérico) para "entender a dinâmica antes de investir mais um mês de coração". Vende decisão informada, não romance.
**Headline:** Você sente que algo está travado no amor, mas não consegue nomear o quê.
**Sub:** Cinco cartas mostram o clima real do seu coração, o que você precisa de fato, a dinâmica que ninguém verbalizou, para onde isso tende e qual postura muda o rumo.
**Ela recebe:** leitura de ~1.200 palavras + síntese; padrão afetivo dominante; conflito central entre o que sente e o que vive; três passos para os próximos sete dias.
**Carta grátis:** "A primeira carta mostra como seu coração está entrando nesta história — mesmo que você ainda não tenha colocado isso em palavras."
**Desbloqueio:** "Descubra o que a dinâmica desperta em você, o principal bloqueio, a tendência afetiva e o conselho das cartas para não repetir o mesmo ciclo."
**CTA:** Ver meus caminhos no amor.

### 2.2 Seu Ex: vínculo, distância e reconciliação — R$ 87
**Reposicionamento:** de "volta do ex" (promessa perigosa) para "diferenciar saudade, apego, desejo e intenção real". Reduz risco jurídico e aumenta percepção de seriedade — quem está sofrendo quer honestidade, não ilusão.
**Headline:** Antes de esperar mais uma semana por uma mensagem, entenda o que ainda existe de verdade.
**Sub:** As cartas separam o que é vínculo do que é hábito, mostram a energia provável do outro lado hoje, o bloqueio real e em que condições uma reaproximação faria sentido — para você.
**Carta grátis:** "Esta carta mostra a energia que ainda conecta vocês — ou o motivo pelo qual o vínculo parece mais forte para um lado do que para o outro."
**Desbloqueio:** "As quatro cartas restantes mostram o que está oculto, o bloqueio real, a tendência de contato ou afastamento e a atitude que preserva sua dignidade."
**CTA:** Entender esse vínculo.
**Aviso:** Esta leitura não garante volta nem prevê a decisão de outra pessoa.

### 2.3 Fluxo do Dinheiro e Prosperidade — R$ 77
**Reposicionamento:** de "dinheiro" para "padrão financeiro" — a consulente não compra promessa de ganho, compra o diagnóstico do hábito que trava.
**Headline:** Dinheiro tem padrão. Padrão se enxerga — e se muda.
**Sub:** Veja sua relação atual com segurança, o hábito invisível que repete o aperto, por onde o recurso escapa, o canal mais aberto neste ciclo e uma ação prática medida em números.
**Carta grátis:** "A primeira carta revela como sua energia atual se relaciona com segurança, merecimento e movimento financeiro."
**Desbloqueio:** "Veja o padrão oculto, o maior risco, a oportunidade mais promissora e uma orientação prática para lidar melhor com dinheiro."
**CTA:** Abrir meu caminho de prosperidade.
**Aviso:** Não promete ganho, prêmio ou retorno; não constitui recomendação de investimento.

### 2.4 Carreira, Reconhecimento e Próximo Passo — R$ 67
**Reposicionamento:** de "trabalho" para "reconhecimento" — a dor real é não ser vista.
**Headline:** Antes de pedir demissão — ou de aguentar mais um ano — veja o que o ambiente enxerga em você.
**Sub:** Sua posição real no ciclo, o talento que você trata como comum, o freio principal, a porta em formação e o movimento com melhor relação risco/retorno.
**Carta grátis:** "Esta carta mostra o ponto profissional que mais pede sua atenção agora: talento, conflito, cansaço ou oportunidade."
**Desbloqueio:** "As próximas cartas revelam sua força pouco usada, o obstáculo central, a tendência do ciclo e o próximo passo mais coerente."
**CTA:** Revelar meu próximo passo.

### 2.5 Vitalidade, Corpo e Equilíbrio — R$ 57
**Reposicionamento:** de "saúde" (risco legal alto) para "energia e rotina". Nunca sintoma, sempre gestão de energia.
**Headline:** Seu cansaço tem uma causa que não é preguiça.
**Sub:** Como você administra sua energia, o que a drena, o recurso restaurador que já está disponível, a tendência da sua rotina e o autocuidado que sustenta.
**Carta grátis:** "A primeira carta simboliza como você tem administrado sua energia — preservando-a, dispersando-a ou exigindo mais do que consegue repor."
**CTA:** Compreender minha energia.
**Aviso:** Não realiza diagnóstico e não substitui avaliação médica ou psicológica.

### 2.6 Caminho Espiritual e Propósito — R$ 67
**Headline:** Aquela sensação de que você veio fazer outra coisa.
**Sub:** O arquétipo da sua fase, a lição insistente, a sombra que pede integração, o potencial em desenvolvimento e uma prática para trazer isso ao cotidiano.
**Carta grátis:** "Esta carta mostra o arquétipo que acompanha sua fase atual e a pergunta interior que talvez você esteja evitando."
**CTA:** Explorar meu propósito.

### 2.7 Família, Laços e Limites — R$ 57
**Reposicionamento:** de "família" para "limites" — a dor é não conseguir se posicionar.
**Headline:** O que se repete na sua família até alguém enxergar.
**Sub:** O papel que você ocupa, o não dito que organiza todos, o padrão herdado, a tendência da relação e o limite ou diálogo mais necessário.
**Carta grátis:** "A primeira carta revela o papel que você parece estar ocupando dentro dessa dinâmica familiar."
**CTA:** Entender meus vínculos familiares.

### 2.8 A Família que Você Deseja Construir — R$ 67
**Reposicionamento:** de "maternidade" (risco: gravidez, fertilidade) para "futuro familiar" — desejo, medo, conversa, apoio, preparação. Amplia o público: inclui quem não quer filhos e quer casa.
**Headline:** Uma leitura honesta sobre o futuro que você imagina — sem julgamento e sem promessa.
**Carta grátis:** "Esta carta mostra a emoção central por trás do futuro familiar que você imagina — desejo, receio, expectativa ou necessidade de segurança."
**CTA:** Explorar meu futuro familiar.
**Aviso:** Não confirma gravidez, fertilidade, prazo de concepção ou resultado médico.

### 2.9 Sim, Não ou Ainda Não? — R$ 87
**Reposicionamento:** de "sim ou não" para "direção com nível de confiança e condição". A consulente recebe uma direção clara **e** o que mudaria essa direção — isso é mais vendável que um sim seco e é defensável.
**Headline:** Pare de girar em círculo. Tenha uma direção hoje — com o custo, o benefício e a condição.
**Carta grátis:** "A primeira carta mostra a força que está conduzindo sua decisão — desejo, medo, pressa, clareza ou resistência."
**CTA:** Revelar a direção das cartas.
**Aviso:** Não se aplica a diagnóstico, processo judicial, aposta ou investimento.

### 2.10 Energia ao Seu Redor: inveja, limites e proteção — R$ 77
**Reposicionamento:** de "inveja e limpeza" (risco: acusar terceiros, vender limpeza) para "sensibilidade, limites e aterramento". Mantém o desejo (a mulher que sente peso ao redor) e elimina o risco.
**Headline:** Quando tudo trava ao mesmo tempo e você sente que o peso não é só seu.
**Carta grátis:** "Esta carta mostra como você está absorvendo ou reagindo ao ambiente ao seu redor."
**CTA:** Compreender essa influência.
**Aviso:** Não afirma que alguém lançou maldição ou trabalho; não vende limpeza.

### 2.11 Autoestima, Magnetismo e Feminino Sagrado — R$ 57
**Headline:** A leitura que devolve você para você.
**Carta grátis:** "A primeira carta revela como você está enxergando seu próprio valor neste momento — e o que talvez as outras pessoas percebam antes de você."
**CTA:** Despertar meu magnetismo.

### 2.12 Mapa Completo da Sua Vida — R$ 297 (24 cartas + carta central)
**Reposicionamento:** de "leitura de tudo" para "como as áreas se influenciam". A promessa é a **conexão** entre amor, dinheiro, trabalho, corpo, família e alma — algo que leituras isoladas não mostram.
**Headline:** Algumas respostas não aparecem quando cada área é olhada sozinha.
**Sub:** Seis capítulos de quatro cartas (estado atual, bloqueio, oportunidade, orientação) mais uma síntese que identifica o padrão repetido e as prioridades do ciclo.
**Ancoragem honesta:** "As seis leituras avulsas somariam R$ 392" (soma real dos preços, sem riscar preço inventado).
**Carta grátis:** carta central — "o tema que atravessa todas as áreas neste momento".
**CTA:** Abrir meu Mapa Completo.

### Planos
- **Avulsa** R$ 57–97 · **Círculo Selene** R$ 97/mês (leituras liberadas, um Mapa por mês, reflexão semanal) · **Pacote de três** R$ 147 (créditos sem validade).

---

## 3. Função específica das cinco cartas em cada leitura

Regra geral: **1 estado · 2 oculto · 3 bloqueio · 4 tendência · 5 orientação**. A ordem é fixa; a consulente vira na ordem.

| Área | Carta 1 | Carta 2 | Carta 3 | Carta 4 | Carta 5 |
|---|---|---|---|---|---|
| Amor | Clima afetivo atual | Necessidade emocional | Dinâmica oculta | Tendência | Conselho das cartas |
| Ex | Vínculo remanescente | Energia da outra parte | Bloqueio real | Possibilidade e condições | Postura digna |
| Dinheiro | Relação com segurança | Padrão oculto | Risco ou vazamento | Oportunidade e tendência | Ação prática |
| Carreira | Ciclo profissional | Talento subutilizado | Obstáculo | Oportunidade e tendência | Próximo passo |
| Vitalidade | Estado percebido | Fonte de desgaste | Recurso restaurador | Tendência da rotina | Autocuidado |
| Espiritual | Arquétipo do momento | Lição | Sombra | Potencial | Prática de integração |
| Família | Papel atual | O não dito | Padrão repetido | Tendência | Diálogo ou limite |
| Futuro familiar | Desejo central | Medo ou conversa necessária | Desafio | Apoio disponível | Preparação saudável |
| Decisão | Impulso | Benefício | Custo | Consequência provável | Condição da escolha |
| Energia ao redor | Sensibilidade atual | Origem do desconforto | Projeção ou influência | Efeito provável | Limite e aterramento |
| Autoestima | Autoimagem | Ferida | Força esquecida | Expressão emergente | Atitude concreta |
| Mapa Completo | Carta central + 6 blocos × (Estado atual · Bloqueio · Oportunidade · Orientação) | | | | |

Cada posição tem um texto de função (`leitura`) em `baralho.js` que o motor recebe junto com a carta.

---

## 4. Prompt completo do motor de IA

Instalado em `motor.js` como `PROMPT_SISTEMA`. A plataforma chama `window.claude.complete` com este prompt de sistema; se a IA não estiver disponível, o fallback `interpretarOffline()` compõe quatro parágrafos a partir do banco simbólico. Reproduzido aqui na íntegra para integração externa:

```
Você é o motor de interpretação da Selene, plataforma de tarô simbólico para o público feminino brasileiro. Você NÃO é uma pessoa e nunca se apresenta como taróloga humana. Sua função é produzir uma leitura longa, específica e útil a partir do que já foi sorteado — você nunca escolhe cartas, nunca inventa cartas e nunca contradiz o dicionário simbólico fornecido.

BARALHO: Rider-Waite-Smith, 78 cartas. Você recebe, para cada carta: nome, selo, naipe, palavras-chave, símbolos visíveis na imagem, significado-base, manifestação construtiva, ponto de atenção, observação prática e polaridade (-1 difícil, 0 condicional, +1 favorável). Use esses dados como âncora; amplie, nunca substitua.

FÓRMULA POR CARTA (siga a ordem, em prosa corrida, 3 a 5 parágrafos, 180 a 320 palavras por carta):
1. Nomeie a carta e a FUNÇÃO que ela ocupa na leitura (a posição).
2. Descreva o que está VISÍVEL na imagem (use os símbolos fornecidos) e o que cada símbolo significa.
3. Traduza o símbolo para a ÁREA da vida escolhida e para a pergunta da consulente, se houver.
4. Apresente DUAS manifestações plausíveis: como a carta aparece quando a energia está integrada e como aparece como ponto de atenção. Nunca escolha uma só como "a verdade".
5. Relacione com a carta anterior quando existir (reforça, contradiz ou explica).
6. Encerre com uma OBSERVAÇÃO PRÁTICA: algo que a consulente pode observar, perguntar, fazer ou evitar nos próximos dias.

LINGUAGEM: sempre condicional e responsável — "tende a", "pode indicar", "sugere", "aponta para". Nunca: "vai acontecer", "ele vai voltar", "você está com inveja em cima", "você vai ganhar dinheiro". Trate a consulente por "você". Tom: caloroso, direto, adulto, sem infantilizar, sem misticismo vazio, sem emoji. Português do Brasil.

PROIBIÇÕES ABSOLUTAS: diagnóstico médico ou psicológico; confirmar ou negar gravidez, fertilidade, doença; prever morte, acidente, traição como fato; afirmar que alguém fez trabalho, magia ou maldição; indicar investimento, aposta, decisão jurídica; garantir volta, casamento, promoção, prêmio; criar urgência ou medo para vender.

SÍNTESE (quando solicitada, após todas as cartas): 400 a 700 palavras, com seções nomeadas exatamente assim:
"Padrão dominante" — arcanos maiores × menores, naipe predominante, repetição numérica, e o que isso significa para a área.
"Conflito central" — a tensão entre naipes ou entre cartas que organiza a mesa.
"Resposta direta" — o que as cartas apontam sobre a pergunta, com nível de confiança (alta/média/baixa) e quais cartas sustentam e quais pesam contra. Na área Decisão: "Direção predominante: SIM / NÃO / AINDA NÃO".
"Tendência condicionada" — para onde caminha se nada mudar, e a condição que altera o resultado.
"Três próximos passos" — numerados, concretos, verificáveis em 7 dias.
"Frase de fechamento" — uma frase própria, sem clichê.
Feche sempre com uma linha de transparência: leitura simbólica automatizada, para reflexão e autoconhecimento.
```

**Mensagem por carta** (montada por `montarMensagemCarta`): área, descrição, pergunta, aviso, número da carta, função/posição, carta sorteada com todos os campos do dicionário, cartas já reveladas. **Mensagem de síntese** (`montarMensagemSintese`): área, pergunta, flag de Decisão, aviso, lista numerada da mesa com polaridades.

Parâmetros recomendados: modelo Sonnet ou Haiku; `max_tokens` 1400 por carta, 2200 para a síntese; temperatura padrão.

---

## 5. Estrutura JSON para integração

### 5.1 Carta (dicionário)
```json
{
  "id": "maj-13",
  "n": "A Morte",
  "r": "XIII",
  "s": "maj",
  "k": ["encerramento", "transição", "renovação"],
  "v": "o esqueleto a cavalo, a bandeira com a rosa branca e o sol nascente",
  "b": "encerramento, transição, desapego e renovação",
  "l": "Um ciclo tende a se encerrar de fato, e o alívio costuma vir depois do fim, não antes.",
  "so": "Sustentar o que já acabou por medo do vazio.",
  "c": "Encerre com nome e data. Espaço vago é condição para o que vem.",
  "p": 0,
  "i": "cartas/15.jpg"
}
```
`s` ∈ `maj | copas | ouros | espadas | paus`. `p` ∈ `-1 | 0 | 1`.

### 5.2 Área
```json
{
  "key": "amor",
  "nome": "Caminhos do Amor",
  "preco": 67,
  "sub": "...",
  "pergunta": "...",
  "gratuita": "...",
  "desbloqueio": "...",
  "cta": "...",
  "foco": "...",
  "aviso": null,
  "cruzado": "autoestima",
  "posicoes": [
    { "label": "Clima afetivo atual", "leitura": "..." },
    { "label": "Necessidade emocional", "leitura": "..." },
    { "label": "Dinâmica oculta", "leitura": "..." },
    { "label": "Tendência", "leitura": "..." },
    { "label": "Conselho das cartas", "leitura": "..." }
  ]
}
```

### 5.3 Requisição de interpretação (carta)
```json
{
  "tipo": "carta",
  "sessao": "uuid",
  "area": "amor",
  "pergunta": "devo continuar tentando ou seguir?",
  "ordem": 2,
  "total": 5,
  "posicao": { "label": "Dinâmica oculta", "leitura": "..." },
  "carta": { "...": "objeto 5.1" },
  "anteriores": [
    { "posicao": "Clima afetivo atual", "carta": "Cinco de Copas", "p": -1 },
    { "posicao": "Necessidade emocional", "carta": "Dois de Copas", "p": 1 }
  ]
}
```

### 5.4 Resposta de interpretação
```json
{
  "ordem": 2,
  "paragrafos": ["...", "...", "...", "..."],
  "fonte": "ia | fixo",
  "palavras": 260
}
```

### 5.5 Requisição e resposta de síntese
```json
{
  "tipo": "sintese",
  "area": "decisao",
  "pergunta": "...",
  "mesa": [
    { "ordem": 0, "posicao": "Impulso", "carta": "Cavaleiro de Paus", "s": "paus", "r": "Cavaleiro", "p": 0 }
  ]
}
```
```json
{
  "padrao_dominante": "...",
  "conflito_central": "...",
  "resposta_direta": { "texto": "...", "direcao": "SIM|NÃO|AINDA NÃO|null", "confianca": "alta|média|baixa", "sustentam": ["..."], "pesam": ["..."] },
  "tendencia_condicionada": "...",
  "passos": ["...", "...", "..."],
  "frase": "...",
  "transparencia": "Leitura simbólica automatizada, para reflexão e autoconhecimento."
}
```

### 5.6 Sessão (estado da plataforma)
```json
{
  "sessao": "uuid",
  "area": "amor",
  "pergunta": "...",
  "ritual": { "respirou": true, "toquesEmbaralho": 6, "monte": "esquerda" },
  "cartasSeparadas": [14, 38, 55, 2, 71],
  "reveladas": 1,
  "pago": false,
  "plano": "avulsa | circulo | pacote",
  "criadoEm": "2026-09-14T13:20:00-03:00"
}
```

---

## 6. Regras para interpretar qualquer combinação

Estas regras geram o texto longo. Aplicadas em ordem, elas sempre produzem argumento — nunca frase solta.

### 6.1 Regra da função primeiro
Nenhuma carta é lida "em si". A mesma carta muda de sentido conforme a posição. **A Torre** em *Bloqueio* = uma ruptura que ainda não aconteceu está travando você por antecipação; em *Tendência* = a estrutura tende a cair se nada mudar; em *Orientação* = deixe cair o que já está rachado. Sempre abra o parágrafo nomeando a função.

### 6.2 Regra do símbolo visível
Descreva o que está na imagem antes de interpretar. Isso ancora a leitura na carta real (a consulente vê a imagem ao lado) e cria a sensação de "ela está lendo a minha carta", não um texto genérico. Cada símbolo → um significado → uma aplicação na área.

### 6.3 Regra das duas manifestações
Toda carta tem uma manifestação integrada e um ponto de atenção. Apresente as duas, indique qual parece mais provável **pela combinação com as outras cartas**, e devolva a verificação para a consulente ("a sua realidade dos últimos dias diz qual está ativa"). Isso é honesto e é o que torna a leitura longa e útil.

### 6.4 Regra do peso dos arcanos
- **3+ arcanos maiores em 5**: tema estrutural, ciclo de vida, aprendizado de fundo. Linguagem: "fase", "ciclo", "travessia". Recomendar paciência e não forçar prazo.
- **1–2 maiores**: há um tema de fundo, mas o cotidiano decide. Nomear o maior como "eixo" e ler os menores como "como isso se manifesta na prática".
- **0 maiores**: assunto administrável, responde a escolhas práticas. Boa notícia — dizer isso explicitamente.

### 6.5 Regra do naipe dominante (2+ cartas do mesmo naipe)
- **Copas**: o eixo é emocional — vínculo, memória, receptividade. Pergunta-chave: "o que você sente é recíproco ou é projeção?"
- **Ouros**: o eixo é concreto — corpo, rotina, dinheiro, tempo. Pergunta-chave: "o que precisa ser construído devagar?"
- **Espadas**: o eixo é mental — comunicação, conflito, ansiedade, decisão. Pergunta-chave: "o que precisa ser dito ou decidido?"
- **Paus**: o eixo é ação — desejo, velocidade, disputa. Pergunta-chave: "o que pede movimento agora?"

### 6.6 Regra da tensão entre naipes (os dois mais frequentes)
- Copas + Espadas: emoção × razão.
- Copas + Ouros: sentimento buscando estabilidade concreta.
- Paus + Espadas: aceleração com risco de conflito.
- Paus + Copas: paixão e envolvimento.
- Paus + Ouros: vontade pedindo construção consistente.
- Espadas + Ouros: decisão prática, contrato, organização.
Escreva o "Conflito central" a partir dessa tensão.

### 6.7 Regra da repetição numérica (2+ menores do mesmo número)
Ás = início · II = polaridade/escolha · III = expansão · IV = estrutura · V = tensão · VI = ajuste · VII = teste · VIII = movimento/domínio · IX = maturação · X = conclusão/excesso. Dizer: "a repetição do número X acentua um estágio de …".

### 6.8 Regra das figuras de corte (Pajem, Cavaleiro, Rainha, Rei)
Podem representar a consulente, outra pessoa ou uma atitude. Regra segura: **na função de estado/impulso é a consulente; em "energia da outra parte" é o outro; nas demais é uma atitude a adotar**. Nunca afirmar identidade ("é o seu chefe").

### 6.9 Regra da polaridade e da resposta direta
Soma das polaridades (p): ≥ +3 favorável com confiança alta; +2 favorável média; −1 a +1 dividida/baixa; ≤ −2 desfavorável no momento; ≤ −3 desfavorável com confiança alta. Nomear sempre quais cartas sustentam e quais pesam. Em Decisão: ≥ +2 SIM · ≤ −2 NÃO · caso contrário AINDA NÃO (0 exato = INDEFINIDO, pedir reformulação).

### 6.10 Regra da leitura sequencial
Carta N conversa com N−1: **reforça** (mesma polaridade → ênfase), **contrasta** (polaridades opostas → "o que você sente e o que acontece não coincidem") ou **explica** (a carta de bloqueio explica por que a de estado está assim). Sempre escrever uma frase de ligação.

### 6.11 Regra da tendência condicionada
Tendência = carta 4 lida pela manifestação coerente com a soma da mesa. Sempre seguida de: "isso muda se [condição da carta 5] for cumprida". Tendência nunca é sentença.

### 6.12 Regra dos três passos
Passo 1 = observação prática da carta 5. Passo 2 = observação prática da carta 3 (bloqueio). Passo 3 = sempre "anote e reveja em sete dias comparando com fatos". Todos verificáveis.

### 6.13 Regra das cartas difíceis (Torre, Diabo, Dez de Espadas, Três de Espadas etc.)
Nunca amenizar a ponto de mentir, nunca dramatizar. Estrutura: "esta é uma carta que pede atenção" → o que ela mostra → por que isso pode ser útil agora → o que fazer. A dificuldade vira informação, não medo.

### 6.14 Regra do comprimento
Por carta: 180–320 palavras (3–5 parágrafos). Síntese: 400–700. Uma leitura de cinco cartas entrega entre 1.300 e 2.300 palavras — é isso que justifica R$ 57–97 frente a uma consulta humana de R$ 150–400.

---

## 7. Exemplos por área com síntese completa

Formato: mesa sorteada → leitura resumida por carta (na plataforma cada uma tem 3–5 parágrafos) → síntese completa.

### 7.1 Caminhos do Amor
**Pergunta:** "Ele está distante. Vale insistir?"
**Mesa:** 1 Cinco de Copas (−1) · 2 Dois de Copas (+1) · 3 Oito de Espadas (−1) · 4 Seis de Espadas (+1) · 5 Rainha de Espadas (+1)

- **Clima afetivo — Cinco de Copas.** A figura de capa olha as três taças derramadas e ignora as duas de pé. Você entrou nesta história contabilizando o que se perdeu. Integrado: luto legítimo com prazo. Atenção: organizar a relação inteira em torno do que faltou.
- **Necessidade — Dois de Copas.** Troca entre iguais sob o caduceu. O que você precisa não é atenção: é reciprocidade combinada em palavras. Contrasta com a carta 1 — o que você sente (perda) e o que precisa (troca) não estão na mesma frequência.
- **Dinâmica oculta — Oito de Espadas.** Mulher vendada cercada de espadas, castelo ao fundo. A prisão é mais mental que real; as cordas estão frouxas. A dinâmica que ninguém verbaliza: você espera ser resgatada de uma situação da qual pode sair andando.
- **Tendência — Seis de Espadas.** Travessia em barco para águas calmas. Mantidas as condições, a tendência é afastamento gradual — que alivia. Isso muda se a condição da carta 5 for cumprida.
- **Conselho — Rainha de Espadas.** Espada erguida, mão estendida. Lucidez sem romantismo: estabelecer o limite em voz alta, sem punir.

**Síntese.**
*Padrão dominante:* Nenhum arcano maior — o assunto é administrável e responde a decisão prática. Três Espadas em cinco: o eixo é mental, o nó está no que não foi dito. *Conflito central:* Copas × Espadas — emoção e razão em tensão; o coração conta perdas, a cabeça já sabe a saída. *Resposta direta:* Sobre "vale insistir?": a combinação é dividida (soma +1, confiança baixa). Sustentam a permanência: Dois de Copas (a necessidade de troca é real). Pesam contra: Cinco de Copas e Oito de Espadas (você está em posição de luto e paralisia, não de construção). As cartas não confirmam distância dele como fato; apontam que a insistência atual é passiva. *Tendência condicionada:* afastamento gradual que traz alívio (Seis de Espadas) — a menos que uma conversa direta e sem acusação (Rainha de Espadas) aconteça antes. *Três passos:* 1. Formule em duas frases o que você precisa dele e diga isso uma vez. 2. Dê um passo minúsculo fora da espera hoje (marque algo que não depende dele). 3. Anote e reveja em sete dias comparando com fatos. *Frase:* A pergunta não é se ele volta a se aproximar — é se você continua parada esperando isso.

### 7.2 Seu Ex
**Pergunta:** "Ele ainda pensa em mim?"
**Mesa:** 1 Seis de Copas (0) · 2 Quatro de Copas (0) · 3 O Diabo (−1) · 4 O Enforcado (0) · 5 Oito de Copas (0)

- **Vínculo remanescente — Seis de Copas.** Crianças, flores, vila. O que liga vocês é memória doce, selecionada. Integrado: carinho genuíno. Atenção: comparar tudo com uma versão editada.
- **Energia da outra parte — Quatro de Copas.** Pessoa sob a árvore ignorando a quarta taça. Provável apatia: não é rejeição ativa, é desatenção. Reforça a carta 1: memória de um lado, indiferença do outro.
- **Bloqueio real — O Diabo.** Casal acorrentado com correntes frouxas. O que segura não é amor, é hábito e desejo de repetir o conhecido.
- **Possibilidade e condições — O Enforcado.** Suspensão voluntária. Reaproximação plausível só depois de uma pausa real de contato — e não é a pausa "esperando ele".
- **Postura digna — Oito de Copas.** Partida sob a lua. Ir embora avisando.

**Síntese.** *Padrão:* dois arcanos maiores (Diabo, Enforcado) — há tema de fundo: apego e suspensão. Três Copas: eixo emocional, memória. *Conflito:* Copas × arcanos de prisão e pausa — o coração revisita, a estrutura pede parada. *Resposta direta:* a leitura não afirma o que ele pensa. Aponta que a energia dele (Quatro de Copas) tende a apatia, não a saudade ativa. Combinação desfavorável a uma reaproximação agora (soma −1, confiança média). Sustenta o vínculo: Seis de Copas. Pesam: Diabo (apego), Quatro de Copas (indiferença). *Tendência:* mantida a espera, suspensão prolongada (Enforcado). Muda se você sair da posição de espera (Oito de Copas). *Passos:* 1. Trinta dias sem iniciar contato — para você, não como estratégia. 2. Pergunte-se por escrito o que ganha ficando (Diabo). 3. Reveja em sete dias. *Frase:* Saudade de quem você era com ele não é o mesmo que saudade dele.

### 7.3 Fluxo do Dinheiro
**Mesa:** 1 Quatro de Ouros (0) · 2 Cinco de Ouros (−1) · 3 Sete de Espadas (−1) · 4 Ás de Ouros (+1) · 5 Oito de Ouros (+1)

Leitura-chave: Quatro de Ouros em *segurança* = reserva por medo; Cinco de Ouros em *padrão oculto* = vergonha de pedir/cobrar, sensação de estar fora; Sete de Espadas em *vazamento* = acordo mal explicado, algo não contado (inclusive por você, ao não cobrar); Ás de Ouros em *oportunidade* = proposta concreta em formação; Oito de Ouros em *ação* = especialização e repetição.

**Síntese.** *Padrão:* zero maiores, três Ouros — assunto concreto e administrável; o eixo é construção gradual. *Conflito:* Ouros × Espadas — organização material travada por algo não dito (valor não cobrado, contrato mal lido). *Resposta direta:* combinação favorável (soma 0 na leitura crua, mas as duas últimas cartas — que decidem — são +1; confiança média). Sustentam: Ás e Oito de Ouros. Pesam: Cinco de Ouros e Sete de Espadas. *Tendência:* oportunidade real aparece (Ás), mas escapa se o padrão de não cobrar continuar. *Passos:* 1. Escolha uma habilidade e dedique 40 dias (Oito de Ouros). 2. Releia um acordo ou preço que você aceitou sem discutir (Sete de Espadas). 3. Reveja em sete dias com números. *Frase:* O dinheiro não está faltando — está sendo deixado na mesa.

### 7.4 Carreira
**Mesa:** 1 Dez de Paus (−1) · 2 Três de Ouros (+1) · 3 Cinco de Paus (−1) · 4 Seis de Paus (+1) · 5 Rei de Paus (+1)

**Síntese.** *Padrão:* zero maiores, três Paus — eixo de ação e disputa; a repetição implícita de "carregar" (Dez) e "competir" (Cinco) desenha ambiente de sobrecarga com ruído. *Conflito:* Paus × Ouros — vontade pedindo estrutura; competência real (Três de Ouros) sem visibilidade. *Resposta direta:* favorável (soma +1, mas as cartas de tendência e orientação são +1: confiança média-alta). *Tendência:* reconhecimento chegando (Seis de Paus) se você sair da posição de quem carrega tudo. *Passos:* 1. Assuma a liderança de um projeto nomeado (Rei de Paus). 2. Saia de uma disputa sem prêmio esta semana (Cinco de Paus). 3. Reveja. *Frase:* Você não precisa fazer mais — precisa ser vista fazendo.

### 7.5 Vitalidade
**Mesa:** 1 Nove de Espadas (−1) · 2 Dez de Paus (−1) · 3 A Estrela (+1) · 4 Quatro de Espadas (0) · 5 A Temperança (+1)

**Síntese.** *Padrão:* dois maiores (Estrela, Temperança) nas posições de recurso e orientação — a saída é estrutural e favorável. Espadas dominantes: o desgaste é mental (ruminação), não físico em primeiro lugar. *Conflito:* Espadas × Paus — ansiedade e sobrecarga se alimentando. *Resposta direta:* favorável (soma 0, mas as cartas que decidem são +1; confiança média). *Tendência:* pausa forçada (Quatro de Espadas) — melhor escolhida que imposta. *Passos:* 1. Uma prática pequena, diária (Temperança). 2. Solte três tarefas desta semana (Dez de Paus). 3. Escreva o pior cenário e o plano ao lado (Nove de Espadas). *Aviso obrigatório reiterado.* *Frase:* Descansar antes de precisar é a única forma de descansar de fato.

### 7.6 Espiritual
**Mesa:** 1 A Sacerdotisa (0) · 2 O Eremita (0) · 3 A Lua (−1) · 4 A Estrela (+1) · 5 Ás de Paus (+1)

**Síntese.** *Padrão:* quatro arcanos maiores — fase estrutural, travessia de sentido. *Conflito:* recolhimento (Sacerdotisa, Eremita) × medo da própria intuição (Lua). *Resposta direta:* favorável com confiança média (+1); o eixo é confiar na percepção sem transformá-la em certeza. *Tendência:* recomposição e esperança fundamentada (Estrela). *Passos:* 1. Registre a ideia que acendeu e dê o primeiro passo em 24h (Ás de Paus). 2. Separe o que viu do que imaginou (Lua). 3. Reveja. *Frase:* Sua intuição não precisa de prova — precisa de prática.

### 7.7 Família
**Mesa:** 1 Rainha de Copas (+1) · 2 Sete de Espadas (−1) · 3 Dez de Ouros (+1) · 4 Cinco de Paus (−1) · 5 O Imperador (+1)

**Síntese.** *Padrão:* um maior na orientação (Imperador) — a solução é estrutura. Quatro naipes diferentes: mesa dispersa, muitos fronts. *Conflito:* Copas × Espadas — você absorve (Rainha de Copas) o que não é dito (Sete de Espadas). *Resposta direta:* favorável (soma +1, confiança média). *Tendência:* atrito recorrente (Cinco de Paus) sem regra clara. *Passos:* 1. Estabeleça uma regra e cumpra primeiro (Imperador). 2. Confira o que não foi contado antes de reagir (Sete de Espadas). 3. Reveja. *Frase:* Limite não é distância — é a forma adulta de ficar perto.

### 7.8 Futuro familiar
**Mesa:** 1 A Imperatriz (+1) · 2 Dois de Espadas (0) · 3 Quatro de Ouros (0) · 4 Dez de Copas (+1) · 5 Três de Copas (+1)

**Síntese.** *Padrão:* um maior (Imperatriz) no desejo — o desejo é criação e cuidado, genuíno. *Conflito:* Espadas × Ouros — decisão adiada (Dois de Espadas) por medo de perder segurança (Quatro de Ouros). *Resposta direta:* favorável (soma +3, confiança alta) quanto à saúde emocional do desejo — a leitura **não** confirma gravidez ou prazo. *Tendência:* pertencimento e harmonia (Dez de Copas). *Passos:* 1. Chame sua rede (Três de Copas). 2. Escreva prós e contras à mão e marque prazo para a conversa (Dois de Espadas). 3. Reveja. *Frase:* O futuro que você imagina precisa primeiro de uma conversa no presente.

### 7.9 Decisão
**Pergunta:** "Devo aceitar a proposta e mudar de cidade?"
**Mesa:** 1 Cavaleiro de Paus (0) · 2 Três de Paus (+1) · 3 Cinco de Copas (−1) · 4 O Mundo (+1) · 5 Dois de Paus (0)

**Síntese.** *Padrão:* um maior (Mundo) na consequência — conclusão e expansão. Três Paus: eixo de movimento. *Conflito:* Paus × Copas — impulso de partir × luto do que fica. *Direção predominante: SIM — confiança média (soma +1; a carta de consequência é O Mundo).* Sustentam: Três de Paus, O Mundo. Pesa: Cinco de Copas (haverá perda real a nomear). Condição (Dois de Paus): marcar a data em que o plano sai do papel — sem data, a direção volta a AINDA NÃO. *Passos:* 1. Marque a data (Dois de Paus). 2. Dê nome ao que você perde ao ir (Cinco de Copas). 3. Reveja. *Frase:* Uma decisão com luto embutido ainda é uma decisão boa.

### 7.10 Energia ao redor
**Mesa:** 1 Rainha de Copas (+1) · 2 Cinco de Paus (−1) · 3 A Lua (−1) · 4 Nove de Paus (0) · 5 Quatro de Ouros (0)

**Síntese.** *Padrão:* um maior (Lua) na posição de projeção — a leitura pede distinguir o que vem de fora do que o medo amplia. *Conflito:* Copas × Paus — sensibilidade alta em ambiente de disputa. *Resposta direta:* a leitura **não afirma** ação de terceiros. Aponta que você absorve o clima de competição (Cinco de Paus) e que parte do peso é ampliação (Lua). Combinação desfavorável ao estado atual (−1, confiança média). *Tendência:* defesa permanente e desconfiança (Nove de Paus). *Passos:* 1. Separe reserva de apego — reduza exposição sem se isolar (Quatro de Ouros). 2. Aja só sobre o que viu, não sobre o que imaginou (Lua). 3. Reveja. *Frase:* Proteção não é muro — é saber quanto de você entra em cada sala.

### 7.11 Autoestima
**Mesa:** 1 Oito de Espadas (−1) · 2 Três de Espadas (−1) · 3 A Força (+1) · 4 Rainha de Paus (+1) · 5 O Sol (+1)

**Síntese.** *Padrão:* dois maiores (Força, Sol) nas posições de força e atitude — a saída é estrutural e luminosa. Espadas nas duas primeiras: a ferida é mental, uma história contada e recontada. *Conflito:* Espadas × Paus — pensamento que aprisiona × presença que quer ocupar espaço. *Resposta direta:* favorável com confiança alta (+1 na soma, mas três cartas finais +1 e as difíceis nas posições de diagnóstico). *Tendência:* magnetismo crescente (Rainha de Paus). *Passos:* 1. Ocupe o lugar de destaque sem se desculpar (Sol). 2. Enfrente com calma o que evita com barulho (Força). 3. Pare de reler as provas (Três de Espadas). *Frase:* Você não precisa se convencer do seu valor — precisa parar de argumentar contra ele.

### 7.12 Mapa Completo (estrutura de síntese)
Carta central + 6 blocos × 4. Síntese: **padrão repetido entre blocos** (ex.: Espadas em três blocos = o tema do ciclo é comunicação), **área-prioridade** (bloco com soma mais baixa), **área-alavanca** (bloco com soma mais alta — usar como recurso), **conexões** (ex.: bloqueio de Dinheiro = mesma carta/naipe do bloqueio de Amor → padrão único), e prioridades numeradas para 30 dias.

---

## 8. Dicionário visual completo — 78 cartas Rider-Waite

Gerado a partir de `baralho.js` (fonte única de verdade). Campos: símbolos visíveis · significado-base · integrado · atenção · observe · polaridade.


### Arcanos Maiores (22)

#### O Louco (0)
**Símbolos visíveis:** o jovem à beira do precipício, o cão, a rosa branca e a trouxa no ombro.
**Significado-base:** abertura, espontaneidade e risco por falta de atenção.
**Integrado:** Um começo pode estar se abrindo antes de você se sentir pronta — e é essa disposição que costuma destravar o ciclo.
**Atenção:** Andar sem olhar o chão: pressa vestida de coragem, decisão tomada sem lastro.
**Observe:** Observe se o próximo passo é seu ou está sendo empurrado por alguém.
**Polaridade:** 0 condicional · Imagem: `cartas/02.jpg`

#### O Mago (I)
**Símbolos visíveis:** o símbolo do infinito, o braço elevado e a mesa com os quatro naipes.
**Significado-base:** iniciativa, habilidade e capacidade de direcionar recursos.
**Integrado:** Os recursos tendem a já estar em mãos; o que falta é nomear com clareza o que se quer.
**Atenção:** Encantamento e discurso: alguém prometendo mais do que entrega — inclusive você para si mesma.
**Observe:** Escreva o que deseja em uma frase. O que não cabe numa frase ainda não está formulado.
**Polaridade:** +1 favorável · Imagem: `cartas/04.jpg`

#### A Sacerdotisa (II)
**Símbolos visíveis:** os pilares B e J, o véu com romãs e a lua crescente aos pés.
**Significado-base:** silêncio, intuição, conhecimento velado e espera receptiva.
**Integrado:** Sua percepção pode estar mais informada do que sua razão admite; o silêncio aqui trabalha a favor.
**Atenção:** Informação incompleta ou algo que não está sendo dito — e a tentação de transformar intuição em certeza.
**Observe:** Evite decidir hoje. Registre impressões por alguns dias e confronte-as com fatos.
**Polaridade:** 0 condicional · Imagem: `cartas/01.jpg`

#### A Imperatriz (III)
**Símbolos visíveis:** o trigo, a água corrente, o escudo de Vênus e a coroa de estrelas.
**Significado-base:** fertilidade simbólica, criação, conforto e abundância.
**Integrado:** Algo está em crescimento e responde melhor a cuidado constante do que a pressa.
**Atenção:** Nutrir todos ao redor até secar por dentro; idealizar o papel de quem cuida.
**Observe:** Pergunte o que já está vivo e precisa de você antes de plantar algo novo.
**Polaridade:** +1 favorável · Imagem: `cartas/05.jpg`

#### O Imperador (IV)
**Símbolos visíveis:** o trono com cabeças de carneiro, a armadura e o cetro.
**Significado-base:** estrutura, autoridade, proteção, rigidez e controle.
**Integrado:** Ordem, regra e acordo explícito tendem a resolver o que sentimento sozinho não resolve.
**Atenção:** Controle rígido, imposição, medo de perder o comando da situação.
**Observe:** Defina uma regra clara e cumpra você primeiro.
**Polaridade:** +1 favorável · Imagem: `cartas/06.jpg`

#### O Hierofante (V)
**Símbolos visíveis:** a figura que abençoa, os dois discípulos e as chaves cruzadas.
**Significado-base:** tradição, valores, ensino, compromisso e aprovação social.
**Integrado:** Um caminho já testado costuma funcionar aqui: acordo formal, orientação de quem tem estrada.
**Atenção:** Fazer o que é esperado em vez do que é seu; moral alheia decidindo a sua vida.
**Observe:** Procure quem já atravessou isso e depois filtre pelo seu próprio critério.
**Polaridade:** 0 condicional · Imagem: `cartas/07.jpg`

#### Os Enamorados (VI)
**Símbolos visíveis:** o casal sob a presença do anjo, a árvore e a serpente.
**Significado-base:** escolha alinhada a valores, intimidade, atração e vulnerabilidade.
**Integrado:** Pode indicar encontro consciente e reciprocidade real, com abertura verdadeira.
**Atenção:** Indecisão confortável, ou confundir intensidade com compatibilidade.
**Observe:** Observe se as atitudes confirmam o que as palavras prometem.
**Polaridade:** +1 favorável · Imagem: `cartas/08.jpg`

#### O Carro (VII)
**Símbolos visíveis:** o condutor entre as esfinges preta e branca, sob o dossel estrelado.
**Significado-base:** direção, domínio de forças opostas, avanço e autocontrole.
**Integrado:** Há terreno a ganhar: vontade organizada tende a vencer a resistência externa.
**Atenção:** Atropelar quem está ao lado, ou correr tanto que o motivo se perde.
**Observe:** Mantenha o ritmo, mas verifique se a direção continua sendo a sua.
**Polaridade:** +1 favorável · Imagem: `cartas/09.jpg`

#### A Justiça (VIII)
**Símbolos visíveis:** a balança, a espada erguida e o manto vermelho entre pilares.
**Significado-base:** consequência, verdade, proporcionalidade e decisão responsável.
**Integrado:** Tende a favorecer o que é coerente, documentado e equilibrado.
**Atenção:** Cobrança, dívida ou culpa antiga voltando; parcialidade na própria avaliação.
**Observe:** Compare benefício, custo e responsabilidade sem o filtro do desejo.
**Polaridade:** +1 favorável · Imagem: `cartas/13.jpg`

#### O Eremita (IX)
**Símbolos visíveis:** o ancião no alto, a lanterna com uma estrela e o cajado.
**Significado-base:** recolhimento, prudência, busca interior e orientação amadurecida.
**Integrado:** O recolhimento tende a devolver clareza: longe do ruído, o critério volta.
**Atenção:** Isolamento que virou esconderijo; orgulho impedindo pedir ajuda.
**Observe:** Reserve alguns dias de silêncio sobre o assunto antes de responder a alguém.
**Polaridade:** 0 condicional · Imagem: `cartas/11.jpg`

#### A Roda da Fortuna (X)
**Símbolos visíveis:** a roda, a esfinge, a serpente e as quatro criaturas aladas.
**Significado-base:** ciclos, mudança, oportunidade, instabilidade e forças maiores.
**Integrado:** O ciclo parece girar: o que estava travado pode se mover sem tanta força.
**Atenção:** Querer congelar o que é passageiro, ou apostar em sorte chamando isso de plano.
**Observe:** Aproveite a janela enquanto existe e prepare-se para a oscilação.
**Polaridade:** +1 favorável · Imagem: `cartas/12.jpg`

#### A Força (XI)
**Símbolos visíveis:** a mulher fechando suavemente a boca do leão, as flores e o infinito.
**Significado-base:** coragem calma, desejo integrado e domínio sem violência.
**Integrado:** A força aqui é firme e sem violência: conduzir, não vencer pela pressão.
**Atenção:** Aguentar o insuportável e chamar isso de amor ou de maturidade; confundir disciplina com punição.
**Observe:** Enfrente com calma o que você vem evitando com barulho.
**Polaridade:** +1 favorável · Imagem: `cartas/10.jpg`

#### O Enforcado (XII)
**Símbolos visíveis:** o homem suspenso por um pé, o halo e a árvore em forma de T.
**Significado-base:** pausa, nova perspectiva, entrega e suspensão voluntária.
**Integrado:** A pausa pode ser útil: de outro ângulo aparece o que de pé não se vê.
**Atenção:** Sacrifício sem retorno, espera por alguém que não se move, vida em suspenso.
**Observe:** Pare de empurrar e inverta a pergunta antes de tentar de novo.
**Polaridade:** 0 condicional · Imagem: `cartas/14.jpg`

#### A Morte (XIII)
**Símbolos visíveis:** o esqueleto a cavalo, a bandeira com a rosa branca e o sol nascente.
**Significado-base:** encerramento, transição, desapego e renovação.
**Integrado:** Um ciclo tende a se encerrar de fato, e o alívio costuma vir depois do fim, não antes.
**Atenção:** Sustentar o que já acabou por medo do vazio.
**Observe:** Encerre com nome e data. Espaço vago é condição para o que vem.
**Polaridade:** 0 condicional · Imagem: `cartas/15.jpg`

#### A Temperança (XIV)
**Símbolos visíveis:** o anjo vertendo água entre duas taças, um pé na água e o caminho ao horizonte.
**Significado-base:** equilíbrio, conciliação, cura simbólica e ritmo.
**Integrado:** A recomposição tende a acontecer na dose certa: pouco, contínuo, sem extremos.
**Atenção:** Oito ou oitenta; alternar entre excesso e abandono.
**Observe:** Escolha uma prática pequena e repita todos os dias.
**Polaridade:** +1 favorável · Imagem: `cartas/16.jpg`

#### O Diabo (XV)
**Símbolos visíveis:** o casal acorrentado, a figura com asas e o pentagrama invertido.
**Significado-base:** apego, compulsão, desejo, dependência e poder entregue.
**Integrado:** Há desejo com força real aqui; reconhecido, ele deixa de governar e passa a mover.
**Atenção:** Vínculo que prende, ciúme, hábito que se repete mesmo doendo.
**Observe:** Pergunte o que você ganha ficando. A resposta costuma ser a chave da corrente.
**Polaridade:** −1 difícil · Imagem: `cartas/17.jpg`

#### A Torre (XVI)
**Símbolos visíveis:** o raio, a coroa arremessada e as figuras caindo.
**Significado-base:** ruptura, verdade súbita, queda de estrutura e libertação desconfortável.
**Integrado:** O que cai aqui geralmente já estava rachado; a queda abre espaço e tempo.
**Atenção:** Choque, notícia repentina, orgulho desmoronando em público.
**Observe:** Evite reconstruir a mesma estrutura no dia seguinte.
**Polaridade:** −1 difícil · Imagem: `cartas/18.jpg`

#### A Estrela (XVII)
**Símbolos visíveis:** a mulher com dois jarros, a água, as estrelas e o pássaro.
**Significado-base:** esperança, autenticidade, serenidade, inspiração e recomposição.
**Integrado:** Depois do estrago, calma: esperança com fundamento e um caminho se desenhando.
**Atenção:** Fé passiva, esperar milagre sem dar um passo, idealização.
**Observe:** Peça o que quer com clareza e mova-se um passo na direção do pedido.
**Polaridade:** +1 favorável · Imagem: `cartas/19.jpg`

#### A Lua (XVIII)
**Símbolos visíveis:** o cão e o lobo, o crustáceo saindo da água e o caminho entre as torres.
**Significado-base:** ambiguidade, imaginação, medo, intuição e informação incompleta.
**Integrado:** A sensibilidade está alta e pode captar o que ninguém confirmou ainda.
**Atenção:** Autoengano, ciúme fantasiando cenário, leitura excessiva de sinais.
**Observe:** Separe o que você viu do que imaginou e aja apenas sobre o que viu.
**Polaridade:** −1 difícil · Imagem: `cartas/20.jpg`

#### O Sol (XIX)
**Símbolos visíveis:** a criança no cavalo branco, a bandeira vermelha e os girassóis.
**Significado-base:** clareza, vitalidade, alegria e exposição.
**Integrado:** As coisas tendem a vir à luz com resultado favorável: alívio, reconhecimento, sim.
**Atenção:** Exposição de algo que era íntimo; brilho que ofusca o cuidado.
**Observe:** Ocupe o lugar de destaque sem se desculpar por ele.
**Polaridade:** +1 favorável · Imagem: `cartas/03.jpg`

#### O Julgamento (XX)
**Símbolos visíveis:** o anjo com a trombeta e as pessoas erguendo-se dos túmulos.
**Significado-base:** chamado, despertar, revisão, perdão e decisão definitiva.
**Integrado:** Algo do passado pode retornar para ser resolvido — e a revisão tende a levantar você.
**Atenção:** Autocrítica destrutiva, viver de arrependimento, julgar antes de ouvir.
**Observe:** Atenda o que está chamando e escolha uma pessoa para perdoar — inclusive você.
**Polaridade:** +1 favorável · Imagem: `cartas/21.jpg`

#### O Mundo (XXI)
**Símbolos visíveis:** a figura dançando dentro da coroa e os quatro seres nos cantos.
**Significado-base:** integração, conclusão, reconhecimento e passagem para novo ciclo.
**Integrado:** Um ciclo tende a se completar e as áreas da vida pedem para formar um sistema coerente.
**Atenção:** Iniciar outra busca sem encerrar emocionalmente a anterior.
**Observe:** Reconheça o que já amadureceu antes de nomear o próximo passo.
**Polaridade:** +1 favorável · Imagem: `cartas/22.jpg`

### Paus (14)

#### Ás de Paus (Ás)
**Símbolos visíveis:** a mão saindo da nuvem com o bastão brotando e o castelo distante.
**Significado-base:** impulso criativo, desejo e oportunidade inicial.
**Integrado:** Uma ideia acende com força e vontade de começar agora.
**Atenção:** Fogo de palha: entusiasmo sem projeto.
**Observe:** Registre a ideia e dê o primeiro passo em 24 horas.
**Polaridade:** +1 favorável · Imagem: `cartas/23.jpg`

#### Dois de Paus (II)
**Símbolos visíveis:** o homem no alto segurando o globo entre dois bastões.
**Significado-base:** planejamento, horizonte maior e decisão entre segurança e expansão.
**Integrado:** O mundo parece maior que o quintal — e você está olhando para ele.
**Atenção:** Planejar indefinidamente para não arriscar.
**Observe:** Marque a data em que o plano sai do papel.
**Polaridade:** 0 condicional · Imagem: `cartas/24.jpg`

#### Três de Paus (III)
**Símbolos visíveis:** a figura observando os navios diante do mar.
**Significado-base:** expectativa, resultados em movimento e visão de longo prazo.
**Integrado:** O que foi lançado já está em movimento e tende a voltar.
**Atenção:** Querer colher no mesmo dia do plantio.
**Observe:** Amplie o alcance: mais uma frente, mais um contato.
**Polaridade:** +1 favorável · Imagem: `cartas/25.jpg`

#### Quatro de Paus (IV)
**Símbolos visíveis:** a guirlanda entre os quatro bastões, o casal e o castelo.
**Significado-base:** celebração, base, acolhimento e marco compartilhado.
**Integrado:** Marco feliz se firmando: casa, festa, compromisso, conquista.
**Atenção:** Comemorar o que ainda não está fechado.
**Observe:** Marque a data e comemore de verdade quando chegar.
**Polaridade:** +1 favorável · Imagem: `cartas/26.jpg`

#### Cinco de Paus (V)
**Símbolos visíveis:** os jovens cruzando bastões sem coordenação.
**Significado-base:** competição, ruído, teste de força e energia sem coordenação.
**Integrado:** Atrito pode ser produtivo: a disputa obriga a melhorar.
**Atenção:** Briga por bobagem; ambiente de competição constante.
**Observe:** Saia da discussão que não tem prêmio.
**Polaridade:** −1 difícil · Imagem: `cartas/27.jpg`

#### Seis de Paus (VI)
**Símbolos visíveis:** o cavaleiro com coroa de louros diante da multidão.
**Significado-base:** reconhecimento, vitória, validação e risco de depender de aplauso.
**Integrado:** Reconhecimento tende a chegar — e a ser visto por quem importa.
**Atenção:** Depender do aplauso para se sentir existindo.
**Observe:** Aceite o crédito sem se diminuir.
**Polaridade:** +1 favorável · Imagem: `cartas/28.jpg`

#### Sete de Paus (VII)
**Símbolos visíveis:** o homem defendendo o terreno elevado com um bastão.
**Significado-base:** posição conquistada, resistência, pressão e necessidade de sustentar limites.
**Integrado:** Existe terreno conquistado e é possível defendê-lo.
**Atenção:** Defender sozinha o que já não vale a luta.
**Observe:** Decida o que é território e o que é teimosia.
**Polaridade:** 0 condicional · Imagem: `cartas/29.jpg`

#### Oito de Paus (VIII)
**Símbolos visíveis:** os oito bastões atravessando o céu na mesma direção.
**Significado-base:** velocidade, mensagem, alinhamento de movimento e acontecimentos próximos.
**Integrado:** As coisas tendem a destravar rápido: recado, viagem, resposta.
**Atenção:** Tudo ao mesmo tempo; impulsividade.
**Observe:** Responda hoje o que está esperando por você.
**Polaridade:** +1 favorável · Imagem: `cartas/30.jpg`

#### Nove de Paus (IX)
**Símbolos visíveis:** o homem ferido diante da barreira de bastões.
**Significado-base:** cautela, resistência, memória de conflito e último esforço.
**Integrado:** O cansaço costuma indicar proximidade: falta menos do que parece.
**Atenção:** Desconfiar de tudo por causa das feridas antigas.
**Observe:** Segure mais um pouco — e depois descanse de verdade.
**Polaridade:** 0 condicional · Imagem: `cartas/31.jpg`

#### Dez de Paus (X)
**Símbolos visíveis:** o homem curvado carregando dez bastões em direção à cidade.
**Significado-base:** sobrecarga, responsabilidade e proximidade da conclusão.
**Integrado:** Você chegou até aqui carregando tudo — e pode chegar mais leve.
**Atenção:** Assumir o que é dos outros; exaustão usada como medalha.
**Observe:** Delegue ou solte três coisas desta semana.
**Polaridade:** −1 difícil · Imagem: `cartas/32.jpg`

#### Pajem de Paus (Pajem)
**Símbolos visíveis:** o jovem examinando o bastão no deserto, com salamandras na roupa.
**Significado-base:** notícia, curiosidade, descoberta e entusiasmo iniciante.
**Integrado:** Entusiasmo novo e um convite que abre porta.
**Atenção:** Empolgação que não sustenta o segundo dia.
**Observe:** Diga sim ao que te dá energia — e cumpra.
**Polaridade:** +1 favorável · Imagem: `cartas/33.jpg`

#### Cavaleiro de Paus (Cavaleiro)
**Símbolos visíveis:** o cavalo empinado e o cavaleiro em movimento com salamandras.
**Significado-base:** paixão, aventura, chegada rápida e inconstância.
**Integrado:** Chegada intensa: paixão, viagem ou projeto arrebatador.
**Atenção:** Instabilidade, sedução sem raiz, sumiço.
**Observe:** Curta a intensidade sem construir casa nela ainda.
**Polaridade:** 0 condicional · Imagem: `cartas/34.jpg`

#### Rainha de Paus (Rainha)
**Símbolos visíveis:** o trono com leões, o girassol e o gato preto aos pés.
**Significado-base:** confiança, magnetismo, calor, independência e presença.
**Integrado:** Magnetismo que cresce quando se para de pedir permissão para existir.
**Atenção:** Performance e validação externa escondendo insegurança.
**Observe:** Escolha uma atitude concreta que faça o corpo reconhecer a confiança.
**Polaridade:** +1 favorável · Imagem: `cartas/35.jpg`

#### Rei de Paus (Rei)
**Símbolos visíveis:** o rei com o bastão florido, os leões e as salamandras no trono.
**Significado-base:** visão, liderança, iniciativa e domínio criativo.
**Integrado:** Visão de longo alcance e autoridade para liderar o próprio caminho.
**Atenção:** Autoritarismo; promessa grande com execução ausente.
**Observe:** Assuma a liderança do seu próprio projeto.
**Polaridade:** +1 favorável · Imagem: `cartas/36.jpg`

### Copas (14)

#### Ás de Copas (Ás)
**Símbolos visíveis:** a mão com o cálice transbordando, as cinco correntes de água e a pomba.
**Significado-base:** abertura emocional, bênção simbólica e sentimento que procura passagem.
**Integrado:** O coração parece se abrir: sentimento novo, ou um perdão que desafoga.
**Atenção:** Transbordar em quem não tem onde guardar o que você entrega.
**Observe:** Diga o que sente à pessoa certa, uma vez, e observe a resposta.
**Polaridade:** +1 favorável · Imagem: `cartas/37.jpg`

#### Dois de Copas (II)
**Símbolos visíveis:** o casal trocando taças sob o caduceu e a cabeça de leão.
**Significado-base:** reciprocidade, acordo, encontro e espelhamento.
**Integrado:** Tende a indicar troca entre iguais: o que sai volta em medida parecida.
**Atenção:** Fusão que apaga a individualidade de um dos dois.
**Observe:** Combine o vínculo em palavras, não em suposição.
**Polaridade:** +1 favorável · Imagem: `cartas/38.jpg`

#### Três de Copas (III)
**Símbolos visíveis:** as três mulheres erguendo taças entre frutos.
**Significado-base:** amizade, celebração, apoio coletivo e partilha.
**Integrado:** Alegria compartilhada e apoio próximo que sustenta o momento.
**Atenção:** Terceira pessoa na história, ou conselho de quem não vive a sua vida.
**Observe:** Chame quem te quer bem. Dessa vez não faça sozinha.
**Polaridade:** +1 favorável · Imagem: `cartas/39.jpg`

#### Quatro de Copas (IV)
**Símbolos visíveis:** a pessoa sob a árvore diante de três taças, com uma quarta oferecida pela nuvem.
**Significado-base:** apatia, comparação, recusa ou oportunidade não percebida.
**Integrado:** Pode haver uma oferta em cena que ainda não recebeu atenção.
**Atenção:** Nostalgia do que passou impedindo ver o que chegou.
**Observe:** Levante os olhos: o que está sendo oferecido agora?
**Polaridade:** 0 condicional · Imagem: `cartas/40.jpg`

#### Cinco de Copas (V)
**Símbolos visíveis:** a figura de capa diante das taças derramadas, duas ainda de pé, e a ponte ao fundo.
**Significado-base:** luto, foco na perda e recursos remanescentes.
**Integrado:** A dor é legítima e tem prazo; há duas taças de pé que ainda não foram olhadas.
**Atenção:** Contar apenas o que caiu e organizar a vida em torno disso.
**Observe:** Dê nome à perda e depois vire o corpo para o que restou.
**Polaridade:** −1 difícil · Imagem: `cartas/41.jpg`

#### Seis de Copas (VI)
**Símbolos visíveis:** as crianças, as flores nas taças e a vila ao fundo.
**Significado-base:** memória, inocência, passado, gesto afetuoso e idealização.
**Integrado:** Pode indicar lembrança viva, carinho antigo ou reencontro genuíno.
**Atenção:** Comparar o presente com uma versão selecionada da história.
**Observe:** Traga a boa lembrança sem trazer o roteiro velho.
**Polaridade:** 0 condicional · Imagem: `cartas/42.jpg`

#### Sete de Copas (VII)
**Símbolos visíveis:** a figura diante de sete taças com visões saindo delas.
**Significado-base:** fantasia, múltiplas opções, desejo e dificuldade de distinguir projeção.
**Integrado:** Há possibilidades reais no meio das imaginadas — uma delas se sustenta.
**Atenção:** Escolher pela fantasia mais bonita e chamar isso de intuição.
**Observe:** Elimine duas opções hoje: excesso de escolha costuma paralisar.
**Polaridade:** 0 condicional · Imagem: `cartas/43.jpg`

#### Oito de Copas (VIII)
**Símbolos visíveis:** a pessoa afastando-se das taças sob a lua.
**Significado-base:** retirada, busca de sentido e abandono do que já não satisfaz.
**Integrado:** Pode indicar prontidão para sair de algo que funciona, mas já não serve.
**Atenção:** Partir de si mesma e chamar isso de virada.
**Observe:** Se for sair, saia pela porta — avisando.
**Polaridade:** 0 condicional · Imagem: `cartas/44.jpg`

#### Nove de Copas (IX)
**Símbolos visíveis:** o homem sentado diante das nove taças alinhadas.
**Significado-base:** satisfação, prazer, desejo realizado e possível comodismo.
**Integrado:** Satisfação palpável: o desejo tende a se cumprir de forma concreta.
**Atenção:** Conforto que acomoda; prazer usado como anestesia.
**Observe:** Agradeça em voz alta o que já chegou — e nomeie o próximo desejo.
**Polaridade:** +1 favorável · Imagem: `cartas/45.jpg`

#### Dez de Copas (X)
**Símbolos visíveis:** o casal, as crianças, a casa e o arco-íris de taças.
**Significado-base:** harmonia afetiva, pertencimento, ideal familiar e alegria compartilhada.
**Integrado:** Pode indicar apoio verdadeiro e vínculo de longo prazo em construção.
**Atenção:** Esconder conflitos para proteger a imagem de que está tudo bem.
**Observe:** Cuide do vínculo real, não da foto dele.
**Polaridade:** +1 favorável · Imagem: `cartas/46.jpg`

#### Pajem de Copas (Pajem)
**Símbolos visíveis:** o jovem diante do mar com um peixe saindo da taça.
**Significado-base:** mensagem inesperada, sensibilidade, flerte e imaginação.
**Integrado:** Tende a indicar convite, recado afetuoso ou notícia doce.
**Atenção:** Encantamento imaturo, promessa que não sustenta o segundo mês.
**Observe:** Responda com curiosidade, sem se entregar toda de uma vez.
**Polaridade:** +1 favorável · Imagem: `cartas/47.jpg`

#### Cavaleiro de Copas (Cavaleiro)
**Símbolos visíveis:** o cavaleiro em cavalo branco oferecendo a taça junto ao rio.
**Significado-base:** convite, romance, idealismo e movimento emocional.
**Integrado:** Aproximação com intenção e romantismo verdadeiros.
**Atenção:** Palavra bonita sem constância; sedução como esporte.
**Observe:** Observe o segundo mês, não o primeiro gesto.
**Polaridade:** +1 favorável · Imagem: `cartas/48.jpg`

#### Rainha de Copas (Rainha)
**Símbolos visíveis:** a rainha à beira do mar contemplando um cálice fechado e ornamentado.
**Significado-base:** empatia, profundidade, intuição e mundo interior.
**Integrado:** Sentir com precisão é o recurso disponível aqui — seu ou de uma mulher próxima.
**Atenção:** Absorver a dor alheia até adoecer junto.
**Observe:** Sinta sem carregar o que não é seu.
**Polaridade:** +1 favorável · Imagem: `cartas/49.jpg`

#### Rei de Copas (Rei)
**Símbolos visíveis:** o rei no trono cercado pelo mar, com navio e peixe ao redor.
**Significado-base:** maturidade emocional, estabilidade em meio à oscilação e autocontrole.
**Integrado:** Presença madura que sustenta emoção sem se afogar nela.
**Atenção:** Frieza apresentada como equilíbrio; emoção usada para conduzir o outro.
**Observe:** Procure — ou exerça — quem fala de sentimento sem perder a firmeza.
**Polaridade:** +1 favorável · Imagem: `cartas/50.jpg`

### Espadas (14)

#### Ás de Espadas (Ás)
**Símbolos visíveis:** a mão com a espada coroada entre as montanhas.
**Significado-base:** clareza, verdade, corte, decisão e ideia poderosa.
**Integrado:** A verdade tende a aparecer nítida e a cortar a confusão em dois.
**Atenção:** Palavra afiada que machuca mais do que esclarece.
**Observe:** Diga o que precisa ser dito em duas frases.
**Polaridade:** +1 favorável · Imagem: `cartas/51.jpg`

#### Dois de Espadas (II)
**Símbolos visíveis:** a mulher vendada com as espadas cruzadas diante do mar e da lua.
**Significado-base:** impasse, proteção, negação e falta de informação.
**Integrado:** Talvez já existam dados suficientes; falta retirar a venda.
**Atenção:** Não escolher para não perder nenhum dos lados.
**Observe:** Escreva prós e contras à mão e marque um prazo para decidir.
**Polaridade:** 0 condicional · Imagem: `cartas/52.jpg`

#### Três de Espadas (III)
**Símbolos visíveis:** o coração atravessado por três espadas sob a chuva.
**Significado-base:** dor, separação, verdade incômoda e elaboração do sofrimento.
**Integrado:** A dor aqui vem de saber — e saber costuma ser o começo do fim do sofrimento.
**Atenção:** Reviver a cena; transformar a mágoa em identidade.
**Observe:** Sinta por inteiro e pare de reler as provas.
**Polaridade:** −1 difícil · Imagem: `cartas/53.jpg`

#### Quatro de Espadas (IV)
**Símbolos visíveis:** a figura deitada no monumento com as espadas e o vitral.
**Significado-base:** pausa, recuperação, silêncio e necessidade de recuo.
**Integrado:** Trégua necessária: descansar aqui é estratégia, não fraqueza.
**Atenção:** Paralisia por exaustão; adiar indefinidamente.
**Observe:** Garanta alguns dias de repouso real antes de qualquer movimento.
**Polaridade:** 0 condicional · Imagem: `cartas/54.jpg`

#### Cinco de Espadas (V)
**Símbolos visíveis:** o homem recolhendo as espadas enquanto os outros se afastam.
**Significado-base:** vitória amarga, conflito, humilhação e custo de vencer.
**Integrado:** É possível ganhar essa — calculando antes o preço da vitória.
**Atenção:** Briga por orgulho; ambiente de disputa normalizado.
**Observe:** Escolha uma batalha e abandone as outras duas.
**Polaridade:** −1 difícil · Imagem: `cartas/55.jpg`

#### Seis de Espadas (VI)
**Símbolos visíveis:** o barco conduzindo adulto e criança entre as espadas fincadas.
**Significado-base:** transição, afastamento, travessia e melhora gradual.
**Integrado:** Travessia para águas mais calmas: a parte mais dura tende a ficar atrás.
**Atenção:** Levar a bagagem antiga para o lugar novo.
**Observe:** Mude de cenário ou de rotina e deixe algo para trás de propósito.
**Polaridade:** +1 favorável · Imagem: `cartas/56.jpg`

#### Sete de Espadas (VII)
**Símbolos visíveis:** a figura levando cinco espadas e olhando para trás diante do acampamento.
**Significado-base:** estratégia, evasão, segredo e ação indireta.
**Integrado:** Estratégia silenciosa funciona: não é hora de anunciar o plano.
**Atenção:** Meia-verdade em cena — de alguém, ou sua também.
**Observe:** Confira o que não foi contado antes de assinar ou confiar.
**Polaridade:** −1 difícil · Imagem: `cartas/57.jpg`

#### Oito de Espadas (VIII)
**Símbolos visíveis:** a mulher vendada e cercada de espadas, com o castelo ao fundo.
**Significado-base:** sensação de impotência, crenças limitantes e saída não percebida.
**Integrado:** A prisão parece mais mental do que real: as amarras estão frouxas.
**Atenção:** Crença de que não há saída; esperar ser resgatada.
**Observe:** Dê um passo minúsculo e possível hoje. Um só.
**Polaridade:** −1 difícil · Imagem: `cartas/58.jpg`

#### Nove de Espadas (IX)
**Símbolos visíveis:** a pessoa acordada na cama diante das nove espadas.
**Significado-base:** ansiedade, culpa, ruminação e medo ampliado pela mente.
**Integrado:** O medo é grande, mas tende a ser maior na madrugada do que no mundo.
**Atenção:** Catastrofizar e sofrer por antecipação do que não aconteceu.
**Observe:** Escreva o pior cenário e ao lado o plano: o papel encolhe o monstro.
**Polaridade:** −1 difícil · Imagem: `cartas/59.jpg`

#### Dez de Espadas (X)
**Símbolos visíveis:** a figura caída atravessada por dez espadas diante do amanhecer.
**Significado-base:** fim doloroso, esgotamento e impossibilidade de manter o ciclo.
**Integrado:** Parece ser o fim de um desgaste: a partir daqui a curva tende a subir.
**Atenção:** Insistir no que já não se sustenta; ocupar o papel de vítima.
**Observe:** Declare encerrado e levante sem renegociar.
**Polaridade:** −1 difícil · Imagem: `cartas/60.jpg`

#### Pajem de Espadas (Pajem)
**Símbolos visíveis:** o jovem com a espada erguida sob o vento e os pássaros.
**Significado-base:** vigilância, notícia, curiosidade mental e defensividade.
**Integrado:** Informação nova pode chegar e mudar o jogo.
**Atenção:** Fofoca, precipitação, falar antes de apurar.
**Observe:** Apure a fonte antes de reagir.
**Polaridade:** 0 condicional · Imagem: `cartas/61.jpg`

#### Cavaleiro de Espadas (Cavaleiro)
**Símbolos visíveis:** o cavaleiro avançando sob as árvores inclinadas e as nuvens.
**Significado-base:** ação rápida, confronto, determinação e precipitação.
**Integrado:** Movimento veloz e direto ao ponto: momento de agir.
**Atenção:** Agressividade, decisão no impulso, atropelo.
**Observe:** Aja rápido, mas releia antes de enviar.
**Polaridade:** 0 condicional · Imagem: `cartas/62.jpg`

#### Rainha de Espadas (Rainha)
**Símbolos visíveis:** a rainha com a espada erguida e a mão estendida sob o céu de nuvens.
**Significado-base:** discernimento, limite, franqueza e independência.
**Integrado:** Lucidez afiada: dá para ver a situação sem romantismo.
**Atenção:** Dureza que afasta; cinismo usado como blindagem.
**Observe:** Use a clareza para estabelecer limite, não para punir.
**Polaridade:** +1 favorável · Imagem: `cartas/63.jpg`

#### Rei de Espadas (Rei)
**Símbolos visíveis:** o rei frontal com a espada erguida sob o céu claro.
**Significado-base:** autoridade mental, estratégia, regra e julgamento racional.
**Integrado:** Decisão pela razão, com apoio técnico ou orientação especializada.
**Atenção:** Frieza, arrogância intelectual, palavra usada como arma.
**Observe:** Busque orientação profissional e documente o combinado.
**Polaridade:** +1 favorável · Imagem: `cartas/64.jpg`

### Ouros (14)

#### Ás de Ouros (Ás)
**Símbolos visíveis:** a mão com a moeda sobre o jardim, o arco florido e a montanha.
**Significado-base:** oportunidade concreta, recurso, começo material e semente de estabilidade.
**Integrado:** Tende a indicar oportunidade concreta de ganho ou começo material.
**Atenção:** Oportunidade perdida por insegurança ou demora.
**Observe:** Se a proposta é real, formalize nesta semana.
**Polaridade:** +1 favorável · Imagem: `cartas/65.jpg`

#### Dois de Ouros (II)
**Símbolos visíveis:** o jovem equilibrando moedas no laço do infinito diante dos navios.
**Significado-base:** adaptação, oscilação, prioridades e gestão de recursos.
**Integrado:** É possível conduzir duas frentes — por um período determinado.
**Atenção:** Sobrecarga elegante em que nada recebe o suficiente.
**Observe:** Defina qual é a prioridade número um pelos próximos 30 dias.
**Polaridade:** 0 condicional · Imagem: `cartas/66.jpg`

#### Três de Ouros (III)
**Símbolos visíveis:** o artesão e as duas figuras dentro da construção.
**Significado-base:** colaboração, competência, reconhecimento técnico e planejamento.
**Integrado:** Competência se fortalece quando é demonstrada e integrada a um projeto maior.
**Atenção:** Esperar valorização sem comunicar entregas ou ouvir crítica útil.
**Observe:** Torne sua habilidade visível: portfólio, parceria, número.
**Polaridade:** +1 favorável · Imagem: `cartas/67.jpg`

#### Quatro de Ouros (IV)
**Símbolos visíveis:** o homem segurando as moedas diante da cidade.
**Significado-base:** controle, reserva, apego, medo de perder e proteção material.
**Integrado:** Guardar pode ser sabedoria: reserva construída dá liberdade de escolha.
**Atenção:** Agarrar por medo — dinheiro, pessoa, controle.
**Observe:** Separe o que é reserva do que é apego e solte o segundo.
**Polaridade:** 0 condicional · Imagem: `cartas/68.jpg`

#### Cinco de Ouros (V)
**Símbolos visíveis:** as duas pessoas no frio diante do vitral iluminado com moedas.
**Significado-base:** escassez, exclusão, dificuldade e ajuda próxima não acessada.
**Integrado:** Há socorro disponível mais perto do que parece — inclusive dentro do vitral que ninguém olhou.
**Atenção:** Vergonha impedindo pedir; sensação de estar fora de tudo.
**Observe:** Peça ajuda com nome e valor exatos.
**Polaridade:** −1 difícil · Imagem: `cartas/69.jpg`

#### Seis de Ouros (VI)
**Símbolos visíveis:** o homem distribuindo moedas enquanto segura a balança.
**Significado-base:** troca, generosidade, dívida, poder e equilíbrio entre dar e receber.
**Integrado:** Entra e sai na medida: apoio, acordo justo, dívida sendo quitada.
**Atenção:** Dar para ter poder; receber e ficar devendo obediência.
**Observe:** Combine valores e prazos por escrito, mesmo entre íntimos.
**Polaridade:** +1 favorável · Imagem: `cartas/70.jpg`

#### Sete de Ouros (VII)
**Símbolos visíveis:** o trabalhador apoiado na ferramenta observando a plantação.
**Significado-base:** avaliação, paciência, investimento de tempo e resultado ainda imaturo.
**Integrado:** O que foi plantado tende a vir — só não no prazo que se queria.
**Atenção:** Continuar investindo apenas porque já investiu muito.
**Observe:** Antes de ampliar o risco, meça o que de fato cresceu.
**Polaridade:** 0 condicional · Imagem: `cartas/71.jpg`

#### Oito de Ouros (VIII)
**Símbolos visíveis:** o artesão produzindo moedas diante da cidade.
**Significado-base:** prática, especialização, disciplina e melhoria contínua.
**Integrado:** A saída tende a depender menos de sorte e mais de repetição competente.
**Atenção:** Trabalhar sem parar e esquecer por que começou.
**Observe:** Escolha uma habilidade e dedique a ela 40 dias.
**Polaridade:** +1 favorável · Imagem: `cartas/72.jpg`

#### Nove de Ouros (IX)
**Símbolos visíveis:** a mulher no jardim com o falcão e as moedas entre as vinhas.
**Significado-base:** autonomia, refinamento, fruto do trabalho e prazer independente.
**Integrado:** Independência conquistada: dá para se sustentar e desfrutar.
**Atenção:** Autossuficiência que recusa companhia por precaução.
**Observe:** Gaste algo em você sem justificar para ninguém.
**Polaridade:** +1 favorável · Imagem: `cartas/73.jpg`

#### Dez de Ouros (X)
**Símbolos visíveis:** a família sob o arco, o ancião, os cães e os símbolos materiais.
**Significado-base:** patrimônio, legado, estrutura familiar e continuidade.
**Integrado:** Estabilidade durável: família e dinheiro se organizando no mesmo movimento.
**Atenção:** Herança, inventário ou padrão familiar cobrando pedágio.
**Observe:** Decida pensando em dez anos, não em dez dias.
**Polaridade:** +1 favorável · Imagem: `cartas/74.jpg`

#### Pajem de Ouros (Pajem)
**Símbolos visíveis:** o jovem contemplando a moeda em campo fértil.
**Significado-base:** estudo, proposta, oportunidade real e começo responsável.
**Integrado:** Proposta pequena de estudo ou trabalho, com futuro concreto.
**Atenção:** Sonhar grande e não fazer a parte repetitiva.
**Observe:** Comece pequeno e registre tudo.
**Polaridade:** +1 favorável · Imagem: `cartas/75.jpg`

#### Cavaleiro de Ouros (Cavaleiro)
**Símbolos visíveis:** o cavaleiro parado com a moeda diante do campo cultivado.
**Significado-base:** constância, prudência, lentidão e confiabilidade.
**Integrado:** Avanço lento e seguro: aqui devagar costuma ser rápido.
**Atenção:** Rotina que virou estagnação sem ninguém perceber.
**Observe:** Mantenha o passo e não mude a rota este mês.
**Polaridade:** +1 favorável · Imagem: `cartas/76.jpg`

#### Rainha de Ouros (Rainha)
**Símbolos visíveis:** a rainha no jardim segurando a moeda, o trono natural e o coelho.
**Significado-base:** cuidado concreto, corpo, abundância prática e acolhimento.
**Integrado:** Domínio do concreto: casa, corpo, contas e negócio em ordem.
**Atenção:** Resolver a vida de todos e deixar a própria no fim da fila.
**Observe:** Cuide do seu corpo e do seu caixa com o zelo que dá aos outros.
**Polaridade:** +1 favorável · Imagem: `cartas/77.jpg`

#### Rei de Ouros (Rei)
**Símbolos visíveis:** o rei no trono com touros, vinhas e o castelo ao fundo.
**Significado-base:** domínio material, estabilidade, gestão e risco de acomodação.
**Integrado:** Solidez e apoio de quem tem recurso e palavra.
**Atenção:** Status acima do afeto; controle exercido pelo dinheiro.
**Observe:** Negocie de igual para igual: você tem valor para pôr na mesa.
**Polaridade:** +1 favorável · Imagem: `cartas/78.jpg`

---

*Selene — leitura simbólica automatizada, para reflexão e autoconhecimento. Documento gerado em 14/09/2026.*

