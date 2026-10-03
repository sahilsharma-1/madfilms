import Photo from "./Photo";
import { MEDIA } from "@/lib/media";
import { Reveal } from "./Reveal";

// Black cinematic moment: the point of view, one image, no extras.
export default function BigIdea() {
  return (
    <section data-tone="dark" aria-labelledby="bi-h" className="mh-dark mh-sec relative overflow-hidden !py-32 lg:!py-48">
      <Photo m={MEDIA.future} parallax vignette className="!absolute inset-0 opacity-40" />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,#000,transparent_30%,transparent_65%,#000),radial-gradient(60%_50%_at_75%_30%,rgba(255,255,255,.06),transparent)]" />
      <Reveal className="mh-wrap relative">
        <h2 id="bi-h" className="mh-h1 max-w-4xl" style={{ fontSize: "clamp(2.25rem, 5vw, 4.25rem)" }}>The future of work is not another tool.</h2>
        <p className="mh-lead mt-6">It is systems that understand your business, and act inside it.</p>
      </Reveal>
    </section>
  );
}
