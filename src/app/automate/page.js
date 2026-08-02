import Navbar from "@/components/MAD COMPANY/Navbar";
import Hero from "@/components/Automate/Hero";
import CapabilitiesStrip from "@/components/Automate/CapabilitiesStrip";
import Services from "@/components/Automate/Services";
import Showcase from "@/components/Automate/Showcase";
import Process from "@/components/Automate/Process";
import TechStack from "@/components/Automate/TechStack";
import FAQ from "@/components/Automate/FAQ";
import CTA from "@/components/Automate/CTA";
import Footer from "@/components/MAD COMPANY/Footer";

export default function AutomatePage() {
  return (
    <main className="bg-[#060608] font-body">
      <Navbar />
      <Hero />
      <CapabilitiesStrip />
      <Services />
      <Showcase />
      <Process />
      <TechStack />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
