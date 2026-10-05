import Image from "next/image";
import { ArrowDown, ArrowRight, Check, Sparkles } from "lucide-react";
import "./hero-slider.css";

export default function Hero2() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero-copy">
        <p className="home-hero-kicker"><Sparkles size={14} /> MAD COMPANY</p>
        <h1 id="home-hero-title">We build AI<br />that works<br /><span>for your business.</span></h1>
        <p className="home-hero-lead">MAD builds custom AI agents, automation systems, software and creative technology around the way your business actually works.</p>
        <div className="home-hero-actions">
          <a href="#agents" className="home-hero-primary">See what we automate <ArrowRight size={16} /></a>
          <a href="#contact" className="home-hero-secondary">Talk to MAD</a>
        </div>
        <div className="home-hero-flow" aria-label="Your business, MAD AI, your team approves">
          <span>YOUR BUSINESS</span><i /><span>MAD AI</span><i /><b>YOUR TEAM APPROVES</b>
        </div>
      </div>
      <div className="home-hero-visual">
        <Image src="/media/1.jpg" alt="A business team working together in an office" fill priority sizes="(max-width: 800px) 100vw, 52vw" className="home-hero-image" />
        <div className="home-hero-shade" />
        <div className="home-hero-caption"><span>MADE FOR THE WAY YOU WORK</span><span>01 / 01</span></div>
        <div className="home-hero-workflow">
          <div className="home-hero-window-head"><span><i /><i /><i /></span><small>WORKFLOW PREVIEW</small><span className="home-hero-live">EXAMPLE</span></div>
          <div className="home-hero-task"><span className="home-hero-task-icon"><Sparkles size={15} /></span><span><small>MAD AI</small><b>Research · Analyze · Work · Report</b></span><Check size={16} className="home-hero-check" /></div>
          <div className="home-hero-task human"><span className="home-hero-task-icon"><span>YOU</span></span><span><small>YOUR TEAM</small><b>Review and approve</b></span><ArrowRight size={16} /></div>
          <p>Illustrative workflow · your team stays in control</p>
        </div>
      </div>
      <a href="#agents" className="home-hero-scroll"><ArrowDown size={14} /> EXPLORE AUTOMATIONS</a>
    </section>
  );
}
