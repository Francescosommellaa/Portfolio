export interface Project {
  name: string;
  lastName?: string;
  img: string;
  slug: string;
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
        name: "Fra Folio",
        img: "FraFolio",
        slug: "/Lavori/Fra-Folio",
        website: "https://www.francescosommella.com",
        siteName: "francescosommella.com",
        client: "Francesco Sommella",
        year: 2024,
        category: "Tech",
        brandShortDescription: "Il portfolio dinamico e minimale di Francesco Sommella, tra design e sviluppo.",
        bigHorizontalImg: "FraFolio"
      },
      {
        name: "Amiuni",
        img: "Amiuni",
        slug: "/Lavori/Amiuni",
        website: "https://www.amiuni.it",
        siteName: "Amiuni.it",
        client: "Amiuni",
        year: 2025,
        category: "Fashion",
        brandShortDescription: "Identità moderna e sito e-commerce su misura per il brand Amiuni.",
        bigHorizontalImg: "Amiuni"
      },
      {
        name: "QDK",
        img: "QDK",
        slug: "/Lavori/QDK",
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
        name: "Project Orma",
        img: "Amiuni",
        slug: "/Lavori/Project-Orma",
        website: "https://www.projectorma.it",
        siteName: "projectorma.it",
        client: "Orma",
        year: 2024,
        category: "Fashion",
        brandShortDescription: "Rebranding e piattaforma digitale per il marchio Orma.",
        bigHorizontalImg: "Amiuni"
      },
      {
        name: "Linear",
        img: "Linear",
        slug: "/Lavori/Linear",
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
        name: "Filas",
        img: "Frafolio",
        slug: "/Lavori/Filas",
        website: "https://www.Filas.it",
        siteName: "Filas.it",
        client: "Filas",
        year: 2023,
        category: "Finance",
        brandShortDescription: "Identità visiva per Filas.",
        bigHorizontalImg: "Amiuni"
      },
      {
        name: "Oliok",
        img: "Amiuni",
        slug: "/Lavori/Oliok",
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
        name: "Element Gaming",
        img: "ElementGaming",
        slug: "/Lavori/Element-Gaming",
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
