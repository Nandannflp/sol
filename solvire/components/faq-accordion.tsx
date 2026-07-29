'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How much does a solar installation cost?",
    answer: "The cost of solar installation varies depending on the size of your home and energy needs. However, with federal tax credits and state incentives, many homeowners see a return on investment within 5 to 8 years. Our team provides custom quotes during the free consultation."
  },
  {
    question: "What maintenance do solar panels require?",
    answer: "Solar panels require very little maintenance. Generally, keeping them free of dust, debris, and snow is enough. We recommend a professional cleaning and inspection once a year to ensure maximum efficiency."
  },
  {
    question: "Will solar panels work on cloudy days or during the winter?",
    answer: "Yes, solar panels still generate electricity on cloudy days and during the winter. While they are most efficient in direct sunlight, they can still capture ambient light to produce power. Snow can actually help reflect more sunlight onto the panels."
  },
  {
    question: "What happens to my solar panels if I move?",
    answer: "If you own your solar panel system, it typically adds value to your home. When you sell your house, the solar system is included in the sale just like any other home improvement. If you lease the system, you can often transfer the lease to the new homeowner."
  }
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-200"
        >
          <button
            onClick={() => toggleOpen(index)}
            className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
          >
            <span className="font-bold text-slate-900">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-green-600 shrink-0 ml-4" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
            )}
          </button>
          <div 
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-slate-500 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
