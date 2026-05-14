"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShieldCheck } from "lucide-react";
import { useState } from "react";

const predefinedAmounts = [500, 1000, 2000, 5000];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(1000);
  const [customAmount, setCustomAmount] = useState<string>("");

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
              Make a Donation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Your contribution can change a life today.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Every penny you donate goes directly towards providing education, healthcare, and essential resources to those who need it most. Join us in making a real difference.
            </p>
            
            <div className="flex items-center gap-4 text-slate-700 bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-8">
              <ShieldCheck className="text-green-500 w-8 h-8 shrink-0" />
              <p className="text-sm font-medium">
                100% Secure & Trusted. Your payment is processed securely via Razorpay. All donations are tax-exempt under section 80G.
              </p>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?q=80&w=2070&auto=format&fit=crop" 
              alt="Donation Impact" 
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
              <div className="bg-primary p-6 text-center text-white">
                <Heart className="w-10 h-10 mx-auto mb-3 fill-white/20" />
                <h2 className="text-2xl font-bold">Choose Donation Amount</h2>
              </div>
              <CardContent className="p-8">
                <form className="space-y-6">
                  {/* Amount Selection */}
                  <div>
                    <Label className="text-slate-700 mb-3 block">Select Amount (₹)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      {predefinedAmounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={selectedAmount === amount ? "default" : "outline"}
                          className={`h-12 text-lg font-semibold ${selectedAmount === amount ? "bg-primary text-white shadow-md shadow-primary/20 border-primary" : "border-slate-200 text-slate-700 hover:border-primary hover:text-primary"}`}
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount("");
                          }}
                        >
                          ₹{amount}
                        </Button>
                      ))}
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span className="text-slate-500 font-semibold">₹</span>
                      </div>
                      <Input 
                        type="number" 
                        placeholder="Custom Amount" 
                        className={`h-14 pl-10 text-lg font-semibold ${selectedAmount === "custom" ? "border-primary ring-1 ring-primary" : ""}`}
                        value={customAmount}
                        onChange={(e) => {
                          setSelectedAmount("custom");
                          setCustomAmount(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  {/* Donor Details */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h3 className="font-semibold text-slate-900">Donor Details</h3>
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" placeholder="Enter your full name" className="h-12" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Email for receipt" className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Phone number" className="h-12" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pan">PAN Card Number (For 80G Receipt)</Label>
                      <Input id="pan" placeholder="ABCDE1234F" className="h-12 uppercase" />
                    </div>
                  </div>

                  <Button size="lg" className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/30 mt-4">
                    Donate {selectedAmount === "custom" && customAmount ? `₹${customAmount}` : selectedAmount !== "custom" ? `₹${selectedAmount}` : ""} Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
