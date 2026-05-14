"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const events = [
  {
    title: "Annual Charity Marathon",
    date: "Oct 15, 2026",
    location: "City Park, Hope City",
    description: "Join us for our annual charity marathon to raise funds for children's education. Every step you take helps build a brighter future.",
    image: "https://images.unsplash.com/photo-1533481458983-057bf2585f67?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "Free Medical Camp",
    date: "Nov 05, 2026",
    location: "Rural Community Center",
    description: "A free medical checkup camp providing general health screenings, eye tests, and essential medicines to underserved communities.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=2071&auto=format&fit=crop"
  },
  {
    title: "Food Donation Drive",
    date: "Dec 20, 2026",
    location: "Downtown Plaza",
    description: "Help us ensure no one goes hungry this winter. We are collecting non-perishable food items for distribution.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function EventsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
              Upcoming Events
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
              Join Our Upcoming Events
            </h2>
          </div>
          <Link href="/events" className="hidden md:block">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col rounded-2xl group">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-lg font-bold text-primary z-20 shadow-md">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={16} />
                      {event.date}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                    <MapPin size={16} className="text-primary" />
                    {event.location}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{event.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow line-clamp-3">{event.description}</p>
                  <Link href={`/events/${event.title.toLowerCase().replace(/ /g, "-")}`}>
                    <Button variant="ghost" className="p-0 text-primary hover:bg-transparent hover:text-primary/80 flex items-center group/btn">
                      Event Details <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Link href="/events">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full">
              All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
