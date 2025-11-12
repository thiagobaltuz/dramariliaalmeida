// components/VideoModal.tsx
"use client";

import { useState, useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Fechar modal com ESC key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Previne scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Fechar modal ao clicar no backdrop
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-white rounded-xl max-w-4xl w-full mx-auto shadow-2xl">
        {/* Botão Fechar */}
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-transform hover:scale-110 z-10"
          aria-label="Fechar vídeo"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Área do Vídeo */}
        <div className="aspect-video bg-black rounded-t-xl relative">
          {!videoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-t-xl">
              <div className="text-center text-white">
                <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4 mx-auto"></div>
                <p className="text-sm">Carregando vídeo...</p>
              </div>
            </div>
          )}
          
          <video 
            className={`w-full h-full rounded-t-xl object-cover ${videoLoaded ? 'block' : 'invisible'}`}
            controls 
            autoPlay
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            poster="/images/video-thumbnail.jpg"
          >
            <source src="/videos/apresentacao-dra-marilia.mp4" type="video/mp4" />
            <source src="/videos/apresentacao-dra-marilia.webm" type="video/webm" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
        
        {/* Descrição do Vídeo */}
        <div className="p-6 bg-white rounded-b-xl border-t border-gray-100">
          <h3 className="font-display text-xl text-primary mb-2">
            Dra. Marília Almeida - Endocrinologista
          </h3>
          <p className="text-neutral-600 leading-relaxed">
            Conheça minha abordagem e como posso ajudar você a alcançar melhor qualidade de vida 
            através do cuidado hormonal especializado. Mais de 10 anos de experiência em 
            tratamentos personalizados e baseados em evidências científicas.
          </p>
        </div>
      </div>
    </div>
  );
}