export default function MissionVisionSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#0a2540] mb-4">
            Igniting Young Minds, Inspiring Lifelong Learning
          </h2>
          <p className="text-sm md:text-base text-slate-600">
            Providing opportunity, breaking cycles of poverty through care and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-md">
            <h3 className="text-xl font-serif font-bold text-[#0a2540] mb-4">Our Mission</h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              “To cultivate a transformative educational environment that fosters intellectual curiosity, ethical leadership, and social responsibility, preparing students to excel in a rapidly evolving global society.”
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-md">
            <h3 className="text-xl font-serif font-bold text-[#0a2540] mb-4">Our Vision</h3>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              “To be a premier destination for Professional and Liberal Arts, where a multi-generational legacy of integrity meets the future of global leadership.”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-12 border-t border-slate-200">
          <div>
            <h4 className="font-bold text-[#0a2540] mb-3">Core Value Focus</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Integrity, accountability, and transparency in all our initiatives and operations.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#0a2540] mb-3">Values Where You Matter</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              We believe in the power of empathy, respect, and collaboration to drive meaningful change.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#0a2540] mb-3">Our Communities Build Us Better</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Building resilient communities by focusing on long-term sustainability and empowerment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
