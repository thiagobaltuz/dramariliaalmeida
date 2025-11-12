export default function ConteudoStrip() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          {/* Título principal */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Conteúdo Exclusivo
          </h2>
          
          {/* Descrição */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Acesse materiais educativos, artigos e canais de comunicação 
            para cuidar da sua saúde hormonal com informação de qualidade.
          </p>
          
          {/* Botão centralizado */}
          <div className="flex justify-center">
            <a
              href="/conteudo"
              className="bg-[#8a2d4a] hover:bg-[#7a2540] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
            >
              Acessar Conteúdo
              <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}