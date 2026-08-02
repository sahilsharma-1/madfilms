# MAD — SaaS rebuild

This replaces the old "MAD company" agency site with a full **SaaS / AI
startup marketing site** — same category as the premium ThemeForest
Next.js templates, built on top of the animation engine you already had
(`Reveal`, `Magnetic`, `GlassSurface`, `AnimatedCounter`, `VideoBackground`).

I couldn't actually load the ThemeForest live preview you linked (it
blocks bots, and licensed template code isn't something I'll copy anyway)
— so instead of a pixel clone, this is a from-scratch build in the same
*category*: dark theme, gradient accents, glassmorphism, animated
dashboard mockups, and every section a template like that ships with.

## 1. Install dependencies

Your existing deps still work. Add these three:

```bash
npm install react-icons clsx tailwind-merge
```

`framer-motion` and `lucide-react` you already have. `gsap` / `lenis`
from your own recommended-additions list are optional — nothing here
depends on them, so add them later only if you want extra scroll effects.

> **Why react-icons is required now, not optional:** Lucide removed all
> brand/social logos (GitHub, LinkedIn, YouTube, Instagram, etc.) in its
> v1.0 release. The footer's social icons use `react-icons/fa6` instead —
> which is exactly why your own notes already flagged react-icons for
> "brand/social icons."

## 2. Drop in the files

Every file here has the same name/export as before, so it overwrites
what's in `src/components/`. Four things changed shape:

| Old file | New file | What happened |
|---|---|---|
| `CapabilitiesStrip.jsx` | `Features.jsx` | Rebuilt as a bento feature grid |
| `CompaniesShowcase.jsx` | `ProductShowcase.jsx` | Rebuilt as an auto-advancing tabbed product tour |
| `CaseStudies.jsx` | `CustomerStories.jsx` | Same idea, SaaS-flavored copy, no stock photos needed |
| `Team.jsx`, `Insights.jsx`, `studios.js` | *(removed)* | Not typical for a SaaS homepage — see below if you want them back |

New: `DashboardMockup.jsx` (shared fake product UI), `Integrations.jsx`,
`Pricing.jsx`, `SecurityBand.jsx`.

Unchanged, just copy over: `Reveal.jsx`, `Magnetic.jsx`,
`AnimatedCounter.jsx`, `GlassSurface.jsx`, `GlassSurface.css`,
`VideoBackground.jsx`.

**`globals-additions.css`** — paste over what you pasted in last time
(same tokens/utilities, plus one new keyframe for the product-tour
progress bar). If you'd rather not overwrite, just add the
`.mad-tab-progress` block near the bottom to your existing file.

`page.jsx` now assembles, in order:

```
Navbar → Hero → Trusted-by logos → Features → Product tour (tabs) →
How it works → Integrations → Stats → Testimonials → Customer stories →
Security strip → Pricing → FAQ → CTA → Footer
```

## 3. The dashboard mockup — no screenshots required

Instead of stock photos of laptops (which would look like an agency site,
not a product), `DashboardMockup.jsx` hand-builds a fake product UI in
pure JSX/CSS/SVG — animated bar charts, a workflow node-graph, a donut
chart, a team activity list. It takes a `variant` prop
(`"overview" | "automation" | "analytics" | "team"`) and powers both the
Hero shot and all four tabs in the product tour, so it's one component
to restyle once you have real screenshots.

**When you have real product screenshots:** swap the `<Panel />` render
in `DashboardMockup.jsx` for an `<img>`/`<video>` — everything else
(the glass frame, sidebar, top bar, glow) still works as the frame
around it.

## 4. Background videos — real ones, ready to swap

Per your "add online videos, I'll change later" — Hero and CTA use real
hosted loops from Mixkit (free commercial license, no attribution
required, no API key):

- `Hero.jsx` → `HERO_VIDEOS` (2 clips, crossfade) + `HERO_POSTER`
- `CTASection.jsx` → `CTA_VIDEOS` + `CTA_POSTER`

Swap the URLs for your own reel whenever it's ready — `VideoBackground`
already handles both local (`/videos/...`) and remote (`https://...`)
sources identically.

## 5. Placeholder content you'll want to replace

Nothing is left blank, but plenty is invented so the layout works today:

| File | What's fake | Where to fix it |
|---|---|---|
| `ClientLogos.jsx`, `CustomerStories.jsx` | Fictional company names (Nova, Ferro, Vantra...) | `LOGOS` / `STORIES` arrays |
| `Testimonials.jsx` | Quotes + names, real headshots via pravatar.cc | `TESTIMONIALS` array |
| `Pricing.jsx` | $29 / $79 / Custom — invented numbers | `PLANS` array |
| `Stats.jsx` | 10K+ teams, 99.98% uptime, etc. | `STATS` array |
| Everywhere | Brand name "MAD" / "MAD OS" | Search-and-replace once you land on a name |

I didn't know what your product actually does, so I went with a generic
"AI ops / workflow automation" pitch — broad enough to reskin toward
whatever MAD actually is. Same goes for pricing tiers/numbers — pure
placeholders, not a recommendation.

## 6. If you want Team/Insights back

They weren't dropped because they're bad — just because they're not
standard on a SaaS product homepage (they read more like an agency
site). If you want them, they can go back in easily; happy to rebuild
them in the same visual language on request instead of guessing at
where you'd want them.

## A note on the "clone it" ask

I built this in the same *category* as the template you linked — dark
SaaS aesthetic, tabbed product tour, pricing, the works — rather than
copying its actual code or design, since that's licensed for the
person who bought it. If there's a specific section from a template
you want closer to (send a screenshot), that's much easier to match
precisely than working from a blocked preview link.
