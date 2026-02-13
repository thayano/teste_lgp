import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/shared/section-header';
import {
  ArrowRight,
  CheckCircle2,
  Handshake,
  ShoppingBag,
  Lightbulb,
  Rocket,
  Shield,
  Star,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programa de Representação | LXTec',
  description:
    'Torne-se um parceiro e represente nossas soluções. Modelos de parceria flexíveis para levar inovação e tecnologia de ponta ao mercado.',
};

/* ==========================================================================
   Hero Decorations (same pattern as landing page)
   ========================================================================== */

function HeroDecorationLeft() {
  return (
    <div
      className="pointer-events-none absolute -bottom-28 -left-28 z-0 opacity-30 dark:opacity-[0.30]"
      aria-hidden="true"
    >
      <svg
        width="520"
        height="290"
        viewBox="0 0 364 201"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
          stroke="url(#rep-left-g0)"
        />
        <path
          d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
          stroke="url(#rep-left-g1)"
        />
        <path
          d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
          stroke="url(#rep-left-g2)"
        />
        <path
          d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
          stroke="url(#rep-left-g3)"
        />
        <circle
          opacity="0.8"
          cx="214.505"
          cy="60.5054"
          r="49.7205"
          transform="rotate(-13.421 214.505 60.5054)"
          stroke="url(#rep-left-g4)"
        />
        <circle cx="220" cy="63" r="43" fill="url(#rep-left-g5)" />
        <defs>
          <linearGradient
            id="rep-left-g0"
            x1="184.389"
            y1="69.2405"
            x2="184.389"
            y2="212.24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-primary, #4A6CF7)" stopOpacity="0" />
            <stop offset="1" stopColor="var(--color-primary, #4A6CF7)" />
          </linearGradient>
          <linearGradient
            id="rep-left-g1"
            x1="156.389"
            y1="69.2405"
            x2="156.389"
            y2="212.24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-primary, #4A6CF7)" stopOpacity="0" />
            <stop offset="1" stopColor="var(--color-primary, #4A6CF7)" />
          </linearGradient>
          <linearGradient
            id="rep-left-g2"
            x1="125.389"
            y1="69.2405"
            x2="125.389"
            y2="212.24"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-primary, #4A6CF7)" stopOpacity="0" />
            <stop offset="1" stopColor="var(--color-primary, #4A6CF7)" />
          </linearGradient>
          <linearGradient
            id="rep-left-g3"
            x1="93.8507"
            y1="67.2674"
            x2="89.9278"
            y2="210.214"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-primary, #4A6CF7)" stopOpacity="0" />
            <stop offset="1" stopColor="var(--color-primary, #4A6CF7)" />
          </linearGradient>
          <linearGradient
            id="rep-left-g4"
            x1="214.505"
            y1="10.2849"
            x2="212.684"
            y2="99.5816"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-primary, #4A6CF7)" />
            <stop
              offset="1"
              stopColor="var(--color-primary, #4A6CF7)"
              stopOpacity="0"
            />
          </linearGradient>
          <radialGradient
            id="rep-left-g5"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(220 63) rotate(90) scale(43)"
          >
            <stop offset="0.145833" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" stopOpacity="0.08" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function HeroDecorationRight() {
  return (
    <div
      className="pointer-events-none absolute -top-28 -right-28 z-0 opacity-30 dark:opacity-[0.30]"
      aria-hidden="true"
    >
      <svg
        width="640"
        height="790"
        viewBox="0 0 450 556"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="277" cy="63" r="225" fill="url(#rep-right-g0)" />
        <circle cx="17.9997" cy="182" r="18" fill="url(#rep-right-g1)" />
        <circle cx="76.9997" cy="288" r="34" fill="url(#rep-right-g2)" />
        <circle
          cx="325.486"
          cy="302.87"
          r="180"
          transform="rotate(-37.6852 325.486 302.87)"
          fill="url(#rep-right-g3)"
        />
        <circle
          opacity="0.8"
          cx="184.521"
          cy="315.521"
          r="132.862"
          transform="rotate(114.874 184.521 315.521)"
          stroke="url(#rep-right-g4)"
        />
        <circle
          opacity="0.8"
          cx="356"
          cy="290"
          r="179.5"
          transform="rotate(-30 356 290)"
          stroke="url(#rep-right-g5)"
        />
        <circle
          opacity="0.8"
          cx="191.659"
          cy="302.659"
          r="133.362"
          transform="rotate(133.319 191.659 302.659)"
          fill="url(#rep-right-g6)"
        />
        <defs>
          <linearGradient
            id="rep-right-g0"
            x1="-54.5003"
            y1="-178"
            x2="222"
            y2="288"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-primary, #4A6CF7)" />
            <stop
              offset="1"
              stopColor="var(--color-primary, #4A6CF7)"
              stopOpacity="0"
            />
          </linearGradient>
          <radialGradient
            id="rep-right-g1"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
          >
            <stop
              offset="0.145833"
              stopColor="var(--color-primary, #4A6CF7)"
              stopOpacity="0"
            />
            <stop
              offset="1"
              stopColor="var(--color-primary, #4A6CF7)"
              stopOpacity="0.08"
            />
          </radialGradient>
          <radialGradient
            id="rep-right-g2"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
          >
            <stop
              offset="0.145833"
              stopColor="var(--color-primary, #4A6CF7)"
              stopOpacity="0"
            />
            <stop
              offset="1"
              stopColor="var(--color-primary, #4A6CF7)"
              stopOpacity="0.08"
            />
          </radialGradient>
          <linearGradient
            id="rep-right-g3"
            x1="226.775"
            y1="-66.1548"
            x2="292.157"
            y2="351.421"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-primary, #4A6CF7)" />
            <stop
              offset="1"
              stopColor="var(--color-primary, #4A6CF7)"
              stopOpacity="0"
            />
          </linearGradient>
          <linearGradient
            id="rep-right-g4"
            x1="184.521"
            y1="182.159"
            x2="184.521"
            y2="448.882"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-primary, #4A6CF7)" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="rep-right-g5"
            x1="356"
            y1="110"
            x2="356"
            y2="470"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-primary, #4A6CF7)" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="rep-right-g6"
            x1="118.524"
            y1="29.2497"
            x2="166.965"
            y2="338.63"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--color-primary, #4A6CF7)" />
            <stop
              offset="1"
              stopColor="var(--color-primary, #4A6CF7)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function HeroGlowBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute -top-[20%] -left-[10%] h-[800px] w-[800px] rounded-full opacity-[0.07] blur-[100px] dark:opacity-[0.22]"
        style={{
          background:
            'radial-gradient(circle, oklch(0.55 0.2 264) 0%, transparent 70%)',
          animation: 'heroGlowFloat 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-[10%] right-[5%] h-[700px] w-[700px] rounded-full opacity-[0.06] blur-[120px] dark:opacity-[0.18]"
        style={{
          background:
            'radial-gradient(circle, oklch(0.58 0.18 250) 0%, transparent 70%)',
          animation: 'heroGlowFloat 10s ease-in-out 2s infinite reverse',
        }}
      />
      <div
        className="absolute -bottom-[10%] left-[30%] h-[600px] w-[900px] rounded-full opacity-[0.05] blur-[100px] dark:opacity-[0.15]"
        style={{
          background:
            'radial-gradient(ellipse, oklch(0.50 0.22 270) 0%, transparent 70%)',
          animation: 'heroGlowFloat 12s ease-in-out 4s infinite',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.10]"
        style={{
          background:
            'linear-gradient(180deg, oklch(0.55 0.18 264) 0%, transparent 50%)',
        }}
      />
    </div>
  );
}

/* ==========================================================================
   Partnership Modality Card
   ========================================================================== */

interface PartnershipCardProps {
  badge: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  partnerTasks: string[];
  lxtecTasks: string[];
  idealFor: string;
  benefits: string[];
  accentColor: string;
  accentBg: string;
}

function PartnershipCard({
  badge,
  title,
  subtitle,
  icon,
  partnerTasks,
  lxtecTasks,
  idealFor,
  benefits,
  accentColor,
  accentBg,
}: PartnershipCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-500 hover:border-border hover:shadow-xl hover:shadow-primary/5">
      {/* Header */}
      <div className={`relative overflow-hidden ${accentBg} px-8 py-8`}>
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
        <div className="relative flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm">
            {icon}
          </div>
          <div>
            <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-white/70">
              {badge}
            </span>
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
        <p className="mt-3 text-sm text-white/80">{subtitle}</p>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-8">
        {/* What the partner does */}
        <div className="mb-6">
          <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
            <Users className={`h-4 w-4 ${accentColor}`} />O que o parceiro faz
          </h4>
          <ul className="space-y-2">
            {partnerTasks.map((task) => (
              <li key={task} className="flex items-start gap-2">
                <CheckCircle2
                  className={`mt-0.5 h-4 w-4 shrink-0 ${accentColor}`}
                />
                <span className="text-sm text-muted-foreground">{task}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* What LXtec does */}
        <div className="mb-6">
          <h4 className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
            <Shield className={`h-4 w-4 ${accentColor}`} />O que a LXtec faz
          </h4>
          <ul className="space-y-2">
            {lxtecTasks.map((task) => (
              <li key={task} className="flex items-start gap-2">
                <CheckCircle2
                  className={`mt-0.5 h-4 w-4 shrink-0 ${accentColor}`}
                />
                <span className="text-sm text-muted-foreground">{task}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ideal for */}
        <div className="mb-6 rounded-xl border border-border/40 bg-muted/30 p-4">
          <div className="mb-2 flex items-center gap-2">
            <Lightbulb className={`h-4 w-4 ${accentColor}`} />
            <span className="text-sm font-bold">Ideal para</span>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {idealFor}
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <Rocket className={`h-4 w-4 ${accentColor}`} />
            <span className="text-sm font-bold">Principais benefícios</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <Star className={`h-3 w-3 shrink-0 ${accentColor}`} />
                <span className="text-xs text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-auto">
          <Button
            className={`w-full ${accentBg} text-white hover:opacity-90`}
            size="lg"
            asChild
          >
            <Link href="/#contato">
              Escolher essa Modalidade
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   Page Component
   ========================================================================== */

export default function RepresentantePage() {
  return (
    <div>
      {/* ================================================================
          Hero Section
          ================================================================ */}
      <section
        id="hero-representante"
        className="relative flex min-h-[85vh] items-center justify-center overflow-hidden"
      >
        <HeroGlowBackground />
        <HeroDecorationLeft />
        <HeroDecorationRight />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Handshake className="mr-2 inline-block h-4 w-4" />
              Programa de Parceria
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Torne-se um Parceiro e Represente Nossas{' '}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Soluções
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Oferecemos modelos de parceria flexíveis para que você possa levar
              nossas soluções inovadoras a cada vez mais clientes. Escolha o
              formato que melhor se alinha à sua estratégia de negócio e comece
              a crescer conosco.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="min-w-[200px]" asChild>
                <Link href="#modalidades">
                  Quero ser Parceiro
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="min-w-[200px]"
                asChild
              >
                <Link href="/#contato">Fale conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          Modalidades de Parceria
          ================================================================ */}
      <section id="modalidades" className="py-24 lg:py-28">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Modalidades de Parceria"
            subtitle="Duas opções estratégicas pensadas para diferentes perfis de negócio"
          />

          <div className="mx-auto mt-16 grid max-w-6xl gap-8 lg:grid-cols-2">
            <PartnershipCard
              badge="Modelo Completo de Parceria"
              title="Representação de Vendas e Serviços"
              subtitle="Assuma a frente comercial e do atendimento, enquanto a LXtec cuida da tecnologia."
              icon={<Handshake className="h-7 w-7 text-white" />}
              accentColor="text-emerald-500"
              accentBg="bg-gradient-to-br from-emerald-600 to-emerald-700"
              partnerTasks={[
                'Prospecta comercial (captação, apresentação e fechamento)',
                'Vende soluções LXtec aos clientes finais',
                'Gestão de relacionamento com cliente final',
                'Resolução de dúvidas e necessidades diárias',
              ]}
              lxtecTasks={[
                'Qualidade e manutenção contínua dos sistemas',
                'Atualizações tecnológicas regulares',
                'Suporte para casos complexos e bugs',
                'Desenvolvimento de novas versões',
              ]}
              idealFor="Empresas que já possuem estrutura de suporte técnico e desejam agregar valor ao portfólio com serviços completos e integrados."
              benefits={[
                'Comissões maiores por venda',
                'Oportunidades de upsell',
                'Controle total do relacionamento',
                'Fidelização de clientes',
              ]}
            />

            <PartnershipCard
              badge="Foco 100% Comercial"
              title="Representação de Vendas"
              subtitle="Concentre-se nas vendas enquanto a LXtec cuida de todo o restante."
              icon={<ShoppingBag className="h-7 w-7 text-white" />}
              accentColor="text-blue-500"
              accentBg="bg-gradient-to-br from-blue-600 to-indigo-700"
              partnerTasks={[
                'Identificação de oportunidades de mercado',
                'Apresentação das soluções aos prospects',
                'Fechamento de contratos de licenciamento',
                'Expansão da carteira de clientes',
              ]}
              lxtecTasks={[
                'Implantação completa do sistema',
                'Treinamento dos usuários finais',
                'Suporte técnico direto ao cliente',
                'Manutenção e atualizações contínuas',
              ]}
              idealFor="Empresas com forte vocação comercial que buscam representar produtos de qualidade sem investir em estrutura de suporte."
              benefits={[
                'Foco 100% em vendas',
                'Renda passiva por renovação',
                'Baixa necessidade de equipe técnica',
                'Escalabilidade comercial',
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================================================================
          Garantia de Qualidade
          ================================================================ */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
              <Shield className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Garantia de Qualidade e Evolução
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed opacity-90">
              Independentemente do modelo escolhido, você representa um produto
              com a <strong>garantia de qualidade e evolução contínua</strong>{' '}
              que só a LXtec pode oferecer.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                <TrendingUp className="h-4 w-4" />
                Evolução contínua
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                <Shield className="h-4 w-4" />
                Qualidade garantida
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                <Zap className="h-4 w-4" />
                Suporte especializado
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA Final
          ================================================================ */}
      <section className="border-t border-border/40 bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Cada desafio tem a solução certa!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Vamos encontrar a sua?
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="min-w-[200px] bg-primary hover:bg-primary/90"
              asChild
            >
              <Link href="/#contato">
                Falar com consultor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/">Voltar ao início</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
