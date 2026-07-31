import { FaLinkedinIn } from "react-icons/fa6";
import { Reveal, RevealStagger, RevealItem } from "./Reveal";

// Placeholder roster — swap in real names, roles, and photos.
// `photo` uses pravatar.cc placeholder headshots so no tile ships
// blank; swap each for a real photo (e.g. "/team/aarav.jpg") whenever
// you have one — the gradient-initials tile is the fallback if empty.
const TEAM = [
  { name: "Aarav Mehta", role: "Co-Founder & CEO", tag: "IIT Bombay", gradient: ["#0064fa", "#7c3aff"], photo: "https://i.pravatar.cc/300?img=12" },
  { name: "Sana Kapoor", role: "Co-Founder & Creative Director", tag: "NID Ahmedabad", gradient: ["#7c3aff", "#f726a8"], photo: "https://i.pravatar.cc/300?img=47" },
  { name: "Rohan Iyer", role: "Head of Technology", tag: "IIT Delhi", gradient: ["#f726a8", "#ff7a45"], photo: "https://i.pravatar.cc/300?img=14" },
  { name: "Divya Nair", role: "Head of Growth", tag: "IIM Ahmedabad", gradient: ["#0064fa", "#00c2ff"], photo: "https://i.pravatar.cc/300?img=45" },
  { name: "Kabir Malhotra", role: "Lead 3D Artist", tag: "8+ yrs CGI/VFX", gradient: ["#00c2ff", "#7c3aff"], photo: "https://i.pravatar.cc/300?img=18" },
  { name: "Meher Chopra", role: "AI & Automation Lead", tag: "IIIT Hyderabad", gradient: ["#7c3aff", "#0064fa"], photo: "https://i.pravatar.cc/300?img=33" },
  { name: "Yash Verma", role: "XR Engineer", tag: "AR/VR Specialist", gradient: ["#f726a8", "#7c3aff"], photo: "https://i.pravatar.cc/300?img=16" },
  { name: "Ira Bhatt", role: "Client Partnerships", tag: "IIM Bangalore", gradient: ["#0064fa", "#f726a8"], photo: "https://i.pravatar.cc/300?img=48" },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 max-w-2xl">
          <p className="font-mono-mad text-xs uppercase tracking-widest text-white/40">
            The team
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The humans behind the madness
          </h2>
          <p className="mt-4 font-body text-white/60">
            Engineers from IIT, strategists from IIM, and creatives who&apos;ve
            shipped work for brands across the globe — all under one roof.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((m) => (
            <RevealItem key={m.name} className="group">
              <div
                className="relative mb-4 flex aspect-square items-center justify-center overflow-hidden rounded-2xl font-display text-2xl font-bold text-white transition duration-300 group-hover:scale-[1.03]"
                style={!m.photo ? { background: `linear-gradient(135deg, ${m.gradient[0]}, ${m.gradient[1]})` } : undefined}
              >
                {m.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
                ) : (
                  m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                )}
                <a
                  href="#"
                  aria-label={`${m.name} on LinkedIn`}
                  className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur transition duration-300 hover:bg-white hover:text-black group-hover:opacity-100"
                >
                  <FaLinkedinIn size={13} />
                </a>
              </div>
              <p className="font-body text-sm font-semibold text-white">{m.name}</p>
              <p className="font-body text-xs text-white/50">{m.role}</p>
              <span className="mt-1.5 inline-block rounded-full border border-white/10 px-2 py-0.5 font-mono-mad text-[10px] text-white/40">
                {m.tag}
              </span>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
