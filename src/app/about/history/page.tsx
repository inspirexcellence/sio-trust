"use client";

import { motion } from "framer-motion";

export default function HistoryPage() {
  const timeline = [
    {
      year: "2004",
      title: "Foundation & First School",
      text: "VET is officially registered. Our very first initiative, the 'Evening Pathshala' (school), begins teaching 40 out-of-school children under a tin roof.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
    },
    {
      year: "2012",
      title: "Expansion to Health & Livelihood",
      text: "Launch of the 'Aarogya' Rural Health Initiative and the establishment of three permanent vocational training centers for women.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      year: "2023",
      title: "Digital Inclusion Drive",
      text: "Inauguration of the 'Digital Udaan' program, deploying mobile computer labs to remote villages and bridging the digital divide for thousands of students.",
      image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0a2540] mb-6">Our Journey of Impact</h1>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From a small grassroots initiative to a recognized force for social good, our history is defined by community resilience.
          </p>
        </motion.div>

        {/* Narrative Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto mb-24 text-sm md:text-base text-slate-700 space-y-8 leading-relaxed"
        >
          <p>
            Valley Empowerment Trust (VET) was founded in the winter of 2004 by a small group of social workers and medical professionals who witnessed the stark disparities in access to basic education and healthcare in rural fringes. What began as a weekend literacy drive and makeshift medical camps quickly evolved into a dedicated mission to address systemic inequalities.
          </p>
          <p>
            By 2012, recognizing that true empowerment required economic independence, the Trust expanded its mandate to include Livelihood and Skill Development. We launched our first "Women's Vocational Center," providing tailoring, computer literacy, and financial planning courses to hundreds of marginalized women, enabling them to become primary breadwinners for their families.
          </p>
          <p>
            Today, VET is a fully registered charitable entity managing over 25 active projects across the region. We partner with local governments, international aid agencies, and corporate CSR wings to scale our impact. Despite our growth, we remain deeply rooted in our founding philosophy: every life uplifted is a step toward a better world.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-5xl mx-auto py-10"
        >
          {/* Center Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 w-1 bg-primary/30 -translate-x-1/2 hidden md:block" 
          />

          {timeline.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row items-center mb-32 last:mb-0 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Year & Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-primary rounded-full z-10 border-4 border-white shadow-md hidden md:block" 
              />
              
              <div className="w-full md:w-1/2 px-10 mb-8 md:mb-0">
                <div className={`flex flex-col ${idx % 2 === 0 ? "md:items-start" : "md:items-end text-right"}`}>
                  <span className="text-4xl font-bold text-primary mb-3">{item.year}</span>
                  <h3 className="text-xl font-bold text-[#0a2540] mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full md:w-1/2 px-10"
              >
                <img 
                  src={item.image} 
                  alt={item.year} 
                  className="w-full h-72 object-cover rounded-2xl shadow-xl border-4 border-white"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
