// MAD agent library. Presentation-free data: components read this, they never hold copy.
// Everything here is ILLUSTRATIVE. Example conversations use invented first names only to show the pattern.
// No customers, results, percentages, ROI or certifications are claimed anywhere in this file.
// Outcomes are phrased as potential outcomes until real client evidence exists.

/** Paired corporate colours: deep (text, active states, arrows) + light (backgrounds, badges). */
export const PAIRS = {
  blue:     { name: "Deep blue to light blue",     d: "#0e2a5c", s: "#dce9fb" },
  burgundy: { name: "Burgundy to light red",       d: "#5a1426", s: "#f8dde4" },
  green:    { name: "Deep green to light green",   d: "#0d3b22", s: "#dcf0e3" },
  purple:   { name: "Deep purple to light purple", d: "#3b1c5e", s: "#ebe0f8" },
  gold:     { name: "Muted gold to light gold",    d: "#5c4308", s: "#fbf1cf" },
};

export const CATEGORIES = ["All", "Revenue", "Customer", "Operations", "Finance", "Research", "Intelligence"];

// Category sets the default colour pair for an agent.
const CAT_ACCENT = { Revenue: "burgundy", Customer: "blue", Operations: "green", Finance: "gold", Research: "purple", Intelligence: "blue" };

/**
 * Compact example builder.  ex("WhatsApp", ["c|customer says", "a|agent says", "s|system note"])
 * c = customer, a = MAD agent, s = system event.
 */
export const ex = (channel, lines) => ({
  channel,
  messages: lines.map((l) => {
    const [f, ...t] = l.split("|");
    return { from: { c: "customer", a: "agent", s: "system" }[f], text: t.join("|") };
  }),
});

const img = (n) => `/images/agents/agent-${String(n).padStart(2, "0")}.png`;

const A = (n, id, icon, name, category, rest) => ({
  id, n, icon, name, category, accent: CAT_ACCENT[category], image: img(n), featured: false, ...rest,
});

