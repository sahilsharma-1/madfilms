import Navbar from "@/components/MAD COMPANY/Navbar";
import Hero from "@/components/Reality/Hero";
import CapabilitiesStrip from "@/components/Reality/CapabilitiesStrip";
import Services from "@/components/Reality/Services";
import Showcase from "@/components/Reality/Showcase";
import Process from "@/components/Reality/Process";
import TechStack from "@/components/Reality/TechStack";
import CTA from "@/components/Reality/CTA";
import Footer from "@/components/MAD COMPANY/Footer";

export default function RealityPage() {
  return (
    <main className="bg-[#060608] font-body">
      <Navbar />
      <Hero />
      <CapabilitiesStrip />
      <Services />
      <Showcase />
      <Process />
      <TechStack />
      <CTA />
      <Footer />
    </main>
  );
}
