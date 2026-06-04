"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, Zap, Globe, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { donationSchema, DonationFormData } from "@/lib/schemas";

// Extend window to include Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function DonatePage() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>("1000");
  const [customAmount, setCustomAmount] = useState<string>("");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema)
  });

  const presets = ["500", "1000", "5000", "10000"];

  useEffect(() => {
    // Load Razorpay Script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onDonateSubmit = async (donorData: DonationFormData) => {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    setIsLoading(true);
    try {
      // 1. Create Order on Server
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed to create order");

      // 2. Open Razorpay Checkout
      const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      
      if (!razorpayKey || razorpayKey === "undefined") {
        console.error("Razorpay Key is missing! Check your .env file.");
        alert("Payment system is not configured. Please check NEXT_PUBLIC_RAZORPAY_KEY_ID.");
        return;
      }

      const options = {
        key: razorpayKey, 
        amount: data.order.amount,
        currency: "INR",
        name: "SIO Trust",
        description: "Educational Donation - SIO",
        image: "https://cdn.upcoach.com/organizations/logos/S5UhfQpJK7rDy0CPcduZoLg3VGXwHOw1VKMCpqaS.png",
        order_id: data.order.id,
        handler: function (response: any) {
          // Success Callback
          setIsSuccess(true);
          window.scrollTo({ top: 400, behavior: 'smooth' });
          setTimeout(() => setIsSuccess(false), 20000);
        },
        prefill: {
          name: donorData.name,
          email: donorData.email,
          contact: donorData.phone,
        },
        notes: {
          address: "Mulund West, Mumbai",
          purpose: "Donation for SIO Educational Initiatives"
        },
        theme: {
          color: "#0a2540",
        },
        config: {
          display: {
            blocks: {
              utp: { // UPI & Top Payments
                name: "Pay via UPI / Card",
                instruments: [
                  { method: "upi" },
                  { method: "card" },
                  { method: "netbanking" }
                ],
              },
            },
            sequence: ["block.utp"],
            preferences: {
              show_default_blocks: true,
            },
          },
        },
        modal: {
          ondismiss: function() {
            setIsLoading(false);
          },
          escape: true,
          backdropclose: false
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error: any) {
      console.error("Donation Error:", error);
      alert("Could not initialize payment. Please check your internet or try again later.");
    } finally {
      setIsLoading(false);
    }
  };

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
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 italic tracking-tight">Support Our Mission</h1>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Your contribution directly empowers students at Vani Vidyalaya and helps us maintain our 70-year legacy of academic excellence and values.
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
              <h2 className="text-2xl font-serif font-bold text-[#0a2540] mb-6 flex items-center gap-3 italic">
                <Heart className="text-primary" fill="currentColor" /> Why Donate?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Zap className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a2540] text-sm mb-1 uppercase tracking-wide">Direct Impact</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Your donations directly fund student scholarships, infrastructure, and modern learning tools like our Robotics AI Lab.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a2540] text-sm mb-1 uppercase tracking-wide">100% Transparency</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">As a registered trust, SIO ensures that every rupee is accounted for and utilized for its designated educational purpose.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Globe className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a2540] text-sm mb-1 uppercase tracking-wide">Shape the Future</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">You aren't just giving money; you are investing in the leaders and ethical citizens of tomorrow.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#111827] p-8 rounded-2xl border-l-4 border-primary text-white shadow-lg">
              <p className="text-sm leading-relaxed font-serif italic mb-4">
                "Sā Vidyā Yā Vimuktaye — Education is that which liberates."
              </p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">— SIO Trust Motto</p>
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
              <h3 className="text-2xl font-serif font-bold text-[#0a2540] mb-8">Select Contribution</h3>
              
              <div className="space-y-8">
                {/* Preset Amounts */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {presets.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => handlePresetClick(p)}
                      className={`py-4 rounded-xl border-2 font-bold transition-all ${
                        amount === p && customAmount === ""
                          ? "border-primary bg-primary/10 text-primary shadow-sm"
                          : "border-slate-100 bg-slate-50 text-slate-500 hover:border-primary/50"
                      }`}
                    >
                      ₹{p}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="space-y-3">
                  <Label htmlFor="custom" className="text-xs font-bold uppercase tracking-widest text-slate-500">Other Amount (INR)</Label>
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

                <form className="space-y-8" onSubmit={handleSubmit(onDonateSubmit)}>
                  {/* Personal Details */}
                  <div className="space-y-6">
                    <h4 className="font-bold text-[#0a2540] text-base mb-4">Donor Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase">Full Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Your Name" 
                          className={`h-12 border-slate-200 ${errors.name ? 'border-red-500' : ''}`} 
                          {...register("name")}
                        />
                        {errors.name && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase">Email Address</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="email@example.com" 
                          className={`h-12 border-slate-200 ${errors.email ? 'border-red-500' : ''}`} 
                          {...register("email")}
                        />
                        {errors.email && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.email.message}</p>}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase">Phone Number</Label>
                      <Input 
                        id="phone" 
                        placeholder="+91 00000 00000" 
                        className={`h-12 border-slate-200 ${errors.phone ? 'border-red-500' : ''}`} 
                        {...register("phone")}
                      />
                      {errors.phone && <p className="text-red-500 text-[10px] uppercase font-bold">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#111827] hover:bg-slate-800 text-white font-bold py-8 text-xl rounded-xl shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99]"
                    >
                      {isLoading ? (
                        <Loader2 className="animate-spin mr-2" />
                      ) : (
                        <Heart className="mr-2" size={20} fill="currentColor" />
                      )}
                      Donate ₹{amount || "0"} Now
                    </Button>

                    {isSuccess && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-6 bg-emerald-50 border border-emerald-100 rounded-xl text-center"
                      >
                        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <ShieldCheck className="text-white" size={24} />
                        </div>
                        <h4 className="text-emerald-900 font-bold text-lg mb-2">Thank you for your generosity!</h4>
                        <p className="text-emerald-700 text-sm">
                          Your contribution of ₹{amount} has been received successfully. A receipt has been sent to your email.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </form>

                <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-medium">
                  Secure Payment Gateway Powered by Razorpay
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </div>
  );
}
