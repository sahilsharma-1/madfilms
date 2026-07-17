import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import CapabilitiesStrip from "@/components/CapabilitiesStrip";
import VideoShowcase from "@/components/VideoShowcase";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <CapabilitiesStrip />
      <IntroSection />
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
