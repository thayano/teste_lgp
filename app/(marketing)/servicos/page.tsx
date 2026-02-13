import Link from 'next/link';
import {
  HeartHandshake,
  Server,
  ShieldCheck,
  CloudUpload,
  ArrowRight,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { allServices } from '@/features/marketing/services-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serviços | LXTec',
  description:
    'Tecnologia sob medida para transformar desafios em soluções. Conheça todos os serviços da LXTec.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HeartHandshake,
  Server,
  ShieldCheck,
  CloudUpload,
};

export default function ServicosPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-28 lg:py-36">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/8 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[100px]" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
              <Zap className="h-4 w-4 text-cyan-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                Nossos Serviços
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tecnologia sob medida para{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                transformar desafios
              </span>{' '}
              em soluções.
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300/90 sm:text-xl">
              Na Lxtec, acreditamos que cada empresa tem desafios únicos e
              merece soluções personalizadas. Somos especialistas em
              desenvolver, implementar e administrar tecnologias que impulsionam
              eficiência, promovem crescimento sustentável e simplificam
              processos.
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className="py-24 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl space-y-16">
            {allServices.map((service, index) => {
              const Icon = iconMap[service.icon] || HeartHandshake;
              const isReversed = index % 2 !== 0;

              return (
                <div
                  key={service.id}
                  className="group overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-500 hover:border-border hover:shadow-xl hover:shadow-primary/5"
                >
                  <div
                    className={`grid gap-0 lg:grid-cols-2 ${isReversed ? 'lg:grid-flow-dense' : ''}`}
                  >
                    {/* Icon / Visual Area */}
                    <div
                      className={`relative flex items-center justify-center bg-gradient-to-br ${service.color} p-12 lg:p-16 ${isReversed ? 'lg:col-start-2' : ''}`}
                    >
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
                      <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/5 blur-3xl" />
                      <div className="relative">
                        <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 sm:h-32 sm:w-32">
                          <Icon className="h-14 w-14 text-white sm:h-16 sm:w-16" />
                        </div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div
                      className={`flex flex-col justify-center p-8 lg:p-12 ${isReversed ? 'lg:col-start-1' : ''}`}
                    >
                      <span
                        className={`mb-3 text-xs font-bold uppercase tracking-widest ${service.labelColor}`}
                      >
                        Serviço {String(index + 1).padStart(2, '0')}
                      </span>
                      <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                        {service.name}
                      </h2>
                      <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {service.description}
                      </p>

                      {/* Feature pills */}
                      <div className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle2
                              className={`h-4 w-4 shrink-0 ${service.labelColor}`}
                            />
                            <span className="text-xs text-muted-foreground sm:text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div>
                        <Button
                          className={`${service.buttonColor} text-white`}
                          asChild
                        >
                          <Link href={`/servicos-ti/${service.slug}`}>
                            Saiba mais
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Pronto para transformar a TI da sua empresa?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Fale com nossa equipe de especialistas e descubra como nossos
            serviços podem impulsionar a eficiência do seu negócio.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="min-w-[200px] bg-primary hover:bg-primary/90"
              asChild
            >
              <Link href="/#contato">
                Fale com um Consultor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/">Voltar ao início</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
