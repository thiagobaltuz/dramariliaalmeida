import FAQ from "@/components/FAQ";

export default function FAQPage() {
  const faqItems = [
    {
      pergunta: "Há exames incluídos na consulta?",
      resposta: "Os exames não estão incluídos. No entanto, é possível solicitar exames relevantes para o seu quadro antes da consulta, para que você já tenha os resultados no dia do atendimento. Além disso, na clínica oferecemos exame de bioimpedância, terapia de reposição endovenosa, inserção de implantes hormonais e exames avançados, como a metabolômica."
    },
    {
      pergunta: "Quais condições você trata?",
      resposta: "Atendo principalmente mulheres e trato diversas condições, como prevenção de doenças, promoção da saúde, sobrepeso e obesidade, reposição hormonal pós-menopausa, diabetes, distúrbios da tireoide, deficiências hormonais, suplementação esportiva, síndrome dos ovários policísticos (SOP), distúrbios menstruais, osteoporose, sarcopenia, fadiga e reposição de vitaminas."
    },
    {
      pergunta: "Você trabalha com implantes hormonais?",
      resposta: "Sim, após uma avaliação médica, e dependendo da necessidade ou desejo do paciente, podemos optar pela terapia de reposição hormonal ou contracepção utilizando implantes hormonais silásticos ou absorvíveis."
    },
    {
      pergunta: "Com que frequência devo realizar consultas?",
      resposta: "A frequência das consultas depende do tratamento, sendo geralmente entre 60 e 90 dias."
    },
    {
      pergunta: "Posso entrar em contato com você após a consulta?",
      resposta: "Sim, todos os meus pacientes recebem meu contato direto para esclarecer dúvidas e fornecer suporte à distância."
    },
    {
      pergunta: "Quanto tempo demora para conseguir uma consulta?",
      resposta: "Peço que agende sua consulta com pelo menos 2 meses de antecedência. Para casos de urgência, entre em contato com minha equipe, apresentando um encaminhamento médico ou enviando um relato da sua situação, para tentarmos realizar um encaixe o mais breve possível."
    },
    {
      pergunta: "Atende plano de saúde?",
      resposta: "Não trabalho com planos de saúde. No entanto, você pode solicitar o reembolso da consulta com a apresentação da nota fiscal."
    },
    {
      pergunta: "Onde você realiza os atendimentos?",
      resposta: "Atendo presencialmente em São Paulo, no bairro do Itaim. Para pacientes de outros estados, países ou que prefiram essa modalidade, ofereço consultas online com agenda exclusiva."
    },
    {
      pergunta: "Você atende crianças?",
      resposta: "Não, foco meu atendimento em adultos."
    },
    {
      pergunta: "Quanto tempo dura a consulta?",
      resposta: "Tanto as consultas presenciais quanto as online duram, em média, 1 hora."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container max-w-4xl text-center">
          <p className="text-primary uppercase tracking-wider text-sm">FAQ</p>
          <h1 className="mt-2">Perguntas Frequentes</h1>
          <p className="mt-4 text-neutral-700 text-lg max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre consultas, tratamentos e serviços
          </p>
        </div>
      </section>

      {/* Seção FAQ Principal - Direto ao conteúdo */}
      <section className="section">
        <div className="container max-w-4xl">

          <FAQ items={faqItems} />

          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <p className="text-neutral-600 text-lg mb-6">
              Não encontrou resposta para sua dúvida?
            </p>
            <div className="flex justify-center">
              <a href="/contato" className="btn inline-flex">
                Entre em contato
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}