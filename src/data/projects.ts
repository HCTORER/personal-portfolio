import todoTaskManager from "../assets/projects/todo-task-manager.png";

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "React ve TypeScript kullanarak geliştirdiğim kişisel portföy web sitesi.Projelerimi, yeteneklerimi ve iletişim bilgilerimi sergilemek için tasarlanmıştır. ",
    technologies: ["React", "TypeScript", "Bootstrap"],
    githubUrl: "https://github.com/HCTORER/personal-portfolio",
    liveUrl: "https://personal-portfolio-zeta-jade-31.vercel.app",
    status: "Tamamlandı",
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
    status: "Tamamlandı",
    image: todoTaskManager,
  },
  {
    id: 3,
    title: "Blog API",
    description:
      "ASP.NET Core Web API ile geliştirilen temel blog yönetim backend projesi.",
    technologies: ["ASP.NET Core", "Web API", "SQL"],
    githubUrl: "https://github.com/HCTORER",
    liveUrl: "",
    status: "Planlandı",
    image: "",
  },
];
