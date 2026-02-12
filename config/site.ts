export const siteConfig = {
  name: 'LXTec',
  description:
    'Transformamos desafios em soluções com tecnologia e inovação. A Lxtec é sua parceira em gestão de processos, infraestrutura de TI e desenvolvimento de software em Campo Grande - MS.',
  url: 'https://lxtec.com.br',
  ogImage: '/images/og-image.png',
  keywords: [
    'LXTec',
    'Tecnologia da Informação',
    'Gestão de Processos',
    'Assinatura Digital',
    'Gestão de Documentos',
    'Infraestrutura de TI',
    'Data Center',
    'Consultoria de TI',
    'Software Corporativo',
    'Campo Grande MS',
  ],
  authors: [
    {
      name: 'LXTec',
      url: 'https://lxtec.com.br',
    },
  ],
  creator: 'LXTec',
  links: {
    instagram: 'https://instagram.com/lxtec_informatica', // Placeholder based on common patterns, or keep empty if unknown
    linkedin: 'https://linkedin.com/company/lxtec', // Placeholder
    whatsapp: 'https://wa.me/556730422100',
  },
  nav: [
    { label: 'Início', href: '#hero' },
    { label: 'Produtos', href: '#solucoes-software' },
    { label: 'Serviços', href: '#servicos-ti' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Fale Conosco', href: '#contato' },
  ],
  contact: {
    email: 'contato@lxtec.com.br',
    phone: '(67) 3042-2100',
    address: 'Av. Afonso Pena, 5668, Campo Grande - MS',
  },
} as const;

export type SiteConfig = typeof siteConfig;
