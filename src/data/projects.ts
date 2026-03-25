import todoTaskManager from "../assets/projects/todo-task-manager.png";
import blogImage from "../assets/projects/blog-app.png";

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "Personal portfolio website that I developed using React and TypeScript. It is designed to showcase my projects, talents, and contact information.",
    technologies: ["React", "TypeScript", "Bootstrap"],
    githubUrl: "https://github.com/HCTORER/personal-portfolio",
    liveUrl: "https://personal-portfolio-zeta-jade-31.vercel.app",
    status: "Completed",
    image: "",
  },
  {
    id: 2,
    title: "Todo Task Manager Dashboard",
    description:
      "Modern task management dashboard built with React and TypeScript. Includes smart sorting, priority system, deadline tracking, dark mode, search, filtering and responsive design.",
    technologies: ["React", "TypeScript", "Bootstrap", "CSS", "LocalStorage"],
    githubUrl: "https://github.com/HCTORER/todo-task-manager",
    liveUrl: "https://todo-task-manager-five.vercel.app",
    status: "Completed",
    image: todoTaskManager,
  },
  {
    id: 3,
    title: "BlogApp Full Stack",
    description:
      "A production-ready full stack blog platform built with React, TypeScript, ASP.NET Core Web API, and PostgreSQL. It includes JWT authentication, protected admin dashboard, CRUD operations, categories, pagination, and full deployment with Vercel and Render.",

    technologies: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "PostgreSQL",
      "JWT",
      "Entity Framework",
      "Axios",
      "Vercel",
      "Render",
    ],

    githubUrl: "https://github.com/HCTORER/blogapp-fullstack",
    liveUrl: "https://blogapp-fullstack.vercel.app/",

    status: "Completed",
    image: blogImage,
  },
];
