export interface Project {
  firstLetter: string;
  secondLetter?: string;
  name: string;
  img: string;
  link: string;
  client: string;
  year: number;
  role: string;
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
        client: "Amiuni",
        year: 2025,
        role: "Web Design",
        category: "Branding",
        brandShortDescription: "Amiuni è un progetto di branding moderno.",
        bigHorizontalImg: "/images/amiuni-big.jpg"
      },
      {
        firstLetter: "Q",
        name: "DK",
        img: "QDK",
        link: "/Lavori/QDK",
        client: "QDK",
        year: 2025,
        role: "UI/UX Design",
        category: "Corporate",
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
        client: "Francesco Sommella",
        year: 2024,
        role: "Full-stack Dev",
        category: "Portfolio",
        brandShortDescription: "Portfolio personale di Fra.",
        bigHorizontalImg: "/images/portfolio-fra-big.jpg"
      },
      {
        firstLetter: "P",
        secondLetter: "O",
        name: "roject rma",
        img: "Project Orma",
        link: "/Lavori/Project-orma",
        client: "Orma",
        year: 2024,
        role: "Art Direction",
        category: "Fashion",
        brandShortDescription: "Progetto Orma per il mondo fashion.",
        bigHorizontalImg: "/images/orma-big.jpg"
      },
      {
        firstLetter: "L",
        name: "inear",
        img: "Linear",
        link: "/Lavori/Linear",
        client: "Linear",
        year: 2024,
        role: "Design System",
        category: "Tech",
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
        client: "Filas",
        year: 2023,
        role: "Branding",
        category: "Startup",
        brandShortDescription: "Identità visiva per Filas.",
        bigHorizontalImg: "/images/filas-big.jpg"
      },
      {
        firstLetter: "O",
        name: "liok",
        img: "Oliok",
        link: "/Lavori/Oliok",
        client: "Oliok",
        year: 2023,
        role: "Product Design",
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
        client: "Element Gaming",
        year: 2022,
        role: "UI Design",
        category: "Gaming",
        brandShortDescription: "Design UI per Element Gaming.",
        bigHorizontalImg: "/images/element-gaming-big.jpg"
      },
      {
        firstLetter: "M",
        name: "ensae",
        img: "Mensae",
        link: "/Lavori/Mensae",
        client: "Mensae",
        year: 2022,
        role: "UX Design",
        category: "Education",
        brandShortDescription: "Esperienza utente per Mensae.",
        bigHorizontalImg: "/images/mensae-big.jpg"
      },
      {
        firstLetter: "P",
        name: "oplo",
        img: "Poplo",
        link: "/Lavori/Poplo",
        client: "Poplo",
        year: 2022,
        role: "Visual Identity",
        category: "Community",
        brandShortDescription: "Identità visiva per Poplo.",
        bigHorizontalImg: "/images/poplo-big.jpg"
      },
      {
        firstLetter: "O",
        name: "ikl",
        img: "Oikl",
        link: "/Lavori/Oikl",
        client: "Oikl",
        year: 2022,
        role: "Web Development",
        category: "Finance",
        brandShortDescription: "Sviluppo web per Oikl.",
        bigHorizontalImg: "/images/oikl-big.jpg"
      }
    ]
  }
];
