import type { Service, Testimonial } from '@/types';

export const softwareSolutions: Service[] = [
  {
    title: 'GESTÃO DE PROCESSOS',
    label: 'LX PROCESSOS',
    description:
      'Organize, agilize e transforme a gestão de processos com tecnologia eficiente e segura. Menos burocracia, mais resultados.',
    icon: 'workflow',
    labelColor: 'text-red-500',
    buttonColor: 'bg-red-500 hover:bg-red-600',
    borderColor: 'group-hover:border-red-500/30',
  },
  {
    title: 'ASSINATURA DIGITAL',
    label: 'LX SIGN',
    description:
      'Assine documentos com validade jurídica de forma simples, rápida e segura. Mobilidade, agilidade e menos papel no seu dia a dia.',
    icon: 'pen-tool',
    labelColor: 'text-blue-500',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
    borderColor: 'group-hover:border-blue-500/30',
  },
  {
    title: 'GESTÃO DE DOCUMENTOS',
    label: 'LX GED',
    description:
      'Organize, armazene e acesse seus documentos com agilidade e segurança. Controle total, digitalização simplificada e menos papel.',
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
    description:
      'Suporte completo para servidores e redes com foco em disponibilidade, segurança e desempenho. Gerenciamos sua TI de ponta a ponta para garantir operação estável e produtiva.',
    icon: 'monitor',
    labelColor: 'text-[#00BCD4]', // Cyan/Turquoise
    buttonColor: 'bg-[#00BCD4] hover:bg-[#00BCD4]/90',
    borderColor: 'group-hover:border-[#00BCD4]/30',
  },
  {
    title: 'DATA CENTER E LOCAÇÃO DE TI',
    label: 'SUPORTE ESPECIALIZADO',
    description:
      'Infraestrutura sob demanda com locação de servidores, VPS, impressoras e soluções em nuvem. Reduza custos com suporte, manutenção e alta performance incluídos.',
    icon: 'server',
    labelColor: 'text-[#FF4081]', // Pink/Red
    buttonColor: 'bg-[#FF4081] hover:bg-[#FF4081]/90',
    borderColor: 'group-hover:border-[#FF4081]/30',
  },
  {
    title: 'FORNECIMENTO CORPORATIVO',
    label: 'VENDA DE EQUIPAMENTOS',
    description:
      'Comercialização de equipamentos, licenças e softwares 100% voltada para empresas. Soluções personalizadas com instalação, suporte e pós-venda técnico especializado.',
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
