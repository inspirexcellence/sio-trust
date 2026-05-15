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
              "Enrolling my children at Vani Vidyalaya was the best decision for their future. Beyond just academics, the institution has instilled deep cultural values and discipline in them. It's heartening to see an organisation so dedicated to shaping the character of the next generation."
            </p>
            <p className="text-xs font-bold text-[#0a2540] uppercase tracking-wider">
              — A Proud Parent, Mulund
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm md:text-base text-slate-700 leading-relaxed italic mb-4 max-w-2xl">
              "The foundation I received at SIO was instrumental in my journey to becoming a successful professional. The blend of modern learning and traditional integrity is what makes this institution unique. Today, as a leader in my field, I carry the lessons of my teachers with me every day."
            </p>
            <p className="text-xs font-bold text-[#0a2540] uppercase tracking-wider">
              — SIO Alumnus, Batch of 1998
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
