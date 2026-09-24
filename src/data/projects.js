export const projectsData = [
  {
    id: "fusion-ai-studio",
    title: "Fusion AI Studio",
    subtitle: "Real-Time Collaborative AI IDE Platform",
    category: "Full-Stack & AI",
    featured: true,
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "Google Gemini API",
      "WebContainer API"
    ],
    summary: "Real-time collaborative development platform built using the MERN stack with integrated AI code generation and browser runtime capabilities.",
    bulletPoints: [
      "Built a real-time collaborative development platform using the MERN stack.",
      "Implemented project management, user authentication, and collaborator workflows.",
      "Integrated Socket.io for real-time project chat and Google Gemini API for AI-powered code generation.",
      "Added a file tree, code editor, and WebContainer API to run code directly in the browser."
    ],
    highlights: [
      { label: "Architecture", value: "MERN Stack" },
      { label: "Real-Time", value: "Socket.io Chat" },
      { label: "AI Engine", value: "Google Gemini API" },
      { label: "Execution", value: "In-Browser WebContainers" }
    ]
  },
  {
    id: "bank-transaction-system",
    title: "Bank Transaction System",
    subtitle: "Secure Ledger & Financial Management System",
    category: "Full-Stack & Fintech",
    featured: true,
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT"
    ],
    summary: "Full-stack banking system featuring authentication, immutable double-entry ledger, atomic transactions, and automated transaction notifications.",
    bulletPoints: [
      "Built a full-stack banking system with authentication, account management, and fund transfers.",
      "Implemented an immutable double-entry ledger with balances derived through MongoDB aggregation.",
      "Secured transfers with account ownership validation, atomic transactions, and race-safe idempotency.",
      "Developed REST APIs and a React dashboard with transaction tracking and automated email notifications."
    ],
    highlights: [
      { label: "Ledger", value: "Double-Entry Accounting" },
      { label: "Security", value: "JWT & Race-Safe Idempotency" },
      { label: "Aggregation", value: "MongoDB Data Pipeline" },
      { label: "UI Dashboard", value: "React & Tailwind CSS" }
    ]
  }
];
