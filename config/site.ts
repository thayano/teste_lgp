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
