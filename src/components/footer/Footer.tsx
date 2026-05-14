import Link from "next/link";
import { Heart, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Heart size={24} className="fill-current" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                SIO <span className="text-primary">Trust</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Dedicated to uplifting communities through education, healthcare, and sustainable development. Join us in making a lasting impact.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/about" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" /> About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" /> Our Programs
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" /> Events & News
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" /> Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400">123 Charity Lane, Hope City, HC 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <span className="text-sm text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <span className="text-sm text-slate-400">contact@siotrust.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-sm text-slate-400">
              Subscribe to our newsletter to get updates on our latest projects and events.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-slate-900 border border-slate-800 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white"
                required
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} SIO Trust. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
