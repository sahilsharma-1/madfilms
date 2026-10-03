import Navbar from "@/components/MAD COMPANY/Navbar";
import Hero from "@/components/Reality/Hero";
import CapabilitiesStrip from "@/components/Reality/CapabilitiesStrip";
import Services from "@/components/Reality/Services";
import Showcase from "@/components/Reality/Showcase";
import Process from "@/components/Reality/Process";
import TechStack from "@/components/Reality/TechStack";
import CTA from "@/components/Reality/CTA";
import HomeFooter from "@/components/MAD COMPANY/HomeFooter.jsx";
import Reels from "@/components/Madfilms/Reels.jsx";

export default function RealityPage() {
  return (
    <main className="bg-[#060608] font-body">
      <Navbar />
      <Hero />
      <CapabilitiesStrip />
      <Reels />
      <Services />
      <Showcase />
      <Process />
      <TechStack />
      <CTA />
      <HomeFooter />
    </main >
  );
}
