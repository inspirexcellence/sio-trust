import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0a2540] mb-8 leading-tight">
              From 27 Students to <span className="text-primary italic">Thousands of Futures</span>
            </h2>
            
            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed mb-10">
              <p>
                In 1955 a group of visionary individuals united in their convictions that education could fundamentally change not just individuals but generations. What began as a mission to provide accessible, value-driven education to a growing community in Mumbai became the foundation of an institution built on purpose, resilience, and lasting impact.
              </p>
              <p>
                The evolution of SIO from its modest beginnings in a tin shed with just 27 students in 1956 to a modern educational landmark that today nurtures thousands of young minds is a tale of unwavering commitment and steady evolution and transformational growth.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" 
                alt="Dr. Nitesh Kumar" 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-[#0a2540] text-sm">Dr. Nitesh Kumar</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-0.5">Founder, VET</p>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] w-full flex items-center justify-center lg:justify-end">
            {/* Background Decorative Box or Image */}
            <div className="absolute left-0 bottom-0 w-2/3 h-4/5 bg-slate-100 rounded-2xl shadow-inner -z-10 border border-slate-200 hidden lg:block" />
            
            {/* Main Overlapping Image Pair */}
            <div className="relative w-full lg:w-4/5 h-full">
              {/* Back Image */}
              <div className="absolute left-0 top-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-lg z-0">
                <img 
                  src="https://img.freepik.com/free-photo/diverse-kids-reading-books_53876-146406.jpg?semt=ais_hybrid&w=740&q=80" 
                  alt="Children reading" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Front Image */}
              <div className="absolute right-0 bottom-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Children smiling" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
