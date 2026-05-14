"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutSection() {
  const features = [
    "Providing quality education for underprivileged children.",
    "Accessible healthcare and medical camps.",
    "Women empowerment and skill development.",
    "Emergency relief and disaster response.",
  ];

  return (
    <section className="py-24 bg-white md:mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4 mt-8">
                <img 
                  src="https://images.unsplash.com/photo-1593113589914-07599109ddb6?q=80&w=2070&auto=format&fit=crop" 
                  alt="Education" 
                  className="rounded-2xl object-cover h-64 w-full shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop" 
                  alt="Community" 
                  className="rounded-2xl object-cover h-48 w-full shadow-lg"
                />
              </div>
              <div className="flex flex-col gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Volunteering" 
                  className="rounded-2xl object-cover h-48 w-full shadow-lg"
                />
                <div className="bg-primary rounded-2xl p-8 text-white flex flex-col justify-center shadow-lg h-64">
                  <h3 className="text-4xl font-bold mb-2">15+</h3>
                  <p className="text-lg font-medium opacity-90">Years of dedicated service to humanity.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
              About SIO Trust
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              We are on a mission to help the helpless.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              At SIO Trust, we believe that every individual deserves a chance at a better life. Our organization has been tirelessly working to bridge the gap between resources and those who desperately need them.
            </p>
            
            <ul className="flex flex-col gap-4 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="/about">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 h-12 px-8">
                Discover More
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
