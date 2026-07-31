import Navbar from "./Navbar";
import Hero from "./Hero";
import ClientLogos from "./ClientLogos";
import CapabilitiesStrip from "./CapabilitiesStrip";
import Stats from "./Stats";
import CompaniesShowcase from "./CompaniesShowcase";
import ProcessSection from "./ProcessSection";
import CaseStudies from "./CaseStudies";
import Testimonials from "./Testimonials";
import FAQSection from "./FAQSection";
import Insights from "./Insights";
import Team from "./Team";
import CTASection from "./CTASection";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="bg-[#060608]">
      <Navbar />
      <Hero />
      <ClientLogos />
      <CapabilitiesStrip />
      <Stats />
      <CompaniesShowcase />
      <ProcessSection />
      <CaseStudies />
      <Testimonials />
      <FAQSection />
      <Insights />
      <Team />
      <CTASection />
      <Footer />
    </main>
  );
}
