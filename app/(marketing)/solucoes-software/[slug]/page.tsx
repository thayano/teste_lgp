import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAllProducts, getProductBySlug } from '@/features/products/utils';

export function generateStaticParams() {
  return getAllProducts().map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return params.then(({ slug }) => {
    const product = getProductBySlug(slug);
    if (!product) return {};
    return {
      title: `${product.name} | LXTec`,
      description: product.shortDescription,
    };
  });
}

export default async function SoftwareDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className={`relative overflow-hidden py-24 lg:py-32 ${product.buttonColor?.split(' ')[0] || 'bg-primary'}`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <Link
            href="/#solucoes-software"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Soluções
          </Link>

          <div className="max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              {product.name}
            </span>
            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {product.tagline}
            </h1>
            <p className="text-lg leading-relaxed text-white/85 sm:text-xl">
              {product.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Visão Geral Section */}
      {product.highlightTitle && product.highlightDescription && (
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 backdrop-blur-sm">
                <Sparkles className={`h-4 w-4 ${product.labelColor}`} />
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${product.labelColor}`}
                >
                  Destaque
                </span>
              </div>
              <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl">
                {product.highlightTitle}
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {product.highlightDescription}
              </p>
            </div>

            {/* Main Product Image */}
            {product.mainImage && (
              <div className="mx-auto mt-14 max-w-4xl">
                <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted/20 p-6 shadow-sm">
                  <Image
                    src={product.mainImage}
                    alt={`${product.name} - Visão principal`}
                    width={900}
                    height={550}
                    className="h-auto w-full rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Feature Cards Section */}
      {product.features && product.features.length > 0 && (
        <section className="border-y border-border/40 bg-muted/20 py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Funcionalidades
              </h2>
              <p className="mx-auto mb-14 max-w-xl text-base text-muted-foreground">
                Conheça os principais recursos que tornam o {product.name} uma
                solução completa.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {product.features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-primary/5"
                >
                  <div
                    className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted/60 ${product.labelColor}`}
                  >
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sobre a Solução Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Text content */}
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/50 px-4 py-1.5">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${product.labelColor}`}
                  >
                    Sobre a Solução
                  </span>
                </div>
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  Tudo que o {product.name} oferece
                </h2>
                <div className="space-y-4">
                  {product.fullDescription
                    .split('. ')
                    .filter((s) => s.trim().length > 0)
                    .map((sentence, index) => (
                      <p
                        key={index}
                        className="text-base leading-relaxed text-muted-foreground"
                      >
                        {sentence.trim().endsWith('.')
                          ? sentence.trim()
                          : `${sentence.trim()}.`}
                      </p>
                    ))}
                </div>
              </div>

              {/* Secondary Image */}
              {product.secondaryImage && (
                <div className="lg:sticky lg:top-24">
                  <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted/20 p-6 shadow-sm">
                    <Image
                      src={product.secondaryImage}
                      alt={`${product.name} - Visão detalhada`}
                      width={700}
                      height={450}
                      className="h-auto w-full rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Quer saber mais sobre o {product.name}?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Entre em contato com nossa equipe e solicite uma demonstração
            personalizada.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className={`min-w-[200px] ${product.buttonColor || ''}`}
              asChild
            >
              <Link href="/#contato">
                Solicite uma Demonstração
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/#solucoes-software">Ver todas as soluções</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
