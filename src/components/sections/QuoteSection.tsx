"use client";

import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-12 md:p-20 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-md"
        >
          {/* Decorative Quote Mark */}
          <div className="absolute top-10 left-10 text-primary/80 select-none">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21L14.017 18C14.017 16.899 14.919 16 16.02 16L19.02 16C19.572 16 20.02 15.552 20.02 15L20.02 12C20.02 11.448 19.572 11 19.02 11L15.02 11C12.811 11 11.018 12.793 11.018 15L11.018 21L14.017 21ZM5.017 21L5.017 18C5.017 16.899 5.919 16 7.02 16L10.02 16C10.572 16 11.02 15.552 11.02 15L11.02 12C11.02 11.448 10.572 11 10.02 11L6.02 11C3.811 11 2.018 12.793 2.018 15L2.018 21L5.017 21Z" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0a2540] mb-8 relative z-10">
            सा विद्या या विमुक्तये
          </h2>
          <p className="text-xl md:text-2xl font-serif italic text-primary mb-10 relative z-10">
            “Sā Vidyā Yā Vimuktaye”
          </p>
          
          <div className="max-w-3xl mx-auto space-y-6 text-slate-600 text-sm md:text-lg leading-relaxed relative z-10">
            <p>
              True education is that which liberates not only through knowledge but also through values, wisdom, character, and the ability to contribute meaningfully to society.
            </p>
            <p>
              It reflects the belief that education should empower individuals to rise beyond their limitations and become responsible, compassionate, and enlightened human beings.
            </p>
          </div>

          <div className="mt-12 w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
