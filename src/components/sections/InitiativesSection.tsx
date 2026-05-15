import { BookOpen, HeartPulse, ShieldCheck } from "lucide-react";

export default function InitiativesSection() {
  const initiatives = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Education Beyond Academics",
      desc: "We believe true education goes beyond textbooks; it nurtures character, discipline, creativity, and leadership while preparing students to contribute meaningfully to society."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Rooted in Values, Driven by Excellence",
      desc: "For over seven decades, SIO has combined academic rigor with strong ethical values, cultural grounding, and holistic development to shape responsible future leaders."
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: "Committed to Every Student’s Growth",
      desc: "From foundational learning to future-ready education, we are dedicated to creating an environment where every student is empowered to learn, grow, innovate, and succeed."
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
            <div key={idx} className="flex flex-col items-center">
              <div className="text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-[#0a2540] text-base mb-3 capitalize tracking-wide">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
