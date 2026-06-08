"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

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
          <Image src="/sioLogo.png" alt="Logo" width={40} height={40} />
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
                className={`text-sm font-semibold transition-colors ${isActive('/') ? 'text-primary' : 'text-white hover:text-primary'}`}
              >
                Home
              </Link>
            </li>
            <li className="relative group flex items-center gap-1 cursor-pointer">
              <span className={`text-sm font-semibold transition-colors flex items-center ${isActive('/about') ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
                About <ChevronDown size={14} className="ml-1 mt-0.5" />
              </span>
              <div className="absolute top-full left-0 pt-4 hidden group-hover:block w-48">
                <div className="bg-white rounded-lg shadow-lg py-2 flex flex-col">
                  <Link href="/about/history" className={`px-4 py-2 text-sm transition-colors ${pathname === '/about/history' ? 'text-primary bg-slate-50 font-bold' : 'text-slate-800 hover:bg-slate-50 hover:text-primary'}`}>Our History</Link>
                  <Link href="/about/trustees" className={`px-4 py-2 text-sm transition-colors ${pathname === '/about/trustees' ? 'text-primary bg-slate-50 font-bold' : 'text-slate-800 hover:bg-slate-50 hover:text-primary'}`}>Our Trustees</Link>
                  <Link href="/about/team" className={`px-4 py-2 text-sm transition-colors ${pathname === '/about/team' ? 'text-primary bg-slate-50 font-bold' : 'text-slate-800 hover:bg-slate-50 hover:text-primary'}`}>Our Team</Link>
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/patrons"
                className={`text-sm font-semibold transition-colors ${isActive('/patrons') ? 'text-primary' : 'text-white hover:text-primary'}`}
              >
                Patrons & Sponsors
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`text-sm font-semibold transition-colors ${isActive('/contact') ? 'text-primary' : 'text-white hover:text-primary'}`}
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
                  <Link href="/" className={`block text-base font-semibold ${isActive('/') ? 'text-primary' : 'text-white'}`} onClick={() => setIsOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">About</span>
                  <Link href="/about/history" className={`block text-sm font-semibold pl-2 ${pathname === '/about/history' ? 'text-primary' : 'text-white'}`} onClick={() => setIsOpen(false)}>Our Journey</Link>
                  <Link href="/about/trustees" className={`block text-sm font-semibold pl-2 ${pathname === '/about/trustees' ? 'text-primary' : 'text-white'}`} onClick={() => setIsOpen(false)}>Board of Trustees</Link>
                  <Link href="/about/team" className={`block text-sm font-semibold pl-2 ${pathname === '/about/team' ? 'text-primary' : 'text-white'}`} onClick={() => setIsOpen(false)}>Executive Team</Link>
                </li>
                <li>
                  <Link href="/patrons" className={`block text-base font-semibold ${isActive('/patrons') ? 'text-primary' : 'text-white'}`} onClick={() => setIsOpen(false)}>
                    Patrons & Sponsors
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={`block text-base font-semibold ${isActive('/contact') ? 'text-primary' : 'text-white'}`} onClick={() => setIsOpen(false)}>
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
