export const genAiSectionData = {
  headline: "Generative AI & LLM Integration",
  summary: "Building AI-powered full-stack applications by integrating Large Language Model (LLM) APIs with Node.js/Express backends, designing structured system prompts, and orchestrating outputs into web runtimes.",
  
  architectureFlow: [
    { step: "User Request", desc: "User inputs prompt or project description in React client" },
    { step: "Express API", desc: "Node.js backend validates payload and applies structured system prompts" },
    { step: "Gemini API", desc: "Google Gemini LLM generates JSON schema response payload" },
    { step: "Structured Parsing", desc: "Express parses JSON output into virtual file trees & code files" },
    { step: "Runtime Mount", desc: "React mounts files into WebContainer to run Node.js app in browser" }
  ],

  verifiedCapabilities: [
    {
      title: "Gemini API Integration",
      desc: "Integrating Google Gemini LLM models into Node.js / Express backend API services.",
      status: "Verified in Fusion AI Studio"
    },
    {
      title: "Structured Prompt Engineering",
      desc: "Designing system prompts to produce strictly formatted JSON schema outputs for code file generation.",
      status: "Verified in Fusion AI Studio"
    },
    {
      title: "AI-Assisted Code Scaffolding",
      desc: "Automating project creation, boilerplate generation, and developer assistance in web environments.",
      status: "Verified in Fusion AI Studio"
    },
    {
      title: "Full-Stack LLM Orchestration",
      desc: "Connecting AI response outputs directly into frontend file trees, code editors, and browser runtimes.",
      status: "Verified in Fusion AI Studio"
    }
  ],

  currentlyExploring: [
    {
      title: "Retrieval-Augmented Generation (RAG)",
      desc: "Document text extraction, chunking algorithms, vector embeddings, and contextual prompt injection.",
      tag: "Currently Exploring"
    },
    {
      title: "Vector Databases & Search",
      desc: "Storing document vector embeddings in MongoDB Atlas Vector Search for semantic Q&A applications.",
      tag: "Currently Exploring"
    },
    {
      title: "LLM Agents & Function Calling",
      desc: "Chaining multi-step LLM operations, tool invocation, and structured agent execution.",
      tag: "Currently Exploring"
    },
    {
      title: "Streaming Responses & Security",
      desc: "Server-sent events (SSE) for streaming LLM tokens, prompt injection prevention, and output sanitization.",
      tag: "Currently Exploring"
    }
  ]
};
