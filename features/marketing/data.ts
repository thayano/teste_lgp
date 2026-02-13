import type { Service, Testimonial } from '@/types';

export const softwareSolutions: Service[] = [
  {
    title: 'GESTÃO DE PROCESSOS',
    label: 'LX PROCESSOS',
    slug: 'gestao-de-processos',
    description:
      'Organize, agilize e transforme a gestão de processos com tecnologia eficiente e segura. Menos burocracia, mais resultados.',
    detailDescription:
      'O LX Processos é a solução completa para gestão de processos empresariais. Automatize fluxos de trabalho, elimine gargalos operacionais e garanta conformidade com as normas regulatórias. Com dashboards em tempo real e relatórios inteligentes, sua equipe ganha produtividade e você tem visibilidade total das operações.',
    features: [
      'Automação de fluxos de trabalho com regras personalizáveis',
      'Dashboards em tempo real para acompanhamento de indicadores',
      'Gestão de prazos e alertas automáticos',
      'Relatórios gerenciais completos e exportáveis',
      'Controle de acesso por perfil e hierarquia',
      'Integração com sistemas legados e ERPs',
    ],
    icon: 'workflow',
    labelColor: 'text-red-500',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    borderColor: 'group-hover:border-red-500/30',
  },
  {
    title: 'ASSINATURA DIGITAL',
    label: 'LX SIGN',
    slug: 'assinatura-digital',
    description:
      'Assine documentos com validade jurídica de forma simples, rápida e segura. Mobilidade, agilidade e menos papel no seu dia a dia.',
    detailDescription:
      'O LX Sign permite a assinatura eletrônica e digital de documentos com total validade jurídica, em conformidade com a legislação brasileira (MP 2.200-2). Elimine a dependência de papel, reduza custos logísticos e acelere a formalização de contratos, acordos e documentos internos de qualquer lugar.',
    features: [
      'Assinatura eletrônica com validade jurídica (ICP-Brasil)',
      'Envio de documentos para múltiplos signatários',
      'Trilha de auditoria completa com certificado de conclusão',
      'Compatível com dispositivos móveis (smartphones e tablets)',
      'Armazenamento seguro em nuvem com criptografia',
      'Integração via API com sistemas existentes',
    ],
    icon: 'pen-tool',
    labelColor: 'text-blue-500',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    borderColor: 'group-hover:border-blue-500/30',
  },
  {
    title: 'GESTÃO DE DOCUMENTOS',
    label: 'LX GED',
    slug: 'gestao-de-documentos',
    description:
      'Organize, armazene e acesse seus documentos com agilidade e segurança. Controle total, digitalização simplificada e menos papel.',
    detailDescription:
      'O LX GED (Gestão Eletrônica de Documentos) centraliza todos os seus documentos em um ambiente digital seguro e organizado. Com recursos avançados de busca, indexação e controle de versões, você encontra qualquer documento em segundos e mantém a conformidade documental da sua empresa.',
    features: [
      'Digitalização e indexação automática de documentos',
      'Busca avançada por conteúdo, tags e metadados',
      'Controle de versões e histórico de alterações',
      'Workflow de aprovação de documentos',
      'Armazenamento seguro com backup automático',
      'Conformidade com LGPD e normas regulatórias',
    ],
    icon: 'file-text',
    labelColor: 'text-orange-500',
    buttonColor: 'bg-orange-500 hover:bg-orange-600',
    borderColor: 'group-hover:border-orange-500/30',
  },
];

