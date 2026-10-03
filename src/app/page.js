import Navbar from "@/components/MAD COMPANY/Navbar.jsx";
import Hero from "@/components/MAD COMPANY/Hero";
import Statement from "@/components/MAD COMPANY/Statement";
import Moments from "@/components/MAD COMPANY/Moments";
import Stories from "@/components/MAD COMPANY/Stories";
import Scenarios from "@/components/MAD COMPANY/Scenarios";
import Agents from "@/components/MAD COMPANY/Agents";
import Outreach from "@/components/MAD COMPANY/Outreach";
import People from "@/components/MAD COMPANY/People";

import Journey from "@/components/MAD COMPANY/Journey";
import Enterprise from "@/components/MAD COMPANY/Enterprise";
import Ecosystem from "@/components/MAD COMPANY/Ecosystem";
import Experience from "@/components/MAD COMPANY/Experience";
import FinalCTA from "@/components/MAD COMPANY/FinalCTA";
import HomeFooter from "@/components/MAD COMPANY/HomeFooter";
import "@/components/MAD COMPANY/home.css";

const SITE = "https://madcompany.in";
const TITLE = "MAD Company | AI that does the work";
const DESCRIPTION =
  "MAD Company builds AI agents that find customers, answer questions, move information and automate workflows, plus the software and data behind them.";

export const metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["MAD Company", "AI agents", "AI sales agent", "AI outreach", "AI automation", "custom software", "data science", "business automation"],
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
    <main className="mh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#scenarios" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black">Skip to content</a>
      <Navbar adaptive />
      <Hero />
      <Statement />
      <Moments />
      <Scenarios />
      <Stories />
      <Agents />
      <Outreach />
      <People />
      <Journey />
      <Enterprise />
      <Ecosystem />
      <Experience />
      <FinalCTA />
      <HomeFooter />
    </main>
  );
}
