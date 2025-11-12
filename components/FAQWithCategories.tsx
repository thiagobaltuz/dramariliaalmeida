// components/FAQWithCategories.tsx
"use client";

import { useState } from 'react';

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQWithCategories() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('consultas');

  const faqCategories: FAQCategory[] = [
    {
      title: 'Consultas e Agendamento',
      items: [
        {
          question: "Quanto tempo demora para conseguir uma consulta?",
          answer: "Peço que agende sua consulta com pelo menos 2 meses de antecedência. Para casos de urgência, entre em contato com minha equipe, apresentando um encaminhamento médico ou enviando um relato da sua situação, para tentarmos realizar um encaixe o mais breve possível."
        },
        {
          question: "Quanto tempo dura a consulta?",
          answer: "Tanto as consultas presenciais quanto as online duram, em média, 1 hora."
        },
        {
          question: "Com que frequência devo realizar consultas?",
          answer: "A frequência das consultas depende do tratamento, sendo geralmente entre 60 e 90 dias."
        }
      ]
    },
    {
      title: 'Tratamentos e Serviços',
      items: [
        {
          question: "Quais condições você trata?",
          answer: "Atendo principalmente mulheres e trato diversas condições, como prevenção de doenças, promoção da saúde, sobrepeso e obesidade, reposição hormonal pós-menopausa, diabetes, distúrbios da tireoide, deficiências hormonais, suplementação esportiva, síndrome dos ovários policísticos (SOP), distúrbios menstruais, osteoporose, sarcopenia, fadiga e reposição de vitaminas."
        },
        {
          question: "Você trabalha com implantes hormonais?",
          answer: "Sim, após uma avaliação médica, e dependendo da necessidade ou desejo do paciente, podemos optar pela terapia de reposição hormonal ou contracepção utilizando implantes hormonais silásticos ou absorvíveis."
        },
        {
          question: "Há exames incluídos na consulta?",
          answer: "Os exames não estão incluídos. No entanto, é possível solicitar exames relevantes para o seu quadro antes da consulta, para que você já tenha os resultados no dia do atendimento. Além disso, na clínica oferecemos exame de bioimpedância, terapia de reposição endovenosa, inserção de implantes hormonais e exames avançados, como a metabolômica."
        }
      ]
    },
    {
      title: 'Atendimento e Suporte',
      items: [
        {
          question: "Posso entrar em contato com você após a consulta?",
          answer: "Sim, todos os meus pacientes recebem meu contato direto para esclarecer dúvidas e fornecer suporte à distância."
        },
        {
          question: "Onde você realiza os atendimentos?",
          answer: "Atendo presencialmente em São Paulo, no bairro do Itaim. Para pacientes de outros estados, países ou que prefiram essa modalidade, ofereço consultas online com agenda exclusiva."
        },
        {
          question: "Atende plano de saúde?",
          answer: "Não trabalho com planos de saúde. No entanto, você pode solicitar o reembolso da consulta com a apresentação da nota fiscal."
        },
        {
          question: "Você atende crianças?",
          answer: "Não, foco meu atendimento em adultos."
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentCategory = faqCategories.find(cat => 
    cat.title.toLowerCase().includes(activeCategory)
  ) || faqCategories[0];

  return (
    <section className="section bg-gray-50">
      <div className="container max-w-6xl">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <p className="text-primary uppercase tracking-wider text-sm font-medium">FAQ</p>
          <h2 className="mt-2">Perguntas Frequentes</h2>
          <p className="mt-4 text-neutral-700 text-lg max-w-2xl mx-auto">
            Tem alguma dúvida sobre nossos serviços ou tratamentos?
          </p>
        </div>

        {/* Categorias */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {faqCategories.map((category, index) => (
            <button
              key={category.title}
              onClick={() => setActiveCategory(category.title.toLowerCase())}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.title.toLowerCase()
                  ? 'bg-primary text-white shadow-soft'
                  : 'bg-white text-neutral-700 border border-gray-200 hover:border-primary/30'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Lista de FAQs */}
        <div className="space-y-4">
          {currentCategory.items.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-soft overflow-hidden transition-all duration-200 hover:shadow-medium"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-neutral-800 text-lg leading-tight">
                  {item.question}
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
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-neutral-600 mb-6">
            Não encontrou resposta para sua dúvida?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contato" className="btn inline-flex">
              Entre em contato
            </a>
            <a href="/blog" className="btn-outline inline-flex">
              Ver artigos no blog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}