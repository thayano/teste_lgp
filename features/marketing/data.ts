import type { Service, Testimonial } from '@/types';

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
