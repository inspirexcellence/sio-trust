"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    text: "SIO Trust has completely transformed our village by providing clean drinking water. We no longer have to walk miles every day.",
    name: "Amina Begum",
    role: "Beneficiary",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1bfa8ea?q=80&w=2070&auto=format&fit=crop"
  },
  {
    text: "The educational scholarship provided by SIO Trust allowed me to complete my engineering degree. I am now working at a top firm.",
    name: "Rahul Sharma",
    role: "Scholarship Student",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    text: "Volunteering here has been the most fulfilling experience of my life. The impact we make is visible and truly heartwarming.",
    name: "Sarah Jenkins",
    role: "Volunteer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              What People Say About Our Impact.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Don't just take our word for it. Read the stories of those whose lives have been touched by our initiatives and those who help make it happen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Background decorative blob */}
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0" />
            
            <Carousel className="w-full relative z-10" opts={{ loop: true }}>
              <CarouselContent>
                {testimonials.map((testimonial, idx) => (
                  <CarouselItem key={idx}>
                    <div className="bg-slate-50 p-8 md:p-12 rounded-3xl relative">
                      <Quote className="absolute top-8 right-8 text-primary/20 w-16 h-16" />
                      
                      <div className="flex gap-1 text-amber-500 mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        ))}
                      </div>

                      <p className="text-xl text-slate-700 italic mb-8 relative z-10">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center gap-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                        />
                        <div>
                          <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                          <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-6">
                <CarouselPrevious className="static translate-y-0 text-primary border-primary hover:bg-primary hover:text-white" />
                <CarouselNext className="static translate-y-0 text-primary border-primary hover:bg-primary hover:text-white" />
              </div>
            </Carousel>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
