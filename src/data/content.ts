export const profile = {
  name: "Maher Tizeeni",
  title: "Backend Developer",
  location: "Latakia, Syria",
  email: "maher.tizeeni@gmail.com",
  phone: "+963 990 471 257",
  linkedin: "https://www.linkedin.com/in/mahertizeeni/",
  github: "https://github.com/eng-mahertizeeni",
  resumeUrl: "/files/Maher-Tizeeni-CV.pdf",
  tagline:
    "I build secure, scalable backend systems with Laravel, and ship full-stack products end-to-end — API to React frontend — when a project calls for it.",
  bio: [
    "I'm a Software Engineering graduate who builds backend systems the way the discipline actually teaches it — clean architecture, SOLID principles, and deliberate design patterns like Repository and Service Layer, not just CRUD endpoints wired to a database.",
    "Across my projects I keep gravitating toward the same hard problems by choice: multi-tenant systems, hand-rolled role-based access control instead of reaching for a package, and integrating messy real-world systems — ERPs, payment gateways, real-time chat over WebSockets, AI chat assistants.",
    "I also work across the stack when a project calls for it (React and TypeScript on a couple of these), and I'm actively growing my DevOps side — Docker and GitLab CI/CD are already part of how I ship, and I'm building on that further.",
  ],
  education: {
    degree: "B.Sc. in Informatics Engineering — Software Engineering",
    school: "Latakia University",
    period: "Sep 2020 — Sep 2025",
    location: "Latakia, Syria",
  },
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Intermediate" },
  ],
};

export const skillGroups = [
  {
    title: "Backend & Languages",
    skills: [
      "PHP 8.2",
      "Laravel 12 / 13",
      "RESTful API Design",
      "MySQL",
      "Eloquent ORM",
      "Redis",
      "Caching",
      "Queues & Background Jobs",
    ],
  },
  {
    title: "Software Architecture & Design Patterns",
    skills: [
      "OOP & SOLID Principles",
      "Service-Oriented Architecture",
      "Repository Pattern",
      "Service Layer Pattern",
      "Multi-tenancy Design",
    ],
  },
  {
    title: "Security & Auth",
    skills: [
      "Authentication & Authorization",
      "Laravel Sanctum",
      "OAuth2",
      "Policies & Gates",
      "Custom RBAC / Permission Systems",
      "API Security",
    ],
  },
  {
    title: "Real-time & Messaging",
    skills: [
      "Laravel Reverb (WebSockets)",
      "Real-time Broadcasting",
      "WhatsApp Business API",
      "Telegram Bot API",
    ],
  },
  {
    title: "Integrations & Reporting",
    skills: [
      "Odoo ERP (XML-RPC/REST)",
      "Firebase (Auth & Push Notifications)",
      "Edfapay Payment Gateway",
      "Google & Apple Wallet Pass",
      "AI Chat Integration (Groq)",
      "Laravel Excel",
      "DomPDF",
    ],
  },
  {
    title: "Testing & Quality",
    skills: ["PHPUnit (Unit & Feature Tests)", "Laravel Pint"],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitLab CI/CD",
      "Linux",
      "Composer",
      "Postman",
      "Swagger / OpenAPI",
    ],
  },
  {
    title: "Frontend (Working Knowledge)",
    skills: ["React", "TypeScript", "React Query", "Blade", "Tailwind CSS"],
  },
];

