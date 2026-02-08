import { githubIcon, instagramIcon, linkedinIcon, gmailIcon } from "../assets";

interface ButtonsData {
  id: number;
  url: string;
  icon: string;
}

const socialButtons: ButtonsData[] = [
  {
    id: 1,
    url: "http://github.com/superzupe",
    icon: githubIcon,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/alifyazulfazahro",
    icon: linkedinIcon,
  },
  {
    id: 3,
    url: "https://instagram.com/zulfaa4c",
    icon: instagramIcon,
  },
  {
    id: 4,
    url: "mailto:zahrozulfa516@gmail.com",
    icon: gmailIcon,
  },
];

export default socialButtons;