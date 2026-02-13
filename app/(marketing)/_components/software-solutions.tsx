import Link from 'next/link';
import { SectionHeader } from '@/components/shared/section-header';
import { getAllProducts } from '@/features/products/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function SoftwareSolutions() {
  const products = getAllProducts();

  return (
    <section id="solucoes-software" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Soluções de Software"
          subtitle="Otimize processos e garanta segurança jurídica com nossa suíte de softwares"
        />
        <div className="mx-auto mt-16 max-w-6xl px-4">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="flex h-full flex-col">
                    <div
                      className={`group flex min-h-[400px] flex-col justify-between rounded-t-xl border border-border/60 bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${product.borderColor}`}
                    >
                      <div>
                        <span
                          className={`mb-4 block text-xs font-bold uppercase tracking-wider ${product.labelColor}`}
                        >
                          {product.name}
                        </span>
                        <h3
                          className={`mb-6 text-2xl font-bold uppercase ${product.labelColor}`}
                        >
                          {product.tagline}
                        </h3>
                      </div>
                      <div className="min-h-[100px]">
                        <p className="mb-8 line-clamp-5 text-sm leading-relaxed text-muted-foreground">
                          {product.shortDescription}
                        </p>
                      </div>
                    </div>
                    <div className={`rounded-b-xl ${product.buttonColor}`}>
                      <Link
                        href={`/solucoes-software/${product.slug}`}
                        className={`block w-full rounded-md py-3 text-center text-sm font-semibold text-white transition-colors ${product.buttonColor}`}
                      >
                        Saiba Mais
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-end gap-2 pr-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
