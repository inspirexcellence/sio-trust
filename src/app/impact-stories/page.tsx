import { CheckCircle2, HeartHandshake, Sparkles } from "lucide-react";

export default function FosteringInclusivityPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="py-20 bg-[#0a2540] text-white text-center">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 tracking-tight leading-tight">
            Fostering Inclusivity: Our Academic & Inclusive Partnership with Society for Koko Specials and Remedials (KOKO Kids)
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 -mt-10 relative z-20 max-w-5xl">
        <div className="bg-white p-8 md:p-14 rounded-3xl shadow-xl border border-slate-100 space-y-12">
          
          {/* Intro Paragraph */}
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed text-lg">
            <p>
              At Vani Vidyalaya, we believe that true education extends beyond academic excellence to encompass empathy, equity, and meaningful community outreach. As a core part of our commitment to social responsibility, we are proud to partner with the Society for Koko Specials and Remedials (KOKO Kids), a registered NGO, specializing in handling children with Intellectual Development Disorders! We host an integrated academic and developmental program on our campus for children enrolled with Society for Koko Specials and Remedials (KOKO Kids)!
            </p>
          </div>

          {/* Cards for Academic Integration & Holistic Growth */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-[#0a2540]">
                Academic Integration & Tailored Support
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                To foster a seamless blend of specialized care and inclusive learning, our campus provides a dedicated integration classroom for KOKO Kids students. Twice a week, these young learners step into our mainstream classrooms, sharing learning spaces and building strong peer connections. Our leadership team and teaching faculty actively support their educational journey by offering customized syllabus adaptations, tailored learning strategies, and dedicated guidance during exam preparation.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-2xl flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-[#0a2540]">
                Holistic Growth & Co-Curricular Participation
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Inclusivity at Vani Vidyalaya spans every aspect of school life. We share our sports infrastructure and physical education spaces to accommodate their occupational therapy needs and daily physical activities. Furthermore, KOKO Kids students are an integral part of our vibrant school culture, actively performing and competing alongside our students during annual sports days, cultural showcases, and dance events.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-br from-slate-50 to-primary/5 p-8 md:p-10 rounded-2xl border border-primary/20 text-center">
            <p className="text-slate-700 font-serif text-lg leading-relaxed">
              Through this ongoing outreach initiative, Vani Vidyalaya remains dedicated to opening doors, breaking barriers, and building a compassionate, integrated environment where every child receives the encouragement and opportunity to excel academically and socially.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
