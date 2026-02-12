import { SectionHeader } from '@/components/shared/section-header';
import { testimonials } from '@/features/marketing/data';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Nossas Avaliações"
          subtitle="Veja o que nossos parceiros e clientes dizem sobre nós"
        />

        {/* Spotlight Testimonial */}
        <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center md:p-12">
          <Quote className="mx-auto mb-6 h-12 w-12 text-primary/20" />
          <h3 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
            Conheça o novo parceiro da Lxtec
          </h3>
          <blockquote className="text-xl italic leading-relaxed text-muted-foreground md:text-2xl">
            &ldquo;Conquistei o meu espaço na carreira dentro do ambiente
            tecnológico de Campo Grande.&rdquo;
          </blockquote>
          <div className="mt-8">
            <div className="font-bold text-primary">Hujando Fernando Soilo</div>
            <div className="text-sm text-muted-foreground">Diretor de TI</div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-border/60 bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1 justify-center">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              {/* Quote */}
              <div className="text-center">
                <h4 className="font-semibold mb-2">
                  {testimonial.quote.split('.')[0]}
                </h4>
                <p className="mb-6 text-xs leading-relaxed text-muted-foreground">
                  {testimonial.role} - {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
