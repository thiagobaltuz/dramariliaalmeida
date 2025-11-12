// components/AboutBlocks.tsx
"use client";

import { useState } from 'react';

function VideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative bg-white rounded-xl max-w-4xl w-full mx-4">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="aspect-video bg-black rounded-t-xl">
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-lg">Vídeo de apresentação da Dra. Marília</p>
              <p className="text-sm text-gray-300 mt-2">Duração: 2 minutos</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white rounded-b-xl">
          <h3 className="font-display text-xl text-primary mb-2">
            Dra. Marília Almeida - Endocrinologista
          </h3>
          <p className="text-neutral-600">
            Conheça minha abordagem e como posso ajudar você a alcançar melhor qualidade de vida 
            através do cuidado hormonal especializado.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutBlocks() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      {/* PRIMEIRA SECTION - ESPAÇAMENTO REDUZIDO */}
      <section className="py-12"> {/* Reduzido de py-16 para py-12 */}
        <div className="container grid md:grid-cols-2 gap-6 items-start"> {/* gap-8 → gap-6 */}
          <div>
            <p className="text-primary uppercase tracking-wider text-sm">Sobre mim</p>
            <h2 className="mt-2">Conheça Minha<br/>Jornada na<br/>Endocrinologia<br/>e Saúde</h2>
            <p className="mt-3 text-neutral-700 leading-relaxed"> {/* mt-4 → mt-3 */}
            Olá! Sou Marília Almeida, endocrinologista com uma paixão especial por cuidar da saúde hormonal e do bem-estar das pessoas. Nascida e criada em Santos, fiz faculdade de Medicina na UFSCAR (Universidade Federal de São Carlos), residência de Clínica Médica e Endocrinologia e Metabologia no IAMSPE (Instituto de Assistência Médica ao Servidor Público Estadual). Meu objetivo é ajudar você a conquistar uma vida com mais qualidade, energia e vitalidade, focando em um envelhecimento saudável e com autonomia.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -left-4 top-6 h-[85%] w-14 bg-primary/35 rounded-sm -z-10" /> {/* Ajustado left e top */}
            
            {/* ÁREA DO VÍDEO - ESPAÇAMENTO AINDA MAIS REDUZIDO */}
            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 mb-3"> {/* p-4 → p-3 */}
              <h3 className="font-display text-base text-primary mb-2 text-center"> {/* text-lg → text-base */}
                Conheça melhor meu trabalho
              </h3>
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/20 cursor-pointer hover:bg-primary/10 transition"
                   onClick={() => setIsVideoModalOpen(true)}>
                <div className="text-center">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-1">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-xs text-neutral-600 mb-1">
                    Vídeo de apresentação
                  </p>
                  <div className="px-2 py-1 bg-primary text-white rounded text-xs font-medium hover:bg-primary/90 transition inline-flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Assistir
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal do Vídeo */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />

      {/* SEGUNDA SECTION - ESPAÇAMENTO REDUZIDO E IMAGEM INSERIDA */}
      <section className="py-8"> {/* py-12 → py-8 */}
        <div className="container grid md:grid-cols-2 gap-6 items-center"> {/* gap-8 → gap-6 */}
          <div className="relative">
            {/* IMAGEM DA DRA. MARÍLIA ALMEIDA - SUBSTITUINDO O PLACEHOLDER */}
            <img 
              src="https://dramariliaalmeida.med.br/wp-content/uploads/elementor/thumbs/img-sobre-mim-dra-qvd6api1fwvozzd2z835jp5eb74qh3mejn4z7sz6fs.webp" // ATUALIZAR COM FOTO REAL
              alt="Dra. Marília Almeida no consultório" 
              className="rounded-xl w-full object-cover shadow-sm"
            />
          </div>
          <div>
            <p className="text-primary uppercase tracking-wider text-sm">Cuidar com</p>
            <h2 className="mt-2">Especialista em Saúde<br/>Hormonal e Bem-Estar<br/>Duradouro</h2>
            <p className="mt-3 text-neutral-700 leading-relaxed"> {/* mt-4 → mt-3 */}
              Meu compromisso é oferecer um atendimento personalizado, adaptado às suas necessidades e estilo de vida. E meu trabalho é prevenir e tratar questões hormonais para que você possa viver com mais disposição e confiança.
            </p>
            <a href="/sobre" className="btn mt-4 inline-flex">Conheça mais</a>
          </div>
        </div>
      </section>
    </>
  );
}