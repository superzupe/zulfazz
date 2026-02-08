interface MenuData {
  id: number;
  url: string;
  title: string;
}

const menus: MenuData[] = [
  {
    id: 1,
    url: "/",
    title: "Home",
  },
  {
    id: 2,
    url: "/project",
    title: "Project",
  },
  {
    id: 3,
    url: "/about",
    title: "About",
  },
  {
    id: 4,
    url: "/resume",
    title: "Resume",
  },
];

export default menus;
