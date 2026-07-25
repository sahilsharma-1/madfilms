// Placeholder roster — swap in real names, roles, and photos.
// To use a real photo, replace the gradient-initial <div> with:
// <img src="/team/name.jpg" alt={m.name} className="h-full w-full rounded-2xl object-cover" />
const TEAM = [
  { name: "Aarav Mehta", role: "Co-Founder & CEO", tag: "IIT Bombay", gradient: ["#0064fa", "#7c3aff"] },
  { name: "Sana Kapoor", role: "Co-Founder & Creative Director", tag: "NID Ahmedabad", gradient: ["#7c3aff", "#f726a8"] },
  { name: "Rohan Iyer", role: "Head of Technology", tag: "IIT Delhi", gradient: ["#f726a8", "#ff7a45"] },
  { name: "Divya Nair", role: "Head of Growth", tag: "IIM Ahmedabad", gradient: ["#0064fa", "#00c2ff"] },
  { name: "Kabir Malhotra", role: "Lead 3D Artist", tag: "8+ yrs CGI/VFX", gradient: ["#00c2ff", "#7c3aff"] },
  { name: "Meher Chopra", role: "AI & Automation Lead", tag: "IIIT Hyderabad", gradient: ["#7c3aff", "#0064fa"] },
  { name: "Yash Verma", role: "XR Engineer", tag: "AR/VR Specialist", gradient: ["#f726a8", "#7c3aff"] },
  { name: "Ira Bhatt", role: "Client Partnerships", tag: "IIM Bangalore", gradient: ["#0064fa", "#f726a8"] },
];

export default function Team() {
  return (
    <section id="team" className="bg-[#060608] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
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
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((m) => (
            <div key={m.name} className="group">
              <div
                className="mb-4 flex aspect-square items-center justify-center rounded-2xl font-display text-2xl font-bold text-white transition group-hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(135deg, ${m.gradient[0]}, ${m.gradient[1]})`,
                }}
              >
                {m.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <p className="font-body text-sm font-semibold text-white">{m.name}</p>
              <p className="font-body text-xs text-white/50">{m.role}</p>
              <span className="mt-1.5 inline-block rounded-full border border-white/10 px-2 py-0.5 font-mono-mad text-[10px] text-white/40">
                {m.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
