'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are Clear Aligners (Invisalign)?",
      answer:
        "Clear aligners are a modern, nearly invisible alternative to traditional braces. They use a series of custom-made, removable plastic trays to gradually straighten your teeth without any wires or brackets.",
    },
    {
      question: "How long does Invisalign treatment take?",
      answer:
        "Treatment time varies depending on the complexity of your case, but most patients achieve their dream smile in 6 to 18 months. You'll see noticeable progress in just a few weeks!",
    },
    {
      question: "Are aligners more comfortable than braces?",
      answer:
        "Yes! Aligners are made of smooth, BPA-free plastic, so there are no sharp metal parts to irritate your mouth. Plus, they're removable, making it easy to eat, brush, and floss normally.",
    },
    {
      question: "How many hours a day should I wear my aligners?",
      answer:
        "For the best results, you should wear your aligners for 20 to 22 hours a day, only removing them to eat, drink (anything other than water), brush, and floss.",
    },
    {
      question: "Is Invisalign suitable for everyone?",
      answer:
        "Invisalign can treat a wide range of orthodontic issues, from simple teeth straightening to more complex bites. During your consultation, we'll use our 3D scanner to determine if aligners are the perfect fit for your smile goals.",
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