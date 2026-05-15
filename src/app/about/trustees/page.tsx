"use client";

import { motion } from "framer-motion";

export default function TrusteesPage() {
  const trustees = [
    {
      name: "Marcus Vance",
      role: "CHAIRMAN & CO-FOUNDER",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
      bio: "A retired corporate executive turned full-time philanthropist. Marcus brings over 30 years of management experience to SIO, establishing our transparent audit protocols and driving our major endowment campaigns."
    },
    {
      name: "Dr. Elena Rostova",
      role: "HEAD OF MEDICAL ADVISORY",
      image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=2070&auto=format&fit=crop",
      bio: "A senior pediatrician at State General Hospital. Dr. Rostova designs and oversees all of our rural health camps, immunization drives, and maternal health awareness programs."
    },
    {
      name: "Robert Chen",
      role: "DIRECTOR OF CSR RELATIONS",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      bio: "With a background in international public relations, Robert manages our vital partnerships with corporate entities, ensuring that institutional funding aligns perfectly with grassroots needs."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0a2540] mb-6">Board of Trustees</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Guided by visionaries, philanthropists, and seasoned social advocates committed to transparent governance and sustainable impact.
          </p>
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-24 border-t border-slate-100 pt-16">
          <p className="text-sm md:text-base text-slate-600 leading-relaxed italic">
            The Board of Trustees acts as the strategic backbone of South Indians' Organisation. Comprised of leaders from the corporate, medical, and public sectors, the Board ensures rigorous financial oversight, adherence to our core values, and the strategic expansion of our programs to maximize societal benefit.
          </p>
        </div>

        {/* Trustee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {trustees.map((trustee, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={trustee.image} 
                  alt={trustee.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-[#0a2540] mb-1">{trustee.name}</h3>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-6">{trustee.role}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  {trustee.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
