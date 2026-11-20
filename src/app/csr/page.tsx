"use client";

import { useState, useEffect } from "react";
import { BookOpen, Coffee, Activity, HandHeart, Church, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function CommunityInitiativesPage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const initiatives = [
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Intellectual & Cultural Enrichment",
      description: "From running a circulating library that nurtures a love for reading across generations, to hosting vibrant musical variety entertainment programs that celebrate heritage and local talent."
    },
    {
      icon: <Coffee className="w-6 h-6 text-primary" />,
      title: "Fellowship & Togetherness",
      description: "Unwinding through lively one-day picnics and informal member get-togethers, creating spaces for families to bond, celebrate, and stay closely connected."
    },
    {
      icon: <Activity className="w-6 h-6 text-primary" />,
      title: "Health & Preventive Care",
      description: "Organizing comprehensive general health check-up camps and eye screening drives to support the wellness of our members, elders, and the wider neighborhood."
    },
    {
      icon: <HandHeart className="w-6 h-6 text-primary" />,
      title: "Compassionate Outreach",
      description: "Extending warmth beyond our immediate circle through visits to old age homes, winter blanket distribution drives, and various charitable initiatives designed to uplift those in need."
    },
    {
      icon: <Church className="w-6 h-6 text-primary" />,
      title: "Cultural & Spiritual Support",
      description: "Opening our doors and extending infrastructural support to enable sister bodies and community groups to host sacred spiritual discourses, pujas, and traditional cultural celebrations seamlessly."
    }
  ];

  const holyVisitPhotos = [
    {
      src: "/pics/WhatsApp%20Image%202026-11-20%20at%2012.07.15.jpeg",
      alt: "Welcome banner at SIO's Vani Vidyalaya for the Holy Visit on April 10, 2026"
    },
    {
      src: "/pics/WhatsApp%20Image%202026-11-20%20at%2012.07.17.jpeg",
      alt: "Committee members and priests welcoming His Holiness with Poorna Kumbham"
    },
    {
      src: "/pics/WhatsApp%20Image%202026-11-20%20at%2012.07.17%20(1).jpeg",
      alt: "Arrival of His Holiness Jagatguru Sankara Vijayendra Saraswathy Swamigal"
    },
    {
      src: "/pics/WhatsApp%20Image%202026-11-20%20at%2012.07.15%20(1).jpeg",
      alt: "Ceremonial floral welcome and aarti for His Holiness at Vani Vidyalaya"
    },
    {
      src: "/pics/WhatsApp%20Image%202026-11-20%20at%2012.07.16.jpeg",
      alt: "His Holiness offering prayers at the decorated shrine"
    },
    {
      src: "/pics/WhatsApp%20Image%202026-11-20%20at%2012.07.18.jpeg",
      alt: "Devotees receiving darshan and blessings during the Holy Visit"
    }
  ];

  useEffect(() => {
    if (selectedPhotoIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPhotoIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedPhotoIndex((prev) =>
          prev === null ? null : (prev - 1 + holyVisitPhotos.length) % holyVisitPhotos.length
        );
      } else if (e.key === "ArrowRight") {
        setSelectedPhotoIndex((prev) =>
          prev === null ? null : (prev + 1) % holyVisitPhotos.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, holyVisitPhotos.length]);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="py-20 bg-[#0a2540] text-white text-center">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
            Community Initiatives
          </h1>
          <p className="text-primary font-bold tracking-wide text-base md:text-lg">
            Celebrating Community, Compassion, and Fellowship - Reconnecting Hearts in Our Platinum Jubilee Year
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 -mt-10 relative z-20 max-w-5xl">
        <div className="bg-white p-8 md:p-14 rounded-3xl shadow-xl border border-slate-100 space-y-12">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed text-lg">
            <p>
              The strength of any community lies in the bonds forged through service, shared experiences, and mutual care. Over the years, The South Indians' Organisation (SIO) has stood as a beacon of warmth and solidarity, driven by the dedication and spirit of its members. Whether organizing meaningful programs independently or joining hands with our sister organizations and the Vani Vidyalaya Alumni, our shared journey has always centered on enriching lives and giving back to society.
            </p>
          </div>

          {/* A Legacy of Purposeful Engagement */}
          <div className="border-t border-slate-100 pt-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a2540] mb-4">
              A Legacy of Purposeful Engagement
            </h2>
            <p className="text-slate-600 mb-8 text-base md:text-lg">
              Our community initiatives have always reflected a balanced harmony of intellectual growth, joy, social responsibility, and cultural pride:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {initiatives.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-[#0a2540] text-lg">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed pl-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Holy Visit */}
          <div className="border-t border-slate-100 pt-10 space-y-6">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary mb-2">
                10th April 2026
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a2540]">
                HOLY VISIT
              </h2>
            </div>

            <p className="text-slate-700 leading-relaxed text-base md:text-lg">
              The residents of Mulund and the students &amp; staff of Vani Vidyalaya, were fortunate to have the darshan and Blessings of{" "}
              <strong className="text-[#0a2540]">
                His Holiness JAGATGURU SANKARA VIJAYENDRA SARASWATHY SWAMIGAL OF KANCHI KAMAKOTI PEETHAM
              </strong>{" "}
              when He visited Vani Vidyalaya on 10th April 2026. His visit was hosted jointly by The South Indians&apos; Organisation and The Mulund Bhajana Samaj. He was in the school for more than 4 hours as against His schedule of 2 hours. Contrary to the general expectation of 700-800 devotees, about 2,500 devotees turned out and had the benefit of His darshan and Prasadam. He expressed happiness over the arrangements and the discipline of the Mulund residents. He recalled the visit of a few members of the Managing Committee of SIO to Kancheepuram, to seek his blessings during the redevelopment of the school building that commenced in 2016.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {holyVisitPhotos.map((photo, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedPhotoIndex(idx)}
                  aria-label={`View larger image: ${photo.alt}`}
                  className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-100 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* A Grand Revival for the Platinum Jubilee */}
          <div className="border-t border-slate-100 pt-10 bg-gradient-to-br from-slate-50 to-primary/5 p-8 md:p-10 rounded-3xl border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a2540] mb-6">
              A Grand Revival for the Platinum Jubilee
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed text-base md:text-lg">
              <p>
                Following an unavoidable pause necessitated by the redevelopment of our premises and the disruptions of the Covid-19 pandemic, the stage is now set for a vibrant renewal.
              </p>
              <p>
                As Vani Vidyalaya proudly enters its historic Platinum Jubilee Year, this momentous milestone provides the perfect backdrop to rejuvenate our member connect initiatives. In a manner befitting this 70-year legacy, we are revitalizing each of these signature activities with renewed vigor, enhanced infrastructure, and broader participation.
              </p>
              <p className="font-medium text-[#0a2540]">
                Together with our alumni, sister associations, and dedicated members, we are working to widen the horizon of our community connect initiatives. We look forward to stepping into this golden era of community service, rekindling old friendships, and creating meaningful impact for years to come.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhotoIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo preview"
        >
          <button
            type="button"
            onClick={() => setSelectedPhotoIndex(null)}
            aria-label="Close preview"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex(
                (selectedPhotoIndex - 1 + holyVisitPhotos.length) % holyVisitPhotos.length
              );
            }}
            aria-label="Previous photo"
            className="absolute left-3 md:left-6 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl w-full flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={holyVisitPhotos[selectedPhotoIndex].src}
              alt={holyVisitPhotos[selectedPhotoIndex].alt}
              className="max-h-[82vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain"
            />
            <p className="text-slate-300 text-xs md:text-sm text-center">
              {selectedPhotoIndex + 1} / {holyVisitPhotos.length} — {holyVisitPhotos[selectedPhotoIndex].alt}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhotoIndex((selectedPhotoIndex + 1) % holyVisitPhotos.length);
            }}
            aria-label="Next photo"
            className="absolute right-3 md:right-6 w-11 h-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
