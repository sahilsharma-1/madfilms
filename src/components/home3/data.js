// Illustrative workflows only. Names and steps are examples, not shipped products, customers or results.
export const TASKS = [
  { id: "resume", label: "Resume Screening", head: "Find the right candidates faster.", slot: "hr", dark: "#5a1426", soft: "#f8dde4", steps: ["Applications arrive", "AI reads and compares", "Matches your criteria", "Shortlist prepared", "You approve"], ui: [["Aarav S.", "Shortlist"], ["Meera K.", "Shortlist"], ["Daniel R.", "Review"]] },
  { id: "lead", label: "Lead Research", head: "Know the account before the call.", slot: "sales", dark: "#0e2a5c", soft: "#dce9fb", steps: ["A lead comes in", "AI researches the company", "Finds decision makers", "Brief prepared", "You approve"], ui: [["Company profile", "Collected"], ["Decision makers", "Found"], ["Account brief", "Ready"]] },
  { id: "outreach", label: "Sales Outreach", head: "Personal first messages, drafted for you.", slot: "sales", dark: "#0e2a5c", soft: "#dce9fb", steps: ["Target list chosen", "AI drafts each message", "Checks tone and rules", "Queue prepared", "You approve"], ui: [["Message 1", "Draft"], ["Message 2", "Draft"], ["Follow-up", "Scheduled"]] },
  { id: "support", label: "Customer Support", head: "Every customer answered.", slot: "support", dark: "#3b1c5e", soft: "#ebe0f8", steps: ["Message arrives", "AI checks order and policy", "Reply drafted", "Sent or handed over", "A person steps in when needed"], ui: [["Order status", "Checked"], ["Reply", "Drafted"], ["Complex case", "Handed over"]] },
  { id: "invoice", label: "Invoice Processing", head: "Turn paperwork into progress.", slot: "finance", dark: "#0d3b22", soft: "#dcf0e3", steps: ["Invoice arrives", "AI reads the fields", "Matches PO and receipt", "Exceptions flagged", "You approve"], ui: [["Vendor", "Known"], ["PO match", "Matched"], ["Receipt", "Partial"]] },
  { id: "reporting", label: "Reporting", head: "Reports that write themselves.", slot: "operations", dark: "#16212f", soft: "#e4e8ee", steps: ["Data is collected", "AI compiles figures", "Explains what changed", "Report prepared", "You approve"], ui: [["Weekly summary", "Drafted"], ["Key changes", "Listed"], ["Send to team", "Awaiting you"]] },
  { id: "procurement", label: "Procurement", head: "Make buying move faster.", slot: "procurement", dark: "#5c4308", soft: "#fbf1cf", steps: ["Request submitted", "AI checks budget and policy", "Compares suppliers", "Recommendation made", "You approve"], ui: [["Budget", "Pass"], ["Policy", "Pass"], ["Supplier", "Note"]] },
  { id: "data", label: "Data Operations", head: "Clean, matched, up to date.", slot: "it", dark: "#16212f", soft: "#e4e8ee", steps: ["Records arrive", "AI cleans and matches", "Finds duplicates", "Updates your systems", "You approve changes"], ui: [["Duplicates", "Found"], ["Missing fields", "Filled"], ["Merge", "Awaiting you"]] },
  { id: "marketing", label: "Marketing", head: "From brief to campaign.", slot: "marketing", dark: "#5c4308", soft: "#fbf1cf", steps: ["Brief arrives", "AI researches and drafts", "Builds the calendar", "Content prepared", "You approve"], ui: [["Teaser", "Draft"], ["Founder post", "Review"], ["Product film", "Planned"]] },
];

export const WORKERS = [
  { name: "Sales Agent", dark: "#0e2a5c", soft: "#dce9fb", does: ["Finds companies", "Researches accounts", "Identifies decision makers", "Prepares outreach", "Updates CRM", "Escalates to sales"] },
  { name: "Research Agent", dark: "#16212f", soft: "#e4e8ee", does: ["Takes a question", "Searches approved sources", "Compares what it finds", "Writes a short summary", "Cites where it looked", "Flags what is unclear"] },
  { name: "Operations Agent", dark: "#5c4308", soft: "#fbf1cf", does: ["Watches work in progress", "Spots exceptions", "Ranks what matters", "Suggests the next action", "Updates the tracker", "Escalates to a manager"] },
  { name: "Customer Agent", dark: "#3b1c5e", soft: "#ebe0f8", does: ["Reads the message", "Checks the order", "Applies your policy", "Drafts the reply", "Logs the case", "Hands over to a person"] },
  { name: "HR Agent", dark: "#5a1426", soft: "#f8dde4", does: ["Reads applications", "Compares to your criteria", "Prepares a shortlist", "Schedules interviews", "Answers candidate questions", "Escalates to HR"] },
  { name: "Finance Agent", dark: "#0d3b22", soft: "#dcf0e3", does: ["Reads invoices", "Matches records", "Checks policy", "Flags exceptions", "Prepares payment for approval", "Escalates to finance"] },
];

export const PACKAGES = [
  { name: "MAD START", line: "One workflow.", rows: ["One focused AI agent", "Basic integrations", "Human approval", "Reporting"] },
  { name: "MAD GROW", line: "Several workflows.", rows: ["Multiple agents", "Business integrations", "Analytics and monitoring", "Optimization"] },
  { name: "MAD ENTERPRISE", line: "A custom AI system.", rows: ["Complex integrations", "Enterprise data and permissions", "Dedicated implementation", "Ongoing support"] },
];

export const SAAS = ["Sales", "Hiring", "Support", "Reporting", "Operations"];
export const JOURNEY = ["Problem", "AI", "Data", "Software", "Product", "Motion", "UGC", "Content", "Campaign"];
export const STEPS = [["Tell us the job", "Describe the work you want off your team."], ["We understand your workflow", "We learn your tools, data and rules."], ["We design the system", "You see the plan before we build."], ["We build and connect it", "Wired into the systems you already use."], ["We launch", "With your people approving the work."], ["We improve it", "We watch results and refine."]];
export const INTEGRATIONS = ["CRM", "ERP", "Email", "WhatsApp", "Databases", "Spreadsheets", "APIs", "Internal software"];
export const WORKS = [
  ["Recruiter Toolkit", "/images/projects/Recruiter Toolkit.jpg", "Creative · HR"],
  ["Talent Attraction Insights", "/images/projects/Talent Attraction Insights.jpg", "Data · Creative"],
  ["NESTLEVEL Digital Podcast", "/images/projects/Nestlevel Podcast.png", "Motion · Content"],
];
