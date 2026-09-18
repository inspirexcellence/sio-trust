import { FileText, HeartHandshake, Users } from "lucide-react";

export default function CSRPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="py-20 bg-[#0a2540] text-white text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
            Corporate Social Responsibility
          </h1>
          <p className="text-primary font-bold tracking-widest uppercase text-sm">
            Partnering for Impact
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16 -mt-10 relative z-20 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CSR Initiatives */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <HeartHandshake className="text-primary w-8 h-8" />
              <h2 className="text-2xl font-serif font-bold text-[#0a2540]">CSR Initiatives</h2>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Details on our ongoing and upcoming Corporate Social Responsibility initiatives are currently being updated. We collaborate with leading organizations to drive meaningful change in education and community development.
            </p>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-8 text-center">
              <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Initiatives Content Coming Soon</span>
            </div>
          </div>

          <div className="space-y-8">
            {/* Supporting Members */}
            <div className="bg-[#0a2540] text-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <Users className="text-primary w-6 h-6" />
                <h3 className="text-xl font-serif font-bold">Supporting Members</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                We are grateful for the support of our esteemed corporate partners and philanthropic members.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Member List Coming Soon</span>
              </div>
            </div>

            {/* Certificates */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="text-primary w-6 h-6" />
                <h3 className="text-xl font-serif font-bold text-[#0a2540]">Certifications</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-[#0a2540] text-sm">12A Certificate</h4>
                    <p className="text-xs text-slate-500 mt-1">Details pending upload</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-[#0a2540] text-sm">80G Certificate</h4>
                    <p className="text-xs text-slate-500 mt-1">Details pending upload</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
