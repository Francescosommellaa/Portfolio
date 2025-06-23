export interface Project {
  firstLetter: string;
  secondLetter?: string;
  name: string;
  img: string;
  link: string;
  website: string;
  siteName: string;
  client: string;
  year: number;
  category: string;
  brandShortDescription: string;
  bigHorizontalImg: string;
}
export interface ProjectsByYear {
  year: number;
  projects: Project[];
}

export const projectsData: ProjectsByYear[] = [
  {
    year: 25,
    projects: [
      {
        firstLetter: "F",
        name: "ra olio",
        img: "FraFolio",
        link: "/Lavori/FraFolio",
        website: "https://www.francescosommella.com",
        siteName: "francescosommella.com",
        client: "Francesco Sommella",
        year: 2024,
        category: "Tech",
        brandShortDescription: "Il portfolio dinamico e minimale di Francesco Sommella, tra design e sviluppo.",
        bigHorizontalImg: "FraFolio"
      },
      {
        firstLetter: "A",
        name: "miuni",
        img: "Amiuni",
        link: "/Lavori/Amiuni",
        website: "https://www.amiuni.it",
        siteName: "Amiuni.it",
        client: "Amiuni",
        year: 2025,
        category: "Fashion",
        brandShortDescription: "Identità moderna e sito e-commerce su misura per il brand Amiuni.",
        bigHorizontalImg: "Amiuni"
      },
      {
        firstLetter: "Q",
        name: "DK",
        img: "QDK",
        link: "/Lavori/QDK",
        website: "https://www.qudikappa.it",
        siteName: "Qudikappa.it",
        client: "QDK",
        year: 2025,
        category: "Fashion",
        brandShortDescription: "Corporate identity e web design elegante per il brand QDK.",
        bigHorizontalImg: "QDK"
      }
    ]
  },
  {
    year: 24,
    projects: [
      {
        firstLetter: "P",
        secondLetter: "O",
        name: "roject rma",
        img: "Amiuni",
        link: "/Lavori/Project-orma",
        website: "https://www.projectorma.it",
        siteName: "projectorma.it",
        client: "Orma",
        year: 2024,
        category: "Fashion",
        brandShortDescription: "Rebranding e piattaforma digitale per il marchio Orma.",
        bigHorizontalImg: "Amiuni"
      },
      {
        firstLetter: "L",
        name: "inear",
        img: "Linear",
        link: "/Lavori/Linear",
        website: "https://www.Linear.it",
        siteName: "Linear.it",
        client: "Linear",
        year: 2024,
        category: "Food",
        brandShortDescription: "Sistema di design e sito per Linear.",
        bigHorizontalImg: "Amiuni"
      }
    ]
  },
  {
    year: 23,
    projects: [
      {
        firstLetter: "F",
        name: "ilas",
        img: "Frafolio",
        link: "/Lavori/Filas",
        website: "https://www.Filas.it",
        siteName: "Filas.it",
        client: "Filas",
        year: 2023,
        category: "Finance",
        brandShortDescription: "Identità visiva per Filas.",
        bigHorizontalImg: "Amiuni"
      },
      {
        firstLetter: "O",
        name: "liok",
        img: "Amiuni",
        link: "/Lavori/Oliok",
        website: "https://www.oliok.it",
        siteName: "oliok.it",
        client: "Oliok",
        year: 2023,
        category: "Food",
        brandShortDescription: "Design di prodotto per Oliok.",
        bigHorizontalImg: "Amiuni"
      }
    ]
  },
  {
    year: 22,
    projects: [
      {
        firstLetter: "E",
        secondLetter: "G",
        name: "lement aming",
        img: "ElementGaming",
        link: "/Lavori/Element Gaming",
        website: "https://element-gaming.eu",
        siteName: "element-gaming.eu",
        client: "Element Gaming",
        year: 2022,
        category: "Entertainment",
        brandShortDescription: "Esperienza visiva immersiva per il portale ufficiale di Element Gaming.",
        bigHorizontalImg: "ElementGaming"
      },
    ]
  }
];
