"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
    <section className="py-24 bg-white border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0a2540] mb-6">Board of Trustees</h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Guided by visionaries, philanthropists, and seasoned advocates committed to transparent governance and sustainable impact.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-7xl mx-auto relative px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-8 py-4">
              {trustees.map((trustee, idx) => (
                <CarouselItem key={idx} className="pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-square overflow-hidden shrink-0 bg-slate-50">
                      <img 
                        src={trustee.image} 
                        alt={trustee.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow text-center">
                      <h3 className="text-lg font-bold text-[#0a2540] leading-tight mb-2 min-h-[3.5rem]">{trustee.name}</h3>
                      <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4 min-h-[1.5rem]">{trustee.role}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {trustee.bio}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div>
              <CarouselPrevious className="-left-4 bg-white border-slate-200 text-[#0a2540] hover:bg-primary hover:text-white transition-colors active:translate-y-0" />
              <CarouselNext className="-right-4 bg-white border-slate-200 text-[#0a2540] hover:bg-primary hover:text-white transition-colors active:translate-y-0" />
            </div>
          </Carousel>
        </div>

      </div>
    </section>
  );
}
