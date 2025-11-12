import FeatureStrip from "@/components/FeatureStrip";

// FeatureStrip específico para a página de Especialidades
const especialidadesFeatures = [
  {
    title: "Medicina Hormonal",
    description: "Tratamentos personalizados para equilíbrio hormonal em todas as fases da vida."
  },
  {
    title: "Emagrecimento", 
    description: "Abordagem completa para perda de peso saudável e manutenção dos resultados."
  },
  {
    title: "Longevidade",
    description: "Prevenção e otimização da saúde para uma vida longa e com qualidade."
  },
  {
    title: "Saúde da Mulher",
    description: "Cuidado especializado em todas as fases da vida feminina."
  },
];

export default function EspecialidadesPage() {
  const especialidades = [
    {
      titulo: "Medicina Hormonal",
      icone: "🧬",
      descricao: "Tratamento especializado para equilíbrio hormonal em todas as fases da vida da mulher.",
      detalhes: [
        "Reposição hormonal bioidêntica",
        "Terapia de modulação hormonal",
        "Tratamento da menopausa e andropausa",
        "Distúrbios da tireoide",
        "Síndrome dos ovários policísticos (SOP)"
      ],
      imagem: "/images/especialidade-hormonal.jpg",
      cor: "from-purple-500/10 to-pink-500/10"
    },
    {
      titulo: "Emagrecimento e Metabolismo",
      icone: "⚖️",
      descricao: "Abordagem completa para perda de peso saudável e manutenção dos resultados.",
      detalhes: [
        "Tratamento da obesidade e sobrepeso",
        "Aceleração do metabolismo",
        "Controle de compulsão alimentar",
        "Bioimpedância e composição corporal",
        "Planos alimentares personalizados"
      ],
      imagem: "/images/especialidade-emagrecimento.jpg",
      cor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      titulo: "Longevidade e Medicina Antienvelhecimento",
      icone: "🔬",
      descricao: "Prevenção e tratamento focados em saúde, vitalidade e qualidade de vida prolongada.",
      detalhes: [
        "Medicina preventiva e preditiva",
        "Otimização da saúde celular",
        "Prevenção de doenças crônicas",
        "Terapias regenerativas",
        "Rastreamento de marcadores de envelhecimento"
      ],
      imagem: "/images/especialidade-longevidade.jpg",
      cor: "from-green-500/10 to-emerald-500/10"
    },
    {
      titulo: "Saúde da Mulher 40+",
      icone: "🏋️‍♀️",
      descricao: "Cuidado especializado para a mulher na perimenopausa, menopausa e pós-menopausa.",
      detalhes: [
        "Transição da menopausa",
        "Prevenção da osteoporose",
        "Controle de sintomas vasomotores",
        "Saúde sexual e libido",
        "Manejo do ganho de peso metabólico"
      ],
      imagem: "/images/especialidade-mulher-40.jpg",
      cor: "from-red-500/10 to-orange-500/10"
    },
    {
      titulo: "Nutrição e Suplementação Esportiva",
      icone: "🥗",
      descricao: "Otimização do desempenho físico e recuperação através da nutrição estratégica.",
      detalhes: [
        "Suplementação personalizada",
        "Nutrição para performance",
        "Recuperação muscular",
        "Otimização de treinos",
        "Prescrição de nutracêuticos"
      ],
      imagem: "/images/especialidade-nutricao.jpg",
      cor: "from-yellow-500/10 to-amber-500/10"
    },
    {
      titulo: "Medicina Personalizada",
      icone: "📊",
      descricao: "Abordagem individualizada baseada em genética, metabolismo e estilo de vida único.",
      detalhes: [
        "Avaliação metabólica completa",
        "Testes genéticos aplicados",
        "Metabolômica e marcadores avançados",
        "Planos de tratamento únicos",
        "Acompanhamento contínuo e ajustes"
      ],
      imagem: "/images/especialidade-personalizada.jpg",
      cor: "from-indigo-500/10 to-violet-500/10"
    }
  ];

  const tratamentosDestaque = [
    {
      titulo: "Reposição Hormonal Bioidêntica",
      descricao: "Hormônios idênticos aos produzidos pelo corpo, com dosagens personalizadas para cada paciente."
    },
    {
      titulo: "Implantes Hormonais",
      descricao: "Terapia de longa duração com implantes subdérmicos para liberação constante e controlada."
    },
    {
      titulo: "Terapia Endovenosa",
      descricao: "Reposição de vitaminas e minerais via intravenosa para máxima absorção e eficácia."
    },
    {
      titulo: "Modulação Neuroendocrine",
      descricao: "Equilíbrio do eixo hormonal cerebral para melhora do humor, energia e qualidade do sono."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-display">Especialidades</h1>
          <p className="mt-4 text-xl text-neutral-700 max-w-3xl mx-auto">
            Cuidado endocrinológico completo e personalizado para cada fase da sua vida, 
            unindo o que há de mais moderno em medicina com abordagem humanizada
          </p>
        </div>
      </section>

      {/* FeatureStrip Personalizado para Especialidades */}
      <FeatureStrip items={especialidadesFeatures} />

      {/* Seção Principal de Especialidades */}
      <section className="section">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-wider text-sm">Áreas de Atuação</p>
            <h2 className="mt-2">Especialidades e Abordagens</h2>
            <p className="mt-4 text-neutral-700 max-w-2xl mx-auto">
              Desenvolvo tratamentos personalizados baseados em evidências científicas 
              para promover saúde, bem-estar e qualidade de vida
            </p>
          </div>

          {/* Grid de Especialidades */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {especialidades.map((especialidade, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-6 border border-black/5 shadow-soft hover:shadow-hard transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${especialidade.cor} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {especialidade.icone}
                </div>
                
                <h3 className="text-xl font-display text-neutral-800 mb-3">
                  {especialidade.titulo}
                </h3>
                
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {especialidade.descricao}
                </p>
                
                <ul className="space-y-2">
                  {especialidade.detalhes.map((detalhe, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                      <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span>{detalhe}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Tratamentos em Destaque */}
      <section className="section bg-gray-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-primary uppercase tracking-wider text-sm">Tratamentos</p>
            <h2 className="mt-2">Abordagens Terapêuticas</h2>
            <p className="mt-4 text-neutral-700 max-w-2xl mx-auto">
              Utilizo as mais modernas técnicas e tecnologias para oferecer tratamentos 
              eficazes e seguros
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tratamentosDestaque.map((tratamento, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-black/5 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-neutral-800 mb-2">
                      {tratamento.titulo}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {tratamento.descricao}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Abordagem Personalizada */}
      <section className="section">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary uppercase tracking-wider text-sm">Metodologia</p>
              <h2 className="mt-2">Abordagem Personalizada e Humanizada</h2>
              <p className="mt-6 text-neutral-700 leading-relaxed">
                Acredito que cada paciente é único e merece um tratamento tailored às suas 
                necessidades específicas. Minha abordagem combina:
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Avaliação Completa</h4>
                    <p className="text-neutral-600 text-sm mt-1">
                      Análise detalhada do histórico, exames e metas individuais
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Plano Individual</h4>
                    <p className="text-neutral-600 text-sm mt-1">
                      Estratégia de tratamento única baseada nas suas necessidades
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-800">Acompanhamento Contínuo</h4>
                    <p className="text-neutral-600 text-sm mt-1">
                      Ajustes regulares e suporte próximo durante todo o tratamento
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/10">
                <h3 className="font-display text-xl text-primary mb-4">
                  Condições Tratadas
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    "Menopausa", "Andropausa", "Obesidade", "Diabetes",
                    "Hipotireoidismo", "Hipertireoidismo", "SOP", "Osteoporose",
                    "Fadiga Crônica", "Compulsão Alimentar", "Distúrbios Menstruais",
                    "Deficiência de Vitaminas"
                  ].map((condicao, index) => (
                    <div key={index} className="flex items-center gap-2 text-neutral-700">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{condicao}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section bg-gray-50">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-display">Comece Sua Jornada de Saúde</h2>
          <p className="mt-4 text-neutral-700 text-lg max-w-2xl mx-auto">
            Agende uma consulta e descubra como posso ajudar você a alcançar 
            seu melhor estado de saúde e bem-estar
          </p>
          <div className="mt-8 flex justify-center">
            <a href="/contato" className="btn inline-flex">
              Agendar Consulta
            </a>
          </div>
        </div>
      </section>
    </>
  );
}