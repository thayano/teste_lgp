#!/bin/bash
# =============================================================================
# Script de criação da arquitetura do projeto LXTec
# Next.js 16 | App Router | TypeScript | Tailwind CSS 4 | pnpm
# =============================================================================

set -e

echo "🚀 Criando estrutura de arquitetura do projeto..."

# -----------------------------------------------------------------------------
# 1. Diretórios
# -----------------------------------------------------------------------------
echo "📁 Criando diretórios..."

mkdir -p app/\(marketing\)/_components
mkdir -p app/\(blog\)/blog/\[slug\]
mkdir -p app/\(blog\)/_components
mkdir -p features/marketing
mkdir -p features/blog
mkdir -p components/ui
mkdir -p components/layout
mkdir -p components/shared
mkdir -p lib
mkdir -p config
mkdir -p types
mkdir -p public/images/hero
mkdir -p public/images/logo
mkdir -p public/images/icons
mkdir -p docs

# -----------------------------------------------------------------------------
# 2. Dependências
# -----------------------------------------------------------------------------
echo "📦 Instalando dependências..."

pnpm add clsx tailwind-merge lucide-react

# -----------------------------------------------------------------------------
# 3. config/site.ts
# -----------------------------------------------------------------------------
echo "⚙️  Criando config/site.ts..."

cat > config/site.ts << 'EOF'
export const siteConfig = {
  name: 'LXTec',
  description:
    'Soluções em tecnologia da informação, processos e software para sua empresa.',
  url: 'https://lxtec.com.br',
  ogImage: '/images/og-image.png',
  links: {
    instagram: '',
    linkedin: '',
    whatsapp: '',
  },
  nav: [
    { label: 'Início', href: '#hero' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ],
  contact: {
    email: '',
    phone: '',
    address: '',
  },
} as const;

export type SiteConfig = typeof siteConfig;
EOF

# -----------------------------------------------------------------------------
# 4. lib/utils.ts
# -----------------------------------------------------------------------------
echo "🔧 Criando lib/utils.ts..."

cat > lib/utils.ts << 'EOF'
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
EOF

# -----------------------------------------------------------------------------
# 5. lib/fonts.ts
# -----------------------------------------------------------------------------
echo "🔤 Criando lib/fonts.ts..."

cat > lib/fonts.ts << 'EOF'
import { Geist, Geist_Mono } from 'next/font/google';

export const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
EOF

# -----------------------------------------------------------------------------
# 6. lib/constants.ts
# -----------------------------------------------------------------------------
echo "📋 Criando lib/constants.ts..."

cat > lib/constants.ts << 'EOF'
export const COMPANY_NAME = 'LXTec';

export const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
] as const;
EOF

# -----------------------------------------------------------------------------
# 7. types/index.ts
# -----------------------------------------------------------------------------
echo "🏷️  Criando types/index.ts..."

cat > types/index.ts << 'EOF'
export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}
EOF

# -----------------------------------------------------------------------------
# 8. features/marketing/data.ts
# -----------------------------------------------------------------------------
echo "📊 Criando features/marketing/data.ts..."

cat > features/marketing/data.ts << 'EOF'
import type { Service } from '@/types';

export const services: Service[] = [
  {
    title: 'LX Processos',
    description: 'Gestão de processos empresariais com automação e eficiência.',
    icon: 'workflow',
  },
  {
    title: 'LX Sign',
    description:
      'Assinatura digital de documentos com segurança e validade jurídica.',
    icon: 'pen-tool',
  },
  {
    title: 'LX GED',
    description: 'Gestão eletrônica de documentos para organização e controle.',
    icon: 'file-text',
  },
  {
    title: 'Consultoria de T.I.',
    description:
      'Consultoria especializada em tecnologia da informação para sua empresa.',
    icon: 'monitor',
  },
  {
    title: 'Suporte Especializado',
    description:
      'Suporte técnico especializado para manter sua infraestrutura funcionando.',
    icon: 'headphones',
  },
];

export const companyInfo = {
  name: 'LXTec',
  tagline: 'Soluções em tecnologia da informação',
  description:
    'Oferecemos soluções completas em TI, desde gestão de documentos até consultoria especializada, para impulsionar a transformação digital da sua empresa.',
  foundedYear: 2020,
} as const;
EOF

# -----------------------------------------------------------------------------
# 9. features/marketing/actions.ts
# -----------------------------------------------------------------------------
echo "⚡ Criando features/marketing/actions.ts..."

cat > features/marketing/actions.ts << 'EOF'
'use server';

// Server Actions para a landing page
// Exemplo: formulário de contato

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  // TODO: Implementar lógica de envio (e-mail, banco, etc.)
  console.log('Formulário recebido:', { name, email, message });

  return { success: true, message: 'Mensagem enviada com sucesso!' };
}
EOF

# -----------------------------------------------------------------------------
# 10. components/ui/button.tsx
# -----------------------------------------------------------------------------
echo "🔘 Criando components/ui/button.tsx..."

cat > components/ui/button.tsx << 'EOF'
import { cn } from '@/lib/utils';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-foreground text-background hover:bg-foreground/90':
              variant === 'primary',
            'bg-secondary text-secondary-foreground hover:bg-secondary/80':
              variant === 'secondary',
            'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground':
              variant === 'outline',
            'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
          },
          {
            'h-9 px-3 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-13 px-8 text-lg': size === 'lg',
          },
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button, type ButtonProps };
EOF

# -----------------------------------------------------------------------------
# 11. components/layout/navbar.tsx
# -----------------------------------------------------------------------------
echo "🧭 Criando components/layout/navbar.tsx..."

