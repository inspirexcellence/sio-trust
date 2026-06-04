"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Headphones, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/schemas";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiry: "General Information"
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      const result = await res.json();
      
      if (result.success) {
        setIsSubmitted(true);
        reset();
        setTimeout(() => setIsSubmitted(false), 10000);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error: any) {
      console.error("Submission Error:", error);
      // Fallback: If API fails, we still show the "mailto" link as a backup or just an error
      setServerError(error.message);
    } finally {
      setIsSubmitting(false);
    }
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

              <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-slate-700">Full Name</Label>
                    <Input 
                      id="fullName" 
                      placeholder="Enter your name" 
                      className={`h-12 border-slate-200 focus:ring-primary ${errors.fullName ? 'border-red-500' : ''}`} 
                      {...register("fullName")}
                    />
                    {errors.fullName && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.fullName.message}</p>}
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-700">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className={`h-12 border-slate-200 focus:ring-primary ${errors.email ? 'border-red-500' : ''}`} 
                      {...register("email")}
                    />
                    {errors.email && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.email.message}</p>}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Label htmlFor="inquiry" className="text-xs font-bold uppercase tracking-wider text-slate-700">Nature of Inquiry</Label>
                  <select 
                    id="inquiry" 
                    className="w-full h-12 border border-slate-200 rounded-md px-4 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-primary"
                    {...register("inquiry")}
                  >
                    <option value="General Information">General Information</option>
                    <option value="Admission Inquiry">Admission Inquiry</option>
                    <option value="Donation Inquiry">Donation Inquiry</option>
                    <option value="Alumni Association">Alumni Association</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-700">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="How can we help you?" 
                    className={`min-h-[180px] border-slate-200 focus:ring-primary resize-none ${errors.message ? 'border-red-500' : ''}`} 
                    {...register("message")}
                  />
                  {errors.message && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.message.message}</p>}
                </div>

                <div className="flex flex-col gap-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-[#111827] hover:bg-slate-800 text-white font-bold px-10 h-14 rounded-lg shadow-lg flex items-center gap-2"
                  >
                    {isSubmitting && <Loader2 className="animate-spin" size={18} />}
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
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

                  {serverError && (
                    <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                      <p className="text-red-700 text-sm font-medium">
                        {serverError}
                      </p>
                      <p className="text-red-600 text-[10px] mt-1">
                        Try contacting us directly at <a href="mailto:contact@siotrust.org" className="underline font-bold">contact@siotrust.org</a>
                      </p>
                    </div>
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
