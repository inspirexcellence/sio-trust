"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Compass, Award } from "lucide-react";

export default function MissionVisionPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0a2540] text-white">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Mission & Vision</h1>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-primary/50 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <Target className="w-16 h-16 text-primary mb-8" />
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              "To provide a robust academic foundation that integrates career success with value-based grooming, shaping socially responsible citizens."
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-primary/50 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <Lightbulb className="w-16 h-16 text-primary mb-8" />
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Our Vision</h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
              "To be a premier destination for Professional and Liberal Arts, where a multi-generational legacy of integrity meets the future of global leadership."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
