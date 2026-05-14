"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Headphones, Users, Building, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0a2540] mb-6">Get in Touch</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you want to volunteer, partner with us, or seek assistance, our doors are always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Cards - Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-[#0a2540] text-base mb-3">Headquarters</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    1450 Social Work Ave<br/>
                    Valley District, State 12345<br/>
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-start gap-4">
                <Headphones className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-[#0a2540] text-base mb-4">Help Desks</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex flex-col">
                      <span className="font-bold text-[#0a2540] text-xs uppercase tracking-wider">General Inquiries:</span>
                      <span className="text-slate-600">(555) 987-6543</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-bold text-[#0a2540] text-xs uppercase tracking-wider">Volunteer Desk:</span>
                      <span className="text-slate-600">(555) 987-6544</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-bold text-[#0a2540] text-xs uppercase tracking-wider">CSR Partnerships:</span>
                      <span className="text-slate-600">(555) 987-6545</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-bold text-[#0a2540] text-xs uppercase tracking-wider">Emergency Relief:</span>
                      <span className="text-slate-600">(555) 987-9999</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-[#0a2540] text-base mb-3">Email</h3>
                  <p className="text-sm text-primary font-medium hover:underline cursor-pointer mb-1">contact@valleyempowerment.org</p>
                  <p className="text-sm text-primary font-medium hover:underline cursor-pointer">volunteer@valleyempowerment.org</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0a2540] p-8 rounded-xl shadow-lg text-white">
              <div className="flex items-start gap-4">
                <Clock className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-base mb-4">Office Hours</h3>
                  <p className="text-sm text-slate-300 mb-6">
                    Monday - Saturday<br/>
                    9:00 AM - 6:00 PM
                  </p>
                  <p className="text-xs text-slate-400 italic leading-relaxed">
                    Field offices remain open on weekends for ongoing projects.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Form - Right Column */}
          <div className="lg:col-span-8">
            <div className="bg-white p-10 md:p-14 rounded-2xl shadow-xl border border-slate-100 h-full">
              <h2 className="text-2xl font-serif font-bold text-[#0a2540] mb-4">Send us a Message</h2>
              <p className="text-sm text-slate-500 mb-10 leading-relaxed">
                Fill out the form below. Whether it's a donation query, a volunteering request, or an SOS, we will respond promptly.
              </p>

              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-slate-700">Full Name</Label>
                    <Input id="fullName" placeholder="Enter your name" className="h-12 border-slate-200 focus:ring-primary" />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-700">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" className="h-12 border-slate-200 focus:ring-primary" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="inquiry" className="text-xs font-bold uppercase tracking-wider text-slate-700">Nature of Inquiry</Label>
                  <select id="inquiry" className="w-full h-12 border border-slate-200 rounded-md px-4 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-primary">
                    <option>General Information</option>
                    <option>Volunteering Opportunities</option>
                    <option>Donation Inquiry</option>
                    <option>Corporate Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-700">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[180px] border-slate-200 focus:ring-primary resize-none" />
                </div>

                <Button className="bg-[#0a2540] hover:bg-[#1a2e42] text-white font-bold px-10 h-14 rounded-lg shadow-lg">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
