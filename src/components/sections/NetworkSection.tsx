export default function NetworkSection() {
  const centers = [
    { title: "VEDA KENDRA", desc: "A holistic learning center focusing on foundational education and values.", location: "Hope City" },
    { title: "VIDYA", desc: "Our flagship school providing quality education to marginalized communities.", location: "Rural District" },
    { title: "PATHSHALA", desc: "Evening classes for children who work during the day to support their families.", location: "Urban Slums" },
    { title: "GURUKUL", desc: "A residential educational facility providing comprehensive development.", location: "Valley Region" },
    { title: "SHIKSHA", desc: "A bridging program to integrate dropouts back into the formal education system.", location: "North District" },
    { title: "MAHILA SILAI KENDRA", desc: "A vocational training center empowering women with tailoring skills.", location: "East Zone" },
    { title: "COMPUTER TRAINING", desc: "Equipping youth with digital literacy and basic computer skills for better employment.", location: "City Center" },
    { title: "KAUSHAL VIKAS", desc: "Skill development center focusing on various trades like carpentry, plumbing, etc.", location: "Industrial Hub" },
    { title: "ASHA", desc: "A special education center for children with diverse learning needs.", location: "West District" },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#101c29] mb-4">
            Network of Schools & Centres
          </h2>
          <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">
            Empowering through education and skill development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {centers.map((center, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col group">
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                {/* Placeholder for center image */}
                <img 
                  src={`https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop`} 
                  alt={center.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-80"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-[#101c29] mb-2 tracking-wide uppercase text-sm">{center.title}</h3>
                <p className="text-xs text-slate-600 mb-4 flex-grow">{center.desc}</p>
                <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">
                  Location: {center.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center font-bold text-[#101c29] text-sm md:text-base flex flex-wrap justify-center items-center gap-2 md:gap-4">
          <span>School Strength <span className="text-primary">4,500+</span></span>
          <span className="text-slate-300 hidden md:inline">|</span>
          <span>Staff <span className="text-primary">500+</span></span>
          <span className="text-slate-300 hidden md:inline">|</span>
          <span>Operation Areas <span className="text-primary">250+</span></span>
          <span className="text-slate-300 hidden md:inline">|</span>
          <span>VET Centres <span className="text-primary">10+</span></span>
        </div>

      </div>
    </section>
  );
}
