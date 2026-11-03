import { Compass, BookCheck, ShieldAlert, CheckCircle2, Clock, Calendar, FileSpreadsheet, GraduationCap } from "lucide-react";

export default function FuturePlansPage() {
  const coreObjectives = [
    {
      title: "Holistic Time Optimization",
      desc: "Save students 3–4 hours of daily commuting between junior college and scattered coaching classes by offering advanced problem-solving on our own campus."
    },
    {
      title: "Curricular Synchronization",
      desc: "Map Maharashtra State Board textbooks directly to national entrance syllabi, ensuring conceptual clarity precedes competitive MCQ application."
    },
    {
      title: "Stress-Free Ecosystem",
      desc: "Provide a balanced schedule that preserves laboratory practicals, physical well-being, and structured mentoring without the mental fatigue of dual-institution enrollment."
    },
    {
      title: "Affordable Excellence",
      desc: "Deliver high-caliber competitive training at a fraction of commercial coaching fees, managed transparently through institutional channels."
    }
  ];

  const complianceGuidelines = [
    {
      mandate: "Prohibition of \"Dummy\" Setups",
      mechanism: "Students remain bona fide, full-time campus attendees. Daily theoretical classes and mandatory lab practicals are strictly enforced on-site."
    },
    {
      mandate: "75% Mandatory Attendance",
      mechanism: "Attendance integrity is upheld via the institution's standard biometric and regular registers, fully eligible for MSBSHSE HSC Board hall tickets."
    },
    {
      mandate: "Fee Regulation Act Compliance",
      mechanism: "Program fees will be non-commercial, fully transparent, audited in the Trust’s books, and placed before the Executive Committee/PTA as per statutory guidelines."
    },
    {
      mandate: "Voluntary Participation",
      mechanism: "The enrichment module is an elective add-on. Students preferring standard HSC preparation without competitive coaching retain full access to general classes without compulsion."
    }
  ];

  const roadmapItems = [
    {
      title: "Curriculum Mapping",
      desc: "Faculty alignment of HSC units with competitive entrance patterns."
    },
    {
      title: "Parent Orientation",
      desc: "A formal briefing for Std. X passed students and parents outlining the dual advantages of campus safety, time efficiency, and legal transparency."
    },
    {
      title: "Diagnostic Screening",
      desc: "An internal aptitude assessment to place enrolled students into focused batches based on their Engineering or Medical aptitude."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="py-20 bg-[#0a2540] text-white text-center">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
            Future Plans
          </h1>
          <p className="text-primary font-bold tracking-wide text-sm md:text-base uppercase">
            PROPOSAL: IN-HOUSE SCIENCE ENRICHMENT & COMPETITIVE EXAM FOUNDATION PROGRAM
          </p>
          <p className="text-slate-300 mt-2 text-sm">
            Target Group: Incoming Std. XI & XII Science Stream Students
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 -mt-10 relative z-20 max-w-5xl">
        <div className="bg-white p-8 md:p-14 rounded-3xl shadow-xl border border-slate-100 space-y-12">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed text-base md:text-lg space-y-4">
            <p>
              For over seven decades, Vani Vidyalaya High School & Junior College has stood as a pillar of academic integrity and community trust in Mulund. In response to the evolving demands of higher education, where Std. X graduates increasingly seek simultaneous preparation for both Maharashtra Higher Secondary Certificate (HSC) exams and national entrance examinations (MHT-CET, JEE Main, NEET-UG), the management proposes an institutional In-House Science Academic Enrichment Program.
            </p>
            <p>
              Unlike unregulated commercial tie-ups, this initiative delivers competitive rigor entirely within the institution’s campus, run under the direct governance of our Trust, fully compliant with Maharashtra School Education Department norms, and without any third-party private coaching franchising.
            </p>
          </div>

          {/* Core Objectives */}
          <div className="border-t border-slate-100 pt-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a2540] mb-8">
              Core Objectives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreObjectives.map((obj, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6">
                  <h3 className="font-bold text-[#0a2540] text-lg mb-2">
                    {obj.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {obj.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Framework & Delivery Model */}
          <div className="border-t border-slate-100 pt-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a2540]">
              Academic Framework & Delivery Model
            </h2>

            <div className="space-y-4 text-slate-700 leading-relaxed text-base md:text-lg">
              <div>
                <h3 className="font-bold text-[#0a2540] text-lg">
                  Regular Board Curriculum (Primary Shift):
                </h3>
                <p className="text-slate-600 mt-1">
                  The mandatory Maharashtra State Board curriculum, laboratory work, continuous assessments, and environmental studies will be conducted during standard college hours by our qualified junior college faculty.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#0a2540] text-lg">
                  Competitive Foundation Modules (Extended Hours):
                </h3>
                <p className="text-slate-600 mt-1">
                  Advanced analytical training, numerical workshops, and exam-taking strategies (for MHT-CET, JEE, NEET) will be conducted during zero-hours, post-college sessions, or scheduled weekend modules.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#0a2540] text-lg mb-2">
                  Subject Focus:
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>
                    <strong className="text-slate-800">Engineering Batch:</strong> Physics, Chemistry, and Higher Mathematics, supplemented by Vocational/Bifocal options (Computer Science / Electronics).
                  </li>
                  <li>
                    <strong className="text-slate-800">Medical Batch:</strong> NCERT/State Board aligned Biology (Botany & Zoology), Organic/Inorganic Chemistry, and Physics, integrated with regular timed test series.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Faculty Structure & Governance */}
          <div className="border-t border-slate-100 pt-10 space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a2540]">
              Faculty Structure & Governance
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              To maintain top-tier pedagogy without violating regulatory norms:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-slate-700 text-base md:text-lg leading-relaxed">
              <li>
                <strong className="text-slate-900">Direct Trust Appointments:</strong> The management will contract subject-matter experts and experienced competitive trainers directly under the Educational Trust as visiting faculty/resource specialists.
              </li>
              <li>
                <strong className="text-slate-900">No Corporate Tie-Ups:</strong> All teaching agreements remain strictly between the Trust and the individual educators; no coaching institute branding, logos, proprietary franchised material, or corporate revenue-sharing models will enter the campus.
              </li>
              <li>
                <strong className="text-slate-900">In-House Materials:</strong> Study modules, mock tests, and worksheets will be curated and published directly under the Vani Vidyalaya academic banner.
              </li>
            </ul>
          </div>

          {/* Strict Adherence to Maharashtra Government Guidelines */}
          <div className="border-t border-slate-100 pt-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a2540]">
              Strict Adherence to Maharashtra Government Guidelines
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-sm md:text-base">
                <thead className="bg-[#0a2540] text-white">
                  <tr>
                    <th className="py-4 px-6 font-bold w-1/3">Regulatory Mandate</th>
                    <th className="py-4 px-6 font-bold">Compliance Mechanism</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {complianceGuidelines.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                      <td className="py-4 px-6 font-bold text-[#0a2540] align-top">{row.mandate}</td>
                      <td className="py-4 px-6 text-slate-600 leading-relaxed">{row.mechanism}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Implementation Roadmap */}
          <div className="border-t border-slate-100 pt-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a2540]">
              Implementation Roadmap
            </h2>
            <div className="space-y-4">
              {roadmapItems.map((item, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <strong className="text-[#0a2540] font-bold text-base md:text-lg block md:inline md:mr-2">
                      {item.title}:
                    </strong>
                    <span className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
