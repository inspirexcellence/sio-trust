"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/95 mix-blend-multiply z-10" />
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
          alt="CTA Background"
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Make a Difference? <br/>
              Join Our Noble Cause Today.
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Whether you choose to donate or volunteer your time, your contribution plays a vital role in transforming lives and building stronger communities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/donate" className="w-full sm:w-auto">
                <Button size="lg" className="w-full h-14 px-8 bg-white text-primary hover:bg-slate-100 text-lg shadow-xl shadow-black/20 group">
                  <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Make a Donation
                </Button>
              </Link>
              
              <Link href="/volunteer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-14 px-8 bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg">
                  <Users className="mr-2 h-5 w-5" />
                  Become a Volunteer
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
