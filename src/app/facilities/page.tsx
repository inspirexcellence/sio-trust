import { Building2, ArrowUpDown, Mic2, Users2, Trophy, Sun, Zap, Heart, Library } from "lucide-react";

export default function FacilitiesPage() {
  const facilities = [
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      text: "Gr + 7 storey building with state of the art facilities required for contemporary education"
    },
    {
      icon: <ArrowUpDown className="w-8 h-8 text-primary" />,
      text: "3 large lifts with Power back-up"
    },
    {
      icon: <Mic2 className="w-8 h-8 text-primary" />,
      text: "300 seater AC auditorium"
    },
    {
      icon: <Users2 className="w-8 h-8 text-primary" />,
      text: "Ground floor Assembly Hall with Stage & dining area 400 persons capacity"
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      text: "Outdoor sports Turf & stage Cricket, football"
    },
    {
      icon: <Sun className="w-8 h-8 text-primary" />,
      text: "Green building with Solar power installation & rainwater harvesting"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      text: "DG back"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      text: "Ram temple for prayers, to inculcate religious values & spirituality in students"
    },
    {
      icon: <Library className="w-8 h-8 text-primary" />,
      text: "SIO Multi Lingual library"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-0 flex flex-col">
      {/* Hero Section */}
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px] mb-20 flex-shrink-0">
        <div className="max-w-4xl">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">Campus Tour</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-slate-900 leading-tight mb-6">
            World-Class Facilities
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Explore our state-of-the-art campus designed to provide a holistic, secure, and inspiring environment for every student.
          </p>
        </div>
      </div>

      {/* Facilities Grid - Full Width Dark Section */}
      <div className="w-full flex-grow bg-[#0a2540] py-24 relative overflow-hidden">
        {/* Abstract background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-30 -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-10 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center gap-4 group shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  {facility.icon}
                </div>
                <p className="text-xl font-bold text-white leading-snug">
                  {facility.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Descriptions Section */}
      <div className="w-full bg-white py-24">
        <div className="container mx-auto px-6 md:px-10 max-w-[1000px]">
          <div className="prose prose-lg max-w-none text-slate-600">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Assembly Hall</h2>
            <p className="mb-12 leading-relaxed text-lg">
              The bright & airy assembly hall on the ground floor (Smt. Shyamala Chandarsekharan Assembly Hall) is well equipped to accommodate around 400 persons and a wonderful place to conduct school cultural activities and mass drills. The hall is available for the community members at a very nominal charge for conducting religious and family functions, the adjoining area doubles up the dining area. This facility is available for events on Sundays. The central location of the school campus is an added advantage for event planners. The entire facility has a power back up with powerful DG sets.
            </p>

            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">The Annapoorneswari Auditorium</h2>
            <p className="leading-relaxed text-lg">
              The Annapoorneswari Auditorium on the 7th floor is an air-conditioned auditorium with a capacity of 300 persons. It is equipped with a stage for small ensembles and a powerful sound system. Often school award ceremonies, felicitations and cultural events are held here. On Sundays this hall is available for members of the public for a nominal rent to conduct meetings, Karaoke performances, classical dance and music performances.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
