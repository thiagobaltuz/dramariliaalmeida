export default function ServicesGrid() {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary uppercase tracking-wider text-sm font-medium">Nossos Serviços</p>
          <h2 className="mt-2">Cuidados Especializados em Endocrinologia</h2>
          <p className="mt-4 text-neutral-700 text-lg">
            Descubra nossas especialidades e encontre o tratamento perfeito para suas necessidades de saúde hormonal
          </p>

          {/* CTA Principal */}
          <div className="mt-8 flex justify-center">
            <a href="/especialidades" className="btn inline-flex text-lg px-8 py-4">
              Explorar Especialidades
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}