"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HistoryPage() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);

  const timeline = [
    {
      year: "1955",
      title: "Visionary Establishment",
      text: "SIO was established with the vision of making quality, value-based education accessible to the community.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
    },
    {
      year: "1956",
      title: "Humble Beginnings",
      text: "Vani Vidyalaya began its journey in a modest tin-shed classroom with a small group of young learners.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      year: "1965",
      title: "First Permanent Home",
      text: "The institution inaugurated its first permanent school building, marking a major milestone in its growth.",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop",
    },
    {
      year: "1975",
      title: "Junior College Launch",
      text: "Junior College sections in Science and Commerce streams were introduced, expanding our reach to higher education.",
      image: "https://images.unsplash.com/photo-1523050335456-c694791b1d22?q=80&w=2070&auto=format&fit=crop",
    },
    {
      year: "1984",
      title: "Government Recognition",
      text: "The institution was recognized by the Government of Maharashtra as the 'Best Managed School'.",
      image: "https://images.unsplash.com/photo-1507537297325-592feef36272?q=80&w=2070&auto=format&fit=crop",
    },
    {
      year: "1993",
      title: "Digital Transition",
      text: "Computer education was formally introduced, embracing modern learning and technology early on.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    },
    {
      year: "2015",
      title: "Diamond Jubilee",
      text: "Our 60th anniversary celebrations were honored by the presence of Dr. A. P. J. Abdul Kalam.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
    },
    {
      year: "2023",
      title: "Modern Landmark",
      text: "The newly redeveloped campus was inaugurated alongside the launch of Robotics & AI programs and state-of-the-art learning facilities.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    }
  ];

  useEffect(() => {
    // Header Animation
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: "power3.out"
    });

    // Narrative Animation
    gsap.from(narrativeRef.current?.children || [], {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: narrativeRef.current,
        start: "top 80%",
      }
    });

    const items = gsap.utils.toArray(".timeline-item") as HTMLElement[];
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop Animations
      items.forEach((item) => {
        const year = item.querySelector(".timeline-year");
        const content = item.querySelector(".timeline-content");
        const image = item.querySelector(".timeline-image");
        const dot = item.querySelector(".timeline-dot");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            toggleActions: "play none none reverse"
          }
        });

        tl.from(dot, { scale: 0, duration: 0.8, ease: "back.out(1.2)", force3D: true })
          .from(year, { opacity: 0, x: -40, duration: 0.7, ease: "power3.out", force3D: true }, "-=0.5")
          .from(content, { opacity: 0, y: 30, duration: 0.7, ease: "power3.out", force3D: true }, "-=0.5")
          .from(image, { opacity: 0, scale: 0.85, duration: 0.9, ease: "expo.out", force3D: true }, "-=0.6");
      });

      // Center Line Growth with smooth scrub
      gsap.from(".center-line", {
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
          end: "bottom 85%",
          scrub: 1.2,
        }
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile Animations (Liquid Fade-in)
      items.forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          y: 40,
          duration: 1.2,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: item,
            start: "top 92%",
            toggleActions: "play none none none"
          }
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        
        {/* Header */}
        <div ref={headerRef} className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0a2540] mb-6 italic tracking-tight">A Journey of Vision, Values & Generations</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            There are some journeys that begin with buildings and some that begin with a belief.
          </p>
        </div>

        {/* Narrative Section */}
        <div ref={narrativeRef} className="max-w-4xl mx-auto mb-24 text-sm md:text-base text-slate-700 space-y-8 leading-relaxed">
          <p>
            In 1955, a small group of determined individuals from the South Indian community in Mumbai came together with a dream, that no child should be denied the opportunity to learn, grow, and build a better future because of limited means or circumstances. South Indians' Organisation was born from that dream.
          </p>
          <p>
            What started in a humble tin-shed classroom with just a handful of students was built not on resources, but on hope, sacrifice, and the collective faith of a community that believed education could change generations. Over the years, those classrooms grew, dreams grew bigger, and so did the lives touched by the institution.
          </p>
          <p>
            Today, Vani Vidyalaya stands as one of Mulund’s respected educational landmarks, nurturing nearly 3,600 students from pre-primary to junior college with the support of around 125 dedicated staff members. From a single classroom built on hope to a thriving institution shaping thousands of futures, its journey continues to inspire generations. 
          </p>
        </div>

        {/* Timeline Section */}
        <div ref={timelineRef} className="relative max-w-5xl mx-auto py-10">
          {/* Center Line */}
          <div className="center-line absolute left-1/2 top-0 w-1 bg-primary/30 -translate-x-1/2 hidden md:block h-full" />

          {timeline.map((item, idx) => (
            <div 
              key={idx} 
              className={`timeline-item relative flex flex-col md:flex-row items-center mb-32 last:mb-0 will-change-transform ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Year & Dot */}
              <div className="timeline-dot absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-primary rounded-full z-10 border-4 border-white shadow-md hidden md:block will-change-transform" />
              
              <div className="w-full md:w-1/2 px-10 mb-8 md:mb-0 timeline-content will-change-opacity">
                <div className={`flex flex-col ${idx % 2 === 0 ? "md:items-start" : "md:items-end text-right"}`}>
                  <span className="timeline-year text-4xl font-bold text-primary mb-3 inline-block will-change-transform">{item.year}</span>
                  <h3 className="text-xl font-bold text-[#0a2540] mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 px-10 timeline-image will-change-transform">
                <div className="overflow-hidden rounded-2xl shadow-xl border-4 border-white group">
                  <img 
                    src={item.image} 
                    alt={item.year} 
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
