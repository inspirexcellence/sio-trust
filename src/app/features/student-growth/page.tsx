import { CheckCircle2 } from "lucide-react";

export default function StudentGrowthPage() {
  const highlights = [
    "Established in 1955",
    "3,600+ Students",
    "125+ Dedicated Staff Members",
    "70+ Years of Educational Excellence",
    "Strong Community & Alumni Network"
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
            A Community That Builds Generations
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          {/* Content */}
          <div className="space-y-8 text-lg text-slate-600 leading-relaxed order-2 lg:order-1">
            <p>
              The story of Vani Vidyalaya is not only the story of a school—it is the story of a community united by a shared belief in the transformative power of education.
            </p>
            <p>
              What began with just 27 students has today grown into a thriving institution serving nearly 3,600 students with the support of over 125 dedicated educators and staff members. Behind every milestone lies the collective effort of teachers, parents, alumni, well-wishers, and generations of students who have contributed to building this enduring legacy.
            </p>
            <p>
              For decades, the institution has remained a place where dreams are nurtured, opportunities are created, and lifelong values are instilled. Together, we continue to shape generations of learners who carry forward the spirit of excellence, service, and community that has defined Vani Vidyalaya since 1955.
            </p>
          </div>

          {/* Images Layout */}
          <div className="relative lg:mt-0 flex items-center justify-center order-1 lg:order-2">
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] -z-10 blur-3xl"></div>
            
            <div className="w-full max-w-md lg:max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white relative group">
              <img src="/Features/feature3.png" alt="A Community That Builds Generations" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              {/* Subtle gradient overlay at the bottom of the image to blend it into the card */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Full Width Key Highlights */}
        <div className="pt-16 border-t border-slate-200">
          <h3 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Key Highlights</h3>
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
