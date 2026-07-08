export const site = {
  title: "Jay Fuego - Senior Software Engineer",
  tagline: "Crafting high-performance digital experiences through elegant code and modern architecture.",
  name: "Jay Fuego",
  email: "jayfuego052620@gmail.com",
  status: "Available for collaboration",
  copyright: `© ${new Date().getFullYear()} Jay Fuego. All Rights Reserved.`,
} as const;

export const social = {
  github: "https://github.com/coderjay26",
  linkedin: "https://www.linkedin.com/in/jay-fuego-ba7177226",
  email: "mailto:jayfuego052620@gmail.com",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const skills = [
  { name: "Flutter", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "Dart", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
  { name: "Kotlin", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "MSSQL", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
  { name: "N8N", level: "Professional", icon: "https://cdn.simpleicons.org/n8n/1A8275" },
  { name: "Supabase", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Git", level: "Version Control", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
] as const;

export const philosophy = [
  { title: "Flutter", description: "Single codebase, multi-platform efficiency with zero compromise on UI fluidity." },
  { title: "Kotlin Native", description: "Direct system integration for high-performance logistics and hardware control." },
  { title: "N8N", description: "Autonomous workflow engines that bridge the gap between software and operations." },
  { title: "Supabase", description: "Real-time, scalable data layer providing enterprise-grade backend infrastructure." },
] as const;

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "WITS Corporation (FDC)",
    period: "2024 - Present",
    highlights: [
      "SFA+ Suite: Developed and maintained 3+ mission-critical Sales Force Automation (SFA) applications — MyBuddy, Ravamate, and Nova SFA — using Flutter & Kotlin.",
      "Native Integration: Engineered a high-performance Flutter-Kotlin printer library for logistics, supporting CPL and ESC/POS protocols to enable seamless native printing integration.",
      "Database Architecture: Architected complex database schemas in MSSQL to support high-volume transaction processing for SFA systems.",
      "Workflow Automation: Designed and deployed custom N8N automations for internal reporting and real-time data synchronization.",
    ],
  },
] as const;

export const trainingImages = [
  { src: "images/ravamate/training-ravamate.jpg", title: "RAVAmate Training", location: "Cebu – Field User Implementation (FUI)" },
  { src: "images/ravamate/pd8.jpg", title: "RAVAmate Training", location: "Bacolod – PD8 Sales Team" },
  { src: "images/ravamate/pd8-admin.jpg", title: "RAVAmate Training", location: "Bacolod – PD8 Admin Team" },
  { src: "images/ravamate/nvm-salesman.jpg", title: "RAVAmate Training", location: "Valencia Bukidnon – NVM Sales Team" },
  { src: "images/ravamate/nvm-field.jpg", title: "RAVAmate Training", location: "Valencia Bukidnon – Field Implementation" },
] as const;

export const featuredProject = {
  name: "Jj POS System",
  logo: "images/jj_pos/JJLogo.png",
  description: "A robust, cross-platform Point of Sale ecosystem designed for modern businesses. Built with high-performance architecture to handle thousands of daily transactions across Android, iOS, and Desktop.",
  features: [
    "Offline-First with Reliable Cloud Sync",
    "58mm/80mm Bluetooth Printer Engine",
    "Automated GZip Protection & Restore",
    "Detailed Inventory Auditing & Profit Tracking",
  ],
  stack: ["Flutter", "Dart", "Supabase", "Kotlin"],
  image: "images/jj_pos/multi_device_mockup.png",
} as const;

export const projects = [
  {
    icon: "CircleDollarSign",
    name: "ClearSpend: Expense Tracker",
    description: "Published on Play Store. A comprehensive personal finance manager featuring localized currency support, automated budget alerts, and data visualization.",
    stack: ["Flutter", "Dart", "SQLite", "Play Store"],
    link: "https://play.google.com/store/apps/details?id=com.clear_spend.expenses_tracker",
    linkLabel: "Get it on Google Play",
  },
  {
    icon: "Footprints",
    name: "Lakad Rewards",
    description: "A simple step-tracking application built to incentivize physical movement and reward users.",
    stack: ["Flutter", "Firebase", "SQLite"],
    link: "",
    linkLabel: "",
  },
  {
    icon: "PiggyBank",
    name: "Paluwagan Tracker",
    description: "A personal project designed to digitize traditional social savings circles. Features shared ledger tracking, participant management, and automated contribution reminders.",
    stack: ["Flutter", "Firebase"],
    link: "https://web.facebook.com/share/r/1AuB6HY5Rs/",
    linkLabel: "Watch Demo",
  },
  {
    icon: "House",
    name: "Boarding House Manager",
    description: "A specialized ERP solution for property owners to manage rental units, track tenant payments, and automate utility bill calculations.",
    stack: ["Flutter", "Firebase", "Dart"],
    link: "https://www.facebook.com/share/r/18AmAxrHkf/",
    linkLabel: "Watch Demo",
  },
  {
    icon: "MapPin",
    name: "Smart Trip Optimizer",
    description: "Engineered an intelligent travel itinerary generator using graph-based algorithms to optimize travel routes based on budget and interest constraints.",
    stack: ["Flutter", "Dart", "Google Maps API"],
    link: "https://github.com/coderjay26/smart_trip_optimizer",
    linkLabel: "View Code",
  },
  {
    icon: "Stethoscope",
    name: "Dapitan Health Inventory",
    description: "Designed a forecasting engine for the Dapitan City Health Office. Utilizes regression analysis to predict pharmaceutical demand, reducing inventory stock-outs by an estimated 35%.",
    stack: ["Flutter", "Dart", "Data Science"],
    link: "https://github.com/coderjay26/dapitan_city_health_inventory",
    linkLabel: "View Architecture",
  },
  {
    icon: "Brain",
    name: "Med-Logic Expert System",
    description: "A rule-based diagnostic engine designed to assist healthcare professionals. Implements a complex inference engine to evaluate patient symptoms against medical knowledge bases.",
    stack: ["C#", "Expert Systems", "AI"],
    link: "https://github.com/coderjay26/Mediacal-Diagnosis",
    linkLabel: "View Source",
  },
] as const;
