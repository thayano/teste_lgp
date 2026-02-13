import { SectionHeader } from '@/components/shared/section-header';
import { testimonials } from '@/features/marketing/data';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-background py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Nossas Avaliações"
          subtitle="Veja o que nossos parceiros e clientes dizem sobre nós"
        />

        <div className="mx-auto mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md dark:bg-slate-900/50 dark:shadow-none"
            >
              <div>
                <Quote className="mb-6 h-8 w-8 text-blue-500" />

                <blockquote className="mb-6 text-xl font-medium leading-snug text-slate-900 dark:text-slate-100">
                  {testimonial.quote}
                </blockquote>
              </div>

              <div>
                {/* Stars */}
                <div className="mb-2 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <div className="flex flex-col">
                  <span className="font-medium text-slate-900 dark:text-slate-300">
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-32 max-w-4xl text-center">
          <h3 className="mb-8 text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 uppercase">
            CONNECTING YOU TO THE FUTURE
          </h3>

          <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600">
            <div className="relative rounded-[23px] bg-white p-8 dark:bg-slate-900 md:p-12">
              <div className="mx-auto mb-8 h-24 w-24 overflow-hidden rounded-full border-2 border-primary/20">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80"
                  alt="Uglaybe Fernandes Farias"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>

              <blockquote className="mb-8 text-lg font-medium italic leading-relaxed text-foreground/80 md:text-sm">
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
      </div>
    </section>
  );
}
