import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] items-center justify-center bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Transformação digital{' '}
          <span className="text-primary">para sua empresa</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Soluções completas em tecnologia da informação, processos e software
          para impulsionar o crescimento do seu negócio.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg">
            Fale conosco
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            Nossos serviços
          </Button>
        </div>
      </div>
    </section>
  );
}
