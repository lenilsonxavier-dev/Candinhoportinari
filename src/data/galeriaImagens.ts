export interface GaleriaItem {
  imagemUrl: string;
  titulo: string;
  credito: string;
}

export const GALERIA_IMAGENS: Record<string, GaleriaItem | GaleriaItem[]> = {
  arte: {
    imagemUrl: "https://i.imgur.com/S65idlX.jpeg",
    titulo: "O Violeiro",
    credito: "Almeida Júnior"
  },
  danca: {
    imagemUrl: "https://i.imgur.com/3LGoXuZ.jpeg",
    titulo: "A Dança",
    credito: "Henri Matisse"
  },
  poema: {
    imagemUrl: "https://i.imgur.com/wvQLiom.jpeg",
    titulo: "Retrato de Cecília Meireles",
    credito: "Acervo de Literatura Clássica"
  },
  desenho: {
    imagemUrl: "https://i.imgur.com/qKt1FWr.jpeg",
    titulo: "Esboço da Última Ceia",
    credito: "Leonardo da Vinci"
  },
  literatura: {
    imagemUrl: "https://i.imgur.com/JoFITap.jpeg",
    titulo: "Retrato do Acervo Literário Clássico",
    credito: "Acervo de Literatura Clássica"
  },
  musica: {
    imagemUrl: "https://i.imgur.com/8tSYMB6.jpeg",
    titulo: "Clássico Histórico de Partituras e Instrumentos",
    credito: "Acervo de Música Clássica"
  },
  pintura: {
    imagemUrl: "https://i.imgur.com/itQdr8H.jpeg",
    titulo: "No Bosque de Giverny (In the Woods at Giverny)",
    credito: "Claude Monet"
  },
  teatro: {
    imagemUrl: "https://i.imgur.com/JHzxAbj.jpeg",
    titulo: "Teatro Municipal de São Paulo",
    credito: "Teatro Municipal de São Paulo"
  },
  piada: [
    {
      imagemUrl: "https://i.imgur.com/D0qsROZ.jpeg",
      titulo: "As Quatro Estações (Le Saisons)",
      credito: "Giuseppe Arcimboldo"
    },
    {
      imagemUrl: "https://i.imgur.com/4zBo1Q2.jpeg",
      titulo: "Mãos Desenhando (Drawing Hands)",
      credito: "M. C. Escher"
    },
    {
      imagemUrl: "https://i.imgur.com/s1Ed4RY.jpeg",
      titulo: "Retrato do Imperador Rodolfo II como Vertumno",
      credito: "Giuseppe Arcimboldo"
    },
    {
      imagemUrl: "https://i.imgur.com/Lk68fFd.jpeg",
      titulo: "Relatividade (Relativity)",
      credito: "M. C. Escher"
    }
  ],
  curiosidade: [
    {
      imagemUrl: "https://i.imgur.com/Bmzw190.jpeg",
      titulo: "A Coruja da Sabedoria e Astronomia",
      credito: "Acervo de Curiosidades"
    },
    {
      imagemUrl: "https://i.imgur.com/5gUFu6O.jpeg",
      titulo: "Autorretrato",
      credito: "Leonardo da Vinci"
    }
  ],
  caboclinho: {
    imagemUrl: "https://i.imgur.com/H36yCWI.jpg",
    titulo: "Dança dos Caboclinhos",
    credito: "Manifestação Folclórica e Cultural Brasileira"
  },
  tango: {
    imagemUrl: "https://i.imgur.com/S2eEbmj.jpeg",
    titulo: "Dançando Tango",
    credito: "Ilustração de Tango"
  },
  salsa: {
    imagemUrl: "https://i.imgur.com/KNsG8wH.jpeg",
    titulo: "Dançando Salsa",
    credito: "Ilustração de Salsa"
  },
  valsa: {
    imagemUrl: "https://i.imgur.com/6hxKnNJ.jpeg",
    titulo: "Dançando Valsa",
    credito: "Ilustração de Valsa"
  },
  rock: {
    imagemUrl: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=600&q=80",
    titulo: "Alegria do Rock",
    credito: "Unsplash / Fotografia de Rock"
  },
  jongo: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Jongo_no_Sudeste_brasileiro.jpg",
    titulo: "Dançando Jongo",
    credito: "Wikimedia Commons / Jongo no Sudeste brasileiro"
  },
  congada: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Festa_do_Congado_em_Itapecerica_%28MG%29_-_2015.jpg",
    titulo: "Festa da Congada",
    credito: "Wikimedia Commons / Festa do Congado"
  },
  coco_pernambucano: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Coco_de_roda_Arcoverde.jpg",
    titulo: "Dançando o Coco Pernambucano",
    credito: "Wikimedia Commons / Coco de Roda"
  },
  ciranda: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Ciranda_de_Tarituba.jpg",
    titulo: "Roda de Ciranda",
    credito: "Wikimedia Commons / Ciranda de Tarituba"
  },
  hip_hop: {
    imagemUrl: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    titulo: "Dançando Hip Hop",
    credito: "Unsplash / Dançarino de Hip Hop"
  },
  funk: {
    imagemUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    titulo: "Dança Funk",
    credito: "Unsplash / Celebração e Dança"
  },
  frevo: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Passistas_de_frevo.jpg",
    titulo: "Dançando Frevo com Sombrinha",
    credito: "Wikimedia Commons / Passistas de Frevo em Recife"
  },
  fandango: {
    imagemUrl: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=600&q=80",
    titulo: "Dançando Fandango",
    credito: "Unsplash / Dança Tradicional"
  },
  danca_de_salao: {
    imagemUrl: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=600&q=80",
    titulo: "Dança de Salão",
    credito: "Unsplash / Dança de Salão"
  },
  danca_contemporanea: {
    imagemUrl: "https://images.unsplash.com/photo-1508847154043-be12a3b4dca9?auto=format&fit=crop&w=600&q=80",
    titulo: "Dança Contemporânea",
    credito: "Unsplash / Dança Contemporânea"
  },
  danca_classica: {
    imagemUrl: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=600&q=80",
    titulo: "Dança Clássica",
    credito: "Unsplash / Bailarina Clássica"
  },
  cavalo_marinho: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Cavalo_Marinho_Estrela_de_Ouro_%28Condado-PE%29.jpg",
    titulo: "Festa do Cavalo Marinho",
    credito: "Wikimedia Commons / Brincadores de Cavalo Marinho"
  },
  catira: {
    imagemUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=600&q=80",
    titulo: "Dançando Catira",
    credito: "Unsplash / Sapateado e Ritmo"
  },
  carimbo: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Carimb%C3%B3_-_Dan%C3%A7a_Folcl%C3%B3rica.jpg",
    titulo: "Dançando Carimbó",
    credito: "Wikimedia Commons / Dançarinos de Carimbó no Pará"
  },
  bale: {
    imagemUrl: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=600&q=80",
    titulo: "Dançando Balé",
    credito: "Unsplash / Arte do Balé"
  },
  arte_indigena: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Vaso_gargalo_marajoara.jpg",
    titulo: "Arte Indígena",
    credito: "Wikimedia Commons / Cerâmica Marajoara"
  },
  arte_africana: {
    imagemUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/M%C3%A1scara_africana_-_Cole%C3%A7%C3%A3o_de_Arte_Africana_do_Museu_Nacional_do_Rio_de_Janeiro_-_01.jpg",
    titulo: "Arte Africana",
    credito: "Wikimedia Commons / Coleção de Arte Africana do Museu Nacional"
  },
  danca_brasil: {
    imagemUrl: "https://i.imgur.com/CVHkdCZ.jpeg",
    titulo: "Dança Tradicional no Brasil",
    credito: "Acervo de Dança do Brasil"
  },
  desenho_brasil: {
    imagemUrl: "https://i.imgur.com/KSd4nHC.jpeg",
    titulo: "Desenho na História do Brasil",
    credito: "Acervo de Desenho do Brasil"
  }
};
