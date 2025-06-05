export interface ContactItem {
  label: string;
  url: string;
}

export interface ContactSection {
  title: string;
  items: ContactItem[];
}

export const contattiData: ContactSection[] = [
  {
    title: "SOCIAL",
    items: [
      { label: "Linkedin", url: "" },
      { label: "Instagram", url: "" },
    ],
  },
  {
    title: "PORTFOLIO",
    items: [
      { label: "Pinterest", url: "" },
      { label: "Dribbble", url: "" },
      { label: "Behance", url: "" },
    ],
  },
  {
    title: "EMAIL",
    items: [
      { label: "info@francescosommella.com", url: "mailto:info@francescosommella.com" },
    ],
  },
];