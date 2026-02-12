import Image from 'next/image';

export function About() {
  return (
    <section id="sobre" className="py-24">
      <div className="container mx-auto px-4">
        {/* Quem Somos */}
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row mb-24">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Quem Somos?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Somos uma empresa de soluções e HMC (Hospedada totalmente em Campo
              Grande - MS), fundada em 2011. Nossa missão é simplificar e
              democratizar o acesso à tecnologia.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Nosso propósito é ajudar as organizações e pessoas a alcançarem
              seu potencial máximo, fornecendo ferramentas e soluções inovadoras
              e confiáveis que simplificam processos, aumentam a produtividade e
              promovem o crescimento sustentável e responsável.
            </p>
          </div>
          <div className="relative w-full lg:w-1/2">
            <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                alt="Equipe trabalhando em ambiente corporativo moderno"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Visão e Propósito */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-card p-8">
              <h3 className="mb-4 text-xl font-bold">Visão</h3>
              <p className="text-muted-foreground">
                Tornar as soluções de tecnologia tão simples e intuitivas que
                qualquer pessoa ou organização possa utilizá-las sem
                dificuldade.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-8">
              <h3 className="mb-4 text-xl font-bold">Propósito</h3>
              <p className="text-muted-foreground">
                Capacitar empresas e indivíduos a transformarem seus desafios em
                oportunidades, integrando tecnologia, estratégia e processos de
                forma eficiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
