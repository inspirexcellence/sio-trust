import { Quote } from "lucide-react";

export default function PresidentMessagePage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="py-20 bg-[#0a2540] text-white text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
            President's Message
          </h1>
          <p className="text-primary font-bold tracking-widest uppercase text-sm">
            Shri. C.V.Srinivasan
          </p>
        </div>
      </section>

      {/* Message Content */}
      <div className="container mx-auto px-6 py-16 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Medallion / Image Side */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 sticky top-32">
              <img 
                src="/jubilee-medallion.jpg" 
                alt="Platinum Jubilee Medallion" 
                className="w-full h-auto rounded-xl"
              />
              <div className="mt-6 text-center">
                <h3 className="font-serif font-bold text-[#0a2540] text-lg">Platinum Jubilee</h3>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mt-1">2026 - 2030</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 space-y-6 text-slate-700 leading-relaxed text-lg">
            <Quote className="text-primary w-12 h-12 mb-4 opacity-50" />
            
            <h2 className="text-2xl font-serif font-bold text-[#0a2540]">
              A Message from the President: Celebrating Our Platinum Jubilee Year
            </h2>
            
            <p className="font-semibold">
              Dear Members of The South Indians’ Organisation, Alumni, Parents, and Well-wishers,
            </p>
            
            <p>
              It is with a profound sense of pride and humility that I address you as we celebrate this monumental milestone: the Platinum Jubilee of theThe South Indians' Organisation and Vani Vidyalaya High School & Jr. College. On the 9th,August 2026 the commencement of Platinum Jubilee celebrations was declared and we have officially begun a year of celebration, reflection, and visionary planning, marking 71 years of unwavering commitment to excellence in education.
            </p>

            <h3 className="text-xl font-bold text-[#0a2540] mt-8">Honoring Our Roots and Resilience</h3>
            <p>
              As we look forward, we must first look back with deep gratitude. Our journey began seven decades ago, fueled by the courage and foresight of our Founding Fathers. It was their selfless vision to create a sanctuary of learning for the Tamil and Malayalam linguistic minority communities in Mulund. We owe our current standing to their sacrifices and their belief that education is the most powerful tool for community empowerment.
            </p>
            <p>
              We also extend our heartfelt thanks to the members who stood by us during our recent redevelopment. The completion of our new Ground + 7 storey school building, equipped with state-of-the-art infrastructure, is a testament to collective will. This journey was not easy; we faced unprecedented hardships, from the economic shifts of demonetization to the global disruptions of the COVID-19 pandemic. We owe a debt of gratitude to the Managing Committee members of that era, whose tireless efforts and resilience ensured that our modern educational vision became a reality despite these hurdles.
            </p>

            <h3 className="text-xl font-bold text-[#0a2540] mt-8">Spiritual Foundation and Character Building</h3>
            <p>
              Located in our campus is the small temple dedicated to Lord Rama. Established to inculcate the values of prayer and faith, it serves as a spiritual anchor for our students. Guided by the Sanatana philosophy of tolerance, the temple promotes a spirit of harmony and a commitment to global well being, ensuring our students grow not just in knowledge, but in character and compassion.
            </p>

            <h3 className="text-xl font-bold text-[#0a2540] mt-8">Expanding Our Horizon: The Degree College</h3>
            <p>
              Our commitment to your children's future does not stop at the Junior College level. I am pleased to share that we are currently channelizing our efforts toward establishing a full-fledged Degree College. This expansion is a strategic priority, designed to provide a seamless transition into higher education within the same values-based environment that has defined our Trust for 75 years. This institution will serve as a beacon of advanced learning for our community right here in Mulund, which will certainly add to the pride of North East Mumbai.
            </p>

            <h3 className="text-xl font-bold text-[#0a2540] mt-8">Our Legacy, A Culture of Excellence!</h3>
            <p>
              Today, accolades and accomplishments have become a way of life in Vani Vidyalaya. With our state-of-the-art infrastructure and a team of very able teachers led by our dynamic Principal, we continue to set high standards in both academics and co-curricular activities. Our institution currently serves over 3,500 students guided by a dedicated team of 125 staff members, all striving to maintain the academic rigor that is our hallmark.
            </p>
            <p>
              While we take immense pride in our academic record under the Maharashtra State Board, we have noted a dwindling trend in enrollments from our core South Indian community.
            </p>
            <p>
              To sustain this legacy for the next century, we seek your partnership:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Community Enrollment:</strong> We urge our community members to choose our institution for their children’s education, ensuring our linguistic identity is celebrated.</li>
              <li><strong>Continued Support:</strong> As we launch our Platinum Jubilee projects and finalize our Degree College plans, your ongoing financial and moral support remains vital.</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0a2540] mt-8">Join the Celebration</h3>
            <p>
              The celebrations commencing this June are a reaffirmation of our collective strength. I invite each of you to re-engage with the Trust, visit our new campus, and contribute your time and resources to this landmark year.
            </p>

            <p className="mt-8">
              With warm regards and gratitude,
            </p>
            
            <div className="pt-4 flex items-center justify-between">
              <div>
                <p className="font-bold text-xl text-[#0a2540]">Shri. C.V.Srinivasan</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">The President</p>
                <p className="text-sm text-slate-500 mt-1">The South Indians' Organisation (Regd)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
