"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950/70 z-10" />
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
          alt="Children smiling"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6"
          >
            <Heart size={16} className="text-primary fill-primary" />
            <span className="text-sm font-medium tracking-wide">Empowering Communities</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
              Small acts of <span className="text-primary">kindness</span> make a big impact.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              Join us in our mission to bring positive change. Through education, healthcare, and sustainable programs, we're building a brighter future for all.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/donate">
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white h-14 px-8 text-base shadow-lg shadow-primary/30">
                Donate Now <Heart className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-slate-900 h-14 px-8 text-base">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats overlapping the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 hidden md:block">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-3 gap-8 divide-x divide-slate-100 border border-slate-100">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-slate-900 mb-2">10K+</h3>
              <p className="text-slate-500 font-medium">Lives Impacted</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-slate-900 mb-2">50+</h3>
              <p className="text-slate-500 font-medium">Active Programs</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-slate-900 mb-2">500+</h3>
              <p className="text-slate-500 font-medium">Volunteers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
