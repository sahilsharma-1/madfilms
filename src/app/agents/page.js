import Navbar from "@/components/MAD COMPANY/Navbar";
import AgentLibrary from "@/components/home/AgentLibrary";
import AgentExtras from "@/components/home/AgentExtras";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";
import "@/components/home/home.css";

export const metadata = {
  title: "AI Agents",
  description: "Purpose-built AI agents for the work your teams do every day: HR, customer service, finance, procurement, sales, marketing, IT, operations and healthcare.",
  alternates: { canonical: "/agents" },
};

export default function AgentsPage() {
  return (
    <main className="mx">
      <Navbar />
      <section data-tone="dark" aria-labelledby="ag-hero" className="mx-dark mx-hero-bg relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-48">
        <div aria-hidden className="mx-dots absolute inset-0" />
        <div className="mx-wrap relative">
          <h1 id="ag-hero" className="mx-display" style={{ fontSize: "clamp(2.7rem,6vw,6rem)" }}>AI that gets work done.</h1>
          <p className="mx-lead mt-6">Purpose-built agents for the work your teams do every day.</p>
        </div>
      </section>
      <AgentLibrary headless />
      <AgentExtras />
      <CTA />
      <Footer />
    </main>
  );
}
