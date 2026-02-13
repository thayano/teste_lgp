import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { itServices } from '@/features/marketing/data';

export function generateStaticParams() {
  return itServices.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const service = itServices.find((s) => s.slug === slug);
    if (!service) return {};
    return {
      title: `${service.label || service.title} | LXTec`,
      description: service.detailDescription || service.description,
    };
  });
}

export default async function ITServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = itServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className={`relative overflow-hidden py-24 lg:py-32 ${service.buttonColor?.split(' ')[0] || 'bg-primary'}`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <Link
            href="/#servicos-ti"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Serviços
          </Link>

          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              {service.label}
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="text-lg leading-relaxed text-white/85 sm:text-xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-16 lg:grid-cols-5">
              {/* Description */}
              <div className="lg:col-span-2">
                <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
                  Sobre o Serviço
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {service.detailDescription || service.description}
                </p>
              </div>

              {/* Features */}
              <div className="lg:col-span-3">
                <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
                  O que está incluído
                </h2>
                {service.features && service.features.length > 0 && (
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`mt-0.5 h-5 w-5 shrink-0 ${service.labelColor || 'text-primary'}`}
                        />
                        <span className="text-sm leading-relaxed text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Interessado em {service.label || service.title}?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Fale com nossa equipe de especialistas e descubra como podemos
            transformar a infraestrutura da sua empresa.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className={`min-w-[200px] ${service.buttonColor || ''}`}
              asChild
            >
              <Link href="/#contato">
                Fale com um Consultor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/#servicos-ti">Ver todos os serviços</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
