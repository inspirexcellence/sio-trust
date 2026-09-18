import { Calendar, Rocket, Target } from "lucide-react";

export default function FuturePlansPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="py-20 bg-[#0a2540] text-white text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
            Future Plans
          </h1>
          <p className="text-primary font-bold tracking-widest uppercase text-sm">
            Vision 2026-2030
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 -mt-10 relative z-20 max-w-5xl">
        <div className="space-y-12">
          
          {/* Futuristic Action Plan */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <Rocket className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#0a2540] mb-4">Futuristic Action Plan</h2>
              <p className="text-slate-600 leading-relaxed">
                Detailed action plan content coming soon. We are laying the groundwork for unprecedented growth and educational excellence over the coming years.
              </p>
            </div>
          </div>

          {/* Platinum Celebrations */}
          <div className="bg-[#0a2540] text-white p-8 md:p-12 rounded-2xl shadow-xl border-l-4 border-primary flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center shrink-0">
              <Calendar className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Platinum Celebrations 2026-2030</h2>
              <p className="text-slate-300 leading-relaxed">
                Information about our upcoming Platinum Jubilee events, milestones, and community gatherings will be published here shortly.
              </p>
            </div>
          </div>

          {/* Upcoming Project Details */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <Target className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#0a2540] mb-4">Upcoming Project Details</h2>
              <p className="text-slate-600 leading-relaxed">
                Learn about our upcoming infrastructure and academic projects designed to elevate our institutional capabilities. Stay tuned for updates.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
