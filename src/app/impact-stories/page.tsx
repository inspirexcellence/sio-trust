import { ArrowRight } from "lucide-react";

export default function ImpactStoriesPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="py-20 bg-[#0a2540] text-white text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
            Impact Stories
          </h1>
          <p className="text-primary font-bold tracking-widest uppercase text-sm">
            Transforming Lives Through Education
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform duration-300">
              <div className="h-48 bg-slate-200 flex items-center justify-center">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Image Coming Soon</span>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-serif font-bold text-[#0a2540] mb-3 group-hover:text-primary transition-colors">
                  Impact Story {item}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  Discover how our initiatives and generous donors have made a lasting difference in this student's life and academic journey.
                </p>
                <button className="text-primary font-bold text-sm flex items-center uppercase tracking-widest">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
