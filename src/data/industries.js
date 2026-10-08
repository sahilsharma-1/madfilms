import { AGENTS, AGENT_BY_ID, ex } from "./agents";

// One interactive system, not one page per industry.
// Each industry lists the agents shown for it. An entry points at a master agent in agents.js and may
// rename it for that industry (label), reword the one-line summary (s) and swap the example (x).
// Everything not overridden is inherited from the master agent. All copy is illustrative.

const e = (key, agent, label, over = {}) => ({ key, agent, label, ...over });

export const INDUSTRIES = [
  { id: "all", label: "All", accent: "blue", image: null,
    headline: "Every kind of business has work an AI agent can take on.",
    line: "Choose your industry above, or browse the full library.",
    agents: null },

  { id: "restaurants", label: "Restaurants", accent: "burgundy", image: "restaurant",
    headline: "When service is busy, enquiries wait.",
    line: "Tables to fill, phones ringing and messages piling up, all during the rush.",
    agents: [
      e("reservation", "receptionist", "Reservation Agent", {
        s: "Takes table bookings by call or message and confirms them.",
        x: ex("WhatsApp", ["c|Do you have a table for four on Saturday at 8?", "a|Yes, 8:00 PM is available for four. Shall I book it under your name?", "c|Yes, Arjun.", "a|Booked. A confirmation is on its way to this number."]) }),
      e("concierge", "whatsapp", "WhatsApp Concierge"),
      e("missed-call", "missed-call", "Missed Call Recovery"),
      e("review", "review", "Review Agent"),
      e("winback", "winback", "Customer Winback"),
      e("no-show", "appointment-recovery", "No-show Recovery", {
        s: "Confirms reservations and reaches out when a table is not taken.",
        x: ex("WhatsApp", ["a|Hi Sana, we're holding your table for 8 PM tonight. Reply 1 to confirm or 2 to cancel.", "c|2, something came up.", "a|No problem. Would you like me to find another evening this week?"]) }),
      e("ordering", "order-status", "Ordering Agent", {
        s: "Takes takeaway and delivery orders on chat and keeps customers updated.",
        x: ex("WhatsApp", ["c|Can I order two paneer wraps for pickup at 7?", "a|Yes. Two paneer wraps for pickup at 7:00 PM. Anything to drink?", "c|No, that's all.", "a|Order placed. I'll message you when it's ready."]) }),
    ] },

  { id: "salons", label: "Salons & Spas", accent: "purple", image: "salon",
    headline: "Hands busy with a client, phone ringing.",
    line: "Bookings, reminders and rebooking tend to slip when the chair is full.",
    agents: [
      e("receptionist", "receptionist", "AI Receptionist"),
      e("missed-call", "missed-call", "Missed Call Recovery"),
      e("no-show", "appointment-recovery", "Appointment & No-show Recovery"),
      e("winback", "winback", "Customer Winback"),
      e("review", "review", "Review Agent"),
      e("concierge", "whatsapp", "WhatsApp Concierge"),
    ] },

  { id: "clinics", label: "Clinics", accent: "green", image: "clinic",
    headline: "A front desk stretched between patients and phones.",
    line: "Intake, appointments, reminders and recall all compete for the same few people.",
    agents: [
      e("intake", "client-onboarding", "Patient Intake Agent", { s: "Guides new patients through intake and prepares a clean record for your team." }),
      e("appointment", "receptionist", "Appointment Agent", { s: "Books and changes appointments by call or message." }),
      e("reminder", "appointment-recovery", "Reminder Agent", { s: "Reminds patients, confirms attendance and offers new times." }),
      e("recall", "winback", "Recall Agent", {
        s: "Reaches out to patients who are due for a check-up or follow-up visit.",
        x: ex("WhatsApp", ["a|Hi Mr. Shah, it's time for your routine check-up. Would you like to book a visit this week?", "c|Thursday morning.", "a|Thursday at 10 AM is booked. A reminder will follow the day before."]) }),
      e("documents", "document-chase", "Document Collection Agent", { s: "Collects the forms and records needed before a visit." }),
      e("followup", "support", "Follow-up Agent", {
        s: "Checks in after a visit, answers simple questions and alerts staff when needed.",
        x: ex("WhatsApp", ["a|Hi Nisha, how are you feeling after your visit yesterday? Reply here if you have any questions.", "c|I have a question about the instructions.", "a|Happy to help. I'm passing this to the clinic team so they can answer it properly today."]) }),
      e("concierge", "whatsapp", "WhatsApp Concierge"),
    ] },

  { id: "real-estate", label: "Real Estate", accent: "gold", image: "real-estate",
    headline: "Leads go cold within hours.",
    line: "Enquiries, site visits and follow-ups all depend on who is free to reply.",
    agents: [
      e("lead-response", "lead-response", "Lead Response Agent"),
      e("qualification", "lead-response", "Lead Qualification Agent", {
        s: "Asks the right questions and tells your team which leads are ready for a call.",
        x: ex("WhatsApp", ["a|Thanks for your interest. Which area are you looking in, and what budget range works for you?", "c|Around the city centre, mid-range.", "a|Thanks. I've noted this and flagged you as ready for a call with our advisor, Neha."]) }),
      e("recommendation", "whatsapp", "Property Recommendation Agent", {
        s: "Suggests listings that match what a buyer has said they want.",
        x: ex("WhatsApp", ["c|I need a 2-bedroom with parking, near good schools.", "a|Here are three listings that match. Would you like to see photos or book a visit for any of them?"]) }),
      e("site-visit", "receptionist", "Site Visit Booking Agent", {
        s: "Books and confirms site visits and reschedules when plans change.",
        x: ex("WhatsApp", ["a|Shall I book your site visit for Saturday at 11 AM?", "c|Make it 12.", "a|Done. Saturday at 12 PM. You'll get the address and a reminder."]) }),
      e("followup", "quote-followup", "Follow-up Agent", {
        s: "Follows up after enquiries and visits so interested buyers are not forgotten.",
        x: ex("WhatsApp", ["a|Hi Ankit, it was good to show you the property yesterday. Do you have any questions, or would you like to see another option?"]) }),
      e("reactivation", "winback", "Dormant Lead Reactivation", {
        s: "Re-engages older enquiries with a relevant, respectful message.",
        x: ex("WhatsApp", ["a|Hi Rina, you enquired with us a while ago. We have new listings in the area you liked. Would you like me to share them?"]) }),
      e("broker-reporting", "reporting", "Broker Reporting", {
        s: "Summarises enquiries, visits and follow-ups for each broker and manager.",
        x: ex("Email", ["a|Weekly summary ready: enquiries, visits booked and follow-ups pending for each broker, with the leads that need attention."]) }),
    ] },

  { id: "auto", label: "Auto Services", accent: "blue", image: "auto",
    headline: "The workshop is loud. Customers still need answers.",
    line: "Service reminders, estimates and pickups depend on calls nobody has time to make.",
    agents: [
      e("service-reminder", "appointment-recovery", "Service Reminder", {
        s: "Reminds customers when a service is due and helps them book.",
        x: ex("WhatsApp", ["a|Hi Vikram, your car is due for its regular service. Would Saturday morning work?", "c|Yes, 10 AM.", "a|Booked for Saturday at 10 AM. I'll remind you the day before."]) }),
      e("missed-call", "missed-call", "Missed Call Recovery"),
      e("estimate", "quote-followup", "Estimate Follow-up", { s: "Follows up on every estimate so customers can decide." }),
      e("winback", "winback", "Customer Winback"),
      e("parts", "inventory-exception", "Parts / Inventory Agent", { s: "Flags parts that are running low or needed for open jobs." }),
      e("pickup", "order-status", "Pickup Reminder", {
        s: "Tells customers when their vehicle is ready and when to collect it.",
        x: ex("WhatsApp", ["a|Hi Vikram, your car is ready for pickup. We're open until 7 PM today.", "c|I'll come at 6.", "a|Great, see you at 6."]) }),
      e("review", "review", "Review Agent"),
    ] },

  { id: "home-services", label: "Home Services", accent: "green", image: "home-services",
    headline: "Out on a job, so the next call goes unanswered.",
    line: "Leads, quotes and scheduling all happen while the team is on site.",
    agents: [
      e("missed-call", "missed-call", "Missed Call Recovery"),
      e("lead-response", "lead-response", "Lead Response"),
      e("quote-followup", "quote-followup", "Quote Follow-up"),
      e("scheduling", "receptionist", "Scheduling Agent", { s: "Finds a time that suits the customer and the team, and confirms it." }),
      e("dispatch", "field-service", "Technician Dispatch"),
      e("customer-update", "order-status", "Customer Update Agent", {
        s: "Keeps customers informed about arrival times and job progress.",
        x: ex("WhatsApp", ["c|What time will the technician arrive?", "a|Ravi is on his way and should reach you in about 20 minutes. I'll tell you if that changes."]) }),
      e("review", "review", "Review Agent"),
    ] },

  { id: "retail", label: "Retail", accent: "purple", image: "retail",
    headline: "Customers ask on chat before they walk in.",
    line: "Product questions, order updates and stock all need quick, accurate answers.",
    agents: [
      e("concierge", "whatsapp", "WhatsApp Concierge"),
      e("order-status", "order-status", "Order Status"),
      e("winback", "winback", "Customer Winback"),
      e("review", "review", "Review Agent"),
      e("support", "support", "Customer Support"),
      e("inventory", "inventory-exception", "Inventory Exception"),
      e("missed-call", "missed-call", "Missed Call Recovery"),
    ] },

  { id: "d2c", label: "D2C / E-commerce", accent: "burgundy", image: "d2c",
    headline: "Orders, questions and returns, all on messages.",
    line: "Every conversation is a sale to win or a customer to keep.",
    agents: [
      e("whatsapp-sales", "whatsapp", "WhatsApp Sales", {
        s: "Answers product questions and guides shoppers toward ordering.",
        x: ex("WhatsApp", ["c|Do you have this in size M?", "a|Yes, in navy and olive. Would you like to see both?", "c|Navy.", "a|Here it is, with a payment link. I can also arrange delivery for tomorrow."]) }),
      e("cod", "order-status", "COD Confirmation", {
        s: "Confirms cash-on-delivery orders with the customer before dispatch.",
        x: ex("WhatsApp", ["a|Hi Pooja, you placed a cash-on-delivery order today. Please reply YES to confirm your address and order.", "c|YES", "a|Thank you. Your order is confirmed and will be dispatched soon."]) }),
      e("order-support", "support", "Order Support", {
        s: "Answers order questions using your policies and live order data.",
        x: ex("WhatsApp", ["c|Can I change my delivery address?", "a|Yes, your order hasn't shipped yet. Please send the new address and I'll update it."]) }),
      e("cart", "winback", "Abandoned Cart Recovery", {
        s: "Reminds shoppers about items left in their cart and helps them finish.",
        x: ex("WhatsApp", ["a|Hi Tara, you left a few items in your cart. Would you like help completing your order?", "c|Yes, does it ship by Friday?", "a|Yes, if you order today. Here is your cart link."]) }),
      e("returns", "support", "Returns Support", {
        s: "Guides customers through returns and exchanges within your policy.",
        x: ex("WhatsApp", ["c|I'd like to return my order.", "a|I'm sorry it wasn't right. Your order qualifies under our policy. Please share a photo and I'll start the return.", "c|Sending it now.", "a|Received. Your return is started and a team member will confirm the next step."]) }),
      e("review", "review", "Review Agent"),
      e("winback", "winback", "Winback Agent"),
      e("recommendation", "whatsapp", "Product Recommendation", {
        s: "Suggests products that fit what the customer asks for.",
        x: ex("WhatsApp", ["c|I need a gift for my sister, under a modest budget.", "a|Here are three options she may like. Would you like to see them, or tell me more about her?"]) }),
    ] },

  { id: "education", label: "Education", accent: "blue", image: "education",
    headline: "Enquiries, counselling and documents to chase.",
    line: "Admissions teams juggle many applicants, and each one needs a timely answer.",
    agents: [
      e("admission", "lead-response", "Admission Lead Agent", {
        s: "Answers every admission enquiry and prepares leads for counsellors.",
        x: ex("WhatsApp", ["a|Hi Meena, thanks for your interest in our programme. Which course are you looking at?", "c|The evening batch.", "a|Thanks. I'm sharing the details now and asking a counsellor to call you today."]) }),
      e("counselling", "quote-followup", "Counselling Follow-up", {
        s: "Follows up after counselling so applicants move to the next step.",
        x: ex("WhatsApp", ["a|Hi Meena, it was good speaking with you. Do you have any questions, or shall I help with the next step?"]) }),
      e("documents", "document-chase", "Document Collection"),
      e("fees", "collections", "Fee Reminder", {
        s: "Sends polite fee reminders and answers simple payment questions.",
        x: ex("WhatsApp", ["a|Hi Mr. Rao, a reminder that the term fee is due on the 10th. Here is the payment link.", "c|Can I pay in two parts?", "a|I'll check with the accounts team and confirm today."]) }),
      e("booking", "receptionist", "Appointment Booking", { s: "Books counselling sessions, campus visits and meetings." }),
      e("student-support", "support", "Student Support", {
        s: "Answers common student questions from your own information.",
        x: ex("WhatsApp", ["c|When does the next semester begin?", "a|Classes begin on the date in your academic calendar. I've sent it to you. Would you like a reminder?"]) }),
    ] },

  { id: "agencies", label: "Agencies", accent: "purple", image: "b2b",
    headline: "Client work comes first, admin second.",
    line: "New enquiries, onboarding and reporting still need doing every week.",
    agents: [
      e("lead-response", "lead-response", "Lead Response Agent"),
      e("onboarding", "client-onboarding", "Client Onboarding Agent"),
      e("assets", "document-chase", "Asset & Document Chase", { s: "Chases clients for the files, approvals and details a project needs." }),
      e("reporting", "reporting", "Reporting & Insights"),
      e("research", "sales-research", "Sales Research"),
      e("proposal", "quote-followup", "Proposal Follow-up", { s: "Follows up on proposals so good ones don't go quiet." }),
    ] },

  { id: "b2b", label: "B2B", accent: "blue", image: "b2b",
    headline: "Long sales cycles, many follow-ups.",
    line: "Research, qualification, tenders and collections all depend on steady follow-through.",
    agents: [
      e("research", "sales-research", "Sales Research"),
      e("qualification", "lead-response", "Lead Qualification", {
        s: "Qualifies inbound leads against your criteria and routes the right ones.",
        x: ex("Email", ["a|Thanks for reaching out. To point you to the right person: what is the size of your team, and what are you trying to solve?", "c|About 80 people. We want to cut manual reporting.", "a|Thanks. I've shared this with our solutions lead, who will contact you."]) }),
      e("rfp", "rfp", "RFP / Tender Agent"),
      e("procurement", "procurement", "Procurement Agent"),
      e("vendor", "procurement", "Vendor Follow-up", {
        s: "Chases vendors for quotes, confirmations and delivery dates.",
        x: ex("Email", ["a|Hello, we're awaiting your confirmation for purchase order 2210. Could you share the expected delivery date?", "c|Delivery is planned for the 18th.", "a|Thank you. I've updated the tracker and informed the buyer."]) }),
      e("quote-followup", "quote-followup", "Quote Follow-up"),
      e("collections", "collections", "Collections Agent"),
      e("executive", "executive-intelligence", "Executive Reporting"),
    ] },

  { id: "manufacturing", label: "Manufacturing", accent: "gold", image: "manufacturing",
    headline: "Quotes, suppliers and orders spread across many inboxes.",
    line: "Requests and follow-ups pile up between the shop floor and the office.",
    agents: [
      e("rfq", "rfp", "RFQ Agent", {
        s: "Reads quote requests, extracts specifications and drafts a response for review.",
        x: ex("Workspace", ["s|Quote request received. Specifications and delivery date extracted.", "a|A draft quote is prepared from your approved pricing rules. Two items need your engineer's input."]) }),
      e("procurement", "procurement", "Procurement Agent"),
      e("vendor", "procurement", "Vendor Follow-up", {
        s: "Chases vendors for confirmations, documents and delivery dates.",
        x: ex("Email", ["a|Hello, we're awaiting your confirmation for purchase order 2210. Could you share the expected delivery date?", "c|Delivery is planned for the 18th.", "a|Thank you. I've updated the tracker and informed the buyer."]) }),
      e("order-status", "order-status", "Order Status"),
      e("inventory", "inventory-exception", "Inventory Exception"),
      e("documents", "document-chase", "Document Collection"),
      e("reporting", "reporting", "Reporting Agent"),
    ] },

  { id: "logistics", label: "Logistics", accent: "green", image: "logistics",
    headline: "Shipments move. Paperwork and updates must move too.",
    line: "Status questions, proof of delivery and invoices keep dispatch teams on the phone.",
    agents: [
      e("shipment", "order-status", "Shipment Status", {
        s: "Answers “where is my shipment?” from your tracking data.",
        x: ex("WhatsApp", ["c|Where is shipment 7712?", "a|It has cleared the hub and is expected at your warehouse tomorrow afternoon. Here is the tracking link."]) }),
      e("pod", "document-chase", "POD Collection", {
        s: "Collects proof of delivery from drivers and partners and files it.",
        x: ex("WhatsApp", ["a|Hi Suresh, please send the signed proof of delivery for shipment 7712.", "c|Sending the photo.", "a|Received and filed. Thank you."]) }),
      e("document-chase", "document-chase", "Document Chase"),
      e("invoice", "collections", "Invoice Follow-up", { s: "Follows up on unpaid freight invoices and queries." }),
      e("dispatch", "field-service", "Dispatch Coordination", {
        s: "Matches loads to vehicles and keeps drivers and customers updated.",
        x: ex("WhatsApp", ["a|Load assigned to driver Imran for tomorrow 6 AM. Customer has been notified of the pickup window.", "s|Dispatcher approval pending."]) }),
      e("exception", "inventory-exception", "Exception Detection", {
        s: "Flags delayed or stuck shipments so your team can act early.",
        x: ex("Alert", ["s|Exception: shipment 7712 has not moved at the hub for longer than usual.", "a|Suggested: contact the hub manager and notify the customer. Approve?"]) }),
    ] },

  { id: "professional", label: "Professional Services", accent: "burgundy", image: "b2b",
    headline: "Clients wait on documents, invoices and replies.",
    line: "Onboarding, paperwork and billing take time away from the work itself.",
    agents: [
      e("onboarding", "client-onboarding", "Client Onboarding Agent"),
      e("documents", "document-chase", "Document Chase Agent"),
      e("receptionist", "receptionist", "AI Receptionist"),
      e("proposal", "quote-followup", "Proposal Follow-up", { s: "Follows up on proposals so good ones don't go quiet." }),
      e("collections", "collections", "Finance / Collections"),
      e("reporting", "reporting", "Reporting & Insights"),
      e("tender", "rfp", "RFP / Tender Agent"),
    ] },
];

