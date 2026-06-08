"use client";



export default function TrusteesSection() {
  const trustees = [
    {
      name: "Shri C.V.Srinivasan",
      role: "President",
      image: "/trustees/C.V.Srinivasan2.jpeg",
      bio: "Guiding the trust with exceptional leadership and a vision to expand our educational footprint across regions."
    },
    {
      name: "Shri. P.P.Subramanian",
      role: "Vice President",
      image: "/trustees/P.P.Subramanian1.jpeg",
      bio: "Bringing decades of governance experience and supporting strategic initiatives to ensure sustainable community impact."
    },
    {
      name: "Shri P. V. Jayaraman",
      role: "Hon. Secretary",
      image: "/trustees/P.V.Jayaraman1.jpeg",
      bio: "Overseeing the administrative and operational excellence of our institutions, ensuring smooth day-to-day functions."
    },
    {
      name: "Shri. Muralikrishnan Raju",
      role: "Hon. Joint Secretary",
      image: "/trustees/Muralikrishnan Raju1.jpeg",
      bio: "Assisting in core administrative duties and bridging communication across multiple educational centers and the board."
    },
    {
      name: "Shri Shiva Muthuswamy",
      role: "Hon. Treasurer",
      image: "/trustees/Shiva Muthuswamy1.jpeg",
      bio: "Managing the financial health of the trust, strictly adhering to transparent accounting and maximizing resource allocation."
    },
    {
      name: "Shri C. R. Ramakrishnan",
      role: "Hon. Joint Treasurer",
      image: "/trustees/C.R.Ramakrishnan1.jpeg",
      bio: "Working closely to maintain robust financial oversight and supporting fundraising efforts to fuel institutional growth."
    },
    {
      name: "Shri S.Rajagopal",
      role: "MC Member",
      image: "/trustees/S.Rajagopal1.jpeg",
      bio: "Providing valuable insights on organizational policy and contributing actively to the trust’s long-term developmental goals."
    },
    {
      name: "Shri V. Vishwanathan",
      role: "MC Member",
      image: "/trustees/V.Vishwanathan1.jpeg",
      bio: "An active participant in our community outreach programs, deeply committed to upholding SIO's founding principles."
    },
    {
      name: "Shri. N.K.Naganathan",
      role: "MC Member",
      image: "/trustees/N.K.Naganathan1.jpeg",
      bio: "Dedicated to enhancing student welfare initiatives and ensuring our core values reflect in every educational endeavor."
    },
    {
      name: "Shri R. Krishnaprasad",
      role: "MC Member",
      image: "/trustees/R.Krishna Prasad1.jpeg",
      bio: "Championing continuous infrastructural improvements and supporting modernization of our learning facilities."
    },
    {
      name: "Shri Venkatesh Iyer",
      role: "MC Member",
      image: "/trustees/Venkatesh Iyer.jpeg",
      bio: "Focusing on alumni relations and fostering a strong network of supporters to give back to the institution."
    },
    {
      name: "Shri Padmanabhan Kamesh",
      role: "MC Member",
      image: "/trustees/Padmanabhan Kamesh.jpeg",
      bio: "Driving cultural and extracurricular agendas, ensuring students receive a well-rounded and holistic education."
    },
    {
      name: "Shri Sriram Swaminathan",
      role: "MC Member",
      image: "/trustees/Sriram Swaminathan1.jpeg",
      bio: "Advising on strategic technological integrations and promoting modern methodologies in our administrative systems."
    }
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -left-40 top-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-40 bottom-40 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-6 md:px-10 max-w-[1400px]">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Board of Trustees</h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Guided by visionaries, philanthropists, and seasoned advocates committed to transparent governance and sustainable impact.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-12">
            {trustees.map((trustee, idx) => {
              const isLastSingleMobile = idx === trustees.length - 1 && trustees.length % 2 === 1;
              const isLastSingleDesktop = idx === trustees.length - 1 && trustees.length % 3 === 1;
              
              let centeringClasses = "";
              if (isLastSingleMobile) {
                centeringClasses += "col-span-2 w-[calc(50%-0.5rem)] mx-auto ";
              }
              if (isLastSingleDesktop) {
                centeringClasses += "md:col-start-2 md:col-span-1 md:w-full md:mx-0 ";
              }

              return (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl md:rounded-3xl shadow-sm border border-slate-200/60 flex flex-col h-full overflow-hidden group hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-500 ${centeringClasses}`}
              >
                <div className="aspect-square relative overflow-hidden shrink-0 bg-slate-100">
                  <img 
                    src={trustee.image} 
                    alt={trustee.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle gradient overlay at the bottom of the image to blend it into the card */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-4 md:p-8 flex flex-col flex-grow text-center relative z-10 bg-white">
                  <h3 className="text-sm md:text-xl font-bold text-slate-900 leading-tight mb-2 md:mb-3 min-h-[2.5rem] md:min-h-[3.5rem]">{trustee.name}</h3>
                  <div className="mb-3 md:mb-5 min-h-[1.5rem] md:min-h-[1.75rem]">
                    <span className="inline-block bg-primary/10 text-primary px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-wider">
                      {trustee.role}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-500 leading-snug md:leading-relaxed">
                    {trustee.bio}
                  </p>
                </div>
              </div>
            )})}
          </div>
        </div>

      </div>
    </section>
  );
}