export const AGENTS = [
  A(1, "missed-call", "PhoneMissed", "Missed Call Recovery Agent", "Revenue", {
    featured: true,
    shortDescription: "Catches every missed call and starts the conversation before the customer goes elsewhere.",
    description: "Detects missed calls, understands the context, sends an approved personalised response, answers common questions and can move the customer toward booking.",
    problem: "Your team is serving customers when a new customer calls. The call is missed. The opportunity disappears.",
    trigger: "A call goes unanswered",
    steps: ["Missed call", "Call context", "AI response", "WhatsApp / SMS", "Booking", "CRM update"],
    example: ex("WhatsApp", ["s|Missed call from Rahul, 4:12 PM", "a|Hi Rahul 👋 Sorry we missed your call.\nWe have 11 AM and 3 PM available tomorrow.\nWhich works better?"]),
    outcome: "Recover conversations that would otherwise be lost.",
    bestFor: ["Restaurants", "Salons & Spas", "Clinics", "Home Services", "Auto Services"],
    integrations: ["Phone", "WhatsApp", "CRM", "Calendar"],
  }),
  A(2, "lead-response", "Zap", "Lead Response Agent", "Revenue", {
    featured: true,
    shortDescription: "Replies to every new enquiry straight away and hands your team a lead that is ready to call.",
    description: "Replies to new enquiries as they arrive, asks the right questions, shares the right information and passes a ready-to-call lead to the right person on your team.",
    problem: "A new enquiry arrives from a form, an ad or a portal. Whoever replies first often wins, and your team is busy.",
    trigger: "A new enquiry arrives",
    steps: ["New enquiry", "Read the details", "Instant reply", "Ask key questions", "Assign an owner", "CRM update"],
    example: ex("WhatsApp", ["s|New enquiry, website form", "a|Hi Priya, thanks for getting in touch. What would you like help with, and by when?", "c|A quote for 20 units, needed by month end.", "a|Noted. I'm sharing our options now and asking Arjun from our team to call you today."]),
    outcome: "Give every enquiry a fast, consistent first response.",
    bestFor: ["Real Estate", "Education", "Home Services", "B2B", "Agencies", "Auto Services"],
    integrations: ["Forms", "WhatsApp", "Email", "CRM"],
  }),
  A(3, "quote-followup", "FileText", "Quote Follow-Up Agent", "Revenue", {
    shortDescription: "Follows up on every quote at the right moment so none go quiet by accident.",
    description: "Tracks every quote you send, follows up on a schedule you set, answers simple questions and tells the owner when a customer is ready to talk.",
    problem: "A quote goes out and then goes quiet. Following up falls to whoever has a spare minute.",
    trigger: "A quote is sent",
    steps: ["Quote sent", "Track status", "Timed nudge", "Answer questions", "Alert the owner", "CRM update"],
    example: ex("WhatsApp", ["a|Hi Meera, checking in on the quote we sent on Tuesday. Is there anything you'd like me to clarify or adjust?", "c|Can you do it a little sooner?", "a|I'll check with the team and confirm the earliest date. Rohan will follow up with you today."]),
    outcome: "Fewer quotes left waiting for an answer.",
    bestFor: ["Home Services", "Auto Services", "B2B", "Manufacturing", "Agencies", "Professional Services"],
    integrations: ["Email", "WhatsApp", "CRM", "Quoting tool"],
  }),
  A(4, "appointment-recovery", "CalendarCheck", "Appointment Recovery Agent", "Revenue", {
    shortDescription: "Reminds, confirms and rebooks so fewer appointments end as empty slots.",
    description: "Sends reminders, confirms attendance, offers new times to people who cannot make it and can fill freed slots from a waiting list, all within rules you set.",
    problem: "Appointments are forgotten or missed, and empty slots are hard to refill at short notice.",
    trigger: "A booking is coming up",
    steps: ["Upcoming booking", "Reminder", "Confirm or reschedule", "No-show check", "Offer a new slot", "Calendar update"],
    example: ex("WhatsApp", ["a|Hi Sana, a reminder of your appointment tomorrow at 4 PM. Reply 1 to confirm or 2 to reschedule.", "c|2", "a|No problem. I have 11 AM or 5 PM on Friday. Which suits you?"]),
    outcome: "Keep more of the time you have already made available.",
    bestFor: ["Salons & Spas", "Clinics", "Restaurants", "Auto Services", "Professional Services"],
    integrations: ["WhatsApp", "SMS", "Calendar", "Booking system"],
  }),
  A(5, "winback", "Heart", "Customer Winback Agent", "Revenue", {
    shortDescription: "Gently brings past customers back with a message that fits their history.",
    description: "Finds customers who have not returned, writes a relevant message using their history, sends it for your approval and routes replies to your team.",
    problem: "Past customers drift away quietly, and nobody has the time to reach out to them.",
    trigger: "A customer goes quiet",
    steps: ["Customer list", "Find lapsed customers", "Personalise the message", "Send for approval", "Handle replies", "Booking or order"],
    example: ex("WhatsApp", ["a|Hi Karan, it's been a while since your last visit. We'd love to see you again. Shall I hold a slot for you this week?", "c|Saturday works.", "a|Done. Saturday at 11 AM is held for you."]),
    outcome: "Reopen relationships that went quiet.",
    bestFor: ["Restaurants", "Salons & Spas", "Retail", "D2C / E-commerce", "Auto Services", "Clinics"],
    integrations: ["CRM", "WhatsApp", "Email", "Orders / POS"],
  }),
  A(6, "review", "Star", "Review & Reputation Agent", "Customer", {
    shortDescription: "Asks for feedback after every visit and flags problems to your team quickly.",
    description: "Asks recent customers for feedback at the right moment, alerts your team to concerns quickly and drafts replies to public reviews for your approval.",
    problem: "Happy customers rarely write reviews on their own, and unhappy ones may go public before you hear from them.",
    trigger: "A visit or order is completed",
    steps: ["Visit completed", "Feedback request", "Read the response", "Flag concerns", "Draft review replies", "You approve"],
    example: ex("WhatsApp", ["a|Hi Nisha, thanks for visiting us today. How was your experience?", "c|Food was great but the wait was long.", "a|Thank you for telling us. I've passed this to the manager. If you'd like to share your experience publicly, here is the link."]),
    outcome: "Hear from customers sooner and respond with care.",
    bestFor: ["Restaurants", "Salons & Spas", "Clinics", "Auto Services", "Home Services", "Retail"],
    integrations: ["WhatsApp", "Google Business Profile", "CRM", "Email"],
  }),
  A(7, "receptionist", "Headset", "AI Receptionist", "Customer", {
    shortDescription: "Answers calls and messages, handles common questions and takes bookings.",
    description: "Answers calls and messages, handles common questions, checks availability, takes bookings and passes anything complex to a person.",
    problem: "Phones and chats ring at the busiest moments, and a front desk can only answer one at a time.",
    trigger: "A call or message comes in",
    steps: ["Call or message", "Understand the request", "Check availability", "Book or answer", "Confirm", "Hand over if needed"],
    example: ex("WhatsApp", ["c|Hi, are you free for an appointment tomorrow afternoon?", "a|Yes, we have 2 PM and 4:30 PM. Which suits you?", "c|2 PM please.", "a|Booked for 2 PM. A confirmation is on its way to you."]),
    outcome: "Every call and message gets an answer, even at the busiest moment.",
    bestFor: ["Restaurants", "Salons & Spas", "Clinics", "Professional Services", "Education"],
    integrations: ["Phone", "WhatsApp", "Calendar", "Booking system"],
  }),
  A(8, "whatsapp", "MessageCircle", "WhatsApp Concierge Agent", "Customer", {
    featured: true,
    shortDescription: "A helpful first point of contact on WhatsApp, from questions to orders and bookings.",
    description: "Handles customer conversations on WhatsApp: answers questions, shares menus or catalogues, recommends options and moves customers toward an order or booking.",
    problem: "Customers want to ask, browse and book on WhatsApp, but replies arrive late or not at all.",
    trigger: "A WhatsApp message arrives",
    steps: ["Message arrives", "Understand intent", "Answer or recommend", "Collect details", "Order or booking", "Hand over if needed"],
    example: ex("WhatsApp", ["c|What are your timings tomorrow?", "a|We're open 9 AM to 7 PM. Would you like me to book a time for you?", "c|Yes, around 5.", "a|I have 5:00 PM free. Shall I confirm it?"]),
    outcome: "Give customers a quick, friendly answer on the channel they already use.",
    bestFor: ["Retail", "D2C / E-commerce", "Restaurants", "Real Estate", "Salons & Spas", "Clinics"],
    integrations: ["WhatsApp", "Catalogue", "CRM", "Payments"],
  }),
  A(9, "support", "LifeBuoy", "Customer Support Agent", "Customer", {
    shortDescription: "Answers the repeat questions from your own policies and hands real issues to people.",
    description: "Answers common questions from your own policies and knowledge, resolves simple requests and passes complex cases to a person with the context ready.",
    problem: "The same questions arrive again and again, and real issues wait in the same queue.",
    trigger: "A support question arrives",
    steps: ["Question arrives", "Search your knowledge", "Draft the answer", "Resolve or escalate", "Log the case", "Learn from feedback"],
    example: ex("Email", ["c|What is your refund policy for a damaged item?", "a|Damaged items can be returned within our policy window. I've shared the steps and flagged your case to the team so a person can confirm the refund."]),
    outcome: "Free your team for the cases that need a person.",
    bestFor: ["D2C / E-commerce", "Retail", "Education", "Clinics", "B2B"],
    integrations: ["Helpdesk", "Email", "WhatsApp", "Knowledge base"],
  }),
  A(10, "order-status", "Package", "Order Status Agent", "Customer", {
    shortDescription: "Answers “where is my order?” from your live systems and warns customers about delays.",
    description: "Looks up the live status in your systems, answers customers directly and tells them proactively when something changes.",
    problem: "Customers keep asking where their order is, and your team keeps checking systems to answer.",
    trigger: "A customer asks about an order",
    steps: ["Customer asks", "Identify the order", "Check your system", "Reply with status", "Alert on delay", "Log the query"],
    example: ex("WhatsApp", ["c|Where is my order 4821?", "a|It left our warehouse this morning and is out for delivery today. Here is your tracking link."]),
    outcome: "Fewer “where is it?” messages for your team to answer by hand.",
    bestFor: ["D2C / E-commerce", "Retail", "Manufacturing", "Logistics", "B2B"],
    integrations: ["Order system", "WhatsApp", "Email", "Courier tracking"],
  }),
  A(11, "client-onboarding", "UserPlus", "Client Onboarding Agent", "Operations", {
    shortDescription: "Guides new clients through set-up and prepares a clean record for your team.",
    description: "Guides each new client, patient or student through the intake steps, collects the required details and prepares a clean record for your team.",
    problem: "New clients and patients need forms, details and set-up steps. Chasing it all slows the start.",
    trigger: "A new client signs up",
    steps: ["New client", "Welcome message", "Collect details", "Check completeness", "Create the record", "Notify your team"],
    example: ex("WhatsApp", ["a|Welcome! To set up your file, I need your full name, contact number and the reason for your visit.", "c|Sure, sending them now.", "s|Intake complete. Record ready for review."]),
    outcome: "Start every relationship with complete, tidy information.",
    bestFor: ["Clinics", "Professional Services", "Agencies", "Education", "B2B"],
    integrations: ["Forms", "WhatsApp", "Email", "CRM / records"],
  }),
  A(12, "document-chase", "FileCheck", "Document Chase Agent", "Operations", {
    shortDescription: "Politely chases missing documents until the file is complete.",
    description: "Requests the documents you need, tracks what is missing, sends polite reminders, checks what arrives and tells the owner when the file is complete.",
    problem: "Work stalls while you wait for documents, and someone has to keep asking.",
    trigger: "A document is needed",
    steps: ["Request sent", "Track what is missing", "Polite reminder", "Receive and check", "File in place", "Notify the owner"],
    example: ex("WhatsApp", ["a|Hi Imran, we still need your signed form and ID proof to proceed. Here is a link to upload them.", "c|Uploading now.", "a|Received, both are complete. I've let the team know."]),
    outcome: "Stop work from stalling on missing paperwork.",
    bestFor: ["Professional Services", "Clinics", "Education", "Logistics", "Manufacturing", "Agencies"],
    integrations: ["Email", "WhatsApp", "Document storage", "Workflow tool"],
  }),
  A(13, "field-service", "Wrench", "Field Service Agent", "Operations", {
    shortDescription: "Keeps jobs, technicians and customers in sync from request to completion.",
    description: "Schedules jobs, matches the right technician, keeps customers updated and logs completion, with your coordinator approving what matters.",
    problem: "Jobs, technicians and customers need to stay in sync, and updates get lost between them.",
    trigger: "A job is requested",
    steps: ["Job request", "Check skills and area", "Assign a technician", "Notify the customer", "Track completion", "Close the job"],
    example: ex("WhatsApp", ["a|Hi Anita, technician Ravi will arrive between 2 and 4 PM today. I'll message you when he is on his way.", "s|Job closed. Report logged."]),
    outcome: "Give customers clear updates without your coordinator making every call.",
    bestFor: ["Home Services", "Auto Services", "Logistics", "Manufacturing"],
    integrations: ["Scheduling tool", "WhatsApp", "Maps", "CRM"],
  }),
  A(14, "inventory-exception", "Boxes", "Inventory Exception Agent", "Operations", {
    shortDescription: "Watches stock and orders, and flags exceptions before they turn into problems.",
    description: "Watches stock and order data against your rules, flags exceptions as they appear and tells the right person what needs a decision.",
    problem: "Stock problems are noticed late: shortages, mismatches and slow movers. By then orders are affected.",
    trigger: "Stock data changes",
    steps: ["Stock data", "Compare to your rules", "Detect the exception", "Alert the owner", "Suggest an action", "Log the decision"],
    example: ex("Alert", ["s|Exception: Item 204 is below its reorder level and open orders depend on it.", "a|Suggested: raise a purchase request with Supplier B. Approve?"]),
    outcome: "Spot problems while there is still time to act.",
    bestFor: ["Retail", "Manufacturing", "Logistics", "Auto Services", "D2C / E-commerce"],
    integrations: ["ERP", "Inventory system", "Spreadsheets", "Email"],
  }),
  A(15, "sales-research", "Search", "Sales Research Agent", "Research", {
    shortDescription: "Researches target accounts and prepares a short brief before your team's call.",
    description: "Researches target companies from sources you approve, finds decision makers and prepares a short account brief for your sales team.",
    problem: "Sales teams spend hours researching accounts before they can have a useful conversation.",
    trigger: "A target account is added",
    steps: ["Target list", "Research the company", "Find decision makers", "Summarise", "Brief for the rep", "CRM update"],
    example: ex("Account brief", ["s|Account brief ready: Northline Foods", "a|Recent news, key contacts and suggested talking points are attached for your call."]),
    outcome: "Walk into every call already informed.",
    bestFor: ["B2B", "Agencies", "Professional Services", "Manufacturing"],
    integrations: ["CRM", "Approved web sources", "Email", "Spreadsheets"],
  }),
  A(16, "rfp", "ScrollText", "RFP / Tender Agent", "Research", {
    shortDescription: "Reads tenders and quote requests, extracts requirements and drafts responses for review.",
    description: "Reads tender and quote-request documents, extracts requirements and deadlines, drafts responses from your approved content and flags gaps for your experts.",
    problem: "Tenders and quote requests are long. Finding the requirements and drafting answers takes your best people days.",
    trigger: "A tender or request arrives",
    steps: ["Document arrives", "Extract requirements", "Match your content", "Draft the response", "Flag gaps", "Team review"],
    example: ex("Workspace", ["s|Tender received. Requirements and deadlines extracted.", "a|Most sections are drafted from your approved content. Three need input from an expert."]),
    outcome: "Give your experts a strong first draft instead of a blank page.",
    bestFor: ["B2B", "Manufacturing", "Professional Services", "Agencies"],
    integrations: ["Email", "Document storage", "Knowledge base", "CRM"],
  }),
  A(17, "procurement", "ShoppingCart", "Procurement Agent", "Finance", {
    shortDescription: "Collects requests, compares supplier quotes and chases suppliers for you.",
    description: "Collects purchase requests, checks them against budget and policy, compares supplier quotes and chases suppliers for a response.",
    problem: "Purchase requests, supplier quotes and follow-ups move slowly because they live in inboxes.",
    trigger: "A purchase request is raised",
    steps: ["Request raised", "Check policy", "Request quotes", "Compare suppliers", "Recommend", "Your approval"],
    example: ex("Workspace", ["a|Three supplier quotes received. Supplier B is lowest and within budget. Supplier A has the fastest delivery. Approve B?"]),
    outcome: "Move purchases forward without losing control of spend.",
    bestFor: ["Manufacturing", "B2B", "Logistics", "Professional Services"],
    integrations: ["ERP", "Email", "Spreadsheets", "Approval tool"],
  }),
  A(18, "collections", "Wallet", "Finance / Collections Agent", "Finance", {
    shortDescription: "Sends friendly, rule-based payment reminders and flags accounts that need a call.",
    description: "Sends friendly, rule-based payment reminders, answers invoice questions and flags the accounts that need a personal call.",
    problem: "Invoices go overdue because following up is awkward and easy to postpone.",
    trigger: "An invoice is due",
    steps: ["Invoice due", "Reminder", "Handle the query", "Payment link", "Escalate if overdue", "Update the ledger"],
    example: ex("Email", ["a|Hi Rakesh, a gentle reminder that invoice 1043 is due on Friday. Here is the payment link. Please let me know if anything needs correcting."]),
    outcome: "Keep follow-up consistent without straining the relationship.",
    bestFor: ["B2B", "Professional Services", "Logistics", "Education", "Manufacturing", "Agencies"],
    integrations: ["Accounting software", "Email", "WhatsApp", "Payments"],
  }),
  A(19, "reporting", "TrendingUp", "Reporting & Insights Agent", "Intelligence", {
    shortDescription: "Builds your regular reports and explains what changed in plain language.",
    description: "Pulls numbers from your systems, builds the regular report and explains what changed in plain language, ready for your review.",
    problem: "Reports take hours to assemble and are out of date by the time they are read.",
    trigger: "A report is due",
    steps: ["Collect data", "Compile figures", "Spot changes", "Write the summary", "Send for review", "Share"],
    example: ex("Email", ["a|This week's summary is ready. Enquiries are steady, quote follow-ups are behind, and two items need your decision."]),
    outcome: "Get the picture without spending the week building it.",
    bestFor: ["Agencies", "Real Estate", "B2B", "Manufacturing", "Retail"],
    integrations: ["Spreadsheets", "Databases", "BI tools", "Email"],
  }),
  A(20, "executive-intelligence", "Compass", "Executive Intelligence Agent", "Intelligence", {
    shortDescription: "One short morning briefing from across the business, with the exceptions that need you.",
    description: "Brings the key signals from across your business into one short briefing and highlights the exceptions that need a decision.",
    problem: "Leaders get information late and in pieces, so decisions lean on instinct or hearsay.",
    trigger: "A new day begins",
    steps: ["Connect sources", "Track key signals", "Detect exceptions", "Write the briefing", "Answer follow-ups", "Log decisions"],
    example: ex("Briefing", ["s|Morning briefing", "a|Three things need you today: an overdue vendor, a delayed shipment and a large quote awaiting approval."]),
    outcome: "Start each day knowing what needs a decision.",
    bestFor: ["B2B", "Manufacturing", "Logistics", "Professional Services", "Real Estate"],
    integrations: ["ERP", "CRM", "Spreadsheets", "Email"],
  }),
];

export const AGENT_BY_ID = Object.fromEntries(AGENTS.map((a) => [a.id, a]));
