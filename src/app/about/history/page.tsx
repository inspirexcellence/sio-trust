"use client";

import { motion } from "framer-motion";

export default function HistoryPage() {
  const timeline = [
    { year: "1955", events: [
      "SOUTH INDIAN ORGANISATION (SIO) was founded on 10th April 1955 with the primary objective of providing quality education to the South Indian community who have migrated to Mumbai."
    ]},
    { year: "1956", events: [
      "SIO’s humble beginnings date back to the inception of its primary school, which started with 27 students in standards 1st and 2nd.",
      "By 1961-1962 the institution expanded to include kindergarten and secondary sections experiencing a phenomenal growth to reach a staggering strength of 530 students."
    ]},
    { year: "1963", events: [
      "Foundation stone was laid on 23.3.1963 for a permanent school building at the hands of late Chief Minister of Maharashtra MS Kannamwar and Vani lined up with other Educational giants in Greater Mumbai with IX Standard.",
      "The strength was increased."
    ]},
    { year: "1965", events: [
      "Vani Visionaries' Dream/ambition was fulfilled by opening the new own building by the then Governor of Maharashtra Late Dr.P V Cherian on 7th march,1965."
    ]},
    { year: "1966", events: [
      "Our first batch of 25 students appeared for SSC examination under the dynamic control of Principal Smt. Lalita Sharma.",
      "First decade of Noble service borne fruit at this moment."
    ]},
    { year: "1975", events: [
      "Vani Vidyalaya proudly introduced Junior College with Science and Commerce streams expanding opportunities for students to explore their academic interest."
    ]},
    { year: "1980", events: [
      "Vani Vidyalaya proudly celebrated its Silver Jubilee, marking 25 memorable years of academic excellence, growth and service to the community."
    ]},
    { year: "1983", events: [
      "SIO MANAGEMENT entered into professional education by establishing SIO INSTITUTE OF MANAGEMENT STUDIES IN 1983 by starting 6 month computer profession Diploma courses."
    ]},
    { year: "1984", events: [
      "Vani Vidyalaya has been honoured with a prestigious award by Government of Maharashtra for being the BEST MANAGED SCHOOL WITH A CLEAN ACADEMIC RECORD."
    ]},
    { year: "1986", events: [
      "We performed the Bhoomi Pooja to mark the commencement of its new building extension project."
    ]},
    { year: "1987", events: [
      "It was a momentous occasion for Vani Vidyalaya as Shri Shankaracharya of Sero Kanchi Kamokoti Peetam His Holiness Sri Jayendra Saraswathy Swamiji graced our institution and blessed our children for a successful and fulfilling career."
    ]},
    { year: "1993", events: [
      "Vani Vidyalaya marked a significant milestone with the introduction of computer education, heralding the beginning of the computer age for its students."
    ]},
    { year: "1999", events: [
      "Vani Vidyalaya Junior College was placed at 11th position among the total 182 Junior Colleges in Mumbai.",
      "A great achievement by our Staff and students."
    ]},
    { year: "2005", events: [
      "WE Celebrated Our Golden Jubilee Year. Many programmes were organised.",
      "All former Presidents, MC members, and retired staff members were honoured by the management."
    ]},
    { year: "2010", events: [
      "Pioneering education in Mulund! Vani Vidyalaya introduces digital smart classes."
    ]},
    { year: "2013", events: [
      "\"The T Ward Science Exhibition was well conducted in our school with our students showcasing exceptional talent and securing numerous awards and prizes for their innovative projects.\""
    ]},
    { year: "2015", events: [
      "Vani Vidyalaya's Diamond Jubilee celebrations in 2015 were truly a grand affair, marking a significant milestone in the institution's history. The year-long program was a testament to the school's growth and commitment to excellence.",
      "The celebrations culminated in a special function at Kalidas Hall, where the former President of India Bharat Ratna. Dr.A.P. J. Abdul Kalam delivered a grand address.",
      "This occasion not only showcased Vani Vidyalaya's achievements but also solidified its position as a landmark institution in Mulund.",
      "Dr. Dolly Henry, Principal of Vani Vidalaya (2005-2021), was conferred with the prestigious National Best Teacher Award by the then President of India, Shri Pranab Mukherjee."
    ]},
    { year: "2020-21", events: [
      "A Grand comeback to a newly constructed building which was carried out in two phases and completed with more class rooms and other amenities as planned.",
      "A Great Achievement by SIO with the timely financial support and by the joint efforts of all well wishers."
    ]},
    { year: "2023", events: [
      "Vani Vidyalaya's new redeveloped building was inaugurated on August 20, 2023, by Shri Manoj Kotak, Member of Parliament, Mulund, and Shri Sandeep Sangave, Deputy Director of Education.",
      "This milestone marked a significant upgrade for the institution, which has been providing quality education since its establishment in 1955.",
      "The school also conducted a district-level Science Exhibition, which received appreciation from the department for its diligent organization. Vani Vidyalaya has been actively promoting academic excellence and extracurricular activities, making it a reputable institution in the Mulund area.",
      "Started Robotics & AI courses managed by Amazeheads, and establishing a sports turf for students, being coached by Leno sports."
    ]},
    { year: "2024", events: [
      "Establishment of a full fledged IT laboratory by installing a server with power backup, 35 pcs which was fully sponsored by Kaushik KP Memorial Charitable Foundation."
    ]}
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0a2540] text-white">
      <div className="container mx-auto px-6 md:px-10 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our History</h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A legacy of excellence since 1955. Tracing our journey through the decades as we evolved into a premier educational institution.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 rounded-full" />

          {timeline.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              key={item.year} 
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Center Dot */}
              <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-[#0a2540] border-[3px] border-primary flex items-center justify-center -translate-x-1/2 mt-[14px] md:mt-0 z-10 shadow-lg shadow-primary/20">
              </div>

              {/* Content Box */}
              <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} flex flex-col`}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-xl hover:bg-white/10 transition-colors duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold tracking-wider mb-4">
                    {item.year}
                  </span>
                  {item.events.length === 1 ? (
                    <p className="text-slate-200 leading-relaxed text-sm md:text-base">
                      {item.events[0]}
                    </p>
                  ) : (
                    <ul className="list-disc list-outside pl-4 space-y-2 text-slate-200 leading-relaxed text-sm md:text-base marker:text-primary/70">
                      {item.events.map((point, idx) => (
                        <li key={idx} className="pl-1">{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
