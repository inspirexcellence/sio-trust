export default function StatsBar() {
  return (
    <section className="py-12 bg-[#0a2540] text-white">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-700/50">
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold text-primary mb-2">70+</span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">Years of Legacy</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold text-primary mb-2">3,600+</span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">Active Students</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold text-primary mb-2">125+</span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">Dedicated Staff</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold text-primary mb-2">1955</span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">Established</span>
          </div>
        </div>
      </div>
    </section>
  );
}
