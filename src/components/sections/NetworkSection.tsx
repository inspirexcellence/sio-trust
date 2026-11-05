export default function NetworkSection() {
  const facilities = [
    { 
      title: "IT LAB", 
      desc: "The Information Technology lab is equipped with state of art, ultra-modern and sophisticated computers enabling a fully updated curriculum to develop the student’s technical skills and knowledge. With a capacity for 70 students our lab offers sufficient computers, reliable internet access and software to simulate exam environments.", 
      image: "/it-lab.jpg"
    },
    { 
      title: "AUDITORIUM", 
      desc: "Step into the spotlight! Our auditorium is a vibrant space where creativity meets community. This auditorium boasts a seating capacity of 300, offering a spacious yet intimate environment ideal for conferences, lectures and cultural performances. Designed with both comfort and functionality in mind, the facility is fully air-conditioned and seating is arranged to ensure optimal visibility and acoustics from every angle.", 
      image: "/auditorium.jpg"
    },
    { 
      title: "CULTURAL FOYER", 
      desc: "A Bright and inviting hall with capacity of 500 audience, a perfect canvas for any gathering you have in mind. An open and airy space with a well- proportioned stage offering ample room for speakers, performers and presentations. The overall impression is one of functionality and adaptability. This foyer is perfectly suited for diverse celebrations and events.", 
      image: "/cultural-foyer.png"
    },
    { 
      title: "CONFERENCE ROOM", 
      desc: "A well-equipped conference room serves as a central hub for collaboration, decision making and communication within an organization. It has a dynamic environment with a comfortable seating, arranged to encourage interaction with advanced technological infrastructure.", 
      image: "/conference-room.png"
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#0a2540] mb-4">
            Facilities
          </h2>
          <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">
            Empowering through modern infrastructure and skill development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="h-52 bg-slate-100 relative overflow-hidden">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col items-center text-center flex-grow">
                <h3 className="font-bold text-[#1b4d3e] tracking-wider uppercase text-base md:text-lg mb-2">{facility.title}</h3>
                <div className="w-8 h-0.5 bg-[#1b4d3e] mx-auto mb-4"></div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{facility.desc}</p>
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
