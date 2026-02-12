import Image from 'next/image';
import { partners } from '@/features/marketing/data';
import { Building2 } from 'lucide-react';

export function Partners() {
  return (
    <section className="border-y border-border/40 bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            {/* Image */}
            <div className="relative w-full md:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&q=80"
                  alt="Equipe profissional em reunião de negócios"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Text */}
            <div className="w-full text-center md:w-1/2 md:text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Estamos prontos para ajudar
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Nossa equipe utiliza as melhores tecnologias do mercado para
                entregar soluções robustas e escaláveis para o seu negócio.
              </p>
            </div>
          </div>

          {/* Partner/Tech Logos */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center gap-2 text-muted-foreground/60 transition-colors hover:text-muted-foreground"
              >
                <Building2 className="h-5 w-5" />
                <span className="text-sm font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
