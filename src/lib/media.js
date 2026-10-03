// Central manifest for homepage photography/video.
// Every slot has a graphite fallback (see <Photo>), so a bad URL never shows an empty box.
//
// IMPORTANT: these Pexels URLs were chosen without being viewed (no network access to
// Pexels from the build sandbox). Check each in the browser before relying on it. To use your
// own asset instead, drop it in /public/media/ and set src to "/media/yourfile.jpg".
const px = (id, w = 2000) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const MEDIA = {
  hero:   { src: px(3861969), alt: "Engineers working at monitors in a technology workspace" },
  future: { src: px(3184291), alt: "A team in discussion around a table in a modern office" },
  team:   { src: px(3184663), alt: "Young professionals brainstorming together in a modern office" },
  team2:  { src: px(3184359), alt: "A diverse team working and talking in a casual modern workspace" },
  cta:    { src: px(1181263), alt: "Professionals working together in an office" },
};

// Already used by the live MAD AI hero; reused as an optional, desktop-only ambient loop.
export const HERO_VIDEO = "https://assets.mixkit.co/m5jw03r6gz6cdq7eq4fpbu8ybe3f";

// People section: one photo per pillar, same order as PILLARS in data.js (Pexels, free to use).
export const PILLAR_MEDIA = [
  { src: px(3861958, 1000), alt: "A software engineer coding on dual monitors in a modern office" },
  { src: px(3184639, 1000), alt: "A multicultural team discussing analytics and strategy in an office" },
  { src: px(3194521, 1000), alt: "A diverse team working together in a modern office" },
  { src: px(3182822, 1000), alt: "A team collaborating with laptops and tablets in a modern workspace" },
];


// ---- Added: people + nature photography (Decagon / Glean style) ----
// Same caveat as above: IDs are unverified from the build sandbox. Open each in a browser;
// any that fail fall back to the graphite/gradient tile. Swap src for "/media/yourfile.jpg" anytime.
export const HERO_COLLAGE = [
  { src: px(1239291, 1200), alt: "A smiling woman looking at her laptop" },
  { src: px(2379004, 1000), alt: "A man smiling outdoors in natural light" },
  { src: px(417074, 1000),  alt: "A calm mountain lake at sunrise" },
];

// Bento strip: `say` is the agent message floating over the photo (illustrative).
export const MOMENTS = [
  { src: px(733872, 1200),  alt: "A woman smiling at her phone", say: "Your appointment is booked for Thursday, 4:00 PM." },
  { src: px(3184291, 1400), alt: "A team in discussion around a table", say: "Summary sent to everyone in the meeting." },
  { src: px(15286, 1000),   alt: "Sunlight through a green forest" },
  { src: px(1043471, 1000), alt: "A man smiling and talking on a call", say: "Found 42 healthcare companies. Writing the first messages." },
  { src: px(1366919, 1400), alt: "Mountains rising above morning mist", say: "Less busywork. More time for what matters." },
];

// Where agents work: one card per sector (no invented customers or numbers).
export const STORIES = [
  { k: "Healthcare",  t: "Patients get answers while the care team gets time back.", src: px(3825527, 900), alt: "A doctor speaking with a patient" },
  { k: "Retail",      t: "Every customer treated like the only one, at any hour.",    src: px(1181396, 900), alt: "A friendly shop owner at work" },
  { k: "Government",  t: "Citizen requests routed and resolved without the queue.",   src: px(3184418, 900), alt: "A team reviewing work together" },
  { k: "Enterprise",  t: "Reports, follow-ups and handoffs that run themselves.",     src: px(3756679, 900), alt: "A diverse team collaborating" },
];

export const CTA_BG = { src: px(1624496, 2200), alt: "Misty mountain ridges at dawn" };
