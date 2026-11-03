"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Building2, UserCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PatronsPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="py-20 bg-[#0a2540] text-white text-center">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">Support & Partnerships</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
            Patrons and Sponsors
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
            We invite sponsorship from Corporates and Individuals to partner with South Indians' Organisation in empowering the next generation through value-based education and community upliftment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 -mt-10 relative z-20 max-w-4xl">
        <div className="bg-white p-8 md:p-14 rounded-3xl shadow-xl border border-slate-100 space-y-12">
          
          {/* Invitation Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-[#0a2540]">
                Corporate Sponsorship
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Fulfill your organization's CSR mandate through high-impact, transparent educational programs, lab modernization, and student scholarship initiatives.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-[#0a2540]">
                Individual Philanthropy
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Alumni, well-wishers, and individual donors can sponsor infrastructure improvements, memorial labs, or recurring academic awards.
              </p>
            </div>
          </div>

          {/* Email Invitation Box */}
          <div className="bg-[#0a2540] text-white p-8 md:p-10 rounded-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto text-primary">
              <Mail className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">Invite Sponsorship</h3>
              <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base">
                For sponsorship proposals, partnership inquiries, or bespoke CSR programs, reach out to our team directly via email:
              </p>
              <a 
                href="mailto:contact@siotrust.org" 
                className="inline-block mt-4 text-xl md:text-2xl font-bold text-primary hover:underline"
              >
                contact@siotrust.org
              </a>
            </div>
          </div>

          {/* Connect to Form CTA */}
          <div className="text-center pt-6 space-y-4">
            <h3 className="text-2xl font-serif font-bold text-[#0a2540]">
              Get in Touch with Our Desk
            </h3>
            <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">
              Submit your inquiry or sponsorship proposal through our online form and our team will get back to you promptly.
            </p>
            <div className="pt-2">
              <Link href="/contact">
                <Button className="bg-[#0a2540] hover:bg-[#1a2e42] text-white font-bold px-10 h-14 rounded-full shadow-lg text-base">
                  Contact CSR Desk <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
