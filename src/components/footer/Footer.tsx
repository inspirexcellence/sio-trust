import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a2540] text-slate-400 pt-16 pb-8 border-t border-slate-800">
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
                  Valley Empowerment
                </span>
                <span className="text-[9px] text-slate-400 tracking-[0.15em] font-medium uppercase leading-none">
                  Charitable Trust
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              Valley Empowerment Trust is dedicated to grassroots social development, bringing sustainable change through quality education, healthcare access, and livelihood generation for the underprivileged.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-[#0a2540] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-[#0a2540] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-[#0a2540] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-[#0a2540] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/patrons" className="text-sm hover:text-primary transition-colors">Patrons & Sponsors</Link></li>
              <li><Link href="/events" className="text-sm hover:text-primary transition-colors">Events & News</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Work */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Our Work</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/programs/education" className="text-sm hover:text-primary transition-colors">Education</Link></li>
              <li><Link href="/programs/healthcare" className="text-sm hover:text-primary transition-colors">Healthcare</Link></li>
              <li><Link href="/programs/livelihood" className="text-sm hover:text-primary transition-colors">Livelihood</Link></li>
              <li><Link href="/programs/empowerment" className="text-sm hover:text-primary transition-colors">Empowerment</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm">123 Charity Lane, Hope City, HC 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span className="text-sm">contact@valleytrust.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500 uppercase tracking-widest">
            &copy; {currentYear} Valley Empowerment Charitable Trust. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-[11px] text-slate-500 hover:text-white uppercase tracking-widest transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-[11px] text-slate-500 hover:text-white uppercase tracking-widest transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
