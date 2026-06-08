import { CheckCircle2 } from "lucide-react";

export default function RootedInValuesPage() {
  const highlights = [
    "Smart Learning Environment",
    "Robotics & Artificial Intelligence",
    "Advanced IT Infrastructure",
    "Future-Ready Skills",
    "Innovation & Creativity"
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">Feature</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight max-w-4xl">
            Rooted in Tradition, Ready for the Future
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          {/* Content */}
          <div className="space-y-8 text-lg text-slate-600 leading-relaxed order-2 lg:order-1">
            <p>
              From a humble beginning in a tin-shed classroom to a modern educational campus, Vani Vidyalaya has always embraced progress while remaining deeply rooted in its founding values.
            </p>
            <p>
              Innovation has been a part of our journey for decades. From introducing computer education early on to implementing smart classrooms, Robotics & AI programs, and state-of-the-art IT infrastructure, we continuously evolve to ensure our students are prepared for the opportunities and challenges of a rapidly changing world.
            </p>
            <p>
              By combining strong academic foundations with technology-enabled learning, we empower students with the skills, adaptability, and confidence required to thrive in the future while remaining grounded in integrity and responsibility.
            </p>
          </div>

          {/* Images Layout */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 relative lg:mt-0 order-1 lg:order-2">
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] -z-10 blur-3xl"></div>
            
            <div className="flex flex-col gap-4 sm:gap-6 pt-12 sm:pt-20">
              <div className="aspect-[4/5] rounded-3xl bg-slate-200 overflow-hidden shadow-xl border-4 border-white relative group">
                <img src="/Features/feature21.png" alt="Rooted in Values" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
            </div>
            
            <div className="flex flex-col gap-4 sm:gap-6 pb-12 sm:pb-20">
              <div className="aspect-[4/5] rounded-3xl bg-slate-200 overflow-hidden shadow-xl border-4 border-white relative group">
                <img src="/Features/feature22.png" alt="Ready for the Future" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Key Focus Areas */}
        <div className="pt-16 border-t border-slate-200">
          <h3 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Key Focus Areas</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex flex-col items-center justify-center text-center text-slate-700 bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group">
                <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-slate-900 leading-snug text-xs md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
