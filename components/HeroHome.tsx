export default function HeroHome() {
  return (
    <section className="relative h-[86vh] min-h-[680px] flex items-center">
      <div className="absolute inset-0">
        <img src="/images/hero.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="container relative text-white pt-10">
        <h1>Saúde e<br/>Bem-Estar</h1>
        <p className="mt-4 max-w-[640px] text-white/90 text-base md:text-lg">
          Atendimento especializado para cuidar da sua saúde hormonal e promover qualidade de vida.
        </p>
        <div className="mt-7 flex gap-3">
          <a href="/contato" className="btn">Agende agora</a>
          <a href="/telemedicina" className="btn-outline">Telemedicina</a>
        </div>
      </div>

      {/* overlapped feature strip handled in next section */}
    </section>
  );
}
