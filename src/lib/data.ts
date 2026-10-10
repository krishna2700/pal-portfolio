// Static fallback data - used when DB is not connected
export const heroData = {
  name: "Pal Gabani",
  title: "AI Full Stack Developer",
  subtitle: "GenAI Engineer & Backend Architect",
  tagline:
    "Shipping multi-tenant SaaS and LLM-powered products — RAG chatbots, OCR pipelines, and AI automation that runs in production.",
  ctaText: "Selected work",
  ctaLink: "#work",
  resumeUrl: "/pal-gabani-resume.pdf",
};

// Companies row — used as a credibility lockup under the hero
export const companiesData = [
  "Seravion Technologies",
  "Daski Career Management",
  "CodeRagon Infotech",
];

// Proficiency tiers — all skills from resume, organized by how often used
export const skillTiers = [
  {
    label: "Daily drivers",
    note: "Tools I reach for every day. Production-grade, deeply opinionated.",
    items: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "React.js",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "REST APIs",
      "OpenAI API",
      "LangChain",
      "RAG",
      "Prompt Engineering",
    ],
  },
  {
    label: "Comfortable with",
    note: "Used extensively on shipping projects.",
    items: [
      "JavaScript",
      "SQL",
      "Microservices",
      "Event-Driven Architecture",
      "Multi-Tenant SaaS",
      "JWT",
      "OAuth",
      "RBAC",
      "LangGraph",
      "pgvector",
      "Semantic Search",
      "AI Chatbots",
      "Redis",
      "Docker",
      "Git / GitHub",
    ],
  },
  {
    label: "Familiar with",
    note: "Hands-on, but not where I spend most of my time.",
    items: [
      "Oracle SQL",
      "Query Optimization",
      "Queue-Based Processing",
      "AWS (EC2, RDS, S3, ALB, CloudFront, Route 53)",
      "CI/CD (GitHub Actions)",
      "Linux",
      "Blue-Green Deployment",
      "Hetzner Cloud",
      "OCR",
      "Rate Limiting",
      "HTML5 / CSS3",
      "Postman",
      "Cursor",
      "GitHub Copilot",
    ],
  },
];

export const aboutData = {
  bio: "I'm an AI Full Stack Developer with 2.5+ years of experience building production multi-tenant SaaS and LLM-powered products — RAG chatbots, OCR pipelines, and AI code analysis tools. I work across Python, Django, FastAPI, React, Next.js, PostgreSQL, and AWS, and I like owning problems end to end: client requirements, architecture, deployment, and whatever breaks after.",
  bio2: "Right now I'm building Accounting and CRM modules for a multi-tenant ERP SaaS at Seravion Technologies — shipping AI features like a RAG-based internal knowledge chatbot backed by pgvector semantic search, and running Blue-Green deployments on AWS EC2 to keep downtime near zero.",
  location: "Bengaluru, India",
  email: "palgabani03@gmail.com",
  phone: "+91 75670 54701",
  linkedin: "https://www.linkedin.com/in/pal-gabani",
  github: "https://github.com/PalGabani",
};

export const experienceData = [
  {
    id: "1",
    company: "Seravion Technologies LLP",
    role: "Full Stack Developer",
    startDate: "Aug 2025",
    endDate: "Present",
    location: "Bengaluru",
    current: true,
    order: 0,
    description: [
      "Lead end-to-end development of Accounting and CRM modules for a multi-tenant ERP SaaS platform, covering requirements, architecture, database design, frontend, backend, QA, deployment, and production support",
      "Ship AI-powered features, including a RAG-based internal knowledge chatbot backed by pgvector semantic search and AI automation workflows using OpenAI, LangChain, and FastAPI",
      "Build full-stack features using Python, Django, FastAPI, React.js, Next.js, TypeScript, PostgreSQL, and REST APIs for CRM, accounting, invoicing, billing, and customer management workflows",
      "Deploy production services on AWS EC2 using Docker with load balancer configuration; maintain a dedicated QA environment on Hetzner Cloud",
      "Reduced deployment downtime to near-zero using Blue-Green releases; troubleshoot production, API, database, and infrastructure issues in real time",
      "Work directly with clients and stakeholders to translate business requirements into scalable technical solutions",
    ],
  },
  {
    id: "2",
    company: "Daski Career Management LLP",
    role: "Python Developer",
    startDate: "Sep 2024",
    endDate: "Aug 2025",
    location: "Bengaluru",
    current: false,
    order: 1,
    description: [
      "Built Carevo, a career recommendation platform, using Python, Django REST Framework, React.js, PostgreSQL, and REST APIs; engineered APIs for student profiles, career data, college information, and partner-agency workflows",
      "Created React.js interfaces for student onboarding, profile management, career exploration, and recommendation workflows, consuming backend REST APIs",
      "Established automated web scraping and data processing pipelines covering 500+ career paths and 2,000+ colleges (courses, fees, cutoffs, quotas) with data validation and transformation",
      "Contributed to a multi-factor career recommendation algorithm that maps student profiles to suitable career paths and generates suitability scores",
      "Designed and optimized PostgreSQL schemas, queries, and data workflows for large-scale career and education datasets",
    ],
  },
  {
    id: "3",
    company: "CodeRagon Infotech",
    role: "Backend Developer",
    startDate: "Feb 2024",
    endDate: "Aug 2024",
    location: "Surat",
    current: false,
    order: 2,
    description: [
      "Delivered and maintained scalable RESTful APIs using Python and Django REST Framework for SaaS and client-facing web applications",
      "Implemented JWT-based authentication, authorization, and Role-Based Access Control (RBAC) for secure multi-user workflows",
      "Designed PostgreSQL schemas and data models, and connected third-party APIs to automate business workflows and extend application functionality",
    ],
  },
];

