import { SectionHeader } from '@/components/shared/section-header';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Contact() {
  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Precisa de ajuda? Fale conosco"
          subtitle="Estamos prontos para atender você e encontrar a melhor solução para sua empresa"
        />
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Entre em contato</h3>
              <p className="mt-2 text-muted-foreground">
                Preencha o formulário ao lado ou use um dos nossos canais de
                comunicação para falar diretamente com nossa equipe.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">E-mail</p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Telefone</p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.contact.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Endereço</p>
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.contact.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Nome
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Seu nome"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Assunto
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Como podemos ajudar?"
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium"
                >
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Descreva sua necessidade..."
                  rows={4}
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <Button type="submit" className="w-full">
                Enviar mensagem
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
