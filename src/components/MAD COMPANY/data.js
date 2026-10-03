// Single source of truth for homepage content. Edit copy/links here.
export const DIVISIONS = [
  { name: "MAD AI", short: "AI", line: "AI Agents.", href: "/studio/automate", visual: "agents", c1: "#2f55ff", c2: "#6d3bff" },
  { name: "MAD OUTREACH", short: "OUTREACH", line: "AI Sales & Lead Generation.", href: "#outreach", visual: "funnel", c1: "#7a3cff", c2: "#d03cc8" },
  { name: "MAD AUTOMATE", short: "AUTOMATE", line: "Business Automation.", href: "/studio/automate", visual: "flow", c1: "#d03cc8", c2: "#ff7a45" },
  { name: "MAD SOFTWARE", short: "SOFTWARE", line: "Software & SaaS.", href: "#engine", visual: "stack", c1: "#12b5ad", c2: "#2f55ff" },
  { name: "MAD DATA", short: "DATA", line: "Data Science & Intelligence.", href: "#engine", visual: "bars", c1: "#4b3bff", c2: "#12b5ad" },
  { name: "MAD FILMS", short: "FILMS", line: "Creative Technology.", href: "/studio/madfilms", visual: "frames", c1: "#ff7a45", c2: "#d03cc8" },
];

export const CAPABILITIES = [
  { id: "ai", title: "AI & Agents", items: ["AI Agents", "Multi-Agent Systems", "Autonomous Workflows", "AI Assistants", "Voice Agents", "Enterprise AI", "RAG Systems", "AI Knowledge Systems"] },
  { id: "auto", title: "Automation", items: ["Workflow Automation", "Process Automation", "CRM Automation", "WhatsApp Automation", "Email Automation", "API Orchestration", "Internal Operations"] },
  { id: "data", title: "Data & Intelligence", items: ["Data Science", "Machine Learning", "Predictive Analytics", "Business Intelligence", "Data Pipelines", "AI Analytics"] },
  { id: "sw", title: "Software", items: ["Web Applications", "SaaS", "Enterprise Software", "Mobile Applications", "APIs", "Backend Systems", "Cloud Infrastructure"] },
  { id: "sales", title: "Sales & Outreach", items: ["Lead Intelligence", "Prospect Research", "AI Outreach", "Lead Qualification", "Personalization", "CRM Automation", "Meeting Booking", "Sales Intelligence"] },
  { id: "creative", title: "Creative Technology", items: ["Brand Systems", "3D", "Motion Design", "Product Films", "AI Video", "Interactive Experiences"] },
];

export const OUTREACH_STEPS = ["Discover", "Research", "Enrich", "Personalize", "Outreach", "Follow up", "Qualify", "Book"];

export const AGENTS = [
  { name: "Sales", text: "Researches accounts, qualifies prospects and keeps CRM workflows moving.", flow: ["Research", "Qualify", "Update CRM"] },
  { name: "Customer experience", text: "Answers questions, retrieves context and resolves requests.", flow: ["Understand", "Retrieve", "Resolve"] },
  { name: "Research", text: "Collects sources, compares findings and delivers a brief.", flow: ["Collect", "Compare", "Summarise"] },
  { name: "Operations", text: "Moves information across systems and runs repeatable processes.", flow: ["Detect", "Transform", "Write back"] },
  { name: "Executive", text: "Prepares briefings, ranks priorities and flags decisions.", flow: ["Gather", "Prioritise", "Brief"] },
  { name: "Healthcare", text: "Supports admin workflows within privacy and compliance requirements.", flow: ["Verify", "Complete", "Audit trail"] },
];

export const PROCESS = [
  { n: "01", t: "Discover", d: "Understand the problem." },
  { n: "02", t: "Architect", d: "Design AI, data and software together." },
  { n: "03", t: "Engineer", d: "Build with our in-house teams." },
  { n: "04", t: "Integrate", d: "Connect to the systems you run on." },
  { n: "05", t: "Deploy", d: "Move into production." },
  { n: "06", t: "Optimize", d: "Measure and keep improving." },
];

export const SYSTEMS = ["CRM", "ERP", "Cloud", "Databases", "APIs", "Communication platforms", "Analytics", "Internal business systems"];

export const PILLARS = [
  { t: "Engineers", d: "Software and AI engineers building production systems." },
  { t: "Data scientists", d: "Turning data into decisions." },
  { t: "Automation engineers", d: "Agents and workflows that execute real work." },
  { t: "Designers & creative technologists", d: "Making complex technology understandable." },
];

export const EXPERIENCE = [
  { name: "Nestl\u00e9", kind: "Enterprise", note: "", c1: "#2f55ff", c2: "#7a3cff" },
  { name: "Ministry of Defence", kind: "Government", note: "", c1: "#7a3cff", c2: "#d03cc8" },
  { name: "mCURA", kind: "Healthcare", note: "", c1: "#d03cc8", c2: "#ff7a45" },
];

