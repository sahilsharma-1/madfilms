import Navbar from "@/components/MAD COMPANY/Navbar";
import Hero2 from "@/components/home2/Hero2";
import AgentsExplorer from "@/components/home2/AgentsExplorer";
import { CustomAutomation, WatchAI, WorkflowScroller } from "@/components/home2/Sections1";
import { MarketingFlow, MadFilmsBand, Stories, HumanAI, Enterprise, DarkAI } from "@/components/home2/Sections2";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";
import "@/components/home/home.css";
import "@/components/home2/home2.css";

const SITE = "https://madcompany.in";
const TITLE = "MAD Company | AI that gets work done";
const DESCRIPTION =
  "MAD Company designs intelligent systems that turn complex workflows into measurable business outcomes: AI strategy, agents, automation, products, data intelligence, digital experiences and creative.";

export const metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["MAD Company", "enterprise AI", "AI agents", "AI automation", "AI strategy", "data intelligence", "AI products", "AI transformation"],
  alternates: { canonical: "/" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: SITE, siteName: "MAD Company", type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
};

const jsonLd = [
  { "@context": "https://schema.org", "@type": "Organization", name: "MAD Company", url: SITE, description: DESCRIPTION, email: "hello@madcompany.co" },
  { "@context": "https://schema.org", "@type": "WebSite", name: "MAD Company", url: SITE },
];

export default function Home() {
  return (
    <main className="mx h2">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#agents" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black">Skip to content</a>
      <Navbar adaptive />
      <Hero2 />
      <AgentsExplorer />
      <CustomAutomation />
      <WatchAI />
      <WorkflowScroller />
      <MarketingFlow />
      <MadFilmsBand />
      <Stories />
      <HumanAI />
      <Enterprise />
      <DarkAI />
      <CTA />
      <Footer />
    </main>
  );
}
