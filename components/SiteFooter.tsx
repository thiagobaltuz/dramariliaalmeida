export default function SiteFooter() {
  return (
    <footer className="bg-[#0F0F0F] text-white">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <img src="/images/logo-invert.svg" alt="" className="h-6 w-auto" />
          <p className="mt-3 text-sm text-white/70">
          CRM 176471 | RQE 93002
          </p>
        </div>
        <div className="text-sm space-y-2">
          <div>Endereço da clínica: Avenida República do Líbano, 2155 - Vila Mariana, São Paulo - SP, 04501-003, BR</div>
          <div>Telefone e WhatsApp: (11) 91219-5500</div>
        </div>
        <div className="text-sm space-y-2">
          <a href="/politica-de-privacidade" className="underline underline-offset-4">Política de Privacidade</a><br/>
          <a href="/termos-de-uso" className="underline underline-offset-4">Termos de Uso</a><br/>
          <a href="/cookies" className="underline underline-offset-4">Cookies</a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-4 text-xs text-white/60">© {new Date().getFullYear()} Dra. Marília Almeida.</div>
      </div>
    </footer>
  );
}
