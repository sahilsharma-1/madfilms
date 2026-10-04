// Single source of truth for homepage copy. No invented clients, outcomes or numbers live here.
export const EMAIL = "hello@madcompany.co";
export const MAIL = `mailto:${EMAIL}?subject=Build%20with%20MAD`;

export const SERVICES = [
  { id: "strategy", name: "AI Strategy", line: "Find where AI pays off, and in what order.", href: "/#services" },
  { id: "agents", name: "AI Agents", line: "Agents that understand a request and act on it.", href: "/#agents" },
  { id: "automation", name: "AI Automation", line: "Let AI handle the work between the decisions.", href: "/studio/automate" },
  { id: "products", name: "AI Products", line: "Software and SaaS with intelligence built in.", href: "/#services" },
  { id: "data", name: "Data Intelligence", line: "Connected data that answers real questions.", href: "/#services" },
  { id: "experience", name: "Digital Experience", line: "Interfaces and immersive experiences people enjoy using.", href: "/studio/reality" },
  { id: "creative", name: "AI Content & Creative", line: "Brand, film and content, produced with AI.", href: "/studio/madfilms" },
  { id: "integration", name: "Enterprise Integration", line: "Connected to the CRM, ERP and APIs you already run.", href: "/#services" },
];

export const INDUSTRIES = [
  {
    id: "retail", name: "Consumer & Retail", head: ["Understand customers.", "Automate journeys.", "Drive growth."],
    caps: ["Customer intelligence", "Personalization", "Marketing automation", "Demand intelligence", "AI commerce"],
    outcomes: ["Better customer experiences", "Faster operations", "More intelligent decisions"],
    nodes: ["Customer signals", "Intelligence", "Journeys", "Growth"],
  },
  {
    id: "healthcare", name: "Healthcare", head: ["Give patients answers.", "Give clinicians time.", "Keep care moving."],
    caps: ["Patient experience", "Clinical workflows", "Smart OPD", "Medical operations", "Healthcare automation"],
    outcomes: ["Smoother patient journeys", "Less administrative load", "Operations that keep pace"],
    nodes: ["Patient request", "Intelligence", "Workflow", "Care team"],
  },
  {
    id: "finance", name: "Financial Services", head: ["Read every document.", "Route every risk.", "Qualify every lead."],
    caps: ["Customer intelligence", "Document intelligence", "Risk workflows", "Lead qualification"],
    outcomes: ["Faster decisions", "Consistent review", "Better-qualified conversations"],
    nodes: ["Documents", "Intelligence", "Risk workflow", "Decision"],
  },
  {
    id: "manufacturing", name: "Manufacturing", head: ["See quality early.", "Predict the failure.", "Keep the line moving."],
    caps: ["Quality intelligence", "Predictive maintenance", "Supply-chain intelligence", "Operational automation"],
    outcomes: ["Fewer surprises on the floor", "Clearer supply visibility", "Operations that run themselves"],
    nodes: ["Sensors & vision", "Intelligence", "Maintenance", "Production"],
  },
  {
    id: "technology", name: "Technology", head: ["Support every user.", "Know the product.", "Onboard faster."],
    caps: ["AI support", "Product intelligence", "Customer onboarding", "Developer workflows"],
    outcomes: ["Faster resolution", "Smoother onboarding", "Teams focused on building"],
    nodes: ["User request", "Intelligence", "Product data", "Resolution"],
  },
  {
    id: "enterprise", name: "Enterprise", head: ["Answer every question.", "Connect every system.", "Decide with context."],
    caps: ["Employee intelligence", "Knowledge systems", "Workflow automation", "Decision intelligence"],
    outcomes: ["Knowledge people can find", "Workflows that finish themselves", "Decisions with context"],
    nodes: ["Employee ask", "Intelligence", "Systems", "Answer"],
  },
];

