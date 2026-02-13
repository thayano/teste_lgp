import Image from 'next/image';
import { Code2, Settings, Cloud, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CustomSolutions() {
  return (
    <section id="solucoes-sob-medida" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row-reverse">
          {/* Left - Text Content */}
          <div className="w-full lg:w-1/2">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
              Desenvolvimento Personalizado
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Soluções sob medida que conectam{' '}
              <span className="text-primary">
                tecnologia, estratégia e processos
              </span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Desenvolvemos soluções específicas que se adequam à estratégia e
              eficiência para sua empresa. Conte com uma equipe multidisciplinar
              para garantir que sua empresa transforme tecnologia em um aliado.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="flex items-center gap-3 rounded-lg border border-border/60 bg-card p-4">
                <Code2 className="h-6 w-6 text-primary" />
                <span className="font-medium">Software Sob Medida</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border/60 bg-card p-4">
                <Settings className="h-6 w-6 text-primary" />
                <span className="font-medium">Integrações Complexas</span>
              </div>
            </div>

            <div className="mt-8">
              <Button className="min-w-[160px]">
                Fale com um consultor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-bl from-primary/20 to-primary/5" />
              <Image
                src="/banner_ok.avif"
                alt="Desenvolvimento de software sob medida"
                fill
                className="rounded-2xl object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Floating icon */}
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl bg-card p-4 shadow-xl flex items-center justify-center border border-border/50">
                <Cloud className="h-10 w-10 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
