"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#071320]/75 z-10" />
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
          alt="Children smiling"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <div className="max-w-[1000px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-normal leading-[1.1] mb-6 font-serif text-white">
              Uplifting Communities, <span className="text-primary">Empowering Lives</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm md:text-lg text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              Valley Empowerment Trust is dedicated to grassroots social development, bringing sustainable change through quality education, healthcare access, and livelihood generation for the underprivileged.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/donate">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-[#e5a924] text-[#101c29] font-bold rounded-full px-8 py-6 text-base transition-transform hover:scale-105">
                Make an Impact
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#101c29] font-bold rounded-full px-8 py-6 text-base transition-transform hover:scale-105">
                Our Mission
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
