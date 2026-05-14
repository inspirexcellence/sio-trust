import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#101c29] mb-8 leading-tight">
              Welcome to Valley<br/>Empowerment Trust
            </h2>
            
            <div className="text-sm md:text-base text-slate-700 space-y-6 leading-relaxed mb-10">
              <p>
                Valley Empowerment Trust (VET) is a believe that every society has the right to live with dignity and equal opportunities. <strong>VET IS AN ENDEAVOR TO FOSTER HOLISTIC DEVELOPMENT</strong> of underprivileged and vulnerable sections of society, enabling them to lead a life of self-reliance and dignity.
              </p>
              <p>
                Our focus is primarily on health, education, livelihood generation, social inclusion, and women empowerment. Through targeted interventions and partnerships, we aim to build resilient and self-sustaining communities where every individual has the opportunity to realize their potential and contribute to the nation.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" 
                alt="Dr. Nitesh Kumar" 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-[#101c29] text-sm">Dr. Nitesh Kumar</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">Founder, VET</p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] w-full flex items-center justify-end">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3/5 h-64 bg-slate-100 rounded-xl shadow-md z-10 p-6 flex items-center justify-center text-slate-400 text-sm">
              [Placeholder providing support]
            </div>
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
              alt="Children" 
              className="w-3/4 h-[350px] object-cover rounded-xl shadow-xl relative z-0"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
