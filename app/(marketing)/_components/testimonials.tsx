import { SectionHeader } from '@/components/shared/section-header';
import { testimonials } from '@/features/marketing/data';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Nossas Avaliações"
          subtitle="Veja o que nossos parceiros e clientes dizem sobre nós"
        />

        {/* Spotlight Testimonial */}
        {/* CEO Section */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <h3 className="mb-8 text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 uppercase">
            CONNECTING YOU TO THE FUTURE
          </h3>

          <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600">
            <div className="relative rounded-[23px] bg-background p-8 md:p-12">
              <div className="mx-auto mb-8 h-24 w-24 overflow-hidden rounded-full border-2 border-primary/20">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80"
                  alt="Uglaybe Fernandes Farias"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>

              <blockquote className="mb-8 text-lg font-medium italic leading-relaxed text-foreground/80 md:text-xl">
                &quot;Construímos nossa empresa de sucesso unindo talento e
                relacionamentos de confiança que geram valor em cada
                conquista.&quot;
              </blockquote>

              <div className="space-y-1">
                <div className="font-bold text-foreground">
                  Uglaybe Fernandes Farias
                </div>
                <div className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  CEO FUNDADOR DA LXTEC
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center rounded-2xl border border-border/60 bg-card p-10 text-center transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <Quote className="absolute left-6 top-6 h-12 w-12 text-primary/10" />

              {/* Stars */}
              <div className="mb-6 flex gap-1 justify-center">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative z-10 w-full">
                <blockquote className="mb-6 text-2xl font-bold leading-tight italic text-foreground">
                  &quot;{testimonial.quote.split('.')[0]}&quot;
                </blockquote>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-lg text-foreground">
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
