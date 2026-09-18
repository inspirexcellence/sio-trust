"use client";

import { motion } from "framer-motion";
import { User, Shield, Users } from "lucide-react";

export default function TeamPage() {
  const advisors = [
    {
      name: "Shri V. Chandrasekharan",
      badge: "HM - 593",
      role: "Entrepreneur & Philanthropist"
    },
    {
      name: "Shri P.K. Krishnaprasad",
      badge: "LM - 508",
      role: "Entrepreneur & Founder Of Kaushik KP Memorial Charitable Foundation"
    },
    {
      name: "Shri Ramamoorthy Rajagopal",
      badge: "LM - 586",
      role: "Financial Analyst & Philanthropist"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0a2540]">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Leadership</h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Meet the visionaries and dedicated professionals who guide our institution towards excellence and shape the future of our students.
          </p>
        </div>

        {/* Expert Advisory Panel */}
        <div className="mb-32">
          <div className="flex items-center justify-center gap-4 mb-16">
            <Shield className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-serif font-bold text-white">Expert Advisory Panel</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx} 
                className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-colors duration-300 text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{advisor.name}</h3>
                <span className="inline-block px-3 py-1 bg-white/10 text-primary text-xs font-bold rounded-full mb-4">
                  {advisor.badge}
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {advisor.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Executive Team */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-16">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-serif font-bold text-white">Executive Team</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {[
              { name: "Shri C. V. Srinivasan", role: "President" },
              { name: "Shri P.P. Subramanian", role: "Vice President" },
              { name: "Shri. P.V. Jayaraman", role: "Hon. Secretary" },
              { name: "Shri Shiva Muthuswami", role: "Hon Treasurer" },
              { name: "Shri A. Muralikrishnan", role: "Hon Jt. Secretary" },
              { name: "Shri C. R. Ramakrishnan", role: "Hon. Jt. Treasurer" }
            ].map((exec, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden group hover:bg-white/10 transition-colors duration-300"
              >
                <div className="aspect-[4/3] bg-white/5 flex items-center justify-center">
                  <User className="w-16 h-16 text-white/20 group-hover:text-primary/40 transition-colors duration-300" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{exec.name}</h3>
                  <span className="inline-block px-3 py-1 bg-white/10 text-primary text-xs font-bold rounded-full">
                    {exec.role}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center bg-white/5 border border-white/10 rounded-2xl p-6 max-w-3xl mx-auto"
          >
            <p className="text-slate-300 text-sm leading-relaxed">
              * Also in the list of our 13 MC members, Mr. G. Shankar has been inducted in the place of Mr. V. Vishwanathan who has resigned on health grounds.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
