import type { Service, Testimonial } from '@/types';

export const softwareSolutions: Service[] = [
  {
    title: 'GESTÃO DE PROCESSOS',
    description:
      'O gestor poderá acompanhar e analisar os fluxos de processos automatizados e digitalizados em toda a sua empresa.',
    icon: 'workflow',
  },
  {
    title: 'ASSINATURA DIGITAL',
    description:
      'Realize documentos de maneira totalmente digital. Assine e colete assinaturas de forma rápida e segura, garantindo a validade jurídica.',
    icon: 'pen-tool',
  },
  {
    title: 'GESTÃO DE DOCUMENTOS',
    description:
      'Digitalize, armazene e organize todos os documentos da empresa. Acesse informações rapidamente de qualquer lugar com segurança.',
    icon: 'file-text',
  },
];

export const itServices: Service[] = [
  {
    title: 'GESTÃO DE INFRAESTRUTURA DE TI',
    description:
      'Analise, monitore e gerencie todos os ativos de TI da sua empresa. Nossa equipe está preparada para gerenciar desde redes de pequeno até grande porte.',
    icon: 'monitor',
  },
  {
    title: 'DATA CENTER E LOCAÇÃO DE TI',
    description:
      'Infraestrutura de alta qualidade para hospedagem segura e eficiente. Armazenamento, backup e segurança em nuvem, hospedagem de sites e domínios personalizados.',
    icon: 'server',
  },
  {
    title: 'FORNECIMENTO CORPORATIVO',
    description:
      'Fornecemos equipamentos de TI completos para empresas. Notebooks, desktops, impressoras e soluções completas com garantia, suporte técnico eficiente.',
    icon: 'briefcase',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Google Reviews',
    role: 'Avaliação',
    company: 'Cliente',
    quote: 'Excelência de Carreira e Crescimento. ⭐⭐⭐⭐⭐',
    rating: 5,
  },
  {
    name: 'Google Reviews',
    role: 'Avaliação',
    company: 'Cliente',
    quote: 'Produtos de Alta Qualidade. ⭐⭐⭐⭐⭐',
    rating: 5,
  },
  {
    name: 'Google Reviews',
    role: 'Avaliação',
    company: 'Cliente',
    quote: 'Atendimento ao Cliente Excepcional. ⭐⭐⭐⭐⭐',
    rating: 5,
  },
  {
    name: 'Google Reviews',
    role: 'Avaliação',
    company: 'Cliente',
    quote: 'Entrega Rápida e Eficiente. ⭐⭐⭐⭐⭐',
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
