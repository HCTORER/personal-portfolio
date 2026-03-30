import todoTaskManager from "../assets/projects/todo-task-manager.png";
import blogImage from "../assets/projects/blog-app.png";
import workflowProImage from "../assets/projects/workflowpro.png";

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
  {
    id: 4,
    title: "WorkFlowPro SaaS",
    description:
      "Production-ready full-stack SaaS project management platform with multi-tenant architecture, JWT authentication, role-based access control, and Kanban workflow system. Deployed using Railway, Vercel, and PostgreSQL.",

    technologies: [
      "ASP.NET Core",
      "React",
      "TypeScript",
      "PostgreSQL",
      "JWT",
      "Entity Framework",
      "Railway",
      "Vercel",
    ],

    githubUrl: "https://github.com/HCTORER/WorkFlowPro-FullStack",
    liveUrl: "https://work-flow-pro-full-stack.vercel.app",

    status: "Completed",
    image: workflowProImage,
  },
];
