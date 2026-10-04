"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
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
  Stethoscope,
} from "lucide-react";

import "./agents-explorer.css";

const workflows = [
  {
    id: "resume",
    name: "Resume Screening",
    image: "/media/2.jpg",
    icon: <UserCheck />,
    accent: "blue",

    title: "Resume screening, done your way.",

    description:
      "Review applications against the role criteria that matter to your team — then keep a person in control of the final shortlist.",

    note: "Example workflow",

    steps: [
      {
        label: "INPUT",
        title: "124 applications",
        icon: <FileText />,
      },
      {
        label: "AI WORK",
        title: "Matches your criteria",
        icon: <Search />,
      },
      {
        label: "RESULT",
        title: "18 shortlisted",
        icon: <UserCheck />,
      },
      {
        label: "HUMAN",
        title: "You approve",
        icon: <Check />,
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
    name: "Interview Scheduling",
    image: "/media/2.jpg",
    icon: <CalendarDays />,
    accent: "violet",

    title: "Interview scheduling, without the back-and-forth.",

    description:
      "Coordinate candidates, interviewers and availability around the rules your team already follows.",

    note: "Example workflow",

    steps: [
      {
        label: "INPUT",
        title: "Candidate ready",
        icon: <UserCheck />,
      },
      {
        label: "AI WORK",
        title: "Finds suitable slots",
        icon: <CalendarDays />,
      },
      {
        label: "RESULT",
        title: "Interview scheduled",
        icon: <Check />,
      },
      {
        label: "HUMAN",
        title: "You confirm",
        icon: <UserCheck />,
      },
    ],

    detail: [
      "Interviewer availability",
      "Candidate preferences",
      "Scheduling rules",
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

    note: "Example workflow",

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
    name: "Purchase Requests",
    image: "/media/4.jpg",
    icon: <ShoppingCart />,
    accent: "orange",

    title: "Purchase requests, checked before approval.",

    description:
      "Bring budget, policy and supplier checks together before a request reaches your team.",

    note: "Example workflow",

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
    name: "Account Research",
    image: "/media/5.jpg",
    icon: <Building2 />,
    accent: "blue",

    title: "Account research, ready before the call.",

    description:
      "Bring company information, recent activity and relevant context into one concise account brief.",

    note: "Example workflow",

    steps: [
      {
        label: "INPUT",
        title: "Target account",
        icon: <Building2 />,
      },
      {
        label: "AI WORK",
        title: "Researches the account",
        icon: <Search />,
      },
      {
        label: "RESULT",
        title: "Brief ready",
        icon: <FileText />,
      },
      {
        label: "HUMAN",
        title: "You decide",
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
    name: "Campaign Content",
    image: "/media/6.jpg",
    icon: <Megaphone />,
    accent: "pink",

    title: "Campaign content, built around your brand.",

    description:
      "Turn a brief into structured content while keeping your brand rules, channels and approval process in view.",

    note: "Example workflow",

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
    id: "it",
    name: "IT Helpdesk",
    image: "/media/7.jpg",
    icon: <Search />,
    accent: "cyan",

    title: "IT requests, resolved faster.",

    description:
      "Understand incoming requests, find the relevant information and route the right actions to the right people.",

    note: "Example workflow",

    steps: [
      {
        label: "INPUT",
        title: "Employee request",
        icon: <Headphones />,
      },
      {
        label: "AI WORK",
        title: "Finds the answer",
        icon: <Search />,
      },
      {
        label: "RESULT",
        title: "Resolution ready",
        icon: <Check />,
      },
      {
        label: "HUMAN",
        title: "Escalate if needed",
        icon: <UserCheck />,
      },
    ],

    detail: [
      "Request type",
      "Knowledge",
      "Resolution rules",
    ],
  },

  {
    id: "support",
    name: "Customer Requests",
    image: "/media/8.jpg",
    icon: <Headphones />,
    accent: "purple",

    title: "Customer requests, handled with context.",

    description:
      "Understand the request, find the relevant information and prepare the next action.",

    note: "Example workflow",

    steps: [
      {
        label: "INPUT",
        title: "Customer message",
        icon: <Headphones />,
      },
      {
        label: "AI WORK",
        title: "Checks the context",
        icon: <Search />,
      },
      {
        label: "RESULT",
        title: "Resolution found",
        icon: <Check />,
      },
      {
        label: "HUMAN",
        title: "Escalate exceptions",
        icon: <UserCheck />,
      },
    ],

    detail: [
      "Customer history",
      "Available information",
      "Resolution rules",
    ],
  },

  {
    id: "operations",
    name: "Operations Reporting",
    image: "/media/9.jpg",
    icon: <BarChart3 />,
    accent: "green",

    title: "Operations reporting, without the manual chase.",

    description:
      "Bring information from your existing workflow together and turn it into a clear report for review.",

    note: "Example workflow",

    steps: [
      {
        label: "INPUT",
        title: "Operational data",
        icon: <BarChart3 />,
      },
      {
        label: "AI WORK",
        title: "Finds key changes",
        icon: <Search />,
      },
      {
        label: "RESULT",
        title: "Report prepared",
        icon: <FileText />,
      },
      {
        label: "HUMAN",
        title: "You review",
        icon: <UserCheck />,
      },
    ],

    detail: [
      "Performance",
      "Exceptions",
      "Recommendations",
    ],
  },

  {
    id: "healthcare",
    name: "Patient Follow-up",
    image: "/media/10.jpg",
    icon: <Stethoscope />,
    accent: "teal",

    title: "Patient follow-up, with less admin.",

    description:
      "Help care teams organize follow-up information while keeping clinical decisions with the people responsible for care.",

    note: "Example workflow",

    steps: [
      {
        label: "INPUT",
        title: "Follow-up due",
        icon: <Stethoscope />,
      },
      {
        label: "AI WORK",
        title: "Organizes information",
        icon: <Search />,
      },
      {
        label: "RESULT",
        title: "Next step prepared",
        icon: <FileText />,
      },
      {
        label: "HUMAN",
        title: "Care team decides",
        icon: <UserCheck />,
      },
    ],

    detail: [
      "Patient context",
      "Follow-up status",
      "Care-team review",
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

          <span className="agents-eyebrow">
            AI AUTOMATION
          </span>

          <h2>
            AI that gets the
            <br />
            work done.
          </h2>

        </div>


        <p>
          Give repetitive work to AI.
          <br />
          Keep important decisions with your team.
        </p>

      </div>


      {/* =====================================================
          AUTOMATION SELECTOR
          ===================================================== */}

      <div className="automation-selector">

        {workflows.map((item, index) => (

          <button
            key={item.id}
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

      <div className="automation-stage">


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
        <div className="automation-content">

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
                key={step.label}
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

            <span>
              Built around your workflow.
            </span>

            <button>
              See workflow
              <ArrowRight size={15} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}