function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="12" className="text-primary/15" fill="currentColor" />
      <path d="M7 12l3 3 7-7" stroke="currentColor" strokeWidth="2" className="text-primary" />
    </svg>
  );
}

interface FeatureItem {
  title: string;
  description: string;
}

interface FeatureStripProps {
  items?: FeatureItem[];
}

// Configuração padrão (fallback)
const defaultItems: FeatureItem[] = [
  {
    title: "Confiança",
    description: "Tratamento personalizado com foco em resultados reais e duradouros."
  },
  {
    title: "Atenção", 
    description: "Cuidado dedicado e humanizado em cada etapa do tratamento."
  },
  {
    title: "Experiência",
    description: "Mais de 10 anos transformando vidas através da endocrinologia."
  },
  {
    title: "Inovação",
    description: "Terapias modernas e baseadas nas mais recentes evidências científicas."
  },
];

export default function FeatureStrip({ items = defaultItems }: FeatureStripProps) {
  return (
    <section className="overlap-strip">
      <div className="relative">
        <div className="container grid md:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, index) => (
            <div key={index} className="card flex items-start gap-3">
              <Check />
              <div>
                <div className="font-display text-lg text-primary">{item.title}</div>
                <p className="text-sm text-neutral-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block absolute right-8 -bottom-6 h-16 w-16 bg-primary/20 rounded-full" />
      </div>
    </section>
  );
}