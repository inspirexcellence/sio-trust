import Link from "next/link";

export default function EventsListSection() {
  const events = [
    {
      title: "Annual Charity Marathon, 2026",
      desc: "Join us for our annual charity marathon to raise funds for children's education. Every step you take helps build a brighter future for the youth.",
    },
    {
      title: "Free Medical Camp in Rural Area",
      desc: "A free medical checkup camp providing general health screenings, eye tests, and essential medicines to underserved communities in the rural district.",
    },
    {
      title: "Food Donation Drive for Winter",
      desc: "Help us ensure no one goes hungry this winter. We are collecting non-perishable food items for distribution to the homeless and needy families.",
    },
    {
      title: "Women Empowerment Workshop",
      desc: "A three-day workshop focusing on skill development, financial literacy, and entrepreneurship for women from marginalized backgrounds.",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-4xl text-center">
        
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#101c29] mb-12">
          Upcoming Events
        </h2>

        <div className="flex flex-col gap-6 text-left mb-10">
          {events.map((event, idx) => (
            <div key={idx} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
              <h3 className="font-bold text-[#101c29] text-base mb-2">{event.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{event.desc}</p>
            </div>
          ))}
        </div>

        <Link href="/events" className="text-primary font-semibold text-sm hover:underline uppercase tracking-wider">
          View All Events
        </Link>
      </div>
    </section>
  );
}
