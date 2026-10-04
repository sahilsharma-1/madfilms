"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Check,
  ArrowRight,
  Sparkles,
  FileText,
  Users,
  Receipt,
  Database,
  CircleCheck,
} from "lucide-react";

import "./hero-slider.css";

const slides = [
  {
    id: "executive",
    eyebrow: "ENTERPRISE AI + AUTOMATION",
    title: "AI that works the way your business works.",
    description:
      "Connect people, data and workflows — then let AI move the work forward.",
    image: "/media/1.jpg",
    type: "image",
  },

  {
    id: "hr",
    eyebrow: "AI FOR HR",
    title: "Hire faster. Decide better.",
    description:
      "AI screens applications, finds the strongest matches and prepares a shortlist for your team.",
    video: "/media/2.mp4",
    type: "video",
  },

  {
    id: "finance",
    eyebrow: "AI FOR FINANCE",
    title: "Turn paperwork into progress.",
    description:
      "AI reads invoices, checks the right information and sends exceptions to your team.",
    video: "/media/3.mp4",
    type: "video",
  },
];

export default function Hero2() {
  const [active, setActive] = useState(0);

  const slide = slides[active];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`hero hero-${slide.id}`}>

      {/* =====================================================
          SLIDE 1 — FULL IMAGE
          ===================================================== */}

      {slide.id === "executive" && (
        <>
          <div className="hero-background">

            <Image
              src="/media/1.jpg"
              alt="Business leader"
              fill
              priority
              className="hero-image"
            />

            <div className="hero-image-overlay" />

          </div>

          <div className="hero-layout executive-layout">

            <HeroCopy slide={slide} />

            <ExecutiveUI />

          </div>
        </>
      )}


      {/* =====================================================
          SLIDE 2 — HR
          ===================================================== */}

      {slide.id === "hr" && (
        <div className="hero-layout split-layout">

          {/* LEFT */}
          <div className="hero-panel hr-panel">

            <HeroCopy slide={slide} />

            <HRUI />

          </div>


          {/* RIGHT */}
          <VideoPanel
            src={slide.video}
            label="HR WORKFLOW"
            position="right"
          />

        </div>
      )}


      {/* =====================================================
          SLIDE 3 — FINANCE
          ===================================================== */}

      {slide.id === "finance" && (
        <div className="hero-layout split-layout">

          {/* LEFT */}
          <VideoPanel
            src={slide.video}
            label="FINANCE WORKFLOW"
            position="left"
          />


          {/* RIGHT */}
          <div className="hero-panel finance-panel">

            <HeroCopy slide={slide} />

            <FinanceUI />

          </div>

        </div>
      )}


      {/* =====================================================
          CONTROLS
          ===================================================== */}

      <div className="hero-controls">

        <div className="hero-counter">
          0{active + 1}
          <span>/ 03</span>
        </div>

        <div className="hero-progress">

          {slides.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActive(index)}
              className={index === active ? "active" : ""}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span />
            </button>
          ))}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   HERO COPY
   ========================================================= */

function HeroCopy({ slide }) {
  return (
    <div className="hero-copy">

      <div className="hero-eyebrow">

        <Sparkles size={14} />

        <span>{slide.eyebrow}</span>

      </div>

      <h1>{slide.title}</h1>

      <p>{slide.description}</p>

      <div className="hero-actions">

        <a
          href="#agents"
          className="hero-primary"
        >
          See how it works
          <ArrowRight size={16} />
        </a>

        <a
          href="#contact"
          className="hero-secondary"
        >
          Talk to MAD
        </a>

      </div>

    </div>
  );
}


/* =========================================================
   VIDEO PANEL
   ========================================================= */

function VideoPanel({ src, label }) {
  return (
    <div className="video-panel">

      <video
        key={src}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/media/1.jpg"
      >
        <source
          src={src}
          type="video/mp4"
        />
      </video>

      <div className="video-shade" />

      <div className="video-label">
        {label}
      </div>

    </div>
  );
}


/* =========================================================
   EXECUTIVE UI
   ========================================================= */

function ExecutiveUI() {
  return (
    <div className="ai-window executive-window">

      <div className="window-header">

        <div>
          <span className="status-dot" />
          AI WORKFLOW
        </div>

        <span>October report</span>

      </div>


      <div className="source-list">

        <Source
          icon={<Database />}
          name="Sales data"
        />

        <Source
          icon={<Receipt />}
          name="Finance data"
        />

        <Source
          icon={<Users />}
          name="CRM"
        />

        <Source
          icon={<FileText />}
          name="Documents"
        />

      </div>


      <div className="ai-processing">

        <Sparkles size={16} />

        <div>

          <strong>AI is working</strong>

          <span>
            Preparing your report...
          </span>

        </div>

      </div>


      <div className="result-card">

        <div>

          <span>REPORT READY</span>

          <strong>
            October business report
          </strong>

        </div>

        <CircleCheck size={21} />

      </div>


      <div className="approval-row">

        <button>Review</button>

        <button>Edit</button>

        <button className="approve">
          Approve
        </button>

      </div>

    </div>
  );
}


/* =========================================================
   HR UI
   ========================================================= */

function HRUI() {
  return (
    <div className="ai-window compact-ai hr-window">

      <div className="window-header">

        <div>
          <span className="status-dot" />
          AI RECRUITING AGENT
        </div>

        <span>124 applications</span>

      </div>


      <div className="compact-title">
        Product Designer
      </div>


      <div className="scan-row">

        <span>Scanning applications</span>

        <strong>78%</strong>

      </div>


      <div className="progress-track">
        <span />
      </div>


      <div className="compact-checks">

        <CheckRow text="Skills matched" />

        <CheckRow text="Experience matched" />

        <CheckRow text="Role requirements checked" />

      </div>


      <div className="shortlist-row">

        <div>

          <span>SHORTLISTED</span>

          <strong>18 candidates</strong>

        </div>

        <ArrowRight size={17} />

      </div>

    </div>
  );
}


/* =========================================================
   FINANCE UI
   ========================================================= */

function FinanceUI() {
  return (
    <div className="ai-window compact-ai finance-window">

      <div className="window-header">

        <div>
          <span className="status-dot" />
          INVOICE PROCESSING
        </div>

        <span>AI review</span>

      </div>


      <div className="invoice-number">
        Invoice #INV-2841
      </div>


      <div className="invoice-value">
        ₹84,600
      </div>


      <div className="compact-checks">

        <CheckRow text="Purchase order" />

        <CheckRow text="Goods receipt" />

        <CheckRow text="Tax information" />

      </div>


      <div className="ready-state">

        <CircleCheck size={18} />

        <div>

          <strong>
            Ready for approval
          </strong>

          <span>
            AI checks completed
          </span>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   SOURCE
   ========================================================= */

function Source({ icon, name }) {
  return (
    <div className="source-row">

      <div className="source-icon">
        {icon}
      </div>

      <span>{name}</span>

      <Check size={14} />

    </div>
  );
}


/* =========================================================
   CHECK ROW
   ========================================================= */

function CheckRow({ text }) {
  return (
    <div className="check-row">

      <span className="check-circle">
        <Check size={11} />
      </span>

      <span>{text}</span>

    </div>
  );
}