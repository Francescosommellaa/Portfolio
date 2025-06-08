// Tipi dedicati
interface IntroType {
  paragraph: string;
}

interface DesignStepType {
  title: string;
  description: string;
}

interface AboutContentType {
  intro: IntroType;
  skillsSubtitle: string;
  designPhilosophy: DesignStepType[];
  clientsSubtitle: string;
  clients: string[];
}

// Contenuto tipizzato
const AboutContent: AboutContentType = {
  // Intro top & bottom paragraphs
  intro: {
    paragraph:
      "Nel settore da 3 anni, attualmente risiedo a Napoli e lavoro come Designer e Sviluppatore indipendente dal Luglio 2024.",
  },

  // Section 1 subtitle
  skillsSubtitle:
    "Website Design, Application Design, Interactive Design, Prototyping, E-commerce, Editorial, Web Development, App Development.",

  // Deep process sections
  designPhilosophy: [
    {
      title: "Direzione",
      description:
        "Per me tutto parte da un’analisi profonda: capire il brief, il cliente, il target e i competitor è fondamentale. Studio moodboard, tono, tipografia, colore, composizione, motion e asset del brand per definire una direzione chiara. È qui che si gettano le basi per un design davvero efficace.",
    },
    {
      title: "Design",
      description:
        "Una volta definito l’approccio, inizia la fase di esplorazione visiva. Creo varianti, provo combinazioni, e rifinisco ogni dettaglio. Il mio obiettivo? Un design elegante, funzionale e perfettamente in linea con l’identità del progetto. Tutto avviene in costante dialogo con il cliente.",
    },
    {
      title: "Interazione",
      description:
        "Amo giocare con il motion. Micro-interazioni e animazioni sottili fanno la differenza, trasformando un’interfaccia in un’esperienza memorabile. Spesso è qui che nasce il famoso “wow”. Per questo investo sempre tempo e cura in ogni dettaglio interattivo.",
    },
    {
      title: "Sviluppo",
      description:
        "Non mi fermo al prototipo: sviluppo personalmente ogni progetto per garantire che ciò che si vede su Figma prenda vita nel browser con fedeltà assoluta. Pixel-perfect, responsive, fluido. Per me design e codice sono un’unica cosa.",
    },
  ],

  // Section 2 subtitle
  clientsSubtitle:
    "Nel corso degli anni, ho avuto l'onore di lavorare con clienti piccoli e grandi.",

  // Client projects
  clients: [
    "VinPearl",
    "Unilever",
    "DAFI",
    "AX Group",
    "Autonomous",
    "Soravia",
    "Hair & Skin",
    "Ascon System",
    "Vestlane",
    "Defiant",
    "Legal Tech Colab",
    "Habour House",
  ],
};

export default AboutContent;
