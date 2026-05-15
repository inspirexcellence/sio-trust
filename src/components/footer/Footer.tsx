import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-slate-400 pt-16 pb-8 border-t-4 border-primary relative">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="text-primary w-8 h-8">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M12 21a9.96 9.96 0 0 0 8.02-4.1" />
                  <path d="M3.82 9.82A6.17 6.17 0 0 0 2 12c0 3.31 2.69 6 6 6h1" />
                  <path d="M14 16h-3" />
                  <path d="M11 19h-2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-wide font-serif leading-none mb-1">
                  South Indians' Organisation
                </span>
                <span className="text-[9px] text-slate-400 tracking-[0.15em] font-medium uppercase leading-none">
                  Established 1955
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              A registered non-profit organization dedicated to academic excellence, ethical grounding, and holistic development since 1955.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-[#0a2540] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-[#0a2540] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-[#0a2540] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-[#0a2540] transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-sm hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about/history" className="text-sm hover:text-white transition-colors">Our Journey</Link></li>
              <li><Link href="/about/trustees" className="text-sm hover:text-white transition-colors">Leadership</Link></li>
              <li><Link href="/patrons" className="text-sm hover:text-white transition-colors">CSR Partners</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Resources</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Volunteer Portal</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Annual Financial Reports</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">Impact Stories</Link></li>
              <li><Link href="#" className="text-sm hover:text-white transition-colors">NGO Certifications (80G)</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Contact Info</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  1450 Education Way, Mulund West,<br />
                  Mumbai, Maharashtra 400080
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-sm">+91 (22) 2567-1234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-sm">contact@siotrust.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
          <p className="text-[12px] text-slate-500 font-medium">
            &copy; {currentYear} South Indians' Organisation. A registered non-profit organization.
          </p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="text-[12px] text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[12px] text-slate-500 hover:text-white transition-colors">
              Donor Policy
            </Link>
            <Link href="#" className="text-[12px] text-slate-500 hover:text-white transition-colors">
              Transparency Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
