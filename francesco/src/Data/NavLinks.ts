interface NavLink {
  number: string;
  script: string;
  name: string;
  link: string;
}

export const NavLinks: NavLink[] = [
  {
    number: "o1",
    script: "L",
    name: "avori",
    link: "/Lavori"
  },
  {
    number: "o2",
    script: "A",
    name: "bout",
    link: "/About"
  },
  {
    number: "o3",
    script: "P",
    name: "layground",
    link: "/Playground"
  },
  {
    number: "o4",
    script: "C",
    name: "ontatti",
    link: "/Contatti"
  }
];

export default NavLinks;