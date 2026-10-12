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
      "VPS Deployment (Nginx, aaPanel)",
      "cPanel Hosting",
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
    slug: "marseel",
    name: "Marseel Technology — Company Website & CMS",
    type: "Client Project",
    period: "2026",
    summary:
      "A bilingual (Arabic / English) company website for Marseel Technology, a Palestinian digital-signage and tech-solutions company — a React site plus a fully content-managed Laravel API and admin panel, delivered end-to-end and live on the company's domain.",
    highlights: [
      "Interactive map of Palestine's governorates showing the company's indoor and outdoor advertising screens; visitors pick a governorate, pick screens, and request a price quote",
      "Quote-request flow with emailed responses, a resend cooldown and per-request email log, plus rate limiting against abuse",
      "Careers section with job listings and an application form whose fields are configurable from the admin panel",
      "Separate React admin panel: every piece of site content (sliders, services, screens, cities, clients, stats, about sections, settings) is editable, translatable, and supports media uploads",
      "Roles and permissions per admin user, enforced on each API action (view / create / update / delete)",
      "SEO metadata, Open Graph images, sitemap and scroll-driven frame animations on the home page",
      "Deployed on cPanel hosting with the API on its own subdomain",
    ],
    tech: [
      "Laravel 13",
      "Sanctum",
      "MySQL",
      "Spatie Permission",
      "Spatie Media Library",
      "Spatie Translatable",
      "React",
      "TypeScript",
      "i18next",
      "Framer Motion",
    ],
    liveUrl: "https://marseel.co/",
    privateRepo: true,
    images: [
      { src: "/images/marseel/home.png", alt: "Marseel home page" },
      { src: "/images/marseel/digital-screens.png", alt: "Digital screens page" },
      { src: "/images/marseel/screen-locations.png", alt: "Screen locations by governorate" },
      { src: "/images/marseel/services.png", alt: "Services page" },
      { src: "/images/marseel/contact.png", alt: "Contact page" },
    ],
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
    slug: "yalla-quiz",
    name: "Yalla Quiz — Arabic Party Quiz Games",
    type: "Personal Project",
    period: "2026 — Present",
    summary:
      "A live, full-stack Arabic party-game platform: three different quiz games played on one shared screen, backed by a Laravel API with an admin panel and a separate React + TypeScript frontend I also built — deployed and run on my own VPS.",
    highlights: [
      "Team game: a Jeopardy-style board of 6 categories with 200/400/600-point questions, image, map, video and audio questions, and an open-answer mode judged by the host",
      "Six one-time team powers (remove two answers, phone a friend, extra time, double points, throw the question to the other team, answer twice) plus a bomb — all resolved server-side inside DB transactions",
      "Bluff game: each player writes a fake answer to fool the others, then everyone votes for what they think is the truth — multiplayer lobby with join codes, synced by polling",
      "Snakes & Ladders game with dice and difficulty-levelled question decks",
      "Large categorised question bank kept in idempotent seeders, so every deploy can re-import content without ever duplicating questions",
      "Users can submit questions for admin review; Blade admin dashboard for questions, categories, submissions and users",
      "Self-hosted on a VPS (aaPanel + Nginx): the server pulls from GitLab with a read-only deploy token, runs one update script per app, and swaps the new frontend build in with no downtime",
    ],
    tech: [
      "Laravel 13",
      "Sanctum",
      "MySQL",
      "React",
      "TypeScript",
      "React Query",
      "Zustand",
      "Tailwind CSS",
      "Swagger/OpenAPI",
      "Nginx / VPS",
    ],
    liveUrl: "https://yalaquiz.thinkvya.tech/",
    images: [
      { src: "/images/yalla-quiz/home.png", alt: "Yalla Quiz home page" },
      { src: "/images/yalla-quiz/games.png", alt: "The three games and how to play" },
    ],
  },
  {
    slug: "nizal-30",
    name: "Nizal 30 — Referee-Run Quiz Game",
    type: "Personal Project",
    period: "2026",
    summary:
      "An Arabic head-to-head knowledge game for two players on one phone, run by a referee who controls every step — five rounds, 30 seconds per challenge, with an AI assistant that helps the referee judge answers. Built with Laravel and Blade and live in production.",
    highlights: [
      "Five distinct rounds, each with its own rules and scoring: list questions with strikes, an auction where players bid on how many answers they can name in 30 seconds, a buzzer race, an \"impossible\" round with a risk-it pit, and a clutch round with gradual hints",
      "Match engine that keeps the full game state per match, with an undo for the referee's last action, manual score adjustments, and a tiebreaker wheel that picks a random round and question",
      "AI referee assistant (Groq): suggests yes / no / unsure for a spoken answer, checks the answers already on the board before calling the model, caches results, and the API key never leaves the server",
      "Player accounts with private match history, ownership middleware so only the match creator can control it, and throttled AI calls",
      "Admin panel to manage categories and sub-categories, add questions, and bulk-import questions",
      "Covered by feature tests for every round, scoring rule, undo, AI judge and a full end-to-end game",
    ],
    tech: ["Laravel 13", "MySQL", "Blade", "Tailwind CSS", "Groq AI", "PHPUnit"],
    liveUrl: "https://nizal30.thinkvya.tech/",
    images: [
      { src: "/images/nizal30/home.png", alt: "Nizal 30 home page" },
      { src: "/images/nizal30/rounds.png", alt: "The five rounds" },
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
