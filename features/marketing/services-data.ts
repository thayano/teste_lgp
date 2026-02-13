export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  color: string;
  labelColor: string;
  buttonColor: string;
  features: string[];
}

export const allServices: ServiceItem[] = [
  {
    id: 'gestao-infraestrutura-ti',
    name: 'Gestão de Infraestrutura de TI',
    slug: 'gestao-de-infraestrutura-de-ti',
    icon: 'HeartHandshake',
    description:
      'Cuidamos da sua infraestrutura de TI com excelência, unindo gestão de servidores, redes e segurança da informação em um único serviço. Atuamos com ambientes Linux e Windows, roteadores Mikrotik, switches gerenciáveis, firewalls, VLANs, Wi-Fi corporativo e serviços em nuvem. Garantimos alta disponibilidade, desempenho e conectividade segura, com suporte remoto e presencial realizado por equipe certificada.',
    color: 'from-cyan-500 to-cyan-700',
    labelColor: 'text-cyan-500',
    buttonColor: 'bg-cyan-600 hover:bg-cyan-700',
    features: [
      'Servidores Linux e Windows',
      'Roteadores Mikrotik',
      'Firewalls e VLANs',
      'Wi-Fi corporativo',
      'Suporte remoto e presencial',
      'Monitoramento proativo',
    ],
  },
  {
    id: 'data-center-locacao-ti',
    name: 'Data Center e Locação de TI',
    slug: 'data-center-e-locacao-de-ti',
    icon: 'Server',
    description:
      'Com nossa estrutura própria de Data Center, oferecemos locação de servidores físicos, VPS, soluções em nuvem e outsourcing de impressão com excelência. Reduza custos operacionais com equipamentos de alto desempenho entregues prontos para uso, com suporte, manutenção, link com IP fixo, backup e segurança gerenciada inclusos.',
    color: 'from-pink-500 to-rose-600',
    labelColor: 'text-pink-500',
    buttonColor: 'bg-pink-600 hover:bg-pink-700',
    features: [
      'Servidores físicos e VPS',
      'Soluções em nuvem',
      'Outsourcing de impressão',
      'IP fixo e link dedicado',
      'Backup gerenciado',
      'Suporte técnico completo',
    ],
  },
  {
    id: 'venda-corporativa-equipamentos-solucoes',
    name: 'Venda Corporativa de Equipamentos e Soluções',
    slug: 'fornecimento-corporativo',
    icon: 'ShieldCheck',
    description:
      'Na LXtec, nossa venda é voltada para empresas, com foco em ambientes corporativos que exigem confiabilidade, desempenho e suporte. Comercializamos servidores, desktops empresariais, switches, roteadores, impressoras, nobreaks, softwares e licenças profissionais como antivírus, Windows Server, backup e virtualização.',
    color: 'from-indigo-600 to-indigo-800',
    labelColor: 'text-indigo-500',
    buttonColor: 'bg-indigo-700 hover:bg-indigo-800',
    features: [
      'Servidores empresariais',
      'Switches e roteadores',
      'Impressoras e nobreaks',
      'Licenças e softwares profissionais',
      'Instalação e consultoria técnica',
      'Suporte pós-venda',
    ],
  },
  {
    id: 'backup-nuvem-acronis',
    name: 'Backup em Nuvem com Acronis',
    slug: 'backup-nuvem-acronis',
    icon: 'CloudUpload',
    description:
      'Proteja os dados mais críticos da sua empresa com nossa solução de backup em nuvem Acronis, homologada e gerenciada pela LXtec. Atuamos como parceiro oficial da Acronis e contamos com Data Center próprio em Campo Grande-MS, pronto para receber, armazenar e proteger seus dados com total segurança, criptografia e alta disponibilidade.',
    color: 'from-emerald-500 to-teal-600',
    labelColor: 'text-emerald-500',
    buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
    features: [
      'Backup automatizado',
      'Criptografia de ponta',
      'Data Center próprio',
      'Monitoramento em tempo real',
      'Restauração rápida',
      'Proteção contra ransomware',
    ],
  },
];
