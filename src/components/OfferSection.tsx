'use client';

interface OfferSectionProps {
  onBookAppointment: () => void;
}

export default function OfferSection({ onBookAppointment }: OfferSectionProps) {
  const benefits = [
    "Up to 30% OFF on Invisalign treatment",
    "FREE 3D Smile Scan (Worth ₹5000)",
    "Outcome visualization before starting treatment",
    "Clear, transparent & comfortable aligners",
    "No food restrictions (remove aligners while eating)",
    "Fewer clinic visits compared to braces",
    "Advanced AI-based treatment planning"
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Background Decorative Element */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-pink-50 rounded-full blur-3xl opacity-60 -z-10" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60 -z-10" />

          <div className="bg-white rounded-[40px] shadow-2xl shadow-pink-500/5 border border-pink-50 p-8 md:p-16 relative overflow-hidden group hover:shadow-pink-500/10 transition-all duration-700">
            {/* Animated border beam effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#964782]/10 rounded-[40px] transition-colors duration-700" />
            
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-100 mb-6 animate-pulse">
                  <span className="text-[#964782] text-sm font-bold tracking-widest uppercase">Limited Time Offer</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                  Limited Time <br />
                  <span className="text-[#964782]">Invisalign Offer</span>
                </h2>
                
                <p className="text-gray-600 text-lg mb-10 font-light leading-relaxed">
                  Start your journey to a perfect smile with the world's most advanced clear aligner system at a special promotional price.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-10">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 group/item">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#964782]/10 flex items-center justify-center shrink-0 group-hover/item:bg-[#964782] transition-colors duration-300">
                        <svg className="w-3 h-3 text-[#964782] group-hover/item:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium text-sm md:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 relative w-full max-w-sm lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700">
                  <img 
                    src="/images/promo/invisalign_promo.png" 
                    alt="Invisalign Treatment" 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                    <div className="text-white">
                      <p className="font-bold text-2xl mb-1">3D Smile Scan</p>
                      <p className="text-white/80 text-sm">Visualize your future smile in seconds</p>
                    </div>
                  </div>
                </div>
                
                {/* Float elements */}
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-pink-50 animate-bounce-slow">
                  <span className="text-[#964782] font-black text-2xl">30% OFF</span>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-teal-50 animate-bounce">
                  <span className="text-teal-600 font-bold text-sm">Value ₹5000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
