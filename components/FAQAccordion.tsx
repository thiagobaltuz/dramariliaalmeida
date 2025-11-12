// components/FAQAccordion.tsx
"use client";

import { useState } from 'react';

interface FAQItem {
  pergunta: string;
  resposta: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={index}
          className="bg-white rounded-2xl border border-black/5 shadow-soft overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-neutral-800 text-lg leading-tight flex-1">
              {item.pergunta}
            </span>
            <svg 
              className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div 
            className={`transition-all duration-300 overflow-hidden ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-5">
              <div className="w-12 h-1 bg-primary/20 rounded-full mb-4"></div>
              <p className="text-neutral-700 leading-relaxed">
                {item.resposta}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}