export const TEAM = [
  { name: "Sales", does: ["Finds prospects.", "Researches accounts.", "Starts conversations.", "Books meetings."], flow: ["Find", "Research", "Book"], status: "Researching 12 accounts", c1: "#2f55ff", c2: "#5a3bff" },
  { name: "Outreach", does: ["Creates personalized campaigns.", "Follows up.", "Handles replies.", "Keeps your pipeline moving."], flow: ["Write", "Send", "Follow up"], status: "Writing follow-ups", c1: "#6d3bff", c2: "#c23ad0" },
  { name: "Customer", does: ["Answers customers.", "Understands context.", "Resolves requests.", "Escalates when needed."], flow: ["Listen", "Resolve", "Escalate"], status: "Replying to a customer", c1: "#c23ad0", c2: "#ff6f4a" },
  { name: "Research", does: ["Finds information.", "Reads documents.", "Compares sources.", "Creates reports."], flow: ["Search", "Compare", "Report"], status: "Comparing sources", c1: "#0fa7a0", c2: "#2f55ff" },
  { name: "Operations", does: ["Moves information between systems.", "Updates records.", "Triggers workflows.", "Keeps teams organized."], flow: ["Detect", "Update", "Notify"], status: "Updating the CRM", c1: "#ff7a45", c2: "#d03cc8" },
  { name: "Executive", does: ["Summarizes information.", "Prepares briefings.", "Tracks priorities.", "Helps coordinate work."], flow: ["Gather", "Prioritize", "Brief"], status: "Preparing a briefing", c1: "#23233a", c2: "#6d3bff" },
];

const S = (...a) => a.map((t) => ({ t }));
export const SCENARIOS = [
  { name: "Find customers", agent: "Sales agent", line: "Find companies that fit your target.", note: "Searches, researches and builds a prospect list while you do other things.", c1: "#2f55ff", c2: "#6d3bff", steps: S("Searching companies", "Researching each one", "Finding decision makers", "Prospect list ready") },
  { name: "Outreach", agent: "Outreach agent", line: "Start conversations automatically.", note: "Writes a message for each person and sends it on the channel they use.", c1: "#6d3bff", c2: "#d03cc8", steps: S("Writing a personalized message", "Sending by email, LinkedIn or WhatsApp", "Reply received", "Intent understood") },
  { name: "Customer support", agent: "Customer agent", line: "Answer customers instantly.", note: "Understands the question, checks the facts and resolves it, or hands over to a person.", c1: "#c23ad0", c2: "#ff7a45", steps: [{ who: "user", t: "Can I change my delivery address?" }, { who: "ai", t: "Absolutely. I found your order. Here is what I can do..." }, { who: "user", t: "Send it to my office." }, { who: "ai", t: "Done. Your new address is confirmed." }] },
  { name: "Lead qualification", agent: "Sales agent", line: "Know who is ready to talk.", note: "Asks the right questions and sends only the promising leads to your team.", c1: "#0fa7a0", c2: "#2f55ff", steps: S("Asking the right questions", "Understanding requirements", "Qualifying the lead", "Routed to sales") },
  { name: "Research", agent: "Research agent", line: "Turn hours of research into minutes.", note: "Reads, compares and writes up what it found.", c1: "#4b3bff", c2: "#0fa7a0", steps: S("Searching sources", "Reading", "Comparing", "Summarizing", "Report ready") },
  { name: "Operations", agent: "Operations agent", line: "Let AI handle repetitive work.", note: "Moves information between your tools so nobody retypes it.", c1: "#ff7a45", c2: "#d03cc8", steps: S("New email arrives", "CRM updated", "Database updated", "Spreadsheet filled", "Team notified") },
];

export const JOURNEY = [
  { t: "Tell us the job", d: "What do you want the AI to do?" },
  { t: "We design the agent", d: "We map the decisions, tools and workflows." },
  { t: "We connect your systems", d: "CRM. Email. WhatsApp. Databases. APIs." },
  { t: "We launch", d: "Your agent starts doing the work." },
  { t: "We improve it", d: "Monitor. Learn. Optimize." },
];

export const ENGINE = [
  { k: "ai", t: "AI", d: "Agents that think and act.", c1: "#8a6bff", c2: "#4b3bff" },
  { k: "automation", t: "Automation", d: "Work that runs by itself.", c1: "#ff9a5a", c2: "#d03cc8" },
  { k: "software", t: "Software", d: "Apps, APIs and platforms.", c1: "#3bd0c4", c2: "#2f55ff" },
  { k: "data", t: "Data", d: "Clean, connected information.", c1: "#4a8bff", c2: "#2a3bd0" },
];
