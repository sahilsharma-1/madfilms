// Central source of truth for the 8 MAD studios.
// Edit this file to rename, reorder, add, or remove studios —
// the navbar mega-menu and the homepage grid both read from here.
//
// `image` / `video` are optional: set either one and the studio's
// card on the homepage will show it behind the text on hover
// (video takes priority over image if both are set).
//
// `image` currently points at Picsum (picsum.photos) placeholder
// photography so nothing on the page looks empty — swap each one
// for real studio/project stills whenever you have them.

export const studios = [
  {
    slug: "films",
    name: "MAD Films",
    category: "Creative Studio",
    tagline: "3D Animation, CGI, Motion Design, VFX",
    href: "/madfilms",
    icon: "Clapperboard",
    gradient: ["#0064fa", "#7c3aff"],
    image: "https://picsum.photos/seed/mad-films/800/600", // e.g. "/studios/films.jpg"
    video: "", // e.g. "/studios/films.mp4"
  },
  {
    slug: "tech",
    name: "MAD Tech",
    category: "Product Studio",
    tagline: "Websites, Apps, SaaS Platforms",
    href: "/companies/tech",
    icon: "Code2",
    gradient: ["#7c3aff", "#b23aff"],
    image: "https://picsum.photos/seed/mad-tech/800/600",
    video: "",
  },
  {
    slug: "mind",
    name: "MAD Mind",
    category: "AI Studio",
    tagline: "AI Agents, Automation, Voice & WhatsApp AI",
    href: "/companies/mind",
    icon: "BrainCircuit",
    gradient: ["#b23aff", "#f726a8"],
    image: "https://picsum.photos/seed/mad-mind/800/600",
    video: "",
  },
  {
    slug: "reality",
    name: "MAD Reality",
    category: "XR Studio",
    tagline: "AR, VR, Metaverse Experiences",
    href: "/reality",
    icon: "Glasses",
    gradient: ["#0064fa", "#00c2ff"],
    image: "https://picsum.photos/seed/mad-reality/800/600",
    video: "",
  },
  {
    slug: "growth",
    name: "MAD Growth",
    category: "Performance Studio",
    tagline: "SEO, Google Ads, Analytics, Lead Gen",
    href: "/companies/growth",
    icon: "TrendingUp",
    gradient: ["#f726a8", "#ff7a45"],
    image: "https://picsum.photos/seed/mad-growth/800/600",
    video: "",
  },
  {
    slug: "cloud",
    name: "MAD Cloud",
    category: "Infra Studio",
    tagline: "AWS, Azure, DevOps, Architecture",
    href: "/companies/cloud",
    icon: "Cloud",
    gradient: ["#00c2ff", "#0064fa"],
    image: "https://picsum.photos/seed/mad-cloud/800/600",
    video: "",
  },
  {
    slug: "data",
    name: "MAD Data",
    category: "Insights Studio",
    tagline: "Dashboards, BI, Data Engineering",
    href: "/companies/data",
    icon: "BarChart3",
    gradient: ["#7c3aff", "#0064fa"],
    image: "https://picsum.photos/seed/mad-data/800/600",
    video: "",
  },
  {
    slug: "labs",
    name: "MAD Labs",
    category: "R&D Studio",
    tagline: "Experimental Tech, New Ventures",
    href: "/companies/labs",
    icon: "FlaskConical",
    gradient: ["#f726a8", "#7c3aff"],
    image: "https://picsum.photos/seed/mad-labs/800/600",
    video: "",
  },
];
