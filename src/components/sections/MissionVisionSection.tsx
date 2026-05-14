export default function MissionVisionSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#0a2540] mb-4">
            Igniting Young Minds, Inspiring Lifelong Learning
          </h2>
          <p className="text-sm md:text-base text-slate-600">
            Providing opportunity, breaking cycles of poverty through care and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="text-center px-4">
            <h3 className="text-xl font-serif font-bold text-[#0a2540] mb-4">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              To empower marginalized communities by providing access to quality education, healthcare, and sustainable livelihood opportunities, fostering self-reliance and social inclusion.
            </p>
          </div>
          <div className="text-center px-4">
            <h3 className="text-xl font-serif font-bold text-[#0a2540] mb-4">Our Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              A world where every individual, regardless of their socio-economic background, has the opportunity to achieve their full potential and contribute meaningfully to society.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-12 border-t border-slate-200">
          <div>
            <h4 className="font-bold text-[#0a2540] mb-3">Core Value Focus</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Integrity, accountability, and transparency in all our initiatives and operations.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#0a2540] mb-3">Values Where You Matter</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              We believe in the power of empathy, respect, and collaboration to drive meaningful change.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#0a2540] mb-3">Our Communities Build Us Better</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Building resilient communities by focusing on long-term sustainability and empowerment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
