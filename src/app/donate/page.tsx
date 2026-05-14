"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DonatePage() {
  const [amount, setAmount] = useState<string>("1000");
  const [customAmount, setCustomAmount] = useState<string>("");

  const presets = ["500", "1000", "5000", "10000"];

  const handlePresetClick = (val: string) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount(e.target.value);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Hero Header */}
      <section className="relative py-20 bg-[#0a2540] text-white text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
            alt="Helping hands" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Make a Difference</h1>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Your contribution directly supports our initiatives in education, healthcare, and community empowerment. Every rupee counts toward a better future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Content */}
      <div className="container mx-auto px-6 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Side: Why Donate */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-serif font-bold text-[#0a2540] mb-6 flex items-center gap-3">
                <Heart className="text-primary" fill="currentColor" /> Why Donate?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Zap className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a2540] text-sm mb-1">Direct Impact</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">100% of your donation goes directly to field programs and beneficiary support.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a2540] text-sm mb-1">Secure Payments</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Transactions are encrypted and processed through industry-leading payment gateways.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Globe className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a2540] text-sm mb-1">Transparent Reporting</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Receive regular updates and annual reports on how your contribution is used.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20">
              <p className="text-sm text-[#0a2540] leading-relaxed font-medium italic">
                "We make a living by what we get, but we make a life by what we give."
              </p>
            </div>
          </div>

          {/* Right Side: Donation Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100"
            >
              <h3 className="text-2xl font-serif font-bold text-[#0a2540] mb-8">Choose Donation Amount</h3>
              
              <div className="space-y-8">
                {/* Preset Amounts */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {presets.map((p) => (
                    <button
                      key={p}
                      onClick={() => handlePresetClick(p)}
                      className={`py-4 rounded-xl border-2 font-bold transition-all ${
                        amount === p && customAmount === ""
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-slate-100 bg-slate-50 text-slate-500 hover:border-primary/50"
                      }`}
                    >
                      ₹{p}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="space-y-3">
                  <Label htmlFor="custom" className="text-xs font-bold uppercase tracking-widest text-slate-500">Custom Amount (INR)</Label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">₹</span>
                    <Input
                      id="custom"
                      type="number"
                      placeholder="Enter other amount"
                      className="pl-8 h-14 border-slate-200 focus:ring-primary text-lg font-bold"
                      value={customAmount}
                      onChange={handleCustomChange}
                    />
                  </div>
                </div>

                <hr className="border-slate-100" />

                {/* Personal Details */}
                <div className="space-y-6">
                  <h4 className="font-bold text-[#0a2540] text-base mb-4">Donor Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase">Full Name</Label>
                      <Input id="name" placeholder="Your Name" className="h-12 border-slate-200" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase">Email Address</Label>
                      <Input id="email" type="email" placeholder="email@example.com" className="h-12 border-slate-200" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase">Phone Number</Label>
                    <Input id="phone" placeholder="+91 00000 00000" className="h-12 border-slate-200" />
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-[#e5a924] text-[#0a2540] font-bold py-8 text-xl rounded-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  Donate ₹{amount || "0"} Now
                </Button>

                <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-medium">
                  Secure Payment Powered by Razorpay
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </div>
  );
}
