import { BookOpen, Coffee, Activity, HandHeart, Church } from "lucide-react";

export default function CommunityInitiativesPage() {
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

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="py-20 bg-[#0a2540] text-white text-center">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
            Community Initiatives
          </h1>
          <p className="text-primary font-bold tracking-wide text-base md:text-lg">
            Celebrating Community, Compassion, and Fellowship-- Reconnecting Hearts in Our Platinum Jubilee Year
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
    </div>
  );
}
