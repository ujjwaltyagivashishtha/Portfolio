export const projectsData = [
  {
    id: "bank-transaction-system",
    title: "Bank Transaction System",
    subtitle: "Full-Stack Financial Management & Transaction Ledger Backend",
    category: "Full-Stack & Fintech",
    featured: true,
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose ORM",
      "JWT",
      "Nodemailer"
    ],
    summary: "Full-stack financial management backend engineered around atomic fund transfers, double-entry accounting ledgers, account ownership validation, and automated email notifications.",
    problem: "Naive banking applications often rely on unsafe in-place balance updates, leaving systems vulnerable to partial transfer failures, unvalidated account access, and non-auditable audit trails.",
    solution: "Architected a reliable ledger-oriented backend using Express, Mongoose, and MongoDB ACID transaction sessions. Every fund transfer is executed atomically—recording matching debit and credit entries while calculating real-time balances via MongoDB aggregation pipelines.",
    architectureFlow: [
      { step: "React Client", desc: "Interactive dashboard for account transfers, ledger history & balance metrics" },
      { step: "Express REST API", desc: "JWT authentication middleware, payload validation, and controller routing" },
      { step: "MongoDB ACID Sessions", desc: "Atomic transactions enforcing sender balance checks & ledger record writes" },
      { step: "Mongoose Models", desc: "Users, Accounts, Transactions, and Ledger Audit Records with strict schemas" },
      { step: "Nodemailer Service", desc: "Automated transaction alert emails sent upon transfer completion" }
    ],
    features: [
      "User Signup & Login with JWT authentication & password hashing",
      "Multi-account creation & real-time balance tracking",
      "Account Ownership Validation preventing unauthorized transfer requests",
      "Atomic Fund Transfers ensuring debit & credit operations complete together or roll back",
      "Double-Entry Ledger Records maintaining immutable financial audit trails",
      "Transaction History with date filtering, status indicators, and ledger views",
      "Automated Email Alerts via Nodemailer upon successful transactions",
      "MongoDB Persistence using aggregation pipelines for balance derivations"
    ],
    engineeringChallenges: [
      {
        title: "Atomic Transaction Handling & Partial State Prevention",
        detail: "Executed fund transfers inside MongoDB session transactions to guarantee that debiting the sender and crediting the receiver happen atomically, rolling back completely if any step fails."
      },
      {
        title: "Account Ownership & Balance Validation",
        detail: "Enforced strict multi-stage controller validation checks to verify sender ownership, recipient account existence, and sufficient available balance prior to opening transaction sessions."
      },
      {
        title: "Ledger Financial Modeling",
        detail: "Designed debit and credit ledger collections to store immutable audit records, allowing account balances to be safely verified and derived."
      }
    ],
    technicalTakeaways: [
      "Deep understanding of MongoDB ACID transaction sessions and session abort safety",
      "Designing zero-trust backend authorization controllers using JWT and resource ownership checks",
      "Structuring financial schemas for accounting auditability and data consistency"
    ],
    nextImprovements: [
      "Idempotency keys on POST transfer endpoints to reject duplicate network requests",
      "Express-Rate-Limit middleware on authentication and transaction routes",
      "Redis caching layer for user session metadata"
    ],
    highlights: [
      { label: "Ledger", value: "Double-Entry Accounting" },
      { label: "Security", value: "JWT & Ownership Checks" },
      { label: "Transactions", value: "MongoDB ACID Sessions" },
      { label: "Notifications", value: "Nodemailer Automated Emails" }
    ],
    githubUrl: "https://github.com/ujjwaltyagivashishtha",
    liveDemoUrl: null
  },
  {
    id: "fusion-ai-studio",
    title: "Fusion AI Studio",
    subtitle: "Real-Time Collaborative AI IDE Platform",
    category: "Full-Stack & AI",
    featured: true,
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Google Gemini API",
      "WebContainer API"
    ],
    summary: "Collaborative browser development environment built with the MERN stack, integrating real-time Socket.io workspace rooms, Google Gemini AI code generation, and in-browser execution via WebContainers.",
    problem: "Local development setups require manual environment configuration and lack instant team collaboration and contextual AI code generation for rapid prototyping.",
    solution: "Built a collaborative workspace platform combining Socket.io real-time project rooms, Google Gemini API for structured AI code generation, and WebContainer APIs to run Node.js web servers directly inside the browser.",
    architectureFlow: [
      { step: "React Frontend Client", desc: "Interactive file tree, Monaco code editor, real-time workspace chat & preview" },
      { step: "Socket.io WebSockets", desc: "Project room channels for real-time messages & active collaborator tracking" },
      { step: "Express & Gemini API", desc: "Backend API routing, system prompt engineering, and structured JSON output parsing" },
      { step: "MongoDB Workspace Store", desc: "Project metadata, user accounts, collaborator permissions, and file trees" },
      { step: "WebContainer Runtime", desc: "Browser-based WebContainer mounting generated virtual file trees & executing npm scripts" }
    ],
    features: [
      "Project creation, workspace management, and collaborator invitations",
      "Project-specific Socket.io rooms for isolated real-time team chat & activity",
      "Google Gemini API integration for generating full-stack project files from structured prompts",
      "Interactive File Tree and integrated Code Editor for live file manipulation",
      "In-browser WebContainer runtime executing Node.js web servers without local setups",
      "Collaborator access control and project sharing"
    ],
    engineeringChallenges: [
      {
        title: "Real-Time Room Isolation",
        detail: "Implemented project-scoped Socket.io room channels to ensure collaboration events and chat messages remain strictly isolated within active projects."
      },
      {
        title: "Structured LLM Code Generation",
        detail: "Crafted system prompts for the Google Gemini API to produce strictly formatted JSON payloads, converting model outputs directly into virtual file trees."
      },
      {
        title: "Browser Execution with WebContainers",
        detail: "Mounted dynamically generated virtual file systems into WebContainer instances, handling dependency installation and server lifecycle inside the browser."
      }
    ],
    technicalTakeaways: [
      "Orchestrating real-time WebSocket room lifecycle and client synchronization",
      "Integrating Google Gemini API with system prompts for structured code outputs",
      "Leveraging WebContainer APIs to execute Node.js runtimes safely inside the browser"
    ],
    nextImprovements: [
      "Streaming LLM responses for real-time AI code generation preview",
      "Operational transformation for real-time collaborative text editing",
      "Persisting terminal output logs to MongoDB workspace documents"
    ],
    highlights: [
      { label: "Architecture", value: "MERN Stack & Socket.io" },
      { label: "Real-Time", value: "Isolated Room Channels" },
      { label: "AI Engine", value: "Google Gemini API" },
      { label: "Execution", value: "In-Browser WebContainers" }
    ],
    githubUrl: "https://github.com/ujjwaltyagivashishtha",
    liveDemoUrl: null
  },
  {
    id: "resume-builder",
    title: "Interactive Resume Builder",
    subtitle: "Structured Developer Resume Engineering Tool",
    category: "Full-Stack Web",
    featured: true,
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript (ES6+)"
    ],
    summary: "Full-stack web application designed for creating, customizing, persisting, and exporting structured developer resumes with live side-by-side preview rendering.",
    problem: "Job seekers struggle with inconsistent resume formatting, broken layouts when updating content, and difficulty exporting clean PDF documents across devices.",
    solution: "Engineered a modular full-stack application featuring structured form inputs, state synchronization, template layouts, MongoDB document storage, and one-click PDF export.",
    architectureFlow: [
      { step: "React Form Controls", desc: "Modular controlled inputs for Education, Experience, Projects, Skills & Links" },
      { step: "Live Preview Engine", desc: "Real-time state binding rendering interactive typography & resume template layouts" },
      { step: "Express REST Endpoints", desc: "Document CRUD routes for saving, fetching, and updating resume state" },
      { step: "MongoDB Persistence", desc: "Storing user-created resume documents with Mongoose schema validation" },
      { step: "PDF Renderer", desc: "Client-side print styling & PDF generation utility for instant export" }
    ],
    features: [
      "Structured form sections for Personal Info, Experience, Projects, Skills, and Education",
      "Live side-by-side preview rendering updates instantly as users type",
      "Multiple clean professional resume template layouts",
      "MongoDB persistence allowing users to save, update, and load draft resumes",
      "One-click high-resolution PDF export with clean print formatting",
      "Reusable section ordering and dynamic bullet point management"
    ],
    engineeringChallenges: [
      {
        title: "Complex Nested State Management",
        detail: "Managed state updates for nested arrays (experience bullet points, project tech stacks, education honors) with clean immutable React state handlers."
      },
      {
        title: "Print & PDF Export Fidelity",
        detail: "Engineered dedicated CSS print media styles to eliminate page overflows, broken headers, and awkward page breaks during PDF generation."
      }
    ],
    technicalTakeaways: [
      "Structuring complex multi-step controlled form state in React",
      "Designing responsive print CSS layouts for document export",
      "RESTful API design for draft document CRUD operations"
    ],
    nextImprovements: [
      "Future Improvement: Gemini API integration for bullet point action-verb polishing",
      "Future Improvement: ATS keyword gap analyzer based on target job descriptions",
      "Future Improvement: Auto-generating targeted professional summaries"
    ],
    highlights: [
      { label: "UI System", value: "Live Dual Preview" },
      { label: "State", value: "Nested Controlled Forms" },
      { label: "Persistence", value: "MongoDB Draft Storage" },
      { label: "Export", value: "CSS Print Media PDF Engine" }
    ],
    githubUrl: "https://github.com/ujjwaltyagivashishtha",
    liveDemoUrl: null
  }
];
