import { Button } from '@/components/ui/button';
import { ArrowRight, Handshake, TrendingUp, Users } from 'lucide-react';

export function Representation() {
  return (
    <section id="representacao" className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#1e2124] p-8 shadow-2xl sm:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Column - Illustration Placeholder */}
            <div className="relative flex aspect-square w-full max-w-md items-center justify-center rounded-2xl bg-[#FFFBF0] mx-auto lg:mx-0">
              <div className="relative z-10 grid grid-cols-2 gap-4 p-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg">
                  <Handshake className="h-10 w-10 text-primary" />
                </div>
                <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg">
                  <TrendingUp className="h-10 w-10 text-green-500" />
                </div>
                <div className="-mt-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg">
                  <Users className="h-10 w-10 text-blue-500" />
                </div>
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg">
                  <div className="h-10 w-10 rounded-full bg-orange-100 p-2">
                    <div className="h-full w-full rounded-full bg-orange-500" />
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
            </div>

            {/* Right Column - Content */}
            <div className="text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Programa de Representação
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-400">
                E se sua empresa pudesse levar inovação e tecnologia de ponta
                para o mercado com a sua própria força? Nosso programa de
                representação foi criado para construir parcerias de sucesso,
                oferecendo o suporte e a flexibilidade que você precisa para
                alcançar novos horizontes.
              </p>
              <div className="mt-10">
                <Button
                  size="lg"
                  className="rounded-full bg-[#00C4B4] px-8 text-white hover:bg-[#00C4B4]/90"
                >
                  SAIBA MAIS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
