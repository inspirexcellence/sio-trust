"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const galleryImages = [
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593113589914-07599109ddb6?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541888052140-1a74244f07e7?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526976663112-00a5d42be4a4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&w=2070&auto=format&fit=crop"
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
              Our Gallery
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Capturing Moments of Hope.
            </h2>
          </div>
          <Link href="/gallery" className="hidden md:block">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View All Photos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${idx === 0 || idx === 3 ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <div className={`w-full ${idx === 0 || idx === 3 ? "h-64 md:h-[500px]" : "h-48 md:h-[238px]"}`}>
                <img
                  src={src}
                  alt={`Gallery Image ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                    <ArrowRight className="text-white w-6 h-6 -rotate-45" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
          <Link href="/gallery">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full">
              View All Photos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
