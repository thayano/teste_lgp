# Serviços LXtec — Base Estruturada para IA

## Contexto

- origem: `src/app/(unauth)/(pages)/servicos/page.tsx`
- tipo_de_conteudo: lista de serviços corporativos
- idioma: pt-BR
- total_itens: 4

## Schema

Cada item segue exatamente este formato:

- `id`: identificador único
- `name`: nome do serviço
- `icon`: nome do ícone (Lucide)
- `image`: nome do arquivo/import da imagem
- `description`: descrição completa

## Data (normalizada)

### item_1

- id: `gestao-infraestrutura-ti`
- name: `Gestão de Infraestrutura de TI`
- icon: `HeartHandshake`
- image: `gestao`
- description: |
  Cuidamos da sua infraestrutura de TI com excelência, unindo gestão de servidores, redes e segurança da informação em um único serviço. Atuamos com ambientes Linux e Windows, roteadores Mikrotik, switches gerenciáveis, firewalls, VLANs, Wi-Fi corporativo e serviços em nuvem. Garantimos alta disponibilidade, desempenho e conectividade segura, com suporte remoto e presencial realizado por equipe certificada. Desde a estruturação até o monitoramento proativo, entregamos confiabilidade e tranquilidade para ambientes corporativos de pequeno, médio e grande porte.

### item_2

- id: `data-center-locacao-ti`
- name: `Data Center e Locação de TI`
- icon: `Award`
- image: `datacenter`
- description: |
  Com nossa estrutura própria de Data Center, oferecemos locação de servidores físicos, VPS, soluções em nuvem e outsourcing de impressão com excelência. Reduza custos operacionais com equipamentos de alto desempenho entregues prontos para uso, com suporte, manutenção, link com IP fixo, backup e segurança gerenciada inclusos. Nosso serviço de outsourcing de impressão é um dos braços fortes da LXtec, com fornecimento de impressoras, suprimentos, monitoramento de uso e suporte técnico completo, ideal para empresas que buscam controle e eficiência.

### item_3

- id: `venda-corporativa-equipamentos-solucoes`
- name: `Venda Corporativa de Equipamentos e Soluções`
- icon: `Shield`
- image: `download`
- description: |
  Na LXtec, nossa venda é voltada para empresas, com foco em ambientes corporativos que exigem confiabilidade, desempenho e suporte. Comercializamos servidores, desktops empresariais, switches, roteadores, impressoras, nobreaks, softwares e licenças profissionais como antivírus, Windows Server, backup e virtualização. Atuamos como consultoria técnica, dimensionando e entregando a solução ideal para cada necessidade, com garantia, instalação e suporte pós-venda inclusos. Não trabalhamos com varejo nem montagens domésticas: nossa missão é atender o setor empresarial com seriedade e excelência.

### item_4

- id: `backup-nuvem-acronis`
- name: `Backup em Nuvem com Acronis`
- icon: `Briefcase`
- image: `backup`
- description: |
  Proteja os dados mais críticos da sua empresa com nossa solução de backup em nuvem Acronis, homologada e gerenciada pela LXtec. Atuamos como parceiro oficial da Acronis e contamos com Data Center próprio em Campo Grande-MS, pronto para receber, armazenar e proteger seus dados com total segurança, criptografia e alta disponibilidade. O backup é automatizado, monitorado, com alertas e relatórios em tempo real, além de restauração rápida e suporte técnico local. Ideal para ambientes corporativos que não podem correr riscos com perda de informações, sequestro de dados (ransomware) ou falhas operacionais.

## JSON auxiliar (opcional para parsing)

```json
[
  {
    "id": "gestao-infraestrutura-ti",
    "name": "Gestão de Infraestrutura de TI",
    "icon": "HeartHandshake",
    "image": "gestao"
  },
  {
    "id": "data-center-locacao-ti",
    "name": "Data Center e Locação de TI",
    "icon": "Award",
    "image": "datacenter"
  },
  {
    "id": "venda-corporativa-equipamentos-solucoes",
    "name": "Venda Corporativa de Equipamentos e Soluções",
    "icon": "Shield",
    "image": "download"
  },
  {
    "id": "backup-nuvem-acronis",
    "name": "Backup em Nuvem com Acronis",
    "icon": "Briefcase",
    "image": "backup"
  }
]
```
