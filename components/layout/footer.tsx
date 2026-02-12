import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  {
    title: 'Produtos',
    links: [
      { label: 'Gestão de Processos', href: '#solucoes-software' },
      { label: 'Assinatura Digital', href: '#solucoes-software' },
      { label: 'Gestão de Documentos', href: '#solucoes-software' },
    ],
  },
  {
    title: 'Serviços',
    links: [
      { label: 'Gestão de TI', href: '#servicos-ti' },
      { label: 'Data Center e Locação', href: '#servicos-ti' },
      { label: 'Fornecimento Corporativo', href: '#servicos-ti' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold">
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-semibold">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                {siteConfig.contact.email}
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                {siteConfig.contact.phone}
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                {siteConfig.contact.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border/40 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
