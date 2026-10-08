import Navbar from "@/components/MAD COMPANY/Navbar";
import { HeroX, Cards, VideoBand, Automate, CustomAI, HowCustom, Packages, StudioIntro, Journey, Work, Process, RoiAndContact } from "@/components/home3/Home3";
import AgentWorkforce from "@/components/agents/AgentWorkforce";
import { MadFilmsBand } from "@/components/home2/Sections2";
import Footer from "@/components/home/Footer";
import "@/components/home/home.css";
import "@/components/home2/home2.css";

const SITE = "https://madcompany.in";
const TITLE = "MAD Company | AI and creative systems for business";
const DESCRIPTION =
  "MAD builds custom AI agents, automation systems, software and creative technology around the way your business works.";

export const metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["MAD Company", "AI agents", "business automation", "software", "creative technology", "MAD Studio"],
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
    <main className="mx h2 m3-root">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#automate" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black">Skip to content</a>
      <Navbar adaptive />
      <HeroX />
      <Cards />
      <VideoBand />
      <Automate />
      <CustomAI />
      <AgentWorkforce />
      <HowCustom />
      <Packages />
      <StudioIntro />
      <MadFilmsBand />
      <Journey />
      <Work />
      <Process />
      <RoiAndContact />
      <Footer />
    </main>
  );
}
