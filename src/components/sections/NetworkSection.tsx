export default function NetworkSection() {
  const centers = [
    { title: "VANI VIDYALAYA PRE-PRIMARY", desc: "Nurturing the youngest minds with a strong foundation in values and early learning.", location: "Mulund West" },
    { title: "VANI VIDYALAYA PRIMARY", desc: "Fostering academic excellence and character building during the formative years.", location: "Mulund West" },
    { title: "VANI VIDYALAYA SECONDARY", desc: "Empowering students with advanced knowledge, leadership skills, and discipline.", location: "Mulund West" },
    { title: "VANI JUNIOR COLLEGE", desc: "Preparing future leaders for global success in Science and Commerce streams.", location: "Mulund West" },
    { title: "ROBOTICS & AI LAB", desc: "A state-of-the-art facility for future-ready education and technological innovation.", location: "Main Campus" },
    { title: "SPORTS & WELLNESS UNIT", desc: "Focusing on physical development and holistic well-being for every student.", location: "Main Campus" },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#0a2540] mb-4">
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
                  src={`https://media.istockphoto.com/id/174789151/photo/school-building-uk-infant-junior-5-11years.jpg?s=612x612&w=0&k=20&c=en44a_O0TEUS0IRawQx_fz5_hCXWS63Mec9O-7COQXY=`} 
                  alt={center.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-[#0a2540] mb-2 tracking-wide uppercase text-sm">{center.title}</h3>
                <p className="text-xs text-slate-600 mb-4 flex-grow">{center.desc}</p>
                <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">
                  Location: {center.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center font-bold text-[#0a2540] text-sm md:text-base flex flex-wrap justify-center items-center gap-2 md:gap-4">
          <span>School Strength <span className="text-primary">3,600+</span></span>
          <span className="text-slate-300 hidden md:inline">|</span>
          <span>Staff <span className="text-primary">125+</span></span>
          <span className="text-slate-300 hidden md:inline">|</span>
          <span>Legacy <span className="text-primary">70 Years</span></span>
          <span className="text-slate-300 hidden md:inline">|</span>
          <span>Establishment <span className="text-primary">1955</span></span>
        </div>

      </div>
    </section>
  );
}
