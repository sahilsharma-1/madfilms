import Navbar from "./Navbar";
import Hero from "./Hero";
import ClientLogos from "./ClientLogos";
import Features from "./Features";
import ProductShowcase from "./ProductShowcase";
import ProcessSection from "./ProcessSection";
import Integrations from "./Integrations";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import CustomerStories from "./CustomerStories";
import SecurityBand from "./SecurityBand";
import Pricing from "./Pricing";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="bg-[#060608]">
      <Navbar />
      <Hero />
      <ClientLogos />
      <Features />
      <ProductShowcase />
      <ProcessSection />
      <Integrations />
      <Stats />
      <Testimonials />
      <CustomerStories />
      <SecurityBand />
      <Pricing />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