export const CAPABILITIES = [
  { id: "agent", name: "AI Agents", line: "A reasoning core with the tools to act." },
  { id: "automation", name: "AI Automation", line: "Many manual steps, collapsed into one." },
  { id: "vision", name: "Computer Vision", line: "Systems that see, recognise and flag." },
  { id: "predictive", name: "Predictive AI", line: "Move toward the outcome before it arrives." },
  { id: "conversational", name: "Conversational AI", line: "A message becomes an action." },
  { id: "data", name: "Data Intelligence", line: "Scattered data, structured into answers." },
  { id: "workflow", name: "Workflow AI", line: "Decisions routed through every step." },
  { id: "generative", name: "Generative AI", line: "Content and creative, made on demand." },
  { id: "integration", name: "AI Integration", line: "Your systems, finally talking." },
];

export const ROLES = [
  { id: "strategist", name: "AI Strategist", line: "Maps where AI belongs in the business, and what to build first.", now: "Mapping workflows" },
  { id: "operator", name: "AI Operator", line: "Runs the repeatable work across your systems, every day.", now: "Updating records" },
  { id: "analyst", name: "AI Analyst", line: "Reads the data and tells you what changed.", now: "Comparing this week" },
  { id: "growth", name: "AI Growth Agent", line: "Finds, qualifies and warms the next customer.", now: "Qualifying leads" },
  { id: "customer", name: "AI Customer Agent", line: "Resolves requests, hands over when a person should.", now: "Resolving a request" },
  { id: "content", name: "AI Content Engine", line: "Drafts, adapts and versions content in your voice.", now: "Drafting a campaign" },
];

export const OUTCOMES = [
  { k: "Speed", d: "Move from manual workflows to intelligent execution." },
  { k: "Efficiency", d: "Reduce repetitive operational work." },
  { k: "Experience", d: "Create faster, more personalized interactions." },
  { k: "Growth", d: "Turn intelligence into new opportunities." },
  { k: "Scale", d: "Expand capability without expanding complexity." },
];

export const LAYERS = [
  { k: "Experience", sub: "Customer / Employee", d: "Where people meet the system: chat, voice, email, dashboards and the tools they already use." },
  { k: "Agents", sub: "Sales / Support / Operations / AI", d: "Specialised agents that reason over a request, choose tools and take action." },
  { k: "Workflows", sub: "Automate / Decide / Execute", d: "Business logic, approvals and handoffs, with a person in the loop where it matters." },
  { k: "Data", sub: "CRM / ERP / Documents / APIs", d: "Your systems of record, connected and made retrievable." },
  { k: "Foundation", sub: "Models + Infrastructure", d: "Models, orchestration, security and the cloud they run on." },
];

export const JOURNEY = [
  { t: "Business problem", d: "We start with the workflow that hurts." },
  { t: "Discovery", d: "Map the decisions, people and systems involved." },
  { t: "Data", d: "Find, clean and connect what the system needs to know." },
  { t: "AI model", d: "Choose and tune the model for the job." },
  { t: "Agent", d: "Give it tools, rules and a clear job." },
  { t: "Integration", d: "Wire it into the CRM, ERP, channels and APIs." },
  { t: "Measurement", d: "Track what changed against your baseline." },
  { t: "Scale", d: "Extend to the next workflow, team or market." },
];

// Real project facts, all taken from existing MAD content (components/Madfilms/Campaigns.jsx). Nothing here is new.
export const CASES = [
  {
    id: "nestle", client: "Nestlé", sector: "Enterprise", title: "Talent Attraction Insights",
    challenge: "Talent attraction data lived across separate digital tools and social listening, with no single view.",
    approach: "An AI-generated NLP system that unifies analytics across four pillars.",
    built: "Nestlé's first centralised dashboard for talent attraction: talent attraction, campaign performance, reputation and employee advocacy analytics.",
    outcome: "In pilot across MENA, Oceania, the Philippines and MYSG.",
    metrics: [["562", "active users onboarded"], ["620K+", "employee advocacy content reach"]],
    img: { src: "/images/projects/Talent Attraction Insights.jpg", alt: "Talent Attraction Insights dashboard" },
    href: "/studio/madfilms",
  },
  {
    id: "mod", client: "Ministry of Defence", sector: "Government",
    title: "Government and defence work",
    img: null, href: MAIL,
  },
  {
    id: "mcura", client: "mCURA", sector: "Healthcare",
    title: "Healthcare work",
    img: null, href: MAIL,
  },
];
