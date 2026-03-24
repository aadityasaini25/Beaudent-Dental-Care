'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is a root canal treatment painful?",
      answer:
        "Not at all. With modern anesthesia and our advanced endodontic techniques, root canal treatments are virtually painless. Most patients report feeling little to no discomfort during the procedure.",
    },
    {
      question: "How many visits does a root canal take?",
      answer:
        "Thanks to our state-of-the-art technology, we successfully perform single-visit root canal treatments in most cases. Only highly complex cases may require a second visit to ensure complete healing.",
    },
    {
      question: "What is a Re-Root Canal (Endodontic Retreatment)?",
      answer:
        "If a previously treated tooth fails to heal or gets newly infected, we can save it with a re-root canal. We carefully remove the old filling, clean the canals under a microscope, and precision-seal the tooth.",
    },
    {
      question: "What are the benefits of Laser Dentistry?",
      answer:
        "Laser dentistry is minimally invasive, highly precise, and extremely comfortable. It eliminates the need for drills in many procedures, leading to less bleeding, faster healing, and a stress-free experience.",
    },
    {
      question: "How do I know if I need a root canal?",
      answer:
        "Common signs include severe spontaneous toothache, prolonged sensitivity to heat or cold, swollen or tender gums, and pain when chewing. Please book a consultation immediately if you experience these symptoms.",
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-gray-900">
          Frequently Asked <span className="text-gradient-gold">Questions</span>
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="card !p-0 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 md:p-8 text-left font-bold hover:bg-pink-50 transition-colors flex justify-between items-center group"
              >
                <span className="flex-grow pr-4 text-lg md:text-xl text-gray-800 group-hover:text-[#5d2350] transition-colors">{faq.question}</span>
                <span className={`w-8 h-8 rounded-full border border-pink-100 flex items-center justify-center text-[#5d2350] transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180 bg-[#5d2350] text-white' : ''}`}>
                  ▼
                </span>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-8 md:px-8 md:pb-10 bg-white">
                  <div className="w-full h-px bg-pink-50 mb-8"></div>
                  <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}