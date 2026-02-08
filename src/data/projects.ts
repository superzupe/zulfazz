import { apiProject, educourseProject, wrappedmeProject, todoProject } from "../assets";

interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  liveDemoUrl?: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "My Course RESTful API",
    description:
      "A secure RESTful API for e-learning built with Node.js, Express, and MySQL, featuring JWT authentication and email verification. It utilizes Sequelize, Multer, and Nodemailer to manage dynamic course searches, user profiles, and photo uploads.",
    thumbnail: apiProject,
    githubUrl: "https://github.com/superzupe/misadvbe",
  },
  {
    id: 2,
    title: "VideoBelajar E-learning Platform",
    description:
      "VideoBelajar is a React.js and Tailwind CSS e-learning platform featuring dynamic filtering, Redux Toolkit for state management, and an admin dashboard for CRUD operations, all secured via Axios Interceptors.",
    thumbnail: educourseProject,
    liveDemoUrl: "https://mis2advfe.vercel.app",
    githubUrl: "https://github.com/superzupe/mis2advfe",
  },

  {
    id: 3,
    title: "WrappedMe – Custom Spotify Wrapped",
    description:
      "WrappedMe is a Next.js dashboard that visualizes personal Spotify trends using OAuth 2.0. It features real-time data fetching and custom algorithms to display your top music stats and listening minutes.",
    thumbnail: wrappedmeProject,
    liveDemoUrl: "https://wrappedme.vercel.app/",
    githubUrl: "https://github.com/superzupe/wrappedme",
  },

  {
    id: 4,
    title: "Todo App",
    description:
      "This responsive To-Do List app uses Vanilla JavaScript and LocalStorage to organize tasks into active, completed, and overdue categories. Built with HTML5 and CSS3, it ensures seamless data persistence and productivity across all devices.",
    thumbnail: todoProject,
    liveDemoUrl: "https://taskzhilla.vercel.app/",
    githubUrl: "https://github.com/superzupe/taskzhilla",
  },
];

export default projects;
