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