export type Project = {
  slug: string;
  name: string;
  type: string;
  role?: string;
  period?: string;
  summary: string;
  highlights: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  privateRepo?: boolean;
  images?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "car-wash-franchise",
    name: "Car Wash Franchise Management System",
    type: "Production Project",
    role: "Lead Backend Developer",
    period: "2026 — Present",
    summary:
      "An enterprise, multi-tenant SaaS platform for car wash franchises, covering everything from a single branch's daily workshop operations up to company-wide finance and executive analytics. This is my largest and most complete production system, and the one I'm proudest of — I've been the lead backend developer driving most of its architecture and features.",
    highlights: [
      "Multi-level tenancy — System (super-admin) → Company → Franchise → Branch → Customer — each with its own scoped controllers, roles and permissions",
      "Full workshop / job-card system: main & additional car wash, maintenance and spare-parts jobs, technician assignment, task time-tracking, and a quotation approval/revision workflow with PDF generation",
      "Deep Odoo ERP integration: real-time, queue-based sync of products, services, invoices, inventory, customers and subscriptions, plus inbound webhooks and a dedicated sync-readiness/health-check service",
      "Finance module: Edfapay payment gateway, cash transactions, revenue targets, purchase orders & vendor bills, item-level Credit Notes for safe partial refunds, and a full reporting suite (sales, inventory, payments)",
      "Loyalty & retention: transferable stamps/points program, coupons, gift-wash cards, subscriptions/memberships, and Google/Apple Wallet passes for digital membership cards",
      "In-branch kiosk & walk-in flow with code-based instant customer recognition, separate from the regular booking flow",
      "Executive/BI analytics — branch, franchise, finance, live operations and workshop dashboards — built on a repository pattern with DB and mock implementations for clean testability",
      "Multi-channel notifications and messaging (push via FCM, WhatsApp, Telegram) plus an AI chat assistant and full audit logging",
    ],
    tech: [
      "Laravel 12",
      "MySQL",
      "Odoo ERP",
      "Firebase",
      "Edfapay",
      "Docker",
      "REST API",
      "Google/Apple Wallet",
    ],
    privateRepo: true,
  },
  {
    slug: "institute-platform",
    name: "Institute Management Platform",
    type: "Personal Project",
    period: "2026 — Present",
    summary:
      "A full-stack, multi-tenant SaaS platform for managing educational institutes — three cleanly separated portals (platform admin, institute staff, and a public site + student portal) sharing one Laravel API, with a React frontend I also built.",
    highlights: [
      "Three portals fully isolated by subdomain, each with its own allowed roles and its own Sanctum token ability — a token issued for one portal simply cannot be used on another",
      "Hand-rolled RBAC (no package): role-based defaults plus per-user permission overrides, enforced by a custom middleware, with teachers further scoped to only the courses they actually teach",
      "Two distinct relationship layers modeled deliberately: institute enrollment vs. course registration — a student can belong to multiple institutes under one account via a unique, auto-generated student code (QR-friendly) instead of duplicate accounts",
      "Full academic lifecycle: courses, class sessions, attendance rosters, and weighted assessments/grades computed only from what's actually been graded",
      "Finance module that snapshots each student's price at registration time so later course-price changes never retroactively change what past students owe, with a payment status computed from actual payments rather than stored and risking drift",
      "Public institute directory and self-service student registration, careful to return 404 instead of 403 on private/non-existent resources so it never leaks which accounts or institutes exist",
      "REST API documented with Swagger / OpenAPI (L5-Swagger), consumed by a separate React frontend for all three portals",
    ],
    tech: ["Laravel 13", "Sanctum", "MySQL", "React", "REST API", "Swagger/OpenAPI"],
    privateRepo: true,
    images: [
      { src: "/images/institute-platform/landing.png", alt: "Public landing page" },
      { src: "/images/institute-platform/institutes-directory.png", alt: "Public institute directory" },
      { src: "/images/institute-platform/institute-dashboard.png", alt: "Institute owner dashboard" },
      { src: "/images/institute-platform/students.png", alt: "Students list" },
      { src: "/images/institute-platform/courses.png", alt: "Courses list" },
    ],
  },
  {
    slug: "quiz-platform",
    name: "Quiz Platform",
    type: "Personal Project",
    summary:
      "A full-stack trivia/quiz game platform with multiple game modes, an admin panel, and a documented REST API alongside the web app.",
    highlights: [
      "Multiple game modes: a Jeopardy-style board game, a bluffing game, a \"who am I\" style word game, and a solo practice mode",
      "Question bank with categories and a user-submission workflow reviewed by admins before publishing",
      "Admin dashboard for managing users, questions, and categories",
      "Leaderboard and per-user statistics",
      "REST API documented with Swagger / OpenAPI (L5-Swagger) alongside the Blade web app",
      "Containerized with Docker and configured for deployment on Render",
    ],
    tech: ["Laravel 13", "Sanctum", "MySQL", "Blade", "Tailwind CSS", "Swagger/OpenAPI", "Docker"],
    githubUrl: "https://github.com/eng-mahertizeeni/quiz-platform",
    images: [
      { src: "/images/quiz-platform/home.png", alt: "Quiz Battle home page" },
      { src: "/images/quiz-platform/practice.png", alt: "Practice mode categories" },
      { src: "/images/quiz-platform/leaderboard.png", alt: "Leaderboard" },
      { src: "/images/quiz-platform/admin-dashboard.png", alt: "Admin dashboard" },
    ],
  },
  {
    slug: "government-complaints",
    name: "Government Complaints Platform",
    type: "Graduation Project",
    summary:
      "A scalable, multi-role complaints management system for citizens, government entities and admins, with anonymous reporting, a dedicated cyber-complaints track, and real-time chat.",
    highlights: [
      "Multi-role access for Citizen, Government Entity/Employee and Admin, scoped by entity and city",
      "Anonymous complaint submission with token-based tracking, alongside regular and cyber-crime complaint categories",
      "Real-time chat between citizens and entity employees on a complaint, built with Laravel Reverb (WebSocket broadcasting) and private channels",
      "Arabic AI-powered chatbot (via Groq) to assist citizens filing complaints",
      "Secure REST APIs with authentication, authorization and permission-based access control (Sanctum)",
      "Email notifications, events and queue-based background processing",
      "Deployed with Docker and environment-based configuration on Render",
    ],
    tech: ["Laravel 12", "MySQL", "Sanctum", "Laravel Reverb", "Groq AI", "Docker"],
    githubUrl: "https://github.com/eng-mahertizeeni/gov-complaints-platform",
  },
  {
    slug: "smsar",
    name: "Smsar — Classified Ads Platform",
    type: "Team Project",
    summary:
      "A classified-ads platform backend with a full authentication system and a REST API consumed by a Flutter mobile app.",
    highlights: [
      "Full authentication system: registration, login, OTP, and Google login",
      "Refactored and enhanced core business logic for creating, updating and displaying advertisements",
      "Secure, optimized API endpoints consumed by a Flutter frontend",
      "Replaced Firebase Cloud Messaging with a Gotify-based real-time notification system",
    ],
    tech: ["Laravel", "MySQL", "REST API", "Gotify"],
  },
];
