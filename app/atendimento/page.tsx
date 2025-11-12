import FeatureStrip from "@/components/FeatureStrip";

// FeatureStrip específico para a página de Atendimento
const atendimentoFeatures = [
  {
    title: "Presencial",
    description: "Consultas com estrutura completa na Vila Mariana, São Paulo."
  },
  {
    title: "Online", 
    description: "Telemedicina de qualidade para todo Brasil e exterior."
  },
  {
    title: "Horários Flexíveis",
    description: "Atendimento de segunda a sábado, com agenda exclusiva."
  },
  {
    title: "Suporte Contínuo",
    description: "Acompanhamento próximo durante todo o tratamento."
  },
];

export default function AtendimentoPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-display">Atendimento</h1>
          <p className="mt-4 text-xl text-neutral-700 max-w-2xl mx-auto">
            Cuidado especializado presencial em São Paulo e consultas online para todo o mundo
          </p>
        </div>
      </section>

      {/* FeatureStrip Personalizado para Atendimento */}
      <FeatureStrip items={atendimentoFeatures} />

      {/* Seção Atendimento Presencial */}
      <section className="section">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary uppercase tracking-wider text-sm">Presencial</p>
              <h2 className="mt-2">Atendimento<br/>Presencial em São Paulo</h2>
              <p className="mt-6 text-neutral-700 leading-relaxed">
                Ofereço consultas presenciais com estrutura completa para diagnóstico 
                e tratamento especializado. Meu consultório está equipado com tecnologia 
                moderna para proporcionar o melhor cuidado endocrinológico.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Consultas Completas</h4>
                    <p className="text-neutral-600 text-sm mt-1">
                      Avaliação detalhada com até 1 hora de duração
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Exames no Local</h4>
                    <p className="text-neutral-600 text-sm mt-1">
                      Bioimpedância e avaliação body composition
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Procedimentos</h4>
                    <p className="text-neutral-600 text-sm mt-1">
                      Aplicação de terapias e implantes hormonais
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-neutral-800 mb-3">Informações do Consultório</h4>
                <div className="space-y-2 text-sm text-neutral-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>Avenida República do Líbano, 2155 - Vila Mariana, São Paulo - SP, 04501-003, BR</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <span>(11) 91219-5500</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Mapa */}
              <div className="rounded-2xl overflow-hidden shadow-soft border border-black/5">
                <div className="aspect-square bg-gray-200 relative">
                  {/* Placeholder do Mapa - Substituir pelo Google Maps real */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-center text-neutral-600">
                      <svg className="w-12 h-12 mx-auto mb-3 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <p className="font-semibold">Mapa da Localização</p>
                      <p className="text-sm mt-1">Consultório - Vila Mariana, São Paulo</p>
                    </div>
                  </div>
                  
                  {/* Mapa Real (Comentado) */}
                  {/*
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.258478216648!2d-46.641302424686!3d-23.586253778784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a1b2e8b3b3d%3A0x4a1df6b9b0b0b0b0!2sAvenida%20Rep%C3%BAblica%20do%20L%C3%ADbano%2C%202155%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004501-003!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                  */}
                </div>
              </div>

              {/* Dicas de Acesso */}
              <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10">
                <h4 className="font-semibold text-primary text-sm mb-2">Como chegar</h4>
                <ul className="text-xs text-neutral-600 space-y-1">
                  <li>• Estacionamento no local</li>
                  <li>• Metrô mais próximo: Estação Vila Mariana (5min)</li>
                  <li>• Ônibus: Linhas 5100, 5170, 575A</li>
                  <li>• Fácil acesso pela Av. 23 de Maio</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Telemedicina */}
      <section className="section bg-gray-50">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-soft border border-black/5">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/10 to-blue-600/5 flex items-center justify-center">
                    <div className="text-center text-neutral-600">
                      <svg className="w-16 h-16 mx-auto mb-4 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"/>
                      </svg>
                      <p className="font-semibold">Plataforma de Telemedicina</p>
                      <p className="text-sm mt-1">Consultas online seguras e de qualidade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="text-primary uppercase tracking-wider text-sm">Online</p>
              <h2 className="mt-2">Telemedicina<br/>Para Todo o Brasil</h2>
              <p className="mt-6 text-neutral-700 leading-relaxed">
                Consultas online com a mesma qualidade e dedicação do atendimento presencial. 
                Ideal para pacientes de outras cidades, países ou para quem prefere a 
                conveniência do atendimento remoto.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Mesma Qualidade</h4>
                    <p className="text-neutral-600 text-sm mt-1">
                      Atendimento completo com 1 hora de duração
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Plataforma Segura</h4>
                    <p className="text-neutral-600 text-sm mt-1">
                      Videochamada criptografada e privada
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Praticidade</h4>
                    <p className="text-neutral-600 text-sm mt-1">
                      Atendimento no conforto da sua casa
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200 shadow-soft">
                <h4 className="font-semibold text-neutral-800 mb-3">Como Funciona</h4>
                <ol className="space-y-3 text-sm text-neutral-600">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">1</span>
                    <span>Agendamento online com confirmação imediata</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">2</span>
                    <span>Receba o link de acesso por email e WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">3</span>
                    <span>Consulta por videochamada na data agendada</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">4</span>
                    <span>Receba prescrições e orientações por email</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-display">Agende Sua Consulta</h2>
          <p className="mt-4 text-neutral-700 text-lg max-w-2xl mx-auto">
            Escolha a modalidade que melhor se adapta à sua necessidade e cuide da sua saúde hormonal
          </p>
          <div className="mt-8 flex justify-center">
            <a href="/contato?tipo=presencial" className="btn inline-flex">
              Agendar Presencial
            </a>
          </div>
        </div>
      </section>
    </>
  );
}