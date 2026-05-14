import { Users, Clock, HeartHandshake, Building2 } from "lucide-react";

export default function StatsBar() {
  const stats = [
    { icon: <Users size={28} />, value: "50,000+", label: "Lives Impacted" },
    { icon: <Clock size={28} />, value: "25+", label: "Years of Service" },
    { icon: <HeartHandshake size={28} />, value: "150+", label: "Dedicated Volunteers" },
    { icon: <Building2 size={28} />, value: "20", label: "Partner NGOs" },
  ];

  return (
    <section className="py-12 bg-[#0a2540] text-white">
      <div className="container mx-auto px-6 md:px-10 max-w-[1400px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-700/50">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center px-4">
              <div className="text-primary mb-3">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-xs md:text-sm text-slate-300 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