export const itServices: Service[] = [
  {
    title: 'GESTÃO DE INFRAESTRUTURA DE TI',
    label: 'CONSULTORIA DE T.I.',
    slug: 'gestao-de-infraestrutura-de-ti',
    description:
      'Suporte completo para servidores e redes com foco em disponibilidade, segurança e desempenho. Gerenciamos sua TI de ponta a ponta para garantir operação estável e produtiva.',
    detailDescription:
      'Nossa consultoria de T.I. oferece suporte completo para toda a infraestrutura tecnológica da sua empresa. Desde o gerenciamento de servidores e redes até a implementação de políticas de segurança, cuidamos de toda a operação para que sua equipe foque no que realmente importa: o crescimento do negócio.',
    features: [
      'Gerenciamento proativo de servidores e redes',
      'Monitoramento 24/7 com alertas em tempo real',
      'Implementação de políticas de segurança cibernética',
      'Gestão de backups e planos de disaster recovery',
      'Suporte técnico remoto e presencial',
      'Planejamento estratégico de TI alinhado ao negócio',
    ],
    icon: 'monitor',
    labelColor: 'text-[#00BCD4]', // Cyan/Turquoise
    buttonColor: 'bg-[#00BCD4] hover:bg-[#00BCD4]/90',
    borderColor: 'group-hover:border-[#00BCD4]/30',
  },
  {
    title: 'DATA CENTER E LOCAÇÃO DE TI',
    label: 'SUPORTE ESPECIALIZADO',
    slug: 'data-center-e-locacao-de-ti',
    description:
      'Infraestrutura sob demanda com locação de servidores, VPS, impressoras e soluções em nuvem. Reduza custos com suporte, manutenção e alta performance incluídos.',
    detailDescription:
      'Oferecemos infraestrutura de TI sob demanda com locação de servidores, VPS, impressoras e soluções em nuvem. Reduza o investimento inicial em equipamentos e conte com suporte técnico especializado, manutenção preventiva e alta performance incluídos no contrato.',
    features: [
      'Locação de servidores físicos e virtuais (VPS)',
      'Soluções de armazenamento em nuvem escaláveis',
      'Locação de impressoras e multifuncionais',
      'Suporte técnico e manutenção preventiva incluídos',
      'SLA garantido com alta disponibilidade',
      'Migração assistida e setup completo',
    ],
    icon: 'server',
    labelColor: 'text-[#FF4081]', // Pink/Red
    buttonColor: 'bg-[#FF4081] hover:bg-[#FF4081]/90',
    borderColor: 'group-hover:border-[#FF4081]/30',
  },
  {
    title: 'FORNECIMENTO CORPORATIVO',
    label: 'VENDA DE EQUIPAMENTOS',
    slug: 'fornecimento-corporativo',
    description:
      'Comercialização de equipamentos, licenças e softwares 100% voltada para empresas. Soluções personalizadas com instalação, suporte e pós-venda técnico especializado.',
    detailDescription:
      'Fornecemos equipamentos, licenças e softwares corporativos com atendimento personalizado. Desde notebooks e desktops até servidores e periféricos, nossa equipe ajuda a escolher a solução ideal, com instalação, configuração e suporte pós-venda especializado.',
    features: [
      'Comercialização de notebooks, desktops e servidores',
      'Licenciamento de softwares corporativos (Microsoft, Adobe, etc.)',
      'Instalação e configuração profissional',
      'Consultoria para dimensionamento de equipamentos',
      'Suporte e pós-venda técnico especializado',
      'Condições especiais para contratos corporativos',
    ],
    icon: 'briefcase',
    labelColor: 'text-[#1A237E]', // Dark Blue
    buttonColor: 'bg-[#1A237E] hover:bg-[#1A237E]/90',
    borderColor: 'group-hover:border-[#1A237E]/30',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Ana Silva',
    role: 'algumas semanas atras',
    company: 'Cliente',
    quote: 'Experiência de Compra Incrível!',
    rating: 5,
  },
  {
    name: 'Carlos Oliveira',
    role: 'algumas semanas atras',
    company: 'Cliente',
    quote: 'Produtos de Alta Qualidade',
    rating: 5,
  },
  {
    name: 'Beatriz Santos',
    role: 'algumas semanas atras',
    company: 'Cliente',
    quote: 'Atendimento ao Cliente Excepcional',
    rating: 5,
  },
  {
    name: 'Ricardo Mendes',
    role: 'algumas semanas atras',
    company: 'Cliente',
    quote: 'Entrega Rápida e Eficiente',
    rating: 5,
  },
];

export const testimonialSpotlight = {
  quote:
    'Conquistei o meu espaço na carreira dentro do ambiente tecnológico de Campo Grande.',
  name: 'Hujando Fernando Soilo',
  role: 'Diretor de TI',
};

export const companyInfo = {
  name: 'Lxtec',
  tagline: 'Transformamos desafios em soluções com tecnologia e inovação',
  description:
    'A Lxtec é a sua parceira confiável na jornada rumo à eficiência, crescimento e sustentabilidade. Oferecemos estratégias e soluções sob medida para qualquer necessidade.',
  foundedYear: 2011,
} as const;

export const partners = [
  'Autobel',
  'ACICG',
  'Parceiro 3',
  'Parceiro 4',
  'Parceiro 5',
];