cat > components/layout/navbar.tsx << 'NAVEOF'
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-64 border-t border-border/40' : 'max-h-0',
        )}
      >
        <div className="container mx-auto flex flex-col gap-2 px-4 py-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
NAVEOF

# -----------------------------------------------------------------------------
# 12. components/layout/footer.tsx
# -----------------------------------------------------------------------------
echo "📎 Criando components/layout/footer.tsx..."

cat > components/layout/footer.tsx << 'EOF'
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/" className="text-lg font-bold">
              {siteConfig.name}
            </Link>
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <nav className="flex gap-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-border/40 pt-4 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
EOF

# -----------------------------------------------------------------------------
# 13. components/shared/section-header.tsx
# -----------------------------------------------------------------------------
echo "📝 Criando components/shared/section-header.tsx..."

cat > components/shared/section-header.tsx << 'EOF'
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('space-y-2 text-center', className)}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
EOF

# -----------------------------------------------------------------------------
# 14. app/(marketing)/layout.tsx
# -----------------------------------------------------------------------------
echo "🖼️  Criando app/(marketing)/layout.tsx..."

cat > "app/(marketing)/layout.tsx" << 'EOF'
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
EOF

# -----------------------------------------------------------------------------
# 15. app/(marketing)/page.tsx
# -----------------------------------------------------------------------------
echo "🏠 Criando app/(marketing)/page.tsx..."

cat > "app/(marketing)/page.tsx" << 'EOF'
import { Hero } from './_components/hero';
import { Services } from './_components/services';
import { About } from './_components/about';
import { Contact } from './_components/contact';
import { Cta } from './_components/cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Cta />
    </>
  );
}
EOF

# -----------------------------------------------------------------------------
# 16. app/(marketing)/_components/hero.tsx
# -----------------------------------------------------------------------------
echo "🎯 Criando _components/hero.tsx..."

cat > "app/(marketing)/_components/hero.tsx" << 'EOF'
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
EOF

# -----------------------------------------------------------------------------
# 17. app/(marketing)/_components/services.tsx
# -----------------------------------------------------------------------------
echo "🛠️  Criando _components/services.tsx..."

cat > "app/(marketing)/_components/services.tsx" << 'EOF'
import { SectionHeader } from '@/components/shared/section-header';
import { services } from '@/features/marketing/data';
import { Workflow, PenTool, FileText, Monitor, Headphones } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  workflow: <Workflow className="h-8 w-8" />,
  'pen-tool': <PenTool className="h-8 w-8" />,
  'file-text': <FileText className="h-8 w-8" />,
  monitor: <Monitor className="h-8 w-8" />,
  headphones: <Headphones className="h-8 w-8" />,
};

export function Services() {
  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Nossos Serviços"
          subtitle="Soluções completas para atender às necessidades da sua empresa"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                {iconMap[service.icon]}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF

# -----------------------------------------------------------------------------
# 18. app/(marketing)/_components/about.tsx
# -----------------------------------------------------------------------------
echo "ℹ️  Criando _components/about.tsx..."

cat > "app/(marketing)/_components/about.tsx" << 'EOF'
import { SectionHeader } from '@/components/shared/section-header';
import { companyInfo } from '@/features/marketing/data';

export function About() {
  return (
    <section id="sobre" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="Sobre Nós" subtitle={companyInfo.tagline} />
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {companyInfo.description}
          </p>
        </div>
      </div>
    </section>
  );
}
EOF

# -----------------------------------------------------------------------------
# 19. app/(marketing)/_components/contact.tsx
# -----------------------------------------------------------------------------
echo "📧 Criando _components/contact.tsx..."

cat > "app/(marketing)/_components/contact.tsx" << 'EOF'
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
EOF

# -----------------------------------------------------------------------------
# 20. app/(marketing)/_components/cta.tsx
# -----------------------------------------------------------------------------
echo "📣 Criando _components/cta.tsx..."

cat > "app/(marketing)/_components/cta.tsx" << 'EOF'
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
EOF

# -----------------------------------------------------------------------------
# 21. app/layout.tsx (Root Layout)
# -----------------------------------------------------------------------------
echo "🌐 Criando app/layout.tsx..."

cat > app/layout.tsx << 'EOF'
import type { Metadata } from 'next';
import { geistSans, geistMono } from '@/lib/fonts';
import { siteConfig } from '@/config/site';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
EOF

# -----------------------------------------------------------------------------
# 22. app/not-found.tsx
# -----------------------------------------------------------------------------
echo "🚫 Criando app/not-found.tsx..."

cat > app/not-found.tsx << 'EOF'
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl font-medium text-muted-foreground">
        Página não encontrada
      </h2>
      <p className="max-w-md text-muted-foreground">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="mt-4 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
EOF

# -----------------------------------------------------------------------------
# Finalização
# -----------------------------------------------------------------------------
echo ""
echo "✅ Arquitetura criada com sucesso!"
echo ""
echo "Estrutura:"
echo "  app/(marketing)/     → Landing page com layout próprio"
echo "  app/(blog)/          → Blog (Fase 2 — diretórios criados)"
echo "  features/            → Lógica de negócio por feature"
echo "  components/          → Componentes reutilizáveis"
echo "  lib/                 → Utilitários e helpers"
echo "  config/              → Configurações do site"
echo "  types/               → TypeScript interfaces"
echo ""
echo "Próximos passos:"
echo "  pnpm dev             → Iniciar servidor de desenvolvimento"
echo "  pnpm build           → Verificar build de produção"
