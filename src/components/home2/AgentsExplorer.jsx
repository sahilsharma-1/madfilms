"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Check,
  Sparkles,
  FileText,
  Search,
  UserCheck,
  CalendarDays,
  Receipt,
  ShoppingCart,
  Building2,
  Megaphone,
  Headphones,
  BarChart3,
  Database,
} from "lucide-react";

import "./agents-explorer.css";
import "./automation-overrides.css";

const workflows = [
  {
    id: "resume",
    name: "Resume Screening",
    image: "/media/2.jpg",
    icon: <UserCheck />,
    accent: "blue",

    title: "Find the right candidates faster.",

    description:
      "Your recruiters shouldn't have to read every resume. Compare applicants with your criteria and send a shortlist to your team for approval.",

    note: "Illustrative workflow · sample data",

    steps: [
      {
        label: "INPUT",
        title: "Applications arrive",
        icon: <FileText />,
      },
      {
        label: "AI WORK",
        title: "AI reviews applications",
        icon: <Search />,
      },
      {
        label: "MATCH",
        title: "Checks your criteria",
        icon: <Check />,
      },
      {
        label: "RESULT",
        title: "Shortlist prepared",
        icon: <UserCheck />,
      },
      {
        label: "HUMAN",
        title: "Your team approves",
        icon: <UserCheck />,
      },
    ],

    detail: [
      "Skills",
      "Experience",
      "Role requirements",
    ],
  },

  {
    id: "interview",
    name: "Lead Research",
    image: "/media/2.jpg",
    icon: <CalendarDays />,
    accent: "violet",

    title: "Let your sales team sell. Let AI do the research.",

    description:
      "Find target companies, research decision makers and prepare outreach for your sales team to review.",

    note: "Illustrative workflow · sample data",

    steps: [
      {
        label: "INPUT",
        title: "Target companies",
        icon: <UserCheck />,
      },
      {
        label: "AI WORK",
        title: "Researches the market",
        icon: <CalendarDays />,
      },
      {
        label: "RESULT",
        title: "Decision makers found",
        icon: <Check />,
      },
      {
        label: "AI WORK",
        title: "Prepares outreach",
        icon: <FileText />,
      },
      {
        label: "HUMAN",
        title: "Sales team approves",
        icon: <UserCheck />,
      },
    ],

    detail: [
      "Company information",
      "Decision makers",
      "Existing CRM records",
    ],
  },

  {
    id: "invoice",
    name: "Invoice Processing",
    image: "/media/3.jpg",
    icon: <Receipt />,
    accent: "green",

    title: "Invoice processing, made simple.",

    description:
      "Read invoices, check the information that matters and route exceptions to the right person.",

    note: "Illustrative workflow · sample data",

    steps: [
      {
        label: "INPUT",
        title: "Invoice received",
        icon: <Receipt />,
      },
      {
        label: "AI WORK",
        title: "Extracts key details",
        icon: <Search />,
      },
      {
        label: "RESULT",
        title: "Match verified",
        icon: <Check />,
      },
      {
        label: "EXCEPTIONS",
        title: "Flags differences",
        icon: <Search />,
      },
      {
        label: "HUMAN",
        title: "You approve",
        icon: <UserCheck />,
      },
    ],

    detail: [
      "Vendor",
      "Amount",
      "Purchase order",
    ],
  },

  {
    id: "procurement",
    name: "Procurement",
    image: "/media/4.jpg",
    icon: <ShoppingCart />,
    accent: "orange",

    title: "Purchase requests, checked before approval.",

    description:
      "Bring budget, policy and supplier checks together before a request reaches your team.",

    note: "Illustrative workflow · sample data",

    steps: [
      {
        label: "INPUT",
        title: "Purchase request",
        icon: <ShoppingCart />,
      },
      {
        label: "AI WORK",
        title: "Checks requirements",
        icon: <Search />,
      },
      {
        label: "RESULT",
        title: "Recommendation ready",
        icon: <Check />,
      },
      {
        label: "HUMAN",
        title: "You approve",
        icon: <UserCheck />,
      },
    ],

    detail: [
      "Budget",
      "Policy",
      "Supplier",
    ],
  },

  {
    id: "sales",
    name: "Sales Outreach",
    image: "/media/5.jpg",
    icon: <Building2 />,
    accent: "blue",

    title: "Personalised outreach, ready for review.",

    description:
      "Research the right companies, prepare a relevant first message and keep your team in charge of sending it.",

    note: "Illustrative workflow · sample data",

    steps: [
      {
        label: "INPUT",
        title: "Selected companies",
        icon: <Building2 />,
      },
      {
        label: "AI WORK",
        title: "Personalises a message",
        icon: <Search />,
      },
      {
        label: "RESULT",
        title: "Follow-up prepared",
        icon: <FileText />,
      },
      {
        label: "HUMAN",
        title: "You approve and send",
        icon: <UserCheck />,
      },
    ],

    detail: [
      "Company context",
      "Recent activity",
      "Decision makers",
    ],
  },

  {
    id: "marketing",
    name: "Marketing",
    image: "/media/6.jpg",
    icon: <Megaphone />,
    accent: "pink",

    title: "Campaign content, built around your brand.",

    description:
      "Turn a brief into structured content while keeping your brand rules, channels and approval process in view.",

    note: "Illustrative workflow · sample data",

    steps: [
      {
        label: "INPUT",
        title: "Campaign brief",
        icon: <FileText />,
      },
      {
        label: "AI WORK",
        title: "Builds content",
        icon: <Sparkles />,
      },
      {
        label: "RESULT",
        title: "Campaign ready",
        icon: <Megaphone />,
      },
      {
        label: "HUMAN",
        title: "You approve",
        icon: <UserCheck />,
      },
    ],

    detail: [
      "Brand guidelines",
      "Campaign goals",
      "Channel requirements",
    ],
  },

  {
    id: "reporting",
    name: "Reporting",
    image: "/media/9.jpg",
    icon: <BarChart3 />,
    accent: "green",

    title: "Reports prepared for review.",

    description:
      "Collect information from the tools you use, highlight what changed and prepare a clear report.",

    note: "Illustrative workflow · sample data",

    steps: [
      {
        label: "INPUT",
        title: "Business information",
        icon: <BarChart3 />,
      },
      {
        label: "AI WORK",
        title: "Collects and compares",
        icon: <Search />,
      },
      {
        label: "RESULT",
        title: "Report prepared",
        icon: <Check />,
      },
      {
        label: "HUMAN",
        title: "You review",
        icon: <UserCheck />,
      },
    ],

    detail: [
      "Report criteria",
      "Source information",
      "Human review",
    ],
  },

  {
    id: "data-operations",
    name: "Data Operations",
    image: "/media/9.jpg",
    icon: <Database />,
    accent: "blue",
    title: "Keep business data clean and ready to use.",
    description: "Bring information together, spot missing or inconsistent details, and prepare updates for your team to review.",
    note: "Illustrative workflow · sample data",
    steps: [
      { label: "INPUT", title: "Information arrives", icon: <Database /> },
      { label: "AI WORK", title: "Checks and organises", icon: <Search /> },
      { label: "RESULT", title: "Updates prepared", icon: <FileText /> },
      { label: "HUMAN", title: "You review", icon: <UserCheck /> },
    ],
    detail: ["Your data rules", "Existing records", "Team review"],
  },

  {
    id: "support",
    name: "Customer Support",
    image: "/media/8.jpg",
    icon: <Headphones />,
    accent: "purple",

    title: "Give customers a helpful answer sooner.",

    description:
      "Check a customer’s message against your information, draft a response and hand exceptions to your team.",

    note: "Illustrative workflow · sample data",

    steps: [
      {
        label: "INPUT",
        title: "Customer message",
        icon: <Headphones />,
      },
      {
        label: "AI WORK",
        title: "Checks the details",
        icon: <Search />,
      },
      {
        label: "RESULT",
        title: "Response drafted",
        icon: <FileText />,
      },
      {
        label: "HANDOFF",
        title: "Escalate when needed",
        icon: <UserCheck />,
      },
      {
        label: "HUMAN",
        title: "Your team approves",
        icon: <UserCheck />,
      },
    ],

    detail: [
      "Customer information",
      "Resolution rules",
      "Human handover",
    ],
  },

];


