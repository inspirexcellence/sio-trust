import { BookOpen, HeartPulse, ShieldCheck } from "lucide-react";

export default function InitiativesSection() {
  const initiatives = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "education scholarships",
      desc: "Providing financial support to deserving students to continue their higher education without barriers."
    },
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: "medical welfare",
      desc: "Offering free healthcare services, surgeries, and medicines to patients from low-income families."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "community empowerment",
      desc: "Conducting awareness programs and skill development courses to uplift the community as a whole."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px] text-center">
        
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#101c29] mb-16">
          Featured Initiatives
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {initiatives.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-[#101c29] text-base mb-3 capitalize tracking-wide">{item.title}</h3>
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
