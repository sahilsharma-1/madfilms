import Navbar from "@/components/MAD COMPANY/Navbar.jsx";
import Hero from "@/components/MAD COMPANY/Hero";
import ClientLogos from "@/components/MAD COMPANY/ClientLogos";
import CapabilitiesStrip from "@/components/MAD COMPANY/CapabilitiesStrip";
import CompaniesShowcase from "@/components/MAD COMPANY/CompaniesShowcase";
import Stats from "@/components/MAD COMPANY/Stats";
import Testimonials from "@/components/MAD COMPANY/Testimonials";
import Team from "@/components/MAD COMPANY/Team";
import CTASection from "@/components/MAD COMPANY/CTASection";
import Footer from "@/components/MAD COMPANY/Footer";

export default function Home() {
  return (
    <main className="bg-[#060608] font-body">
      <Navbar />
      <Hero />
      <ClientLogos />
      <CapabilitiesStrip />
      <CompaniesShowcase />
      <Stats />
      <Testimonials />
      <Team />
      <CTASection />
      <Footer />
    </main>
  );
}
