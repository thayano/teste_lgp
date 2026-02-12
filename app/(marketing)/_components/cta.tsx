import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
      {/* Decorative elements */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Cada desafio tem a solução certa!
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
          Vamos encontrar a sua?
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="min-w-[200px] bg-white text-primary hover:bg-white/90"
          >
            Solicitar orçamento
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="min-w-[200px] border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            Saiba mais
          </Button>
        </div>
      </div>
    </section>
  );
}