export const INDUSTRY_BY_ID = Object.fromEntries(INDUSTRIES.map((i) => [i.id, i]));

/**
 * Resolve an industry into the agent entries to show. Each entry is a master agent merged with the
 * industry's own label, summary and example. `key` is unique within the industry.
 */
export function resolveEntries(industryId) {
  const ind = INDUSTRY_BY_ID[industryId] || INDUSTRIES[0];
  if (!ind.agents) {
    return AGENTS.map((a, i) => ({ ...a, key: a.id, masterId: a.id, isFeatured: a.featured && i === AGENTS.findIndex((x) => x.featured) }));
  }
  return ind.agents.map((en, i) => {
    const m = AGENT_BY_ID[en.agent];
    return {
      ...m,
      key: en.key,
      masterId: m.id,
      name: en.label || m.name,
      shortDescription: en.s || m.shortDescription,
      example: en.x || m.example,
      isFeatured: i === 0,
    };
  });
}

export const featuredKey = (industryId) => {
  const list = resolveEntries(industryId);
  return (list.find((x) => x.isFeatured) || list[0]).key;
};

// Industry names used in each agent's bestFor list, for the crawlable index.
export const INDUSTRY_LABELS = INDUSTRIES.filter((i) => i.id !== "all").map((i) => i.label);