export const projectsData = [
  {
    id: "1",
    title: "GitHub Auto Reviewer",
    description:
      "AI-powered full-stack SaaS for automated pull request inspection — detects security vulnerabilities, performance issues, logic risks, test gaps, and maintainability concerns.",
    longDesc:
      "Built a full-stack SaaS for automated PR inspection and code quality analysis. Set up GitHub OAuth, GitHub App installation, and webhook-based workflows for real-time PR analysis, structured summaries, and inline code comments. Backend services in Python and Django with PostgreSQL, Redis, and queue-based asynchronous processing for scalable PR processing and secure backend-only LLM integration. Next.js, React.js, and TypeScript dashboards for review results, analytics, and policy-driven configuration. Designed as a multi-tenant SaaS with RBAC, credit-based usage tracking, and billing workflows.",
    tech: ["Next.js", "React.js", "TypeScript", "Django", "PostgreSQL", "Redis", "GitHub API", "Webhooks", "OpenAI"],
    github: "https://github.com/PalGabani",
    live: "",
    image: "",
    featured: true,
    category: "ai",
    order: 0,
  },
  {
    id: "2",
    title: "AI OCR & Organization Management System",
    description:
      "Full-stack platform for Shramjivi Sanghatana supporting 5,000+ daily users, with an AI-powered OCR pipeline for handwritten Marathi receipts.",
    longDesc:
      "Built a full-stack organization management platform using Python, FastAPI, React.js, PostgreSQL, Docker, and AWS, supporting 5,000+ daily users. Implemented React.js frontend components connected to REST APIs for OCR processing, data management, and organization workflows. Created an AI-powered OCR pipeline with open-source models to extract structured data from handwritten Marathi receipts, improving accuracy by 20%+. Added rate limiting and throttling for high-volume AI requests, plus Firebase event-driven notifications for real-time updates. Deployed on Docker and AWS EC2, RDS, ALB, S3, and CloudFront.",
    tech: ["FastAPI", "Python", "React.js", "PostgreSQL", "Docker", "AWS", "OCR", "Firebase"],
    github: "https://github.com/PalGabani",
    live: "",
    image: "",
    featured: true,
    category: "ai",
    order: 1,
  },
  {
    id: "3",
    title: "Carevo — Career Recommendation Platform",
    description:
      "Career recommendation platform mapping student profiles to suitable career paths across 500+ career paths and 2,000+ colleges.",
    longDesc:
      "Built Carevo using Python, Django REST Framework, React.js, PostgreSQL, and REST APIs — engineering APIs for student profiles, career data, college information, and partner-agency workflows. Built React.js interfaces for student onboarding, profile management, career exploration, and recommendation workflows. Established automated web scraping and data processing pipelines covering 500+ career paths and 2,000+ colleges (courses, fees, cutoffs, quotas), and contributed to a multi-factor recommendation algorithm generating suitability scores.",
    tech: ["Django REST Framework", "React.js", "PostgreSQL", "Python", "REST APIs"],
    github: "https://github.com/PalGabani",
    live: "",
    image: "",
    featured: false,
    category: "fullstack",
    order: 2,
  },
];

export const skillsData = [
  // Frontend
  { id: "1", name: "React.js", level: 88, category: "frontend", icon: "⚛", order: 0 },
  { id: "2", name: "Next.js", level: 85, category: "frontend", icon: "▲", order: 1 },
  { id: "3", name: "TypeScript", level: 80, category: "frontend", icon: "TS", order: 2 },
  { id: "4", name: "HTML5 / CSS3", level: 85, category: "frontend", icon: "🎨", order: 3 },
  // Backend
  { id: "5", name: "Python", level: 92, category: "backend", icon: "🐍", order: 0 },
  { id: "6", name: "Django", level: 90, category: "backend", icon: "🎯", order: 1 },
  { id: "7", name: "Django REST Framework", level: 90, category: "backend", icon: "⬢", order: 2 },
  { id: "8", name: "FastAPI", level: 88, category: "backend", icon: "🚀", order: 3 },
  { id: "9", name: "Microservices", level: 80, category: "backend", icon: "◈", order: 4 },
  { id: "10", name: "RBAC / JWT / OAuth", level: 85, category: "backend", icon: "🔐", order: 5 },
  // AI/GenAI
  { id: "11", name: "OpenAI API", level: 88, category: "ai", icon: "🤖", order: 0 },
  { id: "12", name: "LangChain", level: 85, category: "ai", icon: "🔗", order: 1 },
  { id: "13", name: "LangGraph", level: 78, category: "ai", icon: "⚡", order: 2 },
  { id: "14", name: "RAG / pgvector", level: 85, category: "ai", icon: "🧠", order: 3 },
  { id: "15", name: "Prompt Engineering", level: 87, category: "ai", icon: "✍", order: 4 },
  { id: "16", name: "OCR Pipelines", level: 82, category: "ai", icon: "🔎", order: 5 },
  // Database & DevOps
  { id: "17", name: "PostgreSQL", level: 88, category: "devops", icon: "🐘", order: 0 },
  { id: "18", name: "Redis", level: 78, category: "devops", icon: "⚡", order: 1 },
  { id: "19", name: "Docker", level: 80, category: "devops", icon: "🐳", order: 2 },
  { id: "20", name: "AWS (EC2, RDS, S3)", level: 78, category: "devops", icon: "☁", order: 3 },
  { id: "21", name: "CI/CD (GitHub Actions)", level: 76, category: "devops", icon: "♾", order: 4 },
  { id: "22", name: "Git / GitHub", level: 90, category: "devops", icon: "⎇", order: 5 },
];
