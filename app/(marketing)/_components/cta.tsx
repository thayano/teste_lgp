import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Cta() {
  return (
    <section className="bg-foreground py-20 text-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Pronto para transformar sua empresa?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg opacity-80">
          Entre em contato e descubra como nossas soluções podem impulsionar seu
          negócio.
        </p>
        <div className="mt-8">
          <Button
            variant="secondary"
            size="lg"
            className="bg-background text-foreground hover:bg-background/90"
          >
            Solicitar orçamento
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
