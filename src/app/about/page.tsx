import { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import CallToActionSection from "@/components/sections/CallToActionSection";

export const metadata: Metadata = {
  title: "About Us | SIO Trust",
  description: "Learn more about SIO Trust's mission, vision, and the work we do to uplift communities.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero for About Page */}
      <section className="bg-primary/5 py-24 border-b border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
            Who We Are
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
            Dedicated to creating a world where everyone thrives.
          </h1>
          <p className="text-xl text-slate-600">
            Founded with a vision of equality and compassion, SIO Trust has been at the forefront of social change, working tirelessly to bridge the gap between those who have resources and those who desperately need them.
          </p>
        </div>
      </section>

      {/* Reusing AboutSection component */}
      <div className="-mt-20">
        <AboutSection />
      </div>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To empower marginalized communities through accessible education, quality healthcare, and sustainable livelihood programs, fostering self-reliance and dignity for all.
              </p>
            </div>
            <div className="bg-primary p-10 rounded-3xl shadow-lg text-white">
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-primary-foreground/90 leading-relaxed text-lg">
                A society where every individual, regardless of their background, has the opportunity to achieve their full potential and contribute to a prosperous, equitable world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToActionSection />
    </div>
  );
}
