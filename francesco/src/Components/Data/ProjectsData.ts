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
        firstLetter: "A",
        name: "miuni",
        img: "Amiuni",
        link: "/Lavori/Amiuni",
        website: "https://www.amiuni.it",
        siteName: "Amiuni.it",
        client: "Amiuni",
        year: 2025,
        category: "Fashion",
        brandShortDescription: "Amiuni è un progetto di branding moderno.",
        bigHorizontalImg: "/images/amiuni-big.jpg"
      },
      {
        firstLetter: "Q",
        name: "DK",
        img: "QDK",
        link: "/Lavori/QDK",
        website: "https://www.qudikappa.it",
        siteName: "qudikappa.it",
        client: "QDK",
        year: 2025,
        category: "Fashion",
        brandShortDescription: "QDK rappresenta un approccio corporate elegante.",
        bigHorizontalImg: "/images/qdk-big.jpg"
      }
    ]
  },
  {
    year: 24,
    projects: [
      {
        firstLetter: "F",
        name: "ra olio",
        img: "Frafolio",
        link: "/Lavori/Fra-folio",
        website: "https://www.francescosommella.com",
        siteName: "francescosommella.com",
        client: "Francesco Sommella",
        year: 2024,
        category: "Tech",
        brandShortDescription: "Portfolio personale di Fra.",
        bigHorizontalImg: "/images/portfolio-fra-big.jpg"
      },
      {
        firstLetter: "P",
        secondLetter: "O",
        name: "roject rma",
        img: "Project Orma",
        link: "/Lavori/Project-orma",
        website: "https://www.projectorma.it",
        siteName: "projectorma.it",
        client: "Orma",
        year: 2024,
        category: "Fashion",
        brandShortDescription: "Progetto Orma per il mondo fashion.",
        bigHorizontalImg: "/images/orma-big.jpg"
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
        brandShortDescription: "Sistema di design per Linear.",
        bigHorizontalImg: "/images/linear-big.jpg"
      }
    ]
  },
  {
    year: 23,
    projects: [
      {
        firstLetter: "F",
        name: "ilas",
        img: "Filas",
        link: "/Lavori/Filas",
        website: "https://www.Filas.it",
        siteName: "Filas.it",
        client: "Filas",
        year: 2023,
        category: "Finance",
        brandShortDescription: "Identità visiva per Filas.",
        bigHorizontalImg: "/images/filas-big.jpg"
      },
      {
        firstLetter: "O",
        name: "liok",
        img: "Oliok",
        link: "/Lavori/Oliok",
        website: "https://www.oliok.it",
        siteName: "oliok.it",
        client: "Oliok",
        year: 2023,
        category: "Food",
        brandShortDescription: "Design di prodotto per Oliok.",
        bigHorizontalImg: "/images/oliok-big.jpg"
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
        img: "Element Gaming",
        link: "/Lavori/Element Gaming",
        website: "https://element-gaming.eu",
        siteName: "element-gaming.eu",
        client: "Element Gaming",
        year: 2022,
        category: "Entertainment",
        brandShortDescription: "Design UI per Element Gaming.",
        bigHorizontalImg: "/images/element-gaming-big.jpg"
      },
      {
        firstLetter: "M",
        name: "ensae",
        img: "Mensae",
        link: "/Lavori/Mensae",
        website: "https://mensae.eu",
        siteName: "mensae.eu",
        client: "Mensae",
        year: 2022,
        category: "Education",
        brandShortDescription: "Esperienza utente per Mensae.",
        bigHorizontalImg: "/images/mensae-big.jpg"
      },
      {
        firstLetter: "P",
        name: "oplo",
        img: "Poplo",
        link: "/Lavori/Poplo",
        website: "https://poplo.eu",
        siteName: "poplo.eu",
        client: "Poplo",
        year: 2022,
        category: "Entertainment",
        brandShortDescription: "Identità visiva per Poplo.",
        bigHorizontalImg: "/images/poplo-big.jpg"
      },
      {
        firstLetter: "O",
        name: "ikl",
        img: "Oikl",
        link: "/Lavori/Oikl",
        website: "https://oikl.eu",
        siteName: "oikl.eu",
        client: "Oikl",
        year: 2022,
        category: "Finance",
        brandShortDescription: "Sviluppo web per Oikl.",
        bigHorizontalImg: "/images/oikl-big.jpg"
      }
    ]
  }
];
