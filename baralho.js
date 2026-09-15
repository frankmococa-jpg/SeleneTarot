// Banco simbólico — 78 cartas Rider-Waite-Smith.
// n nome · r selo · s naipe · k palavras-chave · v símbolos visíveis na imagem
// b significado-base do símbolo · l manifestação construtiva · so ponto de atenção
// c observação/ação · p polaridade (-1 difícil, 0 condicional, 1 favorável) · i imagem

export const CARTAS = [
  { n: "O Louco", r: "0", s: "maj", k: ["início", "salto", "inocência"], v: "o jovem à beira do precipício, o cão, a rosa branca e a trouxa no ombro", b: "abertura, espontaneidade e risco por falta de atenção", l: "Um começo pode estar se abrindo antes de você se sentir pronta — e é essa disposição que costuma destravar o ciclo.", so: "Andar sem olhar o chão: pressa vestida de coragem, decisão tomada sem lastro.", c: "Observe se o próximo passo é seu ou está sendo empurrado por alguém.", p: 0, i: "cartas/02.jpg" },
  { n: "O Mago", r: "I", s: "maj", k: ["poder", "palavra", "manifestação"], v: "o símbolo do infinito, o braço elevado e a mesa com os quatro naipes", b: "iniciativa, habilidade e capacidade de direcionar recursos", l: "Os recursos tendem a já estar em mãos; o que falta é nomear com clareza o que se quer.", so: "Encantamento e discurso: alguém prometendo mais do que entrega — inclusive você para si mesma.", c: "Escreva o que deseja em uma frase. O que não cabe numa frase ainda não está formulado.", p: 1, i: "cartas/04.jpg" },
  { n: "A Sacerdotisa", r: "II", s: "maj", k: ["intuição", "silêncio", "segredo"], v: "os pilares B e J, o véu com romãs e a lua crescente aos pés", b: "silêncio, intuição, conhecimento velado e espera receptiva", l: "Sua percepção pode estar mais informada do que sua razão admite; o silêncio aqui trabalha a favor.", so: "Informação incompleta ou algo que não está sendo dito — e a tentação de transformar intuição em certeza.", c: "Evite decidir hoje. Registre impressões por alguns dias e confronte-as com fatos.", p: 0, i: "cartas/01.jpg" },
  { n: "A Imperatriz", r: "III", s: "maj", k: ["criação", "abundância", "cuidado"], v: "o trigo, a água corrente, o escudo de Vênus e a coroa de estrelas", b: "fertilidade simbólica, criação, conforto e abundância", l: "Algo está em crescimento e responde melhor a cuidado constante do que a pressa.", so: "Nutrir todos ao redor até secar por dentro; idealizar o papel de quem cuida.", c: "Pergunte o que já está vivo e precisa de você antes de plantar algo novo.", p: 1, i: "cartas/05.jpg" },
  { n: "O Imperador", r: "IV", s: "maj", k: ["estrutura", "limite", "autoridade"], v: "o trono com cabeças de carneiro, a armadura e o cetro", b: "estrutura, autoridade, proteção, rigidez e controle", l: "Ordem, regra e acordo explícito tendem a resolver o que sentimento sozinho não resolve.", so: "Controle rígido, imposição, medo de perder o comando da situação.", c: "Defina uma regra clara e cumpra você primeiro.", p: 1, i: "cartas/06.jpg" },
  { n: "O Hierofante", r: "V", s: "maj", k: ["tradição", "compromisso", "orientação"], v: "a figura que abençoa, os dois discípulos e as chaves cruzadas", b: "tradição, valores, ensino, compromisso e aprovação social", l: "Um caminho já testado costuma funcionar aqui: acordo formal, orientação de quem tem estrada.", so: "Fazer o que é esperado em vez do que é seu; moral alheia decidindo a sua vida.", c: "Procure quem já atravessou isso e depois filtre pelo seu próprio critério.", p: 0, i: "cartas/07.jpg" },
  { n: "Os Enamorados", r: "VI", s: "maj", k: ["escolha", "união", "valores"], v: "o casal sob a presença do anjo, a árvore e a serpente", b: "escolha alinhada a valores, intimidade, atração e vulnerabilidade", l: "Pode indicar encontro consciente e reciprocidade real, com abertura verdadeira.", so: "Indecisão confortável, ou confundir intensidade com compatibilidade.", c: "Observe se as atitudes confirmam o que as palavras prometem.", p: 1, i: "cartas/08.jpg" },
  { n: "O Carro", r: "VII", s: "maj", k: ["direção", "avanço", "autocontrole"], v: "o condutor entre as esfinges preta e branca, sob o dossel estrelado", b: "direção, domínio de forças opostas, avanço e autocontrole", l: "Há terreno a ganhar: vontade organizada tende a vencer a resistência externa.", so: "Atropelar quem está ao lado, ou correr tanto que o motivo se perde.", c: "Mantenha o ritmo, mas verifique se a direção continua sendo a sua.", p: 1, i: "cartas/09.jpg" },
  { n: "A Justiça", r: "VIII", s: "maj", k: ["verdade", "critério", "consequência"], v: "a balança, a espada erguida e o manto vermelho entre pilares", b: "consequência, verdade, proporcionalidade e decisão responsável", l: "Tende a favorecer o que é coerente, documentado e equilibrado.", so: "Cobrança, dívida ou culpa antiga voltando; parcialidade na própria avaliação.", c: "Compare benefício, custo e responsabilidade sem o filtro do desejo.", p: 1, i: "cartas/13.jpg" },
  { n: "O Eremita", r: "IX", s: "maj", k: ["recolhimento", "prudência", "pausa"], v: "o ancião no alto, a lanterna com uma estrela e o cajado", b: "recolhimento, prudência, busca interior e orientação amadurecida", l: "O recolhimento tende a devolver clareza: longe do ruído, o critério volta.", so: "Isolamento que virou esconderijo; orgulho impedindo pedir ajuda.", c: "Reserve alguns dias de silêncio sobre o assunto antes de responder a alguém.", p: 0, i: "cartas/11.jpg" },
  { n: "A Roda da Fortuna", r: "X", s: "maj", k: ["ciclo", "virada", "oportunidade"], v: "a roda, a esfinge, a serpente e as quatro criaturas aladas", b: "ciclos, mudança, oportunidade, instabilidade e forças maiores", l: "O ciclo parece girar: o que estava travado pode se mover sem tanta força.", so: "Querer congelar o que é passageiro, ou apostar em sorte chamando isso de plano.", c: "Aproveite a janela enquanto existe e prepare-se para a oscilação.", p: 1, i: "cartas/12.jpg" },
  { n: "A Força", r: "XI", s: "maj", k: ["coragem calma", "domínio", "doçura"], v: "a mulher fechando suavemente a boca do leão, as flores e o infinito", b: "coragem calma, desejo integrado e domínio sem violência", l: "A força aqui é firme e sem violência: conduzir, não vencer pela pressão.", so: "Aguentar o insuportável e chamar isso de amor ou de maturidade; confundir disciplina com punição.", c: "Enfrente com calma o que você vem evitando com barulho.", p: 1, i: "cartas/10.jpg" },
  { n: "O Enforcado", r: "XII", s: "maj", k: ["pausa", "inversão", "entrega"], v: "o homem suspenso por um pé, o halo e a árvore em forma de T", b: "pausa, nova perspectiva, entrega e suspensão voluntária", l: "A pausa pode ser útil: de outro ângulo aparece o que de pé não se vê.", so: "Sacrifício sem retorno, espera por alguém que não se move, vida em suspenso.", c: "Pare de empurrar e inverta a pergunta antes de tentar de novo.", p: 0, i: "cartas/14.jpg" },
  { n: "A Morte", r: "XIII", s: "maj", k: ["encerramento", "transição", "renovação"], v: "o esqueleto a cavalo, a bandeira com a rosa branca e o sol nascente", b: "encerramento, transição, desapego e renovação", l: "Um ciclo tende a se encerrar de fato, e o alívio costuma vir depois do fim, não antes.", so: "Sustentar o que já acabou por medo do vazio.", c: "Encerre com nome e data. Espaço vago é condição para o que vem.", p: 0, i: "cartas/15.jpg" },
  { n: "A Temperança", r: "XIV", s: "maj", k: ["equilíbrio", "ritmo", "conciliação"], v: "o anjo vertendo água entre duas taças, um pé na água e o caminho ao horizonte", b: "equilíbrio, conciliação, cura simbólica e ritmo", l: "A recomposição tende a acontecer na dose certa: pouco, contínuo, sem extremos.", so: "Oito ou oitenta; alternar entre excesso e abandono.", c: "Escolha uma prática pequena e repita todos os dias.", p: 1, i: "cartas/16.jpg" },
  { n: "O Diabo", r: "XV", s: "maj", k: ["apego", "desejo", "dependência"], v: "o casal acorrentado, a figura com asas e o pentagrama invertido", b: "apego, compulsão, desejo, dependência e poder entregue", l: "Há desejo com força real aqui; reconhecido, ele deixa de governar e passa a mover.", so: "Vínculo que prende, ciúme, hábito que se repete mesmo doendo.", c: "Pergunte o que você ganha ficando. A resposta costuma ser a chave da corrente.", p: -1, i: "cartas/17.jpg" },
  { n: "A Torre", r: "XVI", s: "maj", k: ["ruptura", "verdade súbita", "libertação"], v: "o raio, a coroa arremessada e as figuras caindo", b: "ruptura, verdade súbita, queda de estrutura e libertação desconfortável", l: "O que cai aqui geralmente já estava rachado; a queda abre espaço e tempo.", so: "Choque, notícia repentina, orgulho desmoronando em público.", c: "Evite reconstruir a mesma estrutura no dia seguinte.", p: -1, i: "cartas/18.jpg" },
  { n: "A Estrela", r: "XVII", s: "maj", k: ["esperança", "autenticidade", "recomposição"], v: "a mulher com dois jarros, a água, as estrelas e o pássaro", b: "esperança, autenticidade, serenidade, inspiração e recomposição", l: "Depois do estrago, calma: esperança com fundamento e um caminho se desenhando.", so: "Fé passiva, esperar milagre sem dar um passo, idealização.", c: "Peça o que quer com clareza e mova-se um passo na direção do pedido.", p: 1, i: "cartas/19.jpg" },
  { n: "A Lua", r: "XVIII", s: "maj", k: ["ambiguidade", "medo", "intuição"], v: "o cão e o lobo, o crustáceo saindo da água e o caminho entre as torres", b: "ambiguidade, imaginação, medo, intuição e informação incompleta", l: "A sensibilidade está alta e pode captar o que ninguém confirmou ainda.", so: "Autoengano, ciúme fantasiando cenário, leitura excessiva de sinais.", c: "Separe o que você viu do que imaginou e aja apenas sobre o que viu.", p: -1, i: "cartas/20.jpg" },
  { n: "O Sol", r: "XIX", s: "maj", k: ["clareza", "vitalidade", "alegria"], v: "a criança no cavalo branco, a bandeira vermelha e os girassóis", b: "clareza, vitalidade, alegria e exposição", l: "As coisas tendem a vir à luz com resultado favorável: alívio, reconhecimento, sim.", so: "Exposição de algo que era íntimo; brilho que ofusca o cuidado.", c: "Ocupe o lugar de destaque sem se desculpar por ele.", p: 1, i: "cartas/03.jpg" },
  { n: "O Julgamento", r: "XX", s: "maj", k: ["chamado", "revisão", "despertar"], v: "o anjo com a trombeta e as pessoas erguendo-se dos túmulos", b: "chamado, despertar, revisão, perdão e decisão definitiva", l: "Algo do passado pode retornar para ser resolvido — e a revisão tende a levantar você.", so: "Autocrítica destrutiva, viver de arrependimento, julgar antes de ouvir.", c: "Atenda o que está chamando e escolha uma pessoa para perdoar — inclusive você.", p: 1, i: "cartas/21.jpg" },
  { n: "O Mundo", r: "XXI", s: "maj", k: ["integração", "conclusão", "expansão"], v: "a figura dançando dentro da coroa e os quatro seres nos cantos", b: "integração, conclusão, reconhecimento e passagem para novo ciclo", l: "Um ciclo tende a se completar e as áreas da vida pedem para formar um sistema coerente.", so: "Iniciar outra busca sem encerrar emocionalmente a anterior.", c: "Reconheça o que já amadureceu antes de nomear o próximo passo.", p: 1, i: "cartas/22.jpg" },

  { n: "Ás de Copas", r: "Ás", s: "copas", k: ["abertura", "afeto", "bênção"], v: "a mão com o cálice transbordando, as cinco correntes de água e a pomba", b: "abertura emocional, bênção simbólica e sentimento que procura passagem", l: "O coração parece se abrir: sentimento novo, ou um perdão que desafoga.", so: "Transbordar em quem não tem onde guardar o que você entrega.", c: "Diga o que sente à pessoa certa, uma vez, e observe a resposta.", p: 1, i: "cartas/37.jpg" },
  { n: "Dois de Copas", r: "II", s: "copas", k: ["reciprocidade", "acordo", "espelho"], v: "o casal trocando taças sob o caduceu e a cabeça de leão", b: "reciprocidade, acordo, encontro e espelhamento", l: "Tende a indicar troca entre iguais: o que sai volta em medida parecida.", so: "Fusão que apaga a individualidade de um dos dois.", c: "Combine o vínculo em palavras, não em suposição.", p: 1, i: "cartas/38.jpg" },
  { n: "Três de Copas", r: "III", s: "copas", k: ["celebração", "apoio", "partilha"], v: "as três mulheres erguendo taças entre frutos", b: "amizade, celebração, apoio coletivo e partilha", l: "Alegria compartilhada e apoio próximo que sustenta o momento.", so: "Terceira pessoa na história, ou conselho de quem não vive a sua vida.", c: "Chame quem te quer bem. Dessa vez não faça sozinha.", p: 1, i: "cartas/39.jpg" },
  { n: "Quatro de Copas", r: "IV", s: "copas", k: ["apatia", "recusa", "comparação"], v: "a pessoa sob a árvore diante de três taças, com uma quarta oferecida pela nuvem", b: "apatia, comparação, recusa ou oportunidade não percebida", l: "Pode haver uma oferta em cena que ainda não recebeu atenção.", so: "Nostalgia do que passou impedindo ver o que chegou.", c: "Levante os olhos: o que está sendo oferecido agora?", p: 0, i: "cartas/40.jpg" },
  { n: "Cinco de Copas", r: "V", s: "copas", k: ["luto", "perda", "recursos restantes"], v: "a figura de capa diante das taças derramadas, duas ainda de pé, e a ponte ao fundo", b: "luto, foco na perda e recursos remanescentes", l: "A dor é legítima e tem prazo; há duas taças de pé que ainda não foram olhadas.", so: "Contar apenas o que caiu e organizar a vida em torno disso.", c: "Dê nome à perda e depois vire o corpo para o que restou.", p: -1, i: "cartas/41.jpg" },
  { n: "Seis de Copas", r: "VI", s: "copas", k: ["memória", "passado", "afeto antigo"], v: "as crianças, as flores nas taças e a vila ao fundo", b: "memória, inocência, passado, gesto afetuoso e idealização", l: "Pode indicar lembrança viva, carinho antigo ou reencontro genuíno.", so: "Comparar o presente com uma versão selecionada da história.", c: "Traga a boa lembrança sem trazer o roteiro velho.", p: 0, i: "cartas/42.jpg" },
  { n: "Sete de Copas", r: "VII", s: "copas", k: ["fantasia", "opções", "projeção"], v: "a figura diante de sete taças com visões saindo delas", b: "fantasia, múltiplas opções, desejo e dificuldade de distinguir projeção", l: "Há possibilidades reais no meio das imaginadas — uma delas se sustenta.", so: "Escolher pela fantasia mais bonita e chamar isso de intuição.", c: "Elimine duas opções hoje: excesso de escolha costuma paralisar.", p: 0, i: "cartas/43.jpg" },
  { n: "Oito de Copas", r: "VIII", s: "copas", k: ["partida", "busca", "desapego"], v: "a pessoa afastando-se das taças sob a lua", b: "retirada, busca de sentido e abandono do que já não satisfaz", l: "Pode indicar prontidão para sair de algo que funciona, mas já não serve.", so: "Partir de si mesma e chamar isso de virada.", c: "Se for sair, saia pela porta — avisando.", p: 0, i: "cartas/44.jpg" },
  { n: "Nove de Copas", r: "IX", s: "copas", k: ["satisfação", "prazer", "desejo realizado"], v: "o homem sentado diante das nove taças alinhadas", b: "satisfação, prazer, desejo realizado e possível comodismo", l: "Satisfação palpável: o desejo tende a se cumprir de forma concreta.", so: "Conforto que acomoda; prazer usado como anestesia.", c: "Agradeça em voz alta o que já chegou — e nomeie o próximo desejo.", p: 1, i: "cartas/45.jpg" },
  { n: "Dez de Copas", r: "X", s: "copas", k: ["pertencimento", "harmonia", "lar"], v: "o casal, as crianças, a casa e o arco-íris de taças", b: "harmonia afetiva, pertencimento, ideal familiar e alegria compartilhada", l: "Pode indicar apoio verdadeiro e vínculo de longo prazo em construção.", so: "Esconder conflitos para proteger a imagem de que está tudo bem.", c: "Cuide do vínculo real, não da foto dele.", p: 1, i: "cartas/46.jpg" },
  { n: "Pajem de Copas", r: "Pajem", s: "copas", k: ["mensagem", "sensibilidade", "flerte"], v: "o jovem diante do mar com um peixe saindo da taça", b: "mensagem inesperada, sensibilidade, flerte e imaginação", l: "Tende a indicar convite, recado afetuoso ou notícia doce.", so: "Encantamento imaturo, promessa que não sustenta o segundo mês.", c: "Responda com curiosidade, sem se entregar toda de uma vez.", p: 1, i: "cartas/47.jpg" },
  { n: "Cavaleiro de Copas", r: "Cavaleiro", s: "copas", k: ["cortejo", "romance", "convite"], v: "o cavaleiro em cavalo branco oferecendo a taça junto ao rio", b: "convite, romance, idealismo e movimento emocional", l: "Aproximação com intenção e romantismo verdadeiros.", so: "Palavra bonita sem constância; sedução como esporte.", c: "Observe o segundo mês, não o primeiro gesto.", p: 1, i: "cartas/48.jpg" },
  { n: "Rainha de Copas", r: "Rainha", s: "copas", k: ["empatia", "profundidade", "intuição"], v: "a rainha à beira do mar contemplando um cálice fechado e ornamentado", b: "empatia, profundidade, intuição e mundo interior", l: "Sentir com precisão é o recurso disponível aqui — seu ou de uma mulher próxima.", so: "Absorver a dor alheia até adoecer junto.", c: "Sinta sem carregar o que não é seu.", p: 1, i: "cartas/49.jpg" },
  { n: "Rei de Copas", r: "Rei", s: "copas", k: ["maturidade", "calma", "apoio"], v: "o rei no trono cercado pelo mar, com navio e peixe ao redor", b: "maturidade emocional, estabilidade em meio à oscilação e autocontrole", l: "Presença madura que sustenta emoção sem se afogar nela.", so: "Frieza apresentada como equilíbrio; emoção usada para conduzir o outro.", c: "Procure — ou exerça — quem fala de sentimento sem perder a firmeza.", p: 1, i: "cartas/50.jpg" },

  { n: "Ás de Ouros", r: "Ás", s: "ouros", k: ["oportunidade", "recurso", "semente"], v: "a mão com a moeda sobre o jardim, o arco florido e a montanha", b: "oportunidade concreta, recurso, começo material e semente de estabilidade", l: "Tende a indicar oportunidade concreta de ganho ou começo material.", so: "Oportunidade perdida por insegurança ou demora.", c: "Se a proposta é real, formalize nesta semana.", p: 1, i: "cartas/65.jpg" },
  { n: "Dois de Ouros", r: "II", s: "ouros", k: ["adaptação", "prioridade", "gestão"], v: "o jovem equilibrando moedas no laço do infinito diante dos navios", b: "adaptação, oscilação, prioridades e gestão de recursos", l: "É possível conduzir duas frentes — por um período determinado.", so: "Sobrecarga elegante em que nada recebe o suficiente.", c: "Defina qual é a prioridade número um pelos próximos 30 dias.", p: 0, i: "cartas/66.jpg" },
  { n: "Três de Ouros", r: "III", s: "ouros", k: ["colaboração", "ofício", "reconhecimento"], v: "o artesão e as duas figuras dentro da construção", b: "colaboração, competência, reconhecimento técnico e planejamento", l: "Competência se fortalece quando é demonstrada e integrada a um projeto maior.", so: "Esperar valorização sem comunicar entregas ou ouvir crítica útil.", c: "Torne sua habilidade visível: portfólio, parceria, número.", p: 1, i: "cartas/67.jpg" },
  { n: "Quatro de Ouros", r: "IV", s: "ouros", k: ["reserva", "controle", "apego"], v: "o homem segurando as moedas diante da cidade", b: "controle, reserva, apego, medo de perder e proteção material", l: "Guardar pode ser sabedoria: reserva construída dá liberdade de escolha.", so: "Agarrar por medo — dinheiro, pessoa, controle.", c: "Separe o que é reserva do que é apego e solte o segundo.", p: 0, i: "cartas/68.jpg" },
  { n: "Cinco de Ouros", r: "V", s: "ouros", k: ["escassez", "exclusão", "ajuda"], v: "as duas pessoas no frio diante do vitral iluminado com moedas", b: "escassez, exclusão, dificuldade e ajuda próxima não acessada", l: "Há socorro disponível mais perto do que parece — inclusive dentro do vitral que ninguém olhou.", so: "Vergonha impedindo pedir; sensação de estar fora de tudo.", c: "Peça ajuda com nome e valor exatos.", p: -1, i: "cartas/69.jpg" },
  { n: "Seis de Ouros", r: "VI", s: "ouros", k: ["troca", "generosidade", "equilíbrio"], v: "o homem distribuindo moedas enquanto segura a balança", b: "troca, generosidade, dívida, poder e equilíbrio entre dar e receber", l: "Entra e sai na medida: apoio, acordo justo, dívida sendo quitada.", so: "Dar para ter poder; receber e ficar devendo obediência.", c: "Combine valores e prazos por escrito, mesmo entre íntimos.", p: 1, i: "cartas/70.jpg" },
  { n: "Sete de Ouros", r: "VII", s: "ouros", k: ["paciência", "avaliação", "maturação"], v: "o trabalhador apoiado na ferramenta observando a plantação", b: "avaliação, paciência, investimento de tempo e resultado ainda imaturo", l: "O que foi plantado tende a vir — só não no prazo que se queria.", so: "Continuar investindo apenas porque já investiu muito.", c: "Antes de ampliar o risco, meça o que de fato cresceu.", p: 0, i: "cartas/71.jpg" },
  { n: "Oito de Ouros", r: "VIII", s: "ouros", k: ["prática", "disciplina", "ofício"], v: "o artesão produzindo moedas diante da cidade", b: "prática, especialização, disciplina e melhoria contínua", l: "A saída tende a depender menos de sorte e mais de repetição competente.", so: "Trabalhar sem parar e esquecer por que começou.", c: "Escolha uma habilidade e dedique a ela 40 dias.", p: 1, i: "cartas/72.jpg" },
  { n: "Nove de Ouros", r: "IX", s: "ouros", k: ["autonomia", "usufruto", "refinamento"], v: "a mulher no jardim com o falcão e as moedas entre as vinhas", b: "autonomia, refinamento, fruto do trabalho e prazer independente", l: "Independência conquistada: dá para se sustentar e desfrutar.", so: "Autossuficiência que recusa companhia por precaução.", c: "Gaste algo em você sem justificar para ninguém.", p: 1, i: "cartas/73.jpg" },
  { n: "Dez de Ouros", r: "X", s: "ouros", k: ["patrimônio", "legado", "continuidade"], v: "a família sob o arco, o ancião, os cães e os símbolos materiais", b: "patrimônio, legado, estrutura familiar e continuidade", l: "Estabilidade durável: família e dinheiro se organizando no mesmo movimento.", so: "Herança, inventário ou padrão familiar cobrando pedágio.", c: "Decida pensando em dez anos, não em dez dias.", p: 1, i: "cartas/74.jpg" },
  { n: "Pajem de Ouros", r: "Pajem", s: "ouros", k: ["estudo", "proposta", "começo"], v: "o jovem contemplando a moeda em campo fértil", b: "estudo, proposta, oportunidade real e começo responsável", l: "Proposta pequena de estudo ou trabalho, com futuro concreto.", so: "Sonhar grande e não fazer a parte repetitiva.", c: "Comece pequeno e registre tudo.", p: 1, i: "cartas/75.jpg" },
  { n: "Cavaleiro de Ouros", r: "Cavaleiro", s: "ouros", k: ["constância", "prudência", "confiabilidade"], v: "o cavaleiro parado com a moeda diante do campo cultivado", b: "constância, prudência, lentidão e confiabilidade", l: "Avanço lento e seguro: aqui devagar costuma ser rápido.", so: "Rotina que virou estagnação sem ninguém perceber.", c: "Mantenha o passo e não mude a rota este mês.", p: 1, i: "cartas/76.jpg" },
  { n: "Rainha de Ouros", r: "Rainha", s: "ouros", k: ["cuidado prático", "abundância", "gestão"], v: "a rainha no jardim segurando a moeda, o trono natural e o coelho", b: "cuidado concreto, corpo, abundância prática e acolhimento", l: "Domínio do concreto: casa, corpo, contas e negócio em ordem.", so: "Resolver a vida de todos e deixar a própria no fim da fila.", c: "Cuide do seu corpo e do seu caixa com o zelo que dá aos outros.", p: 1, i: "cartas/77.jpg" },
  { n: "Rei de Ouros", r: "Rei", s: "ouros", k: ["solidez", "gestão", "autoridade"], v: "o rei no trono com touros, vinhas e o castelo ao fundo", b: "domínio material, estabilidade, gestão e risco de acomodação", l: "Solidez e apoio de quem tem recurso e palavra.", so: "Status acima do afeto; controle exercido pelo dinheiro.", c: "Negocie de igual para igual: você tem valor para pôr na mesa.", p: 1, i: "cartas/78.jpg" },

  { n: "Ás de Espadas", r: "Ás", s: "espadas", k: ["clareza", "verdade", "decisão"], v: "a mão com a espada coroada entre as montanhas", b: "clareza, verdade, corte, decisão e ideia poderosa", l: "A verdade tende a aparecer nítida e a cortar a confusão em dois.", so: "Palavra afiada que machuca mais do que esclarece.", c: "Diga o que precisa ser dito em duas frases.", p: 1, i: "cartas/51.jpg" },
  { n: "Dois de Espadas", r: "II", s: "espadas", k: ["impasse", "negação", "empate"], v: "a mulher vendada com as espadas cruzadas diante do mar e da lua", b: "impasse, proteção, negação e falta de informação", l: "Talvez já existam dados suficientes; falta retirar a venda.", so: "Não escolher para não perder nenhum dos lados.", c: "Escreva prós e contras à mão e marque um prazo para decidir.", p: 0, i: "cartas/52.jpg" },
  { n: "Três de Espadas", r: "III", s: "espadas", k: ["mágoa", "verdade incômoda", "elaboração"], v: "o coração atravessado por três espadas sob a chuva", b: "dor, separação, verdade incômoda e elaboração do sofrimento", l: "A dor aqui vem de saber — e saber costuma ser o começo do fim do sofrimento.", so: "Reviver a cena; transformar a mágoa em identidade.", c: "Sinta por inteiro e pare de reler as provas.", p: -1, i: "cartas/53.jpg" },
  { n: "Quatro de Espadas", r: "IV", s: "espadas", k: ["pausa", "recuperação", "silêncio"], v: "a figura deitada no monumento com as espadas e o vitral", b: "pausa, recuperação, silêncio e necessidade de recuo", l: "Trégua necessária: descansar aqui é estratégia, não fraqueza.", so: "Paralisia por exaustão; adiar indefinidamente.", c: "Garanta alguns dias de repouso real antes de qualquer movimento.", p: 0, i: "cartas/54.jpg" },
  { n: "Cinco de Espadas", r: "V", s: "espadas", k: ["conflito", "custo", "desgaste"], v: "o homem recolhendo as espadas enquanto os outros se afastam", b: "vitória amarga, conflito, humilhação e custo de vencer", l: "É possível ganhar essa — calculando antes o preço da vitória.", so: "Briga por orgulho; ambiente de disputa normalizado.", c: "Escolha uma batalha e abandone as outras duas.", p: -1, i: "cartas/55.jpg" },
  { n: "Seis de Espadas", r: "VI", s: "espadas", k: ["travessia", "transição", "alívio"], v: "o barco conduzindo adulto e criança entre as espadas fincadas", b: "transição, afastamento, travessia e melhora gradual", l: "Travessia para águas mais calmas: a parte mais dura tende a ficar atrás.", so: "Levar a bagagem antiga para o lugar novo.", c: "Mude de cenário ou de rotina e deixe algo para trás de propósito.", p: 1, i: "cartas/56.jpg" },
  { n: "Sete de Espadas", r: "VII", s: "espadas", k: ["estratégia", "segredo", "cautela"], v: "a figura levando cinco espadas e olhando para trás diante do acampamento", b: "estratégia, evasão, segredo e ação indireta", l: "Estratégia silenciosa funciona: não é hora de anunciar o plano.", so: "Meia-verdade em cena — de alguém, ou sua também.", c: "Confira o que não foi contado antes de assinar ou confiar.", p: -1, i: "cartas/57.jpg" },
  { n: "Oito de Espadas", r: "VIII", s: "espadas", k: ["limitação", "medo", "crença"], v: "a mulher vendada e cercada de espadas, com o castelo ao fundo", b: "sensação de impotência, crenças limitantes e saída não percebida", l: "A prisão parece mais mental do que real: as amarras estão frouxas.", so: "Crença de que não há saída; esperar ser resgatada.", c: "Dê um passo minúsculo e possível hoje. Um só.", p: -1, i: "cartas/58.jpg" },
  { n: "Nove de Espadas", r: "IX", s: "espadas", k: ["ansiedade", "ruminação", "medo noturno"], v: "a pessoa acordada na cama diante das nove espadas", b: "ansiedade, culpa, ruminação e medo ampliado pela mente", l: "O medo é grande, mas tende a ser maior na madrugada do que no mundo.", so: "Catastrofizar e sofrer por antecipação do que não aconteceu.", c: "Escreva o pior cenário e ao lado o plano: o papel encolhe o monstro.", p: -1, i: "cartas/59.jpg" },
  { n: "Dez de Espadas", r: "X", s: "espadas", k: ["fim", "esgotamento", "amanhecer"], v: "a figura caída atravessada por dez espadas diante do amanhecer", b: "fim doloroso, esgotamento e impossibilidade de manter o ciclo", l: "Parece ser o fim de um desgaste: a partir daqui a curva tende a subir.", so: "Insistir no que já não se sustenta; ocupar o papel de vítima.", c: "Declare encerrado e levante sem renegociar.", p: -1, i: "cartas/60.jpg" },
  { n: "Pajem de Espadas", r: "Pajem", s: "espadas", k: ["vigilância", "notícia", "curiosidade"], v: "o jovem com a espada erguida sob o vento e os pássaros", b: "vigilância, notícia, curiosidade mental e defensividade", l: "Informação nova pode chegar e mudar o jogo.", so: "Fofoca, precipitação, falar antes de apurar.", c: "Apure a fonte antes de reagir.", p: 0, i: "cartas/61.jpg" },
  { n: "Cavaleiro de Espadas", r: "Cavaleiro", s: "espadas", k: ["ação rápida", "confronto", "urgência"], v: "o cavaleiro avançando sob as árvores inclinadas e as nuvens", b: "ação rápida, confronto, determinação e precipitação", l: "Movimento veloz e direto ao ponto: momento de agir.", so: "Agressividade, decisão no impulso, atropelo.", c: "Aja rápido, mas releia antes de enviar.", p: 0, i: "cartas/62.jpg" },
  { n: "Rainha de Espadas", r: "Rainha", s: "espadas", k: ["discernimento", "limite", "franqueza"], v: "a rainha com a espada erguida e a mão estendida sob o céu de nuvens", b: "discernimento, limite, franqueza e independência", l: "Lucidez afiada: dá para ver a situação sem romantismo.", so: "Dureza que afasta; cinismo usado como blindagem.", c: "Use a clareza para estabelecer limite, não para punir.", p: 1, i: "cartas/63.jpg" },
  { n: "Rei de Espadas", r: "Rei", s: "espadas", k: ["estratégia", "critério", "autoridade"], v: "o rei frontal com a espada erguida sob o céu claro", b: "autoridade mental, estratégia, regra e julgamento racional", l: "Decisão pela razão, com apoio técnico ou orientação especializada.", so: "Frieza, arrogância intelectual, palavra usada como arma.", c: "Busque orientação profissional e documente o combinado.", p: 1, i: "cartas/64.jpg" },

  { n: "Ás de Paus", r: "Ás", s: "paus", k: ["impulso", "desejo", "início"], v: "a mão saindo da nuvem com o bastão brotando e o castelo distante", b: "impulso criativo, desejo e oportunidade inicial", l: "Uma ideia acende com força e vontade de começar agora.", so: "Fogo de palha: entusiasmo sem projeto.", c: "Registre a ideia e dê o primeiro passo em 24 horas.", p: 1, i: "cartas/23.jpg" },
  { n: "Dois de Paus", r: "II", s: "paus", k: ["planejamento", "horizonte", "escolha"], v: "o homem no alto segurando o globo entre dois bastões", b: "planejamento, horizonte maior e decisão entre segurança e expansão", l: "O mundo parece maior que o quintal — e você está olhando para ele.", so: "Planejar indefinidamente para não arriscar.", c: "Marque a data em que o plano sai do papel.", p: 0, i: "cartas/24.jpg" },
  { n: "Três de Paus", r: "III", s: "paus", k: ["expectativa", "expansão", "alcance"], v: "a figura observando os navios diante do mar", b: "expectativa, resultados em movimento e visão de longo prazo", l: "O que foi lançado já está em movimento e tende a voltar.", so: "Querer colher no mesmo dia do plantio.", c: "Amplie o alcance: mais uma frente, mais um contato.", p: 1, i: "cartas/25.jpg" },
  { n: "Quatro de Paus", r: "IV", s: "paus", k: ["celebração", "base", "marco"], v: "a guirlanda entre os quatro bastões, o casal e o castelo", b: "celebração, base, acolhimento e marco compartilhado", l: "Marco feliz se firmando: casa, festa, compromisso, conquista.", so: "Comemorar o que ainda não está fechado.", c: "Marque a data e comemore de verdade quando chegar.", p: 1, i: "cartas/26.jpg" },
  { n: "Cinco de Paus", r: "V", s: "paus", k: ["competição", "ruído", "atrito"], v: "os jovens cruzando bastões sem coordenação", b: "competição, ruído, teste de força e energia sem coordenação", l: "Atrito pode ser produtivo: a disputa obriga a melhorar.", so: "Briga por bobagem; ambiente de competição constante.", c: "Saia da discussão que não tem prêmio.", p: -1, i: "cartas/27.jpg" },
  { n: "Seis de Paus", r: "VI", s: "paus", k: ["reconhecimento", "vitória", "validação"], v: "o cavaleiro com coroa de louros diante da multidão", b: "reconhecimento, vitória, validação e risco de depender de aplauso", l: "Reconhecimento tende a chegar — e a ser visto por quem importa.", so: "Depender do aplauso para se sentir existindo.", c: "Aceite o crédito sem se diminuir.", p: 1, i: "cartas/28.jpg" },
  { n: "Sete de Paus", r: "VII", s: "paus", k: ["defesa", "posição", "resistência"], v: "o homem defendendo o terreno elevado com um bastão", b: "posição conquistada, resistência, pressão e necessidade de sustentar limites", l: "Existe terreno conquistado e é possível defendê-lo.", so: "Defender sozinha o que já não vale a luta.", c: "Decida o que é território e o que é teimosia.", p: 0, i: "cartas/29.jpg" },
  { n: "Oito de Paus", r: "VIII", s: "paus", k: ["velocidade", "notícia", "alinhamento"], v: "os oito bastões atravessando o céu na mesma direção", b: "velocidade, mensagem, alinhamento de movimento e acontecimentos próximos", l: "As coisas tendem a destravar rápido: recado, viagem, resposta.", so: "Tudo ao mesmo tempo; impulsividade.", c: "Responda hoje o que está esperando por você.", p: 1, i: "cartas/30.jpg" },
  { n: "Nove de Paus", r: "IX", s: "paus", k: ["persistência", "cautela", "última milha"], v: "o homem ferido diante da barreira de bastões", b: "cautela, resistência, memória de conflito e último esforço", l: "O cansaço costuma indicar proximidade: falta menos do que parece.", so: "Desconfiar de tudo por causa das feridas antigas.", c: "Segure mais um pouco — e depois descanse de verdade.", p: 0, i: "cartas/31.jpg" },
  { n: "Dez de Paus", r: "X", s: "paus", k: ["sobrecarga", "responsabilidade", "reta final"], v: "o homem curvado carregando dez bastões em direção à cidade", b: "sobrecarga, responsabilidade e proximidade da conclusão", l: "Você chegou até aqui carregando tudo — e pode chegar mais leve.", so: "Assumir o que é dos outros; exaustão usada como medalha.", c: "Delegue ou solte três coisas desta semana.", p: -1, i: "cartas/32.jpg" },
  { n: "Pajem de Paus", r: "Pajem", s: "paus", k: ["entusiasmo", "descoberta", "notícia"], v: "o jovem examinando o bastão no deserto, com salamandras na roupa", b: "notícia, curiosidade, descoberta e entusiasmo iniciante", l: "Entusiasmo novo e um convite que abre porta.", so: "Empolgação que não sustenta o segundo dia.", c: "Diga sim ao que te dá energia — e cumpra.", p: 1, i: "cartas/33.jpg" },
  { n: "Cavaleiro de Paus", r: "Cavaleiro", s: "paus", k: ["paixão", "aventura", "inconstância"], v: "o cavalo empinado e o cavaleiro em movimento com salamandras", b: "paixão, aventura, chegada rápida e inconstância", l: "Chegada intensa: paixão, viagem ou projeto arrebatador.", so: "Instabilidade, sedução sem raiz, sumiço.", c: "Curta a intensidade sem construir casa nela ainda.", p: 0, i: "cartas/34.jpg" },
  { n: "Rainha de Paus", r: "Rainha", s: "paus", k: ["magnetismo", "confiança", "presença"], v: "o trono com leões, o girassol e o gato preto aos pés", b: "confiança, magnetismo, calor, independência e presença", l: "Magnetismo que cresce quando se para de pedir permissão para existir.", so: "Performance e validação externa escondendo insegurança.", c: "Escolha uma atitude concreta que faça o corpo reconhecer a confiança.", p: 1, i: "cartas/35.jpg" },
  { n: "Rei de Paus", r: "Rei", s: "paus", k: ["liderança", "visão", "iniciativa"], v: "o rei com o bastão florido, os leões e as salamandras no trono", b: "visão, liderança, iniciativa e domínio criativo", l: "Visão de longo alcance e autoridade para liderar o próprio caminho.", so: "Autoritarismo; promessa grande com execução ausente.", c: "Assuma a liderança do seu próprio projeto.", p: 1, i: "cartas/36.jpg" }
];

