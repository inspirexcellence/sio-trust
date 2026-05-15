"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PatronsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        
        {/* Header Section */}
        <section className="bg-[#0a2540] text-white py-24 rounded-3xl mb-20 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">CSR & Institutional Partners</h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Scaling our impact is only possible through the generous backing of our Corporate Social Responsibility (CSR) partners and institutional grantmakers.
          </p>
        </section>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <p className="text-sm md:text-base text-slate-600 leading-relaxed italic">
            At South Indians' Organisation, we believe in creating synergistic partnerships. Our institutional donors do more than just write checks; they actively participate in shaping programs, offering corporate volunteering, and ensuring robust social returns on investment.
          </p>
        </div>

        {/* Platinum Partners */}
        <section className="mb-24 text-center">
          <h2 className="text-xl font-bold text-[#0a2540] uppercase tracking-[0.2em] mb-4">Platinum CSR Partners</h2>
          <p className="text-xs text-slate-400 mb-12">Supporting major long-term community adoptions</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 p-12 rounded-xl flex flex-col items-center justify-center border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-[#0a2540] mb-1">Global</h3>
              <p className="text-slate-400 font-serif italic">Finance Corp</p>
            </div>
            <div className="bg-slate-50 p-12 rounded-xl flex flex-col items-center justify-center border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-serif font-bold text-[#0a2540] mb-1">Apex</h3>
              <p className="text-slate-400 font-serif italic">Industries</p>
            </div>
          </div>
        </section>

        {/* Project Sponsors */}
        <section className="mb-24 text-center">
          <h2 className="text-xl font-bold text-[#0a2540] uppercase tracking-[0.2em] mb-4">Project Sponsors</h2>
          <p className="text-xs text-slate-400 mb-12">Funding specific healthcare and educational camps</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Mumbai Tech Solutions", "Heritage Builders", "National Logistics", "Pioneer Energy"].map((item) => (
              <div key={item} className="bg-slate-50 py-8 px-4 rounded-xl flex items-center justify-center border border-slate-100 text-sm font-serif text-slate-500 font-bold">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Govt & Brands */}
        <section className="mb-24 text-center border-t border-slate-100 pt-20">
          <h2 className="text-xl font-bold text-[#0a2540] uppercase tracking-[0.2em] mb-4">Indian Brands & Government Support</h2>
          <p className="text-xs text-slate-400 mb-16">Proud collaborations with national leaders and public authorities</p>
          
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
            {["Brand A", "Brand B", "Brand C", "Govt of India", "State Govt", "State Govt 2"].map((item) => (
              <div key={item} className="text-sm font-bold tracking-widest text-slate-700">{item}</div>
            ))}
          </div>
        </section>

        {/* Partner With Us CTA */}
        <section className="bg-slate-50 rounded-3xl p-12 md:p-20 text-center max-w-5xl mx-auto border border-slate-100 shadow-sm">
          <h2 className="text-3xl font-serif font-bold text-[#0a2540] mb-6">Partner With Us</h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Are you looking to fulfill your company's CSR mandate with transparent, high-impact social projects? We provide comprehensive reporting and engaging employee volunteer opportunities.
          </p>
          <Link href="/contact">
            <Button className="bg-[#0a2540] hover:bg-[#1a2e42] text-white font-bold px-10 h-14 rounded-full shadow-lg">
              Contact CSR Desk
            </Button>
          </Link>
        </section>

      </div>
    </div>
  );
}
