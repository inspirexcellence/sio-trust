import Link from "next/link";

export default function InitiativesSection() {
  const initiatives = [
    {
      icon: <img src="/Features/feature11.png" alt="Education" className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-white" />,
      title: "Education Beyond Academics",
      desc: "We believe true education goes beyond textbooks; it nurtures character, discipline, creativity, and leadership while preparing students to contribute meaningfully to society.",
      href: "/features/education-beyond-academics"
    },
    {
      icon: <img src="/Features/feature21.png" alt="Values" className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-white" />,
      title: "Rooted in Values, Driven by Excellence",
      desc: "For over seven decades, SIO has combined academic rigor with strong ethical values, cultural grounding, and holistic development to shape responsible future leaders.",
      href: "/features/rooted-in-values"
    },
    {
      icon: <img src="/Features/feature3.png" alt="Growth" className="w-14 h-14 rounded-full object-cover shadow-md border-2 border-white" />,
      title: "Committed to Every Student’s Growth",
      desc: "From foundational learning to future-ready education, we are dedicated to creating an environment where every student is empowered to learn, grow, innovate, and succeed.",
      href: "/features/student-growth"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px] text-center">
        
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a2540] mb-16">
          Featured Initiatives
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {initiatives.map((item, idx) => (
            <Link href={item.href} key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-[#0a2540] text-base mb-3 capitalize tracking-wide group-hover:text-primary transition-colors duration-300">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
