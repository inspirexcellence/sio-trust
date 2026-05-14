"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function VolunteerPage() {
  const benefits = [
    "Make a tangible difference in people's lives.",
    "Gain valuable experience and develop new skills.",
    "Be part of a compassionate and driven community.",
    "Receive a certificate of appreciation for your time.",
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          
          {/* Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
              Become a Volunteer
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Your time is the most valuable gift you can give.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Volunteers are the backbone of SIO Trust. By dedicating your time and skills, you help us reach more people and create a bigger impact. Join our family of changemakers today.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Volunteer With Us?</h3>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <img 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop" 
              alt="Volunteers at work" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
          </motion.div>

          {/* Volunteer Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary/10 p-3 rounded-xl text-primary">
                <Users size={28} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Volunteer Application</h2>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" className="h-12 bg-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="h-12 bg-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="h-12 bg-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="h-12 bg-white" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Your Skills / Areas of Interest</Label>
                <Input id="skills" placeholder="e.g., Teaching, Healthcare, Event Management, Tech" className="h-12 bg-white" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability">Availability</Label>
                <select id="availability" className="flex h-12 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="" disabled selected>Select your availability</option>
                  <option value="weekends">Weekends Only</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="flexible">Flexible / Anytime</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Why do you want to volunteer?</Label>
                <Textarea id="message" placeholder="Tell us a little about yourself and your motivation..." className="min-h-[120px] resize-none bg-white" />
              </div>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg shadow-lg shadow-primary/20">
                Submit Application
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
