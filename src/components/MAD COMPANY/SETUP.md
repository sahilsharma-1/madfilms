# What changed in this pass

Same dependency as before — nothing new to install beyond what you already have:

```bash
npm install framer-motion
```

(`lucide-react` and `next` were already in use.)

**Drop-in:** every file has the same name and default export as your existing
components, so they overwrite what's already in your project. Four files are
brand new (see below) — copy them in alongside the rest.

## The brief

This pass makes the site read like a full enterprise-facing marketing site —
longer page, a section for every stage of an evaluation (what you do → proof
→ how you work → case studies → objections → team → close), catchier
section headlines aimed at corporate buyers, and no more empty
image/video slots.

## New sections

| File | What it is | Where it sits |
|---|---|---|
| `ProcessSection.jsx` | 4-step "how we work" (Discover → Design & Build → Launch → Scale) | After the companies grid |
| `CaseStudies.jsx` | 6-card "Selected work" grid with project stills and result callouts | After the process section |
| `FAQSection.jsx` | Accordion answering the questions procurement/legal ask first (NDAs, timelines, pricing, compliance) | After testimonials |
| `Insights.jsx` | 3-card blog/insights preview | Before the team section |

`page.jsx` now assembles all of it in order:
Navbar → Hero → Client logos → Capabilities → Stats → Companies →
Process → Case studies → Testimonials → FAQ → Insights → Team → CTA → Footer.

## Every image slot is filled

Nothing on the page is a blank box anymore. Placeholders are wired up with
two free, no-API-key placeholder services so you can see the real layout
immediately:

- **[Picsum](https://picsum.photos)** (`picsum.photos/seed/<name>/<w>/<h>`) —
  general photography: hero background, studio hover-cards, case-study
  stills, insights thumbnails. Each uses a fixed `seed` so the same
  placeholder shows every reload instead of a random one.
- **[Pravatar](https://pravatar.cc)** (`i.pravatar.cc/<size>?img=<n>`) —
  headshots: team photos, testimonial avatars.

**Replace these before launch** — swap each URL for real project stills,
team photos, and client headshots. Every file that uses one has a comment
flagging it (`studios.js`, `Hero.jsx`, `CaseStudies.jsx`, `Insights.jsx`,
`Team.jsx`, `Testimonials.jsx`).

## Other changes

- **Hero** — dropped the broken relative video path (`videos/moon-walk.mp4`
  had no leading slash and would 404); now falls back to a full-bleed
  Picsum poster until you drop a real reel in. Added a trust line under the
  CTAs and a tilted 3-image "recent work" strip under the stats bar.
- **Navbar** — "Work" now points at the new `#work` case-studies section
  instead of the client-logos strip; added a "Process" link.
- **Capabilities / Stats** — both sections now have an eyebrow + headline
  instead of dropping straight into content.
- **Testimonials** — expanded from 3 to 6 quotes (two rows), all with
  avatars.
- **Team** — photos filled in, plus a LinkedIn icon that appears on hover.
- **Footer** — added a small "studio notes" email signup row.
- **CTA** — added a one-line trust reassurance under the buttons.

Everything still respects `prefers-reduced-motion` and the scroll-reveal /
stagger / magnetic-button system is untouched.

## Where to plug in your own assets

| File | What to set | Effect |
|---|---|---|
| `Hero.jsx` | `HERO_VIDEOS` array, `HERO_POSTER` | Full-bleed background reel/still behind the headline |
| `Hero.jsx` | `SHOWCASE` array images | The tilted 3-card "recent work" strip |
| `CTASection.jsx` | `CTA_VIDEOS` array | Subtle looping clip behind the closing gradient panel |
| `studios.js` | `image` / `video` per studio | Plays/shows behind each company card on hover |
| `CaseStudies.jsx` | `CASES` array | Selected-work grid — images, client names, results, links |
| `Insights.jsx` | `POSTS` array | Blog/insights preview cards |
| `Testimonials.jsx` | `avatar` per testimonial | Headshot on each quote card |
| `Team.jsx` | `photo` per team member | Real headshot instead of gradient initials |

Put actual files in `/public/videos` and `/public/images` (or wherever your
`public/` folder is) and reference them with an absolute path like
`"/videos/reel-1.mp4"`.

## Full file list

Helpers (unchanged): `Reveal.jsx`, `AnimatedCounter.jsx`, `Magnetic.jsx`,
`VideoBackground.jsx`, `GlassSurface.jsx`, `GlassSurface.css`.

Sections (updated): `Navbar.jsx`, `Hero.jsx`, `ClientLogos.jsx`,
`CapabilitiesStrip.jsx`, `Stats.jsx`, `CompaniesShowcase.jsx`,
`Testimonials.jsx`, `Team.jsx`, `CTASection.jsx`, `Footer.jsx`.

Sections (new): `ProcessSection.jsx`, `CaseStudies.jsx`, `FAQSection.jsx`,
`Insights.jsx`.

Data/config (updated): `studios.js`, `globals-additions.css` (unchanged,
included for completeness), `page.jsx`.
