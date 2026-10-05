import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, BriefcaseBusiness, ChartNoAxesCombined, Code2, Database, Film, Headphones, Megaphone, Search, Users, Workflow } from "lucide-react";
import "./company-story.css";

const capabilities = [
  [Workflow, "AI & AUTOMATION", "AI agents and workflows that take repetitive business work off your team."],
  [Code2, "SOFTWARE & DATA", "SaaS, internal tools, analytics and systems built around your business."],
  [Film, "CREATIVE & MOTION", "Motion design, 3D, video and creative technology for products and brands."],
  [Megaphone, "UGC & CONTENT", "UGC, social content and product stories made for the places your customers are."],
];

export function CompanyCapabilities() {
  return <section id="capabilities" className="company-section company-capabilities" data-tone="light">
    <div className="h2-wrap">
      <div className="company-section-heading"><p className="h2-eyebrow">One MAD Company</p><h2 className="h2-h2">From repetitive work to creative work — we build what your business needs.</h2></div>
      <div className="company-capability-list">{capabilities.map(([Icon, title, copy], i) => <article key={title} className="company-capability"><span className="company-capability-icon"><Icon size={19} strokeWidth={1.6} /></span><span className="company-capability-number">0{i + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    </div>
  </section>;
}

const workers = [
  [Search, "Sales Agent", "Researches accounts", "Company → contacts → brief"],
  [Database, "Research Agent", "Finds useful information", "Question → sources → summary"],
  [ChartNoAxesCombined, "Operations Agent", "Checks work in progress", "Activity → exceptions → review"],
  [Headphones, "Customer Agent", "Prepares customer replies", "Message → answer → handover"],
  [Users, "HR Agent", "Sorts applications", "Applications → criteria → shortlist"],
  [BriefcaseBusiness, "Finance Agent", "Checks incoming invoices", "Invoice → records → approval"],
];

export function AIWorkers() {
  return <section className="company-section company-workers" data-tone="light">
    <div className="h2-wrap"><div className="company-section-heading company-workers-heading"><p className="h2-eyebrow">AI workers</p><h2 className="h2-h2">Give your team an AI worker for the repetitive stuff.</h2><p className="h2-lead">Each one can be shaped around the job, your tools and where your team wants to review.</p></div>
      <div className="company-workers-list">{workers.map(([Icon, name, task, flow], i) => <article className="company-worker" key={name}><span className="company-worker-icon"><Icon size={18} strokeWidth={1.6} /></span><span className="company-worker-index">0{i + 1}</span><div><h3>{name}</h3><p>{task}</p><small>{flow}</small></div><span className="company-worker-mark" aria-hidden>↗</span></article>)}</div>
      <p className="company-example-note">Illustrative examples · capabilities depend on the workflow and connected systems.</p>
    </div>
  </section>;
}

const packages = [
  { id: "start", name: "MAD START", summary: "Start with one repetitive workflow.", parts: ["One AI agent", "One business workflow", "Basic integrations", "Custom instructions", "Human approval", "Reporting"] },
  { id: "grow", name: "MAD GROW", summary: "Automate more work across a team.", parts: ["Multiple AI agents", "Multiple workflows", "CRM, email or WhatsApp connections", "Analytics and monitoring", "Human approval", "Ongoing optimization"] },
  { id: "enterprise", name: "MAD ENTERPRISE", summary: "Build around a complex organization.", parts: ["Custom AI systems", "Advanced integrations", "Enterprise data", "Multiple workflows", "Permissions and implementation", "Ongoing support"] },
];

export function PackagesAndSaaS() {
  return <section id="packages" className="company-section company-packages" data-tone="light">
    <div className="h2-wrap"><div className="company-section-heading"><p className="h2-eyebrow">Ways to work together</p><h2 className="h2-h2">Start with one workflow. Build from there.</h2></div>
      <div className="company-package-list">{packages.map((item, i) => <article className="company-package" key={item.id}><div className="company-package-top"><span>0{i + 1}</span><h3>{item.name}</h3></div><p className="company-package-summary">{item.summary}</p><ul>{item.parts.map((part) => <li key={part}>{part}</li>)}</ul><a href="#contact">Let&rsquo;s design your system <ArrowRight size={15} /></a></article>)}</div>
      <div id="saas" className="company-saas"><div><p className="h2-eyebrow">MAD SaaS</p><h3>Need something ready to go?</h3><p>MAD also develops packaged AI products for common business workflows. Talk to us about what is available or being developed.</p></div><span className="company-concept-tag"><Bot size={15} /> Product concepts · availability varies</span><Link href="/agents">Explore AI agent examples <ArrowRight size={15} /></Link></div>
    </div>
  </section>;
}

const systemStory = ["AI system", "Data", "Software", "Product experience", "Product film", "UGC", "Social content", "Campaign"];

export function SystemToStory() {
  return <section id="about" className="company-section company-system" data-tone="light">
    <div className="h2-wrap"><div className="company-system-intro"><p className="h2-eyebrow">One partner, from system to story</p><h2 className="h2-h2">Technology and creative, working together.</h2><p className="h2-lead">MAD can help build the system behind a business need, then shape how its product or story reaches people.</p></div>
      <ol className="company-system-line">{systemStory.map((step, i) => <li key={step}><span>0{i + 1}</span><b>{step}</b></li>)}</ol>
    </div>
  </section>;
}

const work = [
  ["Recruiter Toolkit", "/images/projects/Recruiter Toolkit.jpg", "Creative · HR"],
  ["Talent Attraction Insights", "/images/projects/Talent Attraction Insights.jpg", "Data · Creative"],
  ["NESTLEVEL Digital Podcast", "/images/projects/Nestlevel Podcast.png", "Motion · Content"],
];

export function SelectedWork() {
  return <section id="work" className="company-section company-work" data-tone="light">
    <div className="h2-wrap"><div className="company-work-heading"><div><p className="h2-eyebrow">Selected work</p><h2 className="h2-h2">Built for real-world business.</h2></div><p className="h2-lead">A selection of work already featured across MAD&rsquo;s existing portfolio.</p></div>
      <div className="company-work-list">{work.map(([title, src, type]) => <article className="company-work-item" key={title}><div className="company-work-image"><Image src={src} alt={`${title} project`} fill sizes="(max-width: 700px) 88vw, 33vw" /></div><div className="company-work-caption"><div><h3>{title}</h3><p>{type}</p></div><ArrowRight size={17} /></div></article>)}</div>
      <p className="company-example-note">Selected project names describe MAD work experience only and do not imply endorsement, partnership or current engagement.</p>
    </div>
  </section>;
}

export function ValueAndContact() {
  return <>
    <section className="company-value" data-tone="dark"><div className="h2-wrap company-value-inner"><div><p className="h2-eyebrow">Time back for your team</p><h2>Automate the hours. Keep the people.</h2></div><p>Automation is designed to take repetitive work off people&rsquo;s plates, so your team can focus on judgement, relationships and higher-value work. The time saved depends on the process and how it is used.</p></div></section>
    <section className="company-contact" data-tone="dark"><div className="h2-wrap"><p className="h2-eyebrow">Talk to MAD</p><h2>What should we build for you?</h2><p>Tell us the work you&rsquo;re trying to automate, the product you&rsquo;re trying to build, or the story you&rsquo;re trying to tell.</p><div className="company-contact-paths"><a href="mailto:hello@madcompany.co?subject=Automate%20my%20workflow">Automate my workflow <ArrowRight size={16} /></a><a href="mailto:hello@madcompany.co?subject=Build%20my%20product">Build my product <ArrowRight size={16} /></a><a href="mailto:hello@madcompany.co?subject=Create%20my%20content">Create my content <ArrowRight size={16} /></a></div></div></section>
  </>;
}
