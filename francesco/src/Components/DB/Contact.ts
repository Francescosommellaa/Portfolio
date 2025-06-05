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
      { label: "Linkedin", url: "https://www.linkedin.com/in/francescosommellaa/" },
      { label: "Instagram", url: "https://www.instagram.com/francescosommellaa/" },
    ],
  },
  {
    title: "PORTFOLIO",
    items: [
      { label: "Pinterest", url: "https://it.pinterest.com/francescosommellaa/" },
      { label: "Dribbble", url: "https://dribbble.com/francescosommellaa" },
      { label: "Behance", url: "https://www.behance.net/francescosommellaa" },
    ],
  },
  {
    title: "EMAIL",
    items: [
      { label: "hello@francescosommella.com", url: "mailto:info@francescosommella.com" },
    ],
  },
];