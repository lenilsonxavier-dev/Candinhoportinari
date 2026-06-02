export interface BibliotecaItem {
  palavras_chave: string[];
  inicio: string[];
  explicacao_curta: string[];
  ano_nascimento?: string;
  ano_falecimento?: string;
  categoria?: string;
}

export const bibliotecaCultural: Record<string, BibliotecaItem> = {
  portinari: {
    palavras_chave: ["portinari", "candido", "cândido", "candinho", "guerra e paz", "meninos brincando", "rodopiando"],
    inicio: [
      "Cândido Portinari foi um dos pintores mais importantes do Brasil!",
      "Nascido em Brodowski, no interior de São Paulo, ele amava retratar o povo brasileiro."
    ],
    explicacao_curta: [
      "Ele pintava crianças brincando de pipa, jogadores de futebol e momentos do dia a dia com cores incríveis. Sua obra mais famosa, os painéis 'Guerra e Paz', fica na sede da ONU em Nova York!"
    ],
    ano_nascimento: "1903",
    ano_falecimento: "1962",
    categoria: "Modernismo"
  },
  tarsila: {
    palavras_chave: ["tarsila", "amaral", "abaporu", "operarios", "operários", "antropofagia"],
    inicio: [
      "Tarsila do Amaral é uma das maiores heroínas da arte brasileira!"
    ],
    explicacao_curta: [
      "Ela criou o impressionante quadro 'Abaporu' (que significa 'homem que come gente' em tupi-guarani), que deu força ao movimento Modernista. Ela adorava pintar elementos da nossa terra usando as cores rosa, azul-turquesa e amarelo!"
    ],
    ano_nascimento: "1886",
    ano_falecimento: "1973",
    categoria: "Modernismo"
  },
  vangogh: {
    palavras_chave: ["van gogh", "vincent", "noite estrelada", "girassois", "girassóis", "auto-retrato", "quarto em arles"],
    inicio: [
      "Vincent van Gogh foi um mestre holandês com um coração gigante!"
    ],
    explicacao_curta: [
      "Ele pintava usando pinceladas grossas e cheias de movimento que pareciam dançar na tela! Suas pinturas mais famosas são 'A Noite Estrelada' (com espirais de luz no céu) e 'Os Girassóis', onde o amarelo brilha como o Sol!"
    ],
    ano_nascimento: "1853",
    ano_falecimento: "1890",
    categoria: "Pós-Impressionismo"
  },
  davinci: {
    palavras_chave: ["da vinci", "leonardo", "mona lisa", "monalisa", "ultima ceia", "última ceia", "vitruviano"],
    inicio: [
      "Leonardo da Vinci foi um gênio completo do Renascimento e sabia fazer de tudo!"
    ],
    explicacao_curta: [
      "Além de pintar a misteriosa 'Mona Lisa' e 'A Última Ceia', ele passava horas projetando máquinas de voar, estudando anatomia e observando a água e as plantas. Ele era incrivelmente curioso!"
    ],
    ano_nascimento: "1452",
    ano_falecimento: "1519",
    categoria: "Renascimento"
  },
  picasso: {
    palavras_chave: ["picasso", "pablo", "cubismo", "guernica", "fase azul", "fase rosa"],
    inicio: [
      "Pablo Picasso foi um artista espanhol revolucionário que inventou o Cubismo!"
    ],
    explicacao_curta: [
      "Ele adorava desconstruir a realidade, pintando rostos e objetos divididos em cubos e formas geométricas de modo que pudéssemos vê-los de vários ângulos de uma vez só! Sua pintura pacifista mais famosa é 'Guernica'."
    ],
    ano_nascimento: "1881",
    ano_falecimento: "1973",
    categoria: "Cubismo"
  },
  monet: {
    palavras_chave: ["monet", "claude", "impressionismo", "ninféias", "sol nascente"],
    inicio: [
      "Claude Monet foi o pintor francês que deu nome ao Impressionismo!"
    ],
    explicacao_curta: [
      "Ele amava pintar ao ar livre para capturar como a luz do sol mudava os lagos e as flores. Ele passou anos pintando o seu jardim de flores aquáticas (as Ninféias) em Giverny!"
    ],
    ano_nascimento: "1840",
    ano_falecimento: "1926",
    categoria: "Impressionismo"
  }
};
