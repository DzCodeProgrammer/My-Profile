export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: "Concept" | "Experiment";
  github?: string;
  accent: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string;
  next: string;
};

export const projects: Project[] = [
  {
    slug: "smart-cctv",
    number: "01",
    title: "Smart CCTV",
    category: "Computer Vision · AI Systems · Monitoring",
    description: "A concept for an AI-assisted monitoring system that explores face recognition, event processing, and real-time operational visibility.",
    technologies: ["Python", "FastAPI", "OpenCV", "MySQL", "Docker"],
    status: "Concept",
    accent: "#a855f7",
    problem: "Traditional camera systems capture footage, but turning visual input into useful, searchable events requires a reliable processing pipeline.",
    solution: "A modular concept architecture separates capture, API orchestration, recognition services, event storage, and the monitoring interface.",
    features: ["Video stream processing", "Recognition pipeline", "Event-based records", "Monitoring interface", "Container-ready services"],
    challenges: "Recognition quality, privacy, latency, hardware variability, and false positives require careful evaluation before real-world deployment.",
    next: "Validate the pipeline on representative hardware, define privacy safeguards, and benchmark recognition performance with consented data."
  },
  {
    slug: "full-stack-systems",
    number: "02",
    title: "Full-Stack Systems",
    category: "Web Engineering · Product Systems",
    description: "A collection placeholder for modern web applications built across product interfaces, APIs, authentication, and persistent data.",
    technologies: ["Next.js", "React", "Laravel", "Supabase", "Tailwind CSS"],
    status: "Experiment",
    accent: "#7c3aed",
    problem: "Useful products need the interface, application logic, and data layer to work as one dependable system.",
    solution: "Component-driven frontends connect to explicit service boundaries and maintainable data models.",
    features: ["Responsive UI", "Typed application flows", "API integration", "Authentication-ready patterns", "Relational data"],
    challenges: "The work is evolving; verified project links and screenshots should be added as individual applications are published.",
    next: "Replace this collection placeholder with verified repositories, live demos, and project-specific case studies."
  },
  {
    slug: "developer-experiments",
    number: "03",
    title: "Developer Experiments",
    category: "AI · Automation · Creative Technology",
    description: "A living laboratory for small systems, automation ideas, developer tools, games, and human-computer interaction studies.",
    technologies: ["TypeScript", "Python", "Node.js", "OpenCV"],
    status: "Experiment",
    accent: "#6366f1",
    problem: "Some of the most useful technical insights begin as small, focused experiments rather than finished products.",
    solution: "Short build cycles turn unfamiliar ideas into testable artifacts and reusable knowledge.",
    features: ["Focused prototypes", "Automation scripts", "Interface studies", "Technical notes", "Reusable findings"],
    challenges: "Experiments are intentionally exploratory and should not be presented as production claims.",
    next: "Document verified experiments with source links, technical notes, and honest constraints."
  }
];
