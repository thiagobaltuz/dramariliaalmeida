export default function Testimonials() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-primary uppercase tracking-wider text-sm">Avaliações</p>
          <h2 className="mt-2">Depoimentos<br/>dos Pacientes</h2>
          <p className="mt-3 text-neutral-700 max-w-md">
            Breve intro para a sessão de reviews.
          </p>
          <a href="/contato" className="btn mt-6 inline-flex">Agende agora</a>
        </div>

        <div className="rounded-2xl p-8 bg-[url('/images/pattern-topo.png')] bg-soft bg-blend-multiply border border-black/5 shadow-soft min-h-[360px]">
          <p className="text-lg leading-relaxed">
            “Depoimento de exemplo… Ajuste esse texto para o depoimento real da paciente, incluindo detalhes e experiência.”
          </p>
          <div className="mt-6 font-semibold">Paciente satisfeita</div>
          <div className="text-primary mt-2">★★★★★</div>
        </div>
      </div>
    </section>
  );
}