const P = (label, leitura) => ({ label, leitura });

export const AREAS = [
  {
    key: "amor", nome: "Caminhos do Amor", glifo: "☾", preco: 37,
    sub: "Entenda a energia da sua vida afetiva, o que está aproximando ou afastando o amor e qual caminho tende a se abrir.",
    pergunta: "O que você mais deseja compreender hoje: uma relação atual, alguém que está conhecendo ou a abertura para um novo amor?",
    gratuita: "A primeira carta mostra como seu coração está entrando nesta história — mesmo que você ainda não tenha colocado isso em palavras.",
    desbloqueio: "Descubra o que a dinâmica desperta em você, o principal bloqueio, a tendência afetiva e o conselho das cartas para não repetir o mesmo ciclo.",
    cta: "Ver meus caminhos no amor",
    foco: "Feche os olhos e traga a sensação que o amor tem deixado em você nas últimas semanas. Não formule a pergunta bonita: sinta onde ela pesa.",
    cruzado: "autoestima",
    exemplos: ["Devo ficar com ele?","Essa pessoa que estou ficando vai dar certo?","Ele gosta de mim de verdade ou é só carência?","Por que ele some e volta?","Estou pronta para um novo amor?","Vale a pena dar mais uma chance?","Ele está pensando em mim agora?","Vou encontrar alguém ainda este ano?"],
    posicoes: [
      P("Clima afetivo atual", "Esta posição fala de você, não do outro: é o retrato do seu estado afetivo neste momento, que influencia o que você consegue receber."),
      P("Necessidade emocional", "O que o seu lado emocional está pedindo de fato — muitas vezes diferente do que você pede em palavras."),
      P("Dinâmica oculta", "O movimento que atua nos bastidores da relação e ainda não foi nomeado por nenhum dos dois."),
      P("Tendência", "Para onde a situação tende se nada mudar. Tendência é condição, não sentença."),
      P("Conselho das cartas", "A postura que tende a produzir o melhor resultado dentro desse cenário.")
    ]
  },
  {
    key: "ex", nome: "Seu Ex: vínculo, distância e reconciliação", glifo: "⟲", preco: 39.9,
    sub: "Veja o que ainda mantém essa história viva, o que provocou a distância e em quais condições uma reaproximação seria possível.",
    pergunta: "O que você precisa compreender: os sentimentos que ainda existem, a possibilidade de contato ou se vale a pena esperar?",
    gratuita: "Esta carta mostra a energia que ainda conecta vocês — ou o motivo pelo qual o vínculo parece mais forte para um lado do que para o outro.",
    desbloqueio: "As quatro cartas restantes mostram o que está oculto, o bloqueio real, a tendência de contato ou afastamento e a atitude que preserva sua dignidade.",
    cta: "Entender esse vínculo",
    foco: "Traga essa história ao peito sem julgamento: o começo, o que doeu e o que ficou sem ser dito. As cartas leem o que está vivo, não o que se gostaria.",
    cruzado: "autoestima",
    aviso: "Esta leitura não garante volta nem prevê a decisão de outra pessoa. Ela diferencia saudade, apego, desejo e intenção concreta.",
    exemplos: ["Meu ex ainda pensa em mim?","Ele vai me procurar de novo?","Devo mandar mensagem ou esperar?","Ele está com outra pessoa?","Existe chance real de reconciliação?","Por que eu não consigo esquecer?","Ele se arrepende de ter terminado?","É saudade ou é apego?"],
    posicoes: [
      P("Vínculo remanescente", "O que de fato ainda liga você a essa história: pode ser afeto, hábito, ferida ou idealização."),
      P("Energia da outra parte", "O estado emocional provável do outro lado hoje. Sentir e agir são coisas diferentes — esta posição fala da primeira."),
      P("Bloqueio real", "A causa de fundo do afastamento, geralmente distinta da briga final."),
      P("Possibilidade e condições", "Se existe reaproximação plausível e, principalmente, o que precisaria mudar no mundo real para ela se sustentar."),
      P("Postura digna", "A atitude que preserva o seu valor, independentemente do que o outro decidir.")
    ]
  },
  {
    key: "dinheiro", nome: "Fluxo do Dinheiro e Prosperidade", glifo: "✦", preco: 37,
    sub: "Identifique padrões que travam seu crescimento, oportunidades que podem estar passando despercebidas e a postura mais favorável para organizar sua prosperidade.",
    pergunta: "Sua preocupação principal é aumentar ganhos, sair de uma fase apertada, organizar dívidas ou reconhecer uma oportunidade?",
    gratuita: "A primeira carta revela como sua energia atual se relaciona com segurança, merecimento e movimento financeiro.",
    desbloqueio: "Veja o padrão oculto, o maior risco, a oportunidade mais promissora e uma orientação prática para lidar melhor com dinheiro.",
    cta: "Abrir meu caminho de prosperidade",
    foco: "Pense no seu dinheiro como ele é hoje: o saldo, a conta que chega, o valor que você não se permite cobrar. Respire nesse lugar.",
    cruzado: "carreira",
    aviso: "Esta leitura não promete ganho, prêmio ou retorno financeiro e não constitui recomendação de investimento.",
    exemplos: ["Por que o dinheiro nunca sobra?","Vou conseguir sair das dívidas?","Devo cobrar mais pelo meu trabalho?","Essa oportunidade vale o risco?","Estou sabotando minha prosperidade?","O que está bloqueando minha renda?","Devo emprestar dinheiro para essa pessoa?","Esse negócio vai prosperar?"],
    posicoes: [
      P("Relação atual com segurança", "O retrato honesto do seu campo material hoje, sem maquiagem e sem culpa."),
      P("Padrão oculto", "O hábito ou a crença sobre dinheiro que age de forma repetida e quase invisível."),
      P("Risco ou vazamento", "Onde o recurso escapa: gasto, acordo mal feito, trabalho mal cobrado."),
      P("Oportunidade e tendência", "O canal mais aberto neste ciclo — nem sempre aquele que você vem forçando."),
      P("Ação prática", "O movimento concreto que tende a mudar o resultado, medido em números.")
    ]
  },
  {
    key: "carreira", nome: "Carreira, Reconhecimento e Próximo Passo", glifo: "⚑", preco: 34.9,
    sub: "Descubra onde está seu potencial profissional, o que bloqueia seu reconhecimento e qual movimento pode aproximar você de uma fase mais produtiva.",
    pergunta: "Você está pensando em crescer onde está, mudar de trabalho, empreender ou descobrir uma nova direção?",
    gratuita: "Esta carta mostra o ponto profissional que mais pede sua atenção agora: talento, conflito, cansaço ou oportunidade.",
    desbloqueio: "As próximas cartas revelam sua força pouco usada, o obstáculo central, a tendência do ciclo e o próximo passo mais coerente.",
    cta: "Revelar meu próximo passo",
    foco: "Visualize a sua segunda-feira de manhã. O corpo costuma responder antes da razão — deixe essa resposta aparecer.",
    cruzado: "dinheiro",
    exemplos: ["Devo sair desse emprego?","Vou ser reconhecida onde estou?","Devo aceitar essa proposta?","É hora de empreender?","Por que não consigo ser promovida?","Meu chefe está contra mim?","Devo mudar completamente de área?","Estou no lugar certo?"],
    posicoes: [
      P("Ciclo profissional", "Onde você está de fato no jogo, incluindo o que não se vê por estar dentro."),
      P("Talento subutilizado", "A capacidade que você tem e trata como comum — e que o ambiente ainda não usa."),
      P("Obstáculo", "O freio principal: pessoa, medo, contrato ou lealdade fora de hora."),
      P("Oportunidade e tendência", "A porta em formação e para onde o ciclo caminha se nada mudar."),
      P("Próximo passo", "O movimento com melhor relação entre risco e retorno neste período.")
    ]
  },
  {
    key: "vitalidade", nome: "Vitalidade, Corpo e Equilíbrio", glifo: "❋", preco: 27,
    sub: "Observe como emoções, rotina e limites podem estar influenciando sua sensação de força, descanso e equilíbrio.",
    pergunta: "Em qual ponto você sente maior necessidade de equilíbrio: energia, descanso, autocuidado, emoções ou relação com o próprio corpo?",
    gratuita: "A primeira carta simboliza como você tem administrado sua energia — preservando-a, dispersando-a ou exigindo mais do que consegue repor.",
    desbloqueio: "Descubra o que pode estar drenando você, qual recurso interno está disponível, a tendência da sua rotina e uma orientação de autocuidado.",
    cta: "Compreender minha energia",
    foco: "Coloque a mão onde o corpo pesa mais. Respire para dentro desse ponto e permita que ele fale.",
    cruzado: null,
    aviso: "Esta leitura não realiza diagnóstico e não substitui avaliação médica ou psicológica. Sintomas físicos ou emocionais persistentes devem ser avaliados por profissional habilitado.",
    exemplos: ["Por que estou sempre cansada?","O que está drenando minha energia?","Como recuperar minha disposição?","Estou me cuidando o suficiente?","Essa relação está me adoecendo?","Como dormir melhor?","O que meu corpo está tentando me dizer?","Como parar de me sobrecarregar?"],
    posicoes: [
      P("Estado percebido", "Como a sua energia se apresenta hoje, além do que o café disfarça."),
      P("Fonte de desgaste", "O que vem consumindo você: rotina, vínculo, emoção guardada."),
      P("Recurso restaurador", "O recurso interno disponível agora, que costuma ser mais simples do que se imagina."),
      P("Tendência da rotina", "Para onde a sua rotina caminha se permanecer como está."),
      P("Autocuidado", "O cuidado que tende a sustentar sua energia no médio prazo.")
    ]
  },
  {
    key: "espiritual", nome: "Caminho Espiritual e Propósito", glifo: "✷", preco: 29.9,
    sub: "Compreenda a lição do momento, os padrões que pedem consciência e a direção que pode trazer mais sentido para sua caminhada.",
    pergunta: "Você busca entender uma fase de transformação, sua intuição, um padrão repetido ou o sentido de uma escolha?",
    gratuita: "Esta carta mostra o arquétipo que acompanha sua fase atual e a pergunta interior que talvez você esteja evitando.",
    desbloqueio: "Revele a lição oculta, a sombra que pede integração, o potencial de crescimento e uma prática para levar essa percepção à vida real.",
    cta: "Explorar meu propósito",
    foco: "Lembre do momento em que você teve certeza de algo sem explicação. Volte para essa sensação agora.",
    cruzado: "autoestima",
    exemplos: ["Qual é o meu propósito?","Minha intuição está certa?","Por que sinto que vim fazer outra coisa?","O que essa fase está me ensinando?","Estou no caminho certo?","Tenho algum dom que estou ignorando?","Por que esse padrão se repete na minha vida?","Como me reconectar comigo mesma?"],
    posicoes: [
      P("Arquétipo do momento", "A energia que atravessa a sua fase atual, sem comparação com o caminho de ninguém."),
      P("Lição", "O aprendizado que a situação vem oferecendo de forma insistente."),
      P("Sombra", "O aspecto que pede integração em vez de combate."),
      P("Potencial", "O que pode se desenvolver se a lição for aceita."),
      P("Prática de integração", "O gesto concreto que traz a percepção para a vida real.")
    ]
  },
  {
    key: "familia", nome: "Família, Laços e Limites", glifo: "⌂", preco: 27,
    sub: "Entenda a dinâmica familiar que mais pesa hoje, os padrões herdados e como buscar proximidade sem abandonar seus próprios limites.",
    pergunta: "Sua questão envolve convivência, afastamento, conflito, responsabilidade ou dificuldade de se posicionar?",
    gratuita: "A primeira carta revela o papel que você parece estar ocupando dentro dessa dinâmica familiar.",
    desbloqueio: "Veja o que não está sendo dito, o padrão que se repete, a tendência da relação e o limite ou diálogo mais necessário.",
    cta: "Entender meus vínculos familiares",
    foco: "Traga a mesa da sua casa de origem, com todos sentados. Observe onde você se coloca nela.",
    cruzado: "futuroFamiliar",
    exemplos: ["Como lidar com minha mãe?","Devo me afastar dessa pessoa da família?","Por que sempre sou eu quem cede?","Como impor limites sem culpa?","Essa mágoa tem cura?","Devo perdoar?","Por que minha família não me apoia?","Como resolver esse conflito de herança?"],
    posicoes: [
      P("Papel atual", "A função que você assumiu nessa dinâmica: cuidadora, juíza, ponte, ausente."),
      P("O não dito", "O assunto que organiza o comportamento de todos justamente por não ser falado."),
      P("Padrão repetido", "O ciclo herdado que tende a se repetir até alguém enxergá-lo."),
      P("Tendência", "Para onde a relação caminha mantendo o formato atual."),
      P("Diálogo ou limite", "O que efetivamente reduz o conflito — às vezes conversa, às vezes distância.")
    ]
  },
  {
    key: "futuroFamiliar", nome: "A Família que Você Deseja Construir", glifo: "◉", preco: 29.9,
    sub: "Explore desejos, medos e condições emocionais ligados à maternidade, aos filhos, ao lar e ao futuro da sua família.",
    pergunta: "O que mais ocupa seu coração: desejo de ter filhos, relação com a maternidade, futuro do casal ou construção de um lar?",
    gratuita: "Esta carta mostra a emoção central por trás do futuro familiar que você imagina — desejo, receio, expectativa ou necessidade de segurança.",
    desbloqueio: "Descubra o que precisa ser conversado, qual apoio será importante, o principal desafio emocional e o caminho mais saudável de preparação.",
    cta: "Explorar meu futuro familiar",
    foco: "Respire sem cobrança e observe a imagem de futuro que aparece sozinha. Não existe resposta certa aqui.",
    cruzado: "familia",
    aviso: "Esta leitura não confirma gravidez, fertilidade, prazo de concepção ou qualquer resultado médico.",
    exemplos: ["É o momento certo de ter um filho?","Ele quer construir uma família comigo?","Estou pronta para ser mãe?","Por que tenho medo de engravidar?","Devo esperar ou seguir sozinha?","Como preparar minha vida para um filho?","Nossa relação sustenta uma família?","O que preciso conversar antes?"],
    posicoes: [
      P("Desejo central", "A emoção verdadeira por trás do futuro que você imagina."),
      P("Medo ou conversa necessária", "O que precisa ser falado — com alguém ou consigo mesma — antes do próximo passo."),
      P("Desafio", "O ponto emocional ou prático que tende a exigir mais de você."),
      P("Apoio disponível", "O apoio que existe e talvez não esteja sendo acionado."),
      P("Preparação saudável", "As condições reais que tornam esse caminho mais leve.")
    ]
  },
  {
    key: "decisao", nome: "Sim, Não ou Ainda Não?", glifo: "⊕", preco: 39.9,
    sub: "Veja a direção predominante da sua escolha, o benefício, o custo e a condição que pode mudar o resultado.",
    pergunta: "Escreva uma pergunta objetiva que possa ser analisada como “sim”, “não” ou “ainda não”.",
    gratuita: "A primeira carta mostra a força que está conduzindo sua decisão — desejo, medo, pressa, clareza ou resistência.",
    desbloqueio: "As demais cartas revelam o benefício, o custo oculto, o cenário provável e a condição necessária para uma decisão mais segura.",
    cta: "Revelar a direção das cartas",
    foco: "Formule a pergunta em uma frase só, começando com “devo”. Repita três vezes em pensamento.",
    cruzado: null,
    aviso: "Esta área não se aplica a diagnóstico, processo judicial, aposta ou investimento.",
    exemplos: ["Devo aceitar essa proposta?","Devo mudar de cidade?","Devo terminar esse relacionamento?","Devo dizer o que sinto?","Devo fazer esse curso?","Devo comprar ou esperar?","Devo confiar nessa pessoa?","Devo recomeçar do zero?"],
    posicoes: [
      P("Impulso", "A força que está conduzindo a decisão por baixo do argumento racional."),
      P("Benefício", "O que essa escolha tende a trazer de real, se for feita."),
      P("Custo", "O preço que costuma não entrar na conta."),
      P("Consequência provável", "O cenário mais plausível mantidas as condições atuais."),
      P("Condição da escolha", "O que precisa existir para que a direção se torne segura.")
    ]
  },
  {
    key: "energia", nome: "Energia ao Seu Redor: inveja, limites e proteção", glifo: "⟡", preco: 34.9,
    sub: "Observe influências, comparações, ambientes e relações que podem estar afetando sua paz, seus limites e sua sensação de proteção.",
    pergunta: "Você sente desgaste em um ambiente, depois de encontrar certas pessoas, ao se expor ou ao lidar com comparações?",
    gratuita: "Esta carta mostra como você está absorvendo ou reagindo ao ambiente ao seu redor.",
    desbloqueio: "Descubra a origem provável do desconforto, o limite que está faltando, o risco de projeção ou excesso de vigilância e uma prática de aterramento e proteção emocional.",
    cta: "Compreender essa influência",
    foco: "Pense em quando tudo começou a pesar. Respire e observe em quais ambientes esse desgaste aparece.",
    cruzado: "autoestima",
    aviso: "Esta leitura não afirma que alguém lançou maldição, trabalho ou energia contra você, e não vende qualquer tipo de limpeza.",
    exemplos: ["Por que tudo trava ao mesmo tempo?","Tem alguém torcendo contra mim?","Por que me sinto pesada perto dessa pessoa?","Estou absorvendo problema dos outros?","Como me proteger emocionalmente?","Essa amizade me faz bem?","Por que a inveja me afeta tanto?","Como recuperar minha paz?"],
    posicoes: [
      P("Sensibilidade atual", "Como você está absorvendo o ambiente neste momento."),
      P("Origem do desconforto", "O tipo de ambiente ou vínculo por onde o desgaste provavelmente entra."),
      P("Projeção ou influência", "A distinção entre o que vem de fora e o que o seu medo está ampliando."),
      P("Efeito provável", "O que tende a acontecer com a sua paz mantendo a exposição atual."),
      P("Limite e aterramento", "A prática de proteção emocional mais eficaz para o seu caso.")
    ]
  },
  {
    key: "autoestima", nome: "Autoestima, Magnetismo e Feminino Sagrado", glifo: "♀", preco: 24.9,
    sub: "Reconheça sua força, compreenda feridas na autoimagem e desperte uma presença mais segura, magnética e conectada ao próprio corpo.",
    pergunta: "O que você deseja fortalecer: confiança, sensualidade, limites, amor-próprio ou reconexão com sua feminilidade?",
    gratuita: "A primeira carta revela como você está enxergando seu próprio valor neste momento — e o que talvez as outras pessoas percebam antes de você.",
    desbloqueio: "Veja a ferida que influencia sua autoimagem, a força esquecida, a expressão que deseja nascer e uma atitude concreta para ocupar mais espaço na própria vida.",
    cta: "Despertar meu magnetismo",
    foco: "Olhe para você como olharia para uma amiga muito querida. Respire assim, com esse olhar.",
    cruzado: "espiritual",
    exemplos: ["Por que não me sinto suficiente?","Como parar de me comparar?","Por que aceito menos do que mereço?","Como recuperar minha confiança?","Por que não consigo me achar bonita?","O que me impede de me escolher?","Como ocupar mais espaço na minha vida?","Onde está o meu poder?"],
    posicoes: [
      P("Autoimagem", "Como você está enxergando o seu próprio valor agora."),
      P("Ferida", "A origem da voz que te desqualifica por dentro."),
      P("Força esquecida", "O poder que você tem e parou de usar."),
      P("Expressão emergente", "O que está querendo nascer em você e ainda não tem permissão."),
      P("Atitude concreta", "O gesto que faz o corpo reconhecer a confiança antes da mente acreditar.")
    ]
  }
];

export const COMPLETA = {
  key: "completa", nome: "Mapa Completo da Sua Vida", glifo: "✵", preco: 119.9, somaAvulsas: 192.9,
  sub: "Uma leitura panorâmica de amor, dinheiro, trabalho, corpo, família e alma para revelar como as áreas da sua vida se influenciam.",
  venda: "Algumas respostas não aparecem quando cada área é observada isoladamente. O Mapa Completo utiliza 24 cartas: quatro para cada uma das seis áreas. Em cada área, as cartas mostram estado atual, bloqueio, oportunidade e orientação. Ao final, uma síntese conecta os padrões repetidos e aponta as prioridades do seu ciclo.",
  gratuita: "Sua carta central representa o tema que atravessa todas as áreas neste momento. Ela não define seu destino: mostra o padrão que merece ser visto antes da leitura completa.",
  desbloqueio: "Revele as 24 cartas e receba seis capítulos personalizados, as conexões entre eles e um resumo final com prioridades, alertas e próximos passos.",
  cta: "Abrir meu Mapa Completo",
  pergunta: "Se quiser, escreva em uma frase o que mais ocupa a sua cabeça neste momento da vida.",
  foco: "Não escolha uma pergunta: entregue a sua vida inteira. Respire pensando em como você chegou até aqui.",
  cruzado: null,
  blocos: [
    { key: "amor", nome: "Amor", posicoes: [P("Estado atual", "Como a sua vida afetiva se apresenta hoje."), P("Bloqueio", "O que impede a entrega ou a aproximação."), P("Oportunidade", "A abertura disponível neste ciclo."), P("Orientação", "A postura mais favorável para essa área.")] },
    { key: "dinheiro", nome: "Dinheiro", posicoes: [P("Estado atual", "A situação concreta do seu campo material."), P("Bloqueio", "O padrão que trava a entrada de recurso."), P("Oportunidade", "Por onde o dinheiro tende a chegar."), P("Orientação", "A ação prática que sustenta o resultado.")] },
    { key: "carreira", nome: "Trabalho", posicoes: [P("Estado atual", "Sua posição real no ciclo profissional."), P("Bloqueio", "O que desgasta ou trava o reconhecimento."), P("Oportunidade", "A porta em formação."), P("Orientação", "O próximo passo mais coerente.")] },
    { key: "vitalidade", nome: "Corpo & Energia", posicoes: [P("Estado atual", "Como a sua energia se apresenta."), P("Bloqueio", "O que vem drenando você."), P("Oportunidade", "O recurso restaurador disponível."), P("Orientação", "O autocuidado que sustenta o período.")] },
    { key: "familia", nome: "Família & Raízes", posicoes: [P("Estado atual", "O clima real dos seus vínculos familiares."), P("Bloqueio", "O padrão ou o não dito que pesa."), P("Oportunidade", "O que pode ser reparado agora."), P("Orientação", "O limite ou o diálogo mais necessário.")] },
    { key: "espiritual", nome: "Alma & Propósito", posicoes: [P("Estado atual", "Onde você está no seu caminho interior."), P("Bloqueio", "A sombra que pede integração."), P("Oportunidade", "O potencial em desenvolvimento."), P("Orientação", "A prática que traz sentido ao cotidiano.")] }
  ]
};

export const NAIPES = {
  paus: { nome: "Paus", eixo: "ação, desejo, velocidade, disputa ou impulso" },
  copas: { nome: "Copas", eixo: "vínculo, emoção, memória, idealização ou receptividade" },
  espadas: { nome: "Espadas", eixo: "pensamento, conflito, comunicação, ansiedade ou decisão" },
  ouros: { nome: "Ouros", eixo: "segurança, corpo, rotina, trabalho, dinheiro ou construção gradual" }
};

export const ESTAGIOS = {
  "Ás": "início", "II": "polaridade", "III": "expansão", "IV": "estrutura", "V": "tensão",
  "VI": "ajuste", "VII": "teste", "VIII": "movimento ou domínio", "IX": "maturação", "X": "conclusão ou excesso"
};

export const TENSOES = {
  "copas+espadas": "emoção e razão em tensão",
  "copas+ouros": "sentimento buscando estabilidade e presença concreta",
  "paus+espadas": "aceleração e coragem, com risco de conflito ou precipitação",
  "paus+copas": "paixão, entusiasmo e envolvimento emocional",
  "paus+ouros": "vontade pedindo para se transformar em construção consistente",
  "espadas+ouros": "decisão prática, contrato, organização ou preocupação material"
};