export default function AgentsExplorer() {

  const [active, setActive] = useState(0);

  const workflow = workflows[active];


  return (
    <section
      id="agents"
      className={`agents-section agents-${workflow.accent}`}
    >

      {/* =====================================================
          HEADER
          ===================================================== */}

      <div className="agents-header">

        <div>

          <span className="agents-eyebrow">AUTOMATION EXPLORER</span>

          <h2>
            What can we automate for you?
          </h2>

        </div>


        <p>
          Bring us a repetitive job. We build the system around it.
        </p>

      </div>


      {/* =====================================================
          AUTOMATION SELECTOR
          ===================================================== */}

      <div className="automation-selector" role="tablist" aria-label="Jobs MAD can automate">

        {workflows.map((item, index) => (

          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={index === active}
            id={`automation-tab-${item.id}`}
            aria-controls="automation-workflow-panel"
            onClick={() => setActive(index)}
            className={
              index === active
                ? "automation-tab active"
                : "automation-tab"
            }
          >

            <span className="automation-tab-icon">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

          </button>

        ))}

      </div>


      {/* =====================================================
          MAIN EXPERIENCE
          ===================================================== */}

      <div id="automation-workflow-panel" className="automation-stage" role="tabpanel" aria-labelledby={`automation-tab-${workflow.id}`}>


        {/* IMAGE */}
        <div className="automation-photo">

          <Image
            key={workflow.image}
            src={workflow.image}
            alt={workflow.name}
            fill
            sizes="(max-width: 900px) 100vw, 38vw"
            className="automation-photo-image"
          />

          <div className="automation-photo-overlay" />

          <div className="photo-label">
            {workflow.name}
          </div>

        </div>


        {/* CONTENT */}
        <div className="automation-content" key={workflow.id}>

          <div className="workflow-label">
            {workflow.note}
          </div>


          <h3>
            {workflow.title}
          </h3>


          <p className="automation-description">
            {workflow.description}
          </p>


          {/* PROCESS */}

          <div className="simple-process">

            {workflow.steps.map((step, index) => (

              <div
                className="process-step"
                key={`${step.label}-${index}`}
              >

                <div className="process-number">
                  0{index + 1}
                </div>


                <div className="process-icon">
                  {step.icon}
                </div>


                <div className="process-copy">

                  <span>
                    {step.label}
                  </span>

                  <strong>
                    {step.title}
                  </strong>

                </div>


                {index !== workflow.steps.length - 1 && (
                  <div className="process-line" />
                )}

              </div>

            ))}

          </div>


          {/* DETAILS */}

          <div className="automation-details">

            {workflow.detail.map((item) => (

              <span key={item}>

                <Check size={13} />

                {item}

              </span>

            ))}

          </div>


          {/* BOTTOM */}

          <div className="automation-footer">
            <span>Illustrative example · your team stays in control.</span>

          </div>

        </div>

      </div>

    </section>
  );
}
