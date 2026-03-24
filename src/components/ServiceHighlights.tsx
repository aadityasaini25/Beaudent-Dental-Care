export default function ServiceHighlights() {
  const serviceData = [
    {
      title: "Root Canal Treatment",
      image: "/images/ortho/root_canal_3d.png",
      description:
        "Single-visit painless root canal therapy using advanced rotary endodontics and 3D precision.",
      benefits: [
        "Painless & fast treatment",
        "Preserves natural tooth structure",
        "Advanced 3D imaging integration",
        "Prevents severe infections",
      ],
    },
    {
      title: "Re-Root Canal Treatment",
      image: "/images/ortho/re_root_canal_3d.png",
      description:
        "Expert revision of failed or complex root canals using microscopic endodontic techniques for guaranteed success.",
      benefits: [
        "Resolves persistent pain",
        "State-of-the-art sterilization",
        "Expert endodontic handling",
        "High success rate",
      ],
    },
    {
      title: "Laser Dentistry",
      image: "/images/ortho/laser_dentistry_3d.png",
      description:
        "Minimally invasive laser treatments for gums, root canals, and teeth whitening with superior comfort.",
      benefits: [
        "No drills or needles needed",
        "Faster healing and recovery",
        "Reduced bleeding & swelling",
        "Highly precise treatments",
      ],
    },
    {
      title: "Oral Surgery",
      image: "/images/ortho/oral_surgery_3d.png",
      description:
        "Safe and painless minor oral surgeries including precise wisdom tooth extractions.",
      benefits: [
        "Painless extractions",
        "Expert surgical care",
        "Wisdom teeth removal",
        "Fast recovery protocols",
      ],
    },
  ];

  return (
    <section className="relative bg-[#301b2a] text-white py-20 md:py-28 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#964782] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Advanced Endodontics & Laser Dentistry
        </h2>
        <div className="w-16 h-0.5 bg-[#964782] rounded-full mb-4" />
        <p className="text-gray-300 max-w-2xl mb-14">
          From painless root canals to advanced oral surgeries — we specialize in preserving your natural smile using state-of-the-art microscopic and laser technology.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className={`bg-white/5 border border-white/10 p-6 rounded-[28px] flex flex-col hover:border-[#964782]/50 hover:bg-white/10 transition-all duration-500 hover-lift fade-up stagger-${index + 1} group border-beam`}
            >
              <div className="relative rounded-2xl mb-6 aspect-[4/3] flex items-center justify-center overflow-hidden bg-white/5 border border-slate-600/30 p-4 shadow-inner">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#964782]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-bold mb-3 text-lg text-white group-hover:text-[#964782] transition-colors">{service.title}</h3>
              <p className="text-[14px] text-gray-400 leading-relaxed mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-3 text-[12px] text-slate-300">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 group/item">
                    <span className="text-[#964782] mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#964782] group-hover/item:scale-125 transition-transform" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}