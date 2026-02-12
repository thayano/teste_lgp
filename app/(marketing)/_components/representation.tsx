import { Button } from '@/components/ui/button';
import { ArrowRight, Handshake } from 'lucide-react';

export function Representation() {
  return (
    <section id="representacao" className="bg-primary/5 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Handshake className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Programa de Representação
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A Lxtec convida você para se tornar o nosso parceiro de negócios.
            Isso quer dizer que você terá o direito exclusivo de vender todos os
            nossos softwares para as empresas da sua região. Junte-se a nós e
            amplie seus lucros com uma parceria estratégica e inovadora.
          </p>
          <div className="mt-10">
            <Button size="lg" className="min-w-[200px]">
              Quero ser parceiro
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
