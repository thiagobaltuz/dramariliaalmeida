// components/FAQ.tsx
interface FAQItem {
    pergunta: string;
    resposta: string;
  }
  
  interface FAQProps {
    items: FAQItem[];
  }
  
  export default function FAQ({ items }: FAQProps) {
    return (
      <div className="space-y-6">
        {items.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-2xl p-6 border border-black/5 shadow-soft hover:shadow-medium transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-neutral-800 text-lg leading-tight">
                  {item.pergunta}
                </h3>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-neutral-700 leading-relaxed">
                    {item.resposta}
                  </p>
                </div>
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold text-sm">?</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }