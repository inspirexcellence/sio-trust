"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a2540]/95 backdrop-blur-md shadow-md py-2" : "bg-[#0a2540] py-4"
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Custom SVG for hand holding heart outline */}
          <div className="text-primary w-10 h-10">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M12 21a9.96 9.96 0 0 0 8.02-4.1" />
              <path d="M3.82 9.82A6.17 6.17 0 0 0 2 12c0 3.31 2.69 6 6 6h1" />
              <path d="M14 16h-3" />
              <path d="M11 19h-2" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold text-white tracking-wide font-serif leading-none mb-1">
              South Indians' Organisation
            </span>
            <span className="text-[9px] md:text-[10px] text-slate-400 tracking-[0.15em] font-medium uppercase leading-none">
              Charitable Trust
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-10">
            <li>
              <Link
                href="/"
                className="text-sm font-semibold text-white hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li className="relative group flex items-center gap-1 cursor-pointer">
              <span className="text-sm font-semibold text-white group-hover:text-primary transition-colors flex items-center">
                About <ChevronDown size={14} className="ml-1 mt-0.5" />
              </span>
              <div className="absolute top-full left-0 pt-4 hidden group-hover:block w-48">
                <div className="bg-white rounded-lg shadow-lg py-2 flex flex-col">
                  <Link href="/about/history" className="px-4 py-2 text-sm text-slate-800 hover:bg-slate-50 hover:text-primary transition-colors">Our History</Link>
                  <Link href="/about/trustees" className="px-4 py-2 text-sm text-slate-800 hover:bg-slate-50 hover:text-primary transition-colors">Our Trustees</Link>
                  <Link href="/about/team" className="px-4 py-2 text-sm text-slate-800 hover:bg-slate-50 hover:text-primary transition-colors">Our Team</Link>
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/patrons"
                className="text-sm font-semibold text-white hover:text-primary transition-colors"
              >
                Patrons & Sponsors
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm font-semibold text-white hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
          <Link href="/donate">
            <Button className="bg-primary hover:bg-[#e5a924] text-[#0a2540] font-bold rounded-full px-6 h-10 text-sm">
              Donate
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a2540] border-t border-slate-800"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="/" className="block text-base font-semibold text-white" onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">About</span>
                  <Link href="/about/history" className="block text-sm font-semibold text-white pl-2" onClick={() => setIsOpen(false)}>Our Journey</Link>
                  <Link href="/about/trustees" className="block text-sm font-semibold text-white pl-2" onClick={() => setIsOpen(false)}>Board of Trustees</Link>
                  <Link href="/about/team" className="block text-sm font-semibold text-white pl-2" onClick={() => setIsOpen(false)}>Executive Team</Link>
                </li>
                <li>
                  <Link href="/patrons" className="block text-base font-semibold text-white" onClick={() => setIsOpen(false)}>
                    Patrons & Sponsors
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block text-base font-semibold text-white" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="pt-4 border-t border-slate-800">
                <Link href="/donate" onClick={() => setIsOpen(false)}>
                  <Button className="w-full justify-center bg-primary text-[#0a2540] font-bold rounded-full py-6 text-lg">
                    Donate
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
