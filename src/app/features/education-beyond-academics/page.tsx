import { CheckCircle2 } from "lucide-react";

export default function EducationBeyondAcademicsPage() {
  const highlights = [
    "Academic Excellence",
    "Character Building",
    "Leadership Development",
    "Cultural & Ethical Values",
    "Holistic Student Growth"
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-xs font-bold text-primary tracking-widest uppercase">Feature</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight max-w-4xl">
            Educating Minds, Shaping Character
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          {/* Content */}
          <div className="space-y-8 text-lg text-slate-600 leading-relaxed order-2 lg:order-1">
            <p>
              For nearly seven decades, education at Vani Vidyalaya has extended far beyond the boundaries of textbooks and examinations. While academic excellence remains a cornerstone of our journey, we believe that true education is about shaping character, nurturing values, and preparing students to lead meaningful lives.
            </p>
            <p>
              Every classroom is designed to inspire curiosity, discipline, creativity, and critical thinking. Through a balanced blend of academics, cultural activities, sports, leadership opportunities, and value-based learning, students are encouraged to discover their potential and develop into confident, compassionate, and responsible individuals.
            </p>
            <p>
              Our goal is not simply to create successful professionals, but to nurture ethical citizens and future leaders who contribute positively to society and carry forward the values that define our institution.
            </p>
          </div>

          {/* Images Layout */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 relative lg:mt-0 order-1 lg:order-2">
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-primary/5 rounded-[4rem] -z-10 blur-3xl"></div>
            
            <div className="flex flex-col gap-4 sm:gap-6 pt-12 sm:pt-20">
              <div className="aspect-[4/5] rounded-3xl bg-slate-200 overflow-hidden shadow-xl border-4 border-white relative group">
                <img src="/Features/feature11.png" alt="Academic Excellence" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
            </div>
            
            <div className="flex flex-col gap-4 sm:gap-6 pb-12 sm:pb-20">
              <div className="aspect-[4/5] rounded-3xl bg-slate-200 overflow-hidden shadow-xl border-4 border-white relative group">
                <img src="/Features/feature12.png" alt="Holistic Student Growth" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Key Focus Areas */}
        <div className="pt-16 border-t border-slate-200">
          <h3 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Key Focus Areas</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex flex-col items-center justify-center text-center text-slate-700 bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group">
                <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-slate-900 leading-snug text-xs md:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* New Section: Fostering Inclusivity */}
      <div className="w-full mt-24 bg-[#0a2540] py-24 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 md:px-10 max-w-[1400px] relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
              Fostering Inclusivity: Our Academic & Inclusive Partnership with Society for Koko Specials and Remedials (KOKO Kids)
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              At Vani Vidyalaya, we believe that true education extends beyond academic excellence to encompass empathy, equity, and meaningful community outreach. As a core part of our commitment to social responsibility, we are proud to partner with the Society for Koko Specials and Remedials (KOKO Kids), a registered NGO, specializing in handling children with Intellectual Development Disorders! We host an integrated academic and developmental program on our campus for children enrolled with Society for Koko Specials and Remedials(KOKO Kids)!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 flex flex-col gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 mx-auto md:mx-0">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white text-center md:text-left">Academic Integration & Tailored Support</h3>
              <p className="text-slate-300 leading-relaxed text-center md:text-left">
                To foster a seamless blend of specialized care and inclusive learning, our campus provides a dedicated integration classroom for KOKO Kids students. Twice a week, these young learners step into our mainstream classrooms, sharing learning spaces and building strong peer connections. Our leadership team and teaching faculty actively support their educational journey by offering customized syllabus adaptations, tailored learning strategies, and dedicated guidance during exam preparation.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 flex flex-col gap-4 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 mx-auto md:mx-0">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-white text-center md:text-left">Holistic Growth & Co-Curricular Participation</h3>
              <p className="text-slate-300 leading-relaxed text-center md:text-left">
                Inclusivity at Vani Vidyalaya spans every aspect of school life. We share our sports infrastructure and physical education spaces to accommodate their occupational therapy needs and daily physical activities. Furthermore, KOKO Kids students are an integral part of our vibrant school culture, actively performing and competing alongside our students during annual sports days, cultural showcases, and dance events.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <p className="text-lg text-white font-serif leading-relaxed">
              Through this ongoing outreach initiative, Vani Vidyalaya remains dedicated to opening doors, breaking barriers, and building a compassionate, integrated environment where every child receives the encouragement and opportunity to excel academically and socially.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
