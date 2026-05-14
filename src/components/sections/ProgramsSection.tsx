"use client";

import { motion } from "framer-motion";
import { BookOpen, Stethoscope, Users, Droplets } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const programs = [
  {
    icon: <BookOpen size={32} />,
    title: "Education for All",
    description: "We provide scholarships, school supplies, and build educational facilities for underprivileged children.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
  },
  {
    icon: <Stethoscope size={32} />,
    title: "Healthcare",
    description: "Organizing free medical camps, providing medicines, and supporting maternal health in rural areas.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: <Users size={32} />,
    title: "Social Welfare",
    description: "Empowering women through skill development and supporting the elderly with care homes.",
    image: "https://images.unsplash.com/photo-1526976663112-00a5d42be4a4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: <Droplets size={32} />,
    title: "Clean Water",
    description: "Installing hand pumps and water purification systems to ensure safe drinking water.",
    image: "https://images.unsplash.com/photo-1541888052140-1a74244f07e7?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function ProgramsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            Our Programs
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Causes We Care About
          </h2>
          <p className="text-lg text-slate-600">
            Discover the various initiatives we are running to make the world a better place for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col rounded-2xl group">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 right-0 bg-primary text-white p-3 rounded-tl-2xl z-20">
                    {program.icon}
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{program.description}</p>
                  <Link href={`/programs/${program.title.toLowerCase().replace(/ /g, "-")}`}>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
