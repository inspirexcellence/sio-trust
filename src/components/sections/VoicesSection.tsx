export default function VoicesSection() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-10 max-w-4xl text-center">
        
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0a2540] mb-12">
          Community Voices
        </h2>

        <div className="flex flex-col gap-12">
          
          <div className="flex flex-col items-center">
            <p className="text-sm md:text-base text-slate-700 leading-relaxed italic mb-4 max-w-2xl">
              "Valley Empowerment Trust has completely transformed our village by providing clean drinking water and setting up the local clinic. We no longer have to walk miles every day or worry about basic healthcare. They are like a godsend to our community."
            </p>
            <p className="text-xs font-bold text-[#0a2540] uppercase tracking-wider">
              — Amina Begum, Village Elder, Hope City
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm md:text-base text-slate-700 leading-relaxed italic mb-4 max-w-2xl">
              "The educational scholarship provided by VET allowed me to complete my engineering degree despite my family's financial struggles. They not only paid for my fees but also provided me with a mentor. I am now working at a top firm and plan to sponsor another student next year."
            </p>
            <p className="text-xs font-bold text-[#0a2540] uppercase tracking-wider">
              — Rahul Sharma, VET Scholarship Alumnus
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
