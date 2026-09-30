export const engineeringPrinciples = [
  {
    num: "01",
    title: "Design the Data Model Before the UI",
    desc: "Define entity schemas, relationships, validation constraints, and database access patterns before building frontend layout components."
  },
  {
    num: "02",
    title: "Validate Important Operations on the Server",
    desc: "Treat all client input as untrusted. Enforce strict server-side payload validation, type checking, and authorization rules on every endpoint."
  },
  {
    num: "03",
    title: "Treat API & LLM Output as Untrusted Data",
    desc: "Sanitize, parse, and validate external API and LLM-generated JSON schema outputs before persisting or rendering them in application state."
  },
  {
    num: "04",
    title: "Handle Failures Instead of Assuming the Happy Path",
    desc: "Leverage atomic database transactions, abort handling, centralized error middleware, and graceful fallback states for unexpected network conditions."
  },
  {
    num: "05",
    title: "Build Features Around Real Developer Workflows",
    desc: "Focus engineering effort on features that solve genuine technical bottlenecks—such as real-time collaboration, atomic ledger transfers, and instant execution."
  }
];
