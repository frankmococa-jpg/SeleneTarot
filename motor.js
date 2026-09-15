// Motor de interpretação Selene — prompt do sistema, montagem da mensagem e fallback longo sem IA.

export const PROMPT_SISTEMA = `Você é o motor de interpretação da Selene, plataforma de tarô simbólico para o público feminino brasileiro. Você NÃO é uma pessoa e nunca se apresenta como taróloga humana. Sua função é produzir uma leitura longa, específica e útil a partir do que já foi sorteado — você nunca escolhe cartas, nunca inventa cartas e nunca contradiz o dicionário simbólico fornecido.

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
Feche sempre com uma linha de transparência: leitura simbólica automatizada, para reflexão e autoconhecimento.`;

export function montarMensagemCarta({ area, pergunta, posicao, carta, ordem, total, anteriores }) {
  const ant = anteriores.length
    ? "Cartas já reveladas nesta mesa:\n" + anteriores.map(a => `- ${a.pos.label}: ${a.carta.n} (${a.carta.r}, ${a.carta.s})`).join("\n")
    : "Esta é a primeira carta da mesa.";
  return `ÁREA: ${area.nome}
DESCRIÇÃO DA ÁREA: ${area.sub}
PERGUNTA DA CONSULENTE: ${pergunta ? pergunta : "(não escreveu; leia o momento da área)"}
${area.aviso ? "AVISO OBRIGATÓRIO DA ÁREA: " + area.aviso : ""}

CARTA ${ordem + 1} DE ${total}
FUNÇÃO (posição): ${posicao.label} — ${posicao.leitura}${posicao.bloco ? " (bloco: " + posicao.bloco + ")" : ""}

CARTA SORTEADA: ${carta.n} (${carta.r}) — naipe: ${carta.s}
Palavras-chave: ${carta.k.join(", ")}
Símbolos visíveis: ${carta.v}
Significado-base: ${carta.b}
Manifestação construtiva: ${carta.l}
Ponto de atenção: ${carta.so}
Observação prática: ${carta.c}
Polaridade: ${carta.p}

${ant}

Escreva a interpretação desta carta seguindo a FÓRMULA POR CARTA. Não escreva título nem cabeçalho; comece direto no texto.`;
}

export function montarMensagemSintese({ area, pergunta, escolhidas }) {
  const lista = escolhidas.map((e, i) =>
    `${i + 1}. ${e.pos.label}${e.pos.bloco ? " [" + e.pos.bloco + "]" : ""}: ${e.carta.n} (${e.carta.r}, ${e.carta.s}, polaridade ${e.carta.p}) — ${e.carta.k.join(", ")}`
  ).join("\n");
  return `ÁREA: ${area.nome}
PERGUNTA DA CONSULENTE: ${pergunta ? pergunta : "(não escreveu)"}
${area.key === "decisao" ? "ESTA É A ÁREA DECISÃO: inclua 'Direção predominante: SIM / NÃO / AINDA NÃO'." : ""}
${area.aviso ? "AVISO OBRIGATÓRIO: " + area.aviso : ""}

MESA COMPLETA:
${lista}

Escreva a SÍNTESE com as seções nomeadas. Sem título geral; comece em "Padrão dominante".`;
}

// Fallback longo, sem IA: compõe 4 parágrafos a partir do banco simbólico.
export function interpretarOffline({ area, pergunta, posicao, carta, ordem, anteriores }) {
  const prev = anteriores.length ? anteriores[anteriores.length - 1] : null;
  const rel = prev
    ? (prev.carta.p === carta.p
      ? `Ela reforça o que ${prev.carta.n} já havia mostrado na função de ${prev.pos.label.toLowerCase()}: a mesma direção aparece duas vezes, e repetição em tarô é ênfase, não coincidência.`
      : `Ela contrasta com ${prev.carta.n}, revelada na função de ${prev.pos.label.toLowerCase()}: onde aquela carta ${prev.carta.p > carta.p ? "abria" : "pesava"}, esta ${carta.p > prev.carta.p ? "alivia" : "cobra"}. É nesse contraste que a leitura ganha textura — o que você sente e o que está acontecendo não são a mesma coisa.`)
    : `Por ser a carta de abertura, ela dá o tom de toda a mesa: as próximas cartas serão lidas em diálogo com ela.`;
  const perg = pergunta
    ? `Sobre o que você escreveu — "${pergunta}" — a carta não confirma um fato, mas indica o ângulo pelo qual a questão pede para ser olhada.`
    : `Como você não escreveu uma pergunta, a carta é lida sobre o seu momento em ${area.nome.toLowerCase()}.`;
  return [
    `${carta.n} ocupa aqui a função de ${posicao.label.toLowerCase()}. ${posicao.leitura} Na imagem, vemos ${carta.v}. Esse conjunto fala de ${carta.b} — e é a partir dele, não de uma frase decorada, que a leitura se constrói.`,
    `${perg} Quando essa energia está integrada, ${carta.l.charAt(0).toLowerCase() + carta.l.slice(1)} Quando aparece como ponto de atenção, o desenho é outro: ${carta.so.charAt(0).toLowerCase() + carta.so.slice(1)} As duas manifestações são plausíveis; a sua realidade dos últimos dias é que diz qual delas está ativa.`,
    rel,
    `O que observar a partir de agora: ${carta.c} Não é preciso agir hoje — é preciso perceber, nos próximos sete dias, onde ${carta.k[0]} e ${carta.k[1]} aparecem de fato na sua rotina, e anotar.`
  ];
}
