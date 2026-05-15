"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    inquiry: "General Information",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link
    const subject = encodeURIComponent(`SIO Inquiry: ${formData.inquiry} from ${formData.fullName}`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiry}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:contact@siotrust.org?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    // Reset form
    setFormData({ fullName: "", email: "", inquiry: "General Information", message: "" });
    // Hide message after 10 seconds
    setTimeout(() => setIsSubmitted(false), 10000);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0a2540] mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you are an alumnus, a prospective donor, or a student seeking guidance, our doors are always open.
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
                    1450 Education Way, Mulund West<br/>
                    Mumbai, Maharashtra 400080<br/>
                    India
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
                      <span className="text-slate-600">+91 (22) 2567-1234</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-bold text-[#0a2540] text-xs uppercase tracking-wider">Admissions Desk:</span>
                      <span className="text-slate-600">+91 (22) 2567-1235</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-bold text-[#0a2540] text-xs uppercase tracking-wider">Trust Office:</span>
                      <span className="text-slate-600">+91 (22) 2567-1236</span>
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
                  <p className="text-sm text-primary font-medium hover:underline cursor-pointer mb-1">contact@siotrust.org</p>
                  <p className="text-sm text-primary font-medium hover:underline cursor-pointer">admissions@siotrust.org</p>
                </div>
              </div>
            </div>

            <div className="bg-[#111827] p-8 rounded-xl shadow-lg text-white border-l-4 border-primary">
              <div className="flex items-start gap-4">
                <Clock className="text-primary mt-1" size={20} />
                <div>
                  <h3 className="font-bold text-base mb-4">Office Hours</h3>
                  <p className="text-sm text-slate-300 mb-6">
                    Monday - Saturday<br/>
                    9:00 AM - 6:00 PM
                  </p>
                  <p className="text-xs text-slate-400 italic leading-relaxed">
                    The Trust office remains closed on public holidays and Sundays.
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
                Fill out the form below and our team will get back to you shortly.
              </p>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-slate-700">Full Name</Label>
                    <Input 
                      id="fullName" 
                      placeholder="Enter your name" 
                      required
                      className="h-12 border-slate-200 focus:ring-primary" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-700">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      required
                      className="h-12 border-slate-200 focus:ring-primary" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="inquiry" className="text-xs font-bold uppercase tracking-wider text-slate-700">Nature of Inquiry</Label>
                  <select 
                    id="inquiry" 
                    className="w-full h-12 border border-slate-200 rounded-md px-4 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-primary"
                    value={formData.inquiry}
                    onChange={(e) => setFormData({...formData, inquiry: e.target.value})}
                  >
                    <option>General Information</option>
                    <option>Admission Inquiry</option>
                    <option>Donation Inquiry</option>
                    <option>Alumni Association</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-700">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?" 
                    required
                    className="min-h-[180px] border-slate-200 focus:ring-primary resize-none" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <Button type="submit" className="bg-[#111827] hover:bg-slate-800 text-white font-bold px-10 h-14 rounded-lg shadow-lg">
                    Submit Inquiry
                  </Button>
                  
                  {isSubmitted && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <p className="text-emerald-700 text-sm font-medium">
                        Your message has been sent successfully! Our team will contact you soon.
                      </p>
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
