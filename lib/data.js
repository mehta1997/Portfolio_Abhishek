// Portfolio Data

export const personalInfo = {
  name: "Abhishek Mehta",
  title: "Python Backend Engineer",
  subtitle: "Django • FastAPI • APIs • Data Systems",
  location: "Glasgow / London",
  email: "Abhishekmehtauk@gmail.com",
  phone: "07393 070032",
  linkedin: "https://linkedin.com/in/abhishek-mehta-029651180",
  github: "https://github.com/mehta1997",
  bio: "Backend-focused Python engineer with 3+ years of experience building production-grade systems and APIs. I specialise in Django and FastAPI, working with relational databases, data processing, and scalable backend architectures. I've worked in distributed teams and delivered reliable systems used in real-world applications. I enjoy solving complex problems, improving system performance, and building clean, maintainable code.",
  tagline: "I build scalable backend systems, APIs, and data-driven applications with a focus on reliability, performance, and clean architecture.",
  highlights: [
    "3+ years in backend development",
    "Strong in Django, FastAPI, REST APIs",
    "Experience with Docker, CI/CD, Linux",
    "Data handling with Pandas & NumPy"
  ]
};

export const experience = [
  {
    id: 1,
    company: "Cogno AI",
    role: "Python Backend Engineer",
    duration: "May 2022 – Dec 2023",
    location: "Remote",
    responsibilities: [
      "Built and maintained Django and FastAPI backend services used in production",
      "Designed REST APIs for internal tools and customer-facing systems",
      "Implemented data processing workflows using Pandas and Python",
      "Integrated third-party and AI-based APIs",
      "Containerised applications using Docker and supported CI/CD pipelines",
      "Debugged and resolved complex system and performance issues",
      "Worked independently to deliver production-ready features"
    ]
  },
  {
    id: 2,
    company: "Robotronix",
    role: "Software Engineer",
    duration: "Sep 2020 – Apr 2022",
    location: "Remote",
    responsibilities: [
      "Developed Python and Django applications with focus on maintainability",
      "Built REST APIs and backend services for internal tools",
      "Worked with relational databases using ORM",
      "Contributed to debugging, testing, and improving legacy systems"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "MSc Big Data Technologies",
    institution: "Glasgow Caledonian University",
    year: "2025"
  },
  {
    id: 2,
    degree: "Master of Computer Applications",
    institution: "Medi-Caps University",
    year: "2020"
  },
  {
    id: 3,
    degree: "Bachelor of Computer Applications",
    institution: "SS Jain Subodh College",
    year: "2018"
  }
];

export const skills = {
  languages: ["Python", "JavaScript (basic)"],
  frameworks: ["Django", "Django REST Framework", "FastAPI"],
  backend: ["REST APIs", "Pydantic", "Authentication", "Async Services"],
  databases: ["PostgreSQL", "MySQL", "SQLite"],
  dataTools: ["Pandas", "NumPy"],
  devops: ["Docker", "CI/CD", "Git", "Linux", "AWS (EC2, S3)"],
  practices: ["Unit Testing", "Debugging", "Logging", "Code Reviews"]
};

export const projects = [
  {
    id: 1,
    title: "Scalable REST API System",
    description: "Built a production-style backend system using FastAPI with authentication, rate limiting, and modular architecture. Implemented JWT authentication, structured API design, and data validation using Pydantic with Dockerised deployment.",
    technologies: ["FastAPI", "PostgreSQL", "Docker", "JWT", "Pydantic"],
    category: "Backend",
    featured: true,
    features: [
      "JWT authentication",
      "Structured API design",
      "Data validation using Pydantic",
      "Dockerised deployment"
    ]
  },
  {
    id: 2,
    title: "Data Processing & Analytics API",
    description: "Developed a backend service for processing and analysing structured data using Python. Features include data ingestion and transformation, API endpoints for analytics, and efficient data processing workflows.",
    technologies: ["Python", "Pandas", "FastAPI", "Data Analytics"],
    category: "Data Systems",
    featured: true,
    features: [
      "Data ingestion and transformation",
      "API endpoints for analytics",
      "Efficient data processing workflows"
    ]
  },
  {
    id: 3,
    title: "Django Backend Platform",
    description: "Built backend services using Django for handling business logic and database operations. Implemented REST API development, ORM-based data management, and secure backend architecture.",
    technologies: ["Django", "PostgreSQL", "REST APIs", "ORM"],
    category: "Backend",
    featured: true,
    features: [
      "REST API development",
      "ORM-based data management",
      "Secure backend architecture"
    ]
  },
  {
    id: 4,
    title: "Automation & Internal Tools",
    description: "Created automation scripts and backend tools to improve system efficiency and reduce manual processes. Includes task automation, system monitoring scripts, and logging and debugging utilities.",
    technologies: ["Python", "Linux", "Automation", "Shell Scripting"],
    category: "Tools",
    featured: false,
    features: [
      "Task automation",
      "System monitoring scripts",
      "Logging and debugging utilities"
    ]
  },
  {
    id: 5,
    title: "AI-Powered Document Q&A API (In Progress)",
    description: "Building a scalable backend system using FastAPI that allows users to upload documents and query them using AI-powered semantic search. The system leverages embeddings and vector databases to provide accurate, context-aware answers.",
    technologies: ["Python", "FastAPI", "OpenAI/HuggingFace", "FAISS", "PostgreSQL", "Docker"],
    category: "AI/ML",
    featured: true,
    Status: "In Progress (Active Development)",
    features: [
      "AI-powered semantic search",
      "Document upload and management",
      "Context-aware answering"
    ]
  }
];

// EmailJS Configuration
export const emailJSConfig = {
  serviceId: "service_j1wfc1y",
  templateId: "template_hywbrnk",
  publicKey: "Url2eOxKosT-F48Oz"
};
