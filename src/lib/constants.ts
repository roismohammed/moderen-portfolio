export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "company-profile-cms",
    title: "Company Profile CMS",
    type: "Web Application",
    description: "A custom content management system for company profile websites with drag-and-drop page builder and SEO tools.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "rsu.png",
    githubUrl: "https://github.com/yourusername/company-profile-cms",
    featured: true
  },
  {
    id: "cashier-app",
    title: "Cashier Application",
    type: "Point of Sale System",
    description: "A modern POS system with inventory management, sales reporting, and customer management features.",
    technologies: ["React", "TypeScript", "Express.js", "PostgreSQL", "Docker"],
    image: "cashier-app.jpg",
    featured: true
  },
  {
    id: "portfolio-template",
    title: "Portfolio Template",
    type: "Website Template",
    description: "A customizable portfolio template for developers and designers with dark mode support.",
    technologies: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    githubUrl: "https://github.com/yourusername/portfolio-template",
    featured: false
  }
];

export interface Experience {
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  location: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    role: "Freelance Software Engineer",
    company: "Self-employed",
    startDate: "Jan 2021",
    endDate: "Present",
    location: "Remote",
    responsibilities: [
      "Developed custom web applications for clients using modern technologies",
      "Collaborated with designers to implement responsive and accessible UIs",
      "Implemented backend APIs and database solutions",
      "Optimized applications for performance and SEO"
    ]
  },
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    startDate: "Mar 2019",
    endDate: "Dec 2020",
    location: "Remote",
    responsibilities: [
      "Built and maintained company's main product using React and TypeScript",
      "Improved application performance by 40% through code optimization",
      "Implemented automated testing pipeline",
      "Mentored junior developers"
    ]
  }
];