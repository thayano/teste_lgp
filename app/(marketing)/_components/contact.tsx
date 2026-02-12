import { SectionHeader } from '@/components/shared/section-header';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Contato"
          subtitle="Entre em contato conosco para saber mais sobre nossas soluções"
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">E-mail</h3>
                <p className="text-sm text-muted-foreground">
                  contato@lxtec.com.br
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Telefone</h3>
                <p className="text-sm text-muted-foreground">(00) 0000-0000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Endereço</h3>
                <p className="text-sm text-muted-foreground">
                  Sua cidade, Estado
                </p>
              </div>
            </div>
          </div>

          {/* Form placeholder */}
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              rows={4}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
