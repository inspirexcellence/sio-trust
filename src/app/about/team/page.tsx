"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function TeamPage() {
  const directors = [
    {
      name: "Mr. Arthur Pendelton",
      role: "Head of Educational Initiatives",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop",
      bio: "Coordinates our tuition centers, scholarship distributions, and the digital literacy drive across 50+ partner schools."
    },
    {
      name: "Ms. Diana Cruz",
      role: "Director of Livelihood Programs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
      bio: "Manages our vocational training centers, micro-finance linking, and women's entrepreneurial workshops."
    },
    {
      name: "Mr. James Miller",
      role: "Community Outreach Lead",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2070&auto=format&fit=crop",
      bio: "Our primary liaison with village heads and local administrations. Identifies communities most in need of urgent interventions."
    },
    {
      name: "Mrs. Chloe Davis",
      role: "Volunteer Coordinator",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop",
      bio: "Recruits, trains, and manages our robust network of over 150 local and international volunteers working on the ground."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0a2540] mb-6">Our Executive Team</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            The dedicated program directors and field managers who turn our organizational vision into tangible, on-the-ground reality.
          </p>
        </div>

        {/* Featured Card - Dr. Sarah Jenkins */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden mb-24 max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch">
          <div className="lg:w-2/5 min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop" 
              alt="Dr. Sarah Jenkins"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-3/5 p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl font-serif font-bold text-[#0a2540] mb-1">Dr. Sarah Jenkins</h2>
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-8">MANAGING TRUSTEE / EXECUTIVE DIRECTOR</p>
            
            <div className="text-sm md:text-base text-slate-600 space-y-6 leading-relaxed mb-10">
              <p>
                Dr. Jenkins took the helm of SIO in 2018. Holding a Master's in Social Work and a Ph.D. in Public Policy, she has spent her career advocating for educational reform in marginalized zones. Under her operational leadership, the Trust has expanded its footprint to three new districts and quadrupled its annual volunteer base.
              </p>
              <p className="italic border-l-4 border-primary pl-6 py-1">
                "Charity is the response to immediate crisis, but empowerment is the systematic dismantling of the barriers that caused the crisis. We don't just want to hand out relief; we want to hand out opportunity."
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm font-bold text-[#0a2540]">
              <Mail size={18} className="text-primary" />
              <span>director@valleyempowerment.org</span>
            </div>
          </div>
        </div>

        {/* Program Directors Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-serif font-bold text-[#0a2540] mb-4">Program Directors</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {directors.map((director, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-50 text-center hover:translate-y-[-8px] transition-transform duration-300">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-50">
                <img src={director.image} alt={director.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-[#0a2540] text-base mb-1">{director.name}</h3>
              <p className="text-[11px] font-bold text-primary uppercase tracking-wider mb-6 leading-tight">{director.role}</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                {director.bio}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
