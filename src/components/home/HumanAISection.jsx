"use client";
import { Lines, Fade, Pic } from "./shared";
import { HOME_MEDIA } from "../../lib/media";

function Chat() {
  return (
    <div className="mx-frag mx-float w-full max-w-[17.5rem] p-4 lg:absolute lg:left-[34%] lg:top-[50%]">
      <p className="mx-tag">Customer</p>
      <p className="mt-1">&ldquo;Where is my order?&rdquo;</p>
      <div className="mt-3 border-t pt-3" style={{ borderColor: "rgba(15,14,20,.08)" }}>
        <p className="mx-tag" style={{ color: "#1d4ed8" }}>AI</p>
        <p className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-1"><b>Understands</b><span aria-hidden>→</span><b>checks system</b><span aria-hidden>→</span><b>resolves</b></p>
      </div>
    </div>
  );
}
const Small = ({ cls, who, what, delay }) => (
  <div className={`mx-frag ${delay ? "mx-float-b" : "mx-float"} px-4 py-3 lg:absolute ${cls}`}>
    <p className="mx-tag">{who}</p>
    <p className="mt-0.5 flex items-center gap-2"><span className="mx-dot" />{what}</p>
  </div>
);

export default function HumanAISection() {
  return (
    <section id="human-ai" data-tone="light" aria-labelledby="hai-h" className="mx-sec mx-wash-b">
      <div className="mx-wrap">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <Lines id="hai-h" lines={["Technology that", "feels human."]} dim={[1]} className="mx-display mx-h2" />
          <Fade delay={0.15}><p className="mx-lead lg:ml-auto">The best AI doesn&rsquo;t replace the experience.<br />It improves it.</p></Fade>
        </div>

        <div className="relative mt-14 flex flex-col gap-4 lg:mt-20 lg:block lg:h-[46rem]">
          <Pic m={HOME_MEDIA.editorial} reveal className="aspect-[4/5] w-full rounded-[2px] sm:aspect-[16/11] lg:absolute lg:left-0 lg:top-0 lg:aspect-auto lg:h-[88%] lg:w-[62%]" />
          <Pic m={HOME_MEDIA.editorialB} reveal className="hidden aspect-[3/4] rounded-[2px] lg:absolute lg:right-0 lg:top-[4%] lg:block lg:w-[30%]" />
          <Pic m={HOME_MEDIA.editorialC} reveal className="hidden aspect-[4/3] rounded-[2px] lg:absolute lg:bottom-0 lg:right-[10%] lg:block lg:w-[32%]" />
          <div className="grid gap-4 sm:grid-cols-2 lg:contents">
            <Chat />
            <Small cls="lg:left-[2%] lg:top-[78%]" who="Sales" what="Lead qualified" />
            <Small cls="lg:right-[2%] lg:top-[56%]" who="Operations" what="Workflow completed" delay />
            <Small cls="lg:left-[3%] lg:top-[6%]" who="Marketing" what="Campaign generated" delay />
          </div>
        </div>
      </div>
    </section>
  );
}
