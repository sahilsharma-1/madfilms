import Navbar from "@/components/MAD COMPANY/Navbar";
import Hero from "@/components/Madfilms/Hero";
import IntroSection from "@/components/Madfilms/IntroSection";
import CapabilitiesStrip from "@/components/Madfilms/CapabilitiesStrip";
import VideoShowcase from "@/components/Madfilms/VideoShowcase";
import Stats from "@/components/Madfilms/Stats";
import OurCases from "@/components/Madfilms/OurCases";
import Benefits from "@/components/Madfilms/Benefits";
import Team from "@/components/Madfilms/Team";
import FAQ from "@/components/Madfilms/FAQ";
import CTASection from "@/components/Madfilms/CTASection";
import Footer from "@/components/Madfilms/Footer";

export default function MadfilmsPage() {
  return (
    <main className="bg-black">
      <Navbar/>
       <Hero/>
      <CapabilitiesStrip />
      <IntroSection />
      <OurCases />
      <VideoShowcase />
      <Stats />
      <Benefits />
      <Team />
      <FAQ />
      <CTASection />
      <Footer /> 
    </main>
  );
}
