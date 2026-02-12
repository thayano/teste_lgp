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
