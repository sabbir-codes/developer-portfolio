export const site = {
  logo: "Sabbir",
  name: "Sabbir Ahammed",
  role: "Full-Stack Developer",
  intro:
    "Building modern web experiences with React and Next.js, exploring backend technologies, and turning ideas into real-world projects.",
  email: "sabbir.ah799@gmail.com",
  location: "Dhaka, Bangladesh",
  linkedin: "https://www.linkedin.com/in/sabbir-pavel/",
  github: "https://github.com/sabbir-codes",
  resume:
    "https://drive.google.com/file/d/1Yvhn_-SLaNUDOFg6Cmy4O0O7Vn4A1VBp/view",
};

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
];

export type Experience = {
  title: string;
  company: string;
  logo?: string;
  website?: string;
  period: string;
  meta: string;
  accent: "emerald" | "violet";
  tags: string[];
  points: string[];
};

export const experience: Experience[] = [
  {
    title: "Web Developer",
    company: "Bhumi Properties Ltd.",
website: "https://bhumigroupbd.com/",
    logo: "/Bhumi Properties.png",
    period: "Jan 2024 – Present",
    meta: "Full-time · Dhaka, Bangladesh",
    accent: "emerald",
    tags: [
      "WordPress",
      "HTML",
      "CSS",
      "JavaScript",
      "SEO",
      "Landing Pages",
      "Performance",
    ],
    points: [
      "Manage and maintain corporate websites and associated web projects.",
      "Troubleshoot website issues and improve performance, responsiveness, and usability.",
      "Develop landing pages, update website content, and support SEO and digital marketing.",
      "Provide technical support for website operations and related IT systems.",
    ],
  },
];

// icon: Devicon path ("folder/file", loaded from the Devicon CDN).
// mono: logo is black/white, so it is inverted in dark mode.
// fallback: name of a lucide icon used when there is no logo (or it fails to load).
export type Skill = {
  name: string;
  icon?: string;
  mono?: boolean;
  fallback?: string;
};

export const skills: { category: string; items: Skill[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: "html5/html5-original" },
      { name: "CSS3", icon: "css3/css3-original" },
      { name: "JavaScript (ES6+)", icon: "javascript/javascript-original" },
      { name: "TypeScript", icon: "typescript/typescript-original" },
      { name: "React.js", icon: "react/react-original" },
      { name: "Next.js", icon: "nextjs/nextjs-original", mono: true },
      { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original" },
      { name: "Responsive Web Design", fallback: "Smartphone" },
      { name: "React Hooks", icon: "react/react-original" },
      { name: "JSX", fallback: "Braces" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs/nodejs-original" },
      { name: "Express.js", icon: "express/express-original", mono: true },
      { name: "REST API Development", fallback: "Webhook" },
      { name: "CRUD Operations", fallback: "Database" },
      { name: "MongoDB Atlas", icon: "mongodb/mongodb-original" },
      { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
      { name: "Neon", fallback: "Zap" },
      { name: "Better Auth", fallback: "ShieldCheck" },
      { name: "CORS", fallback: "Globe" },
      { name: "JSON Data Handling", icon: "json/json-original" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: "git/git-original" },
      { name: "GitHub", icon: "github/github-original", mono: true },
      { name: "Visual Studio Code", icon: "vscode/vscode-original" },
      { name: "npm", icon: "npm/npm-original-wordmark" },
      { name: "Vite", icon: "vite/vite-original" },
      { name: "Nodemon", icon: "nodemon/nodemon-original" },
      { name: "Vercel", icon: "vercel/vercel-original", mono: true },
      { name: "Netlify", icon: "netlify/netlify-original" },
      { name: "GitHub Pages", icon: "github/github-original", mono: true },
      { name: "WordPress", icon: "wordpress/wordpress-plain" },
      { name: "AI Development Tools", fallback: "Sparkles" },
    ],
  },
];

export type Project = {
  name: string;
  image: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "Bazar Dor",
    image: "/projects/bazar-dor.png",
    description:
      "A Bengali-first web application that helps users stay informed about daily market prices in Bangladesh.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "Neon PostgreSQL",
      "REST API",
    ],
    github: "https://github.com/sabbir-codes/b14-a7-bazardor",
    live: "https://b14-a7-bazardor.vercel.app/",
  },
  {
    name: "FitLog — Gym Companion",
    image: "/projects/fitlog.png",
    description:
      "A fitness web application for exploring workout plans, saving favorite workouts, and viewing workout duration and calorie information.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "Neon PostgreSQL",
    ],
    github: "https://github.com/sabbir-codes/B14-A6-Fit-Log/",
    live: "https://sabbir-fitlog-nextjs.netlify.app/",
  },
  {
    name: "DevStack",
    image: "/projects/devstack.png",
    description:
      "A developer-focused web application built to present useful developer tools through a clean, component-based interface.",
    tech: ["React", "Vite", "JavaScript", "GitHub Actions"],
    github: "https://github.com/sabbir-codes/B14-A05-DevStack-final",
    live: "https://sabbir-dev-stack.netlify.app/",
  },
];

export const education = [
  {
    title: "B.Sc. in Physics",
    place: "National University",
    period: "Graduated 2023",
    note: "Built a strong analytical and problem-solving foundation that now carries into software development.",
  },
  {
    title: "AI-Powered Full Stack Web Engineering (MERN)",
    place: "Programming Hero — Batch 14",
    period: "Currently pursuing",
    note: "Professional training focused on the MERN stack, Next.js, authentication, and real-world project building.",
  },
];
