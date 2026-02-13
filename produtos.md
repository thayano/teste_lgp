# Base de Produtos (formato amigável para IA)

## Fonte

- Arquivo analisado: `src/app/(unauth)/(pages)/produtos/data.ts`
- Tipo base: `produtosProps`
- Total de produtos: `6`

## Esquema de dados

Cada produto segue a estrutura:

- `id` (number)
- `subtitle` (string) → nome do módulo/produto
- `title` (string) → headline principal
- `descricao` (string) → descrição curta de valor
- `title2` (string) → título da seção de destaque
- `description2` (string) → resumo comercial curto
- `description3` (string) → descrição detalhada
- `item` (string[]) → principais pontos/benefícios
- `image` (StaticImageData) → imagem principal
- `image2` (StaticImageData) → imagem secundária

## Dados normalizados

### Produto 1

- `id`: `1`
- `subtitle`: `Lx Processos`
- `title`: `Modernize sua Gestão com menos papel e mais inteligência.`
- `descricao`: `Diga adeus à burocracia e às pilhas de papel. Nossa plataforma de Processo Eletrônico e Assinatura Digital centraliza, automatiza e acelera o dia a dia da sua organização com total segurança e mobilidade.`
- `title2`: `Segurança e Transparência`
- `description2`: `Interface intuitiva que permite acompanhar o status de cada processo em tempo real. Arraste, solte e organize fluxos de trabalho sem complicação.`
- `description3`: `Transforme seus documentos físicos em digitais com a tecnologia OCR, que permite pesquisar pelo conteúdo dos arquivos anexados. Formalize a abertura de cada processo com um sistema de protocolo que gera automaticamente recibos, capas e guias de envio. Tenha uma visão completa do que está pendente, em andamento ou vencido através de painéis e gráficos interativos. Automatize fluxos de trabalho e encontre qualquer processo ou documento em segundos com nossa busca poderosa. Assine múltiplos documentos de uma só vez com validade jurídica (certificados ICP-Brasil ou do próprio sistema). Acesse tudo e trabalhe de onde estiver, seja no computador, tablet ou smartphone. Garanta a autenticidade de cada documento com um QR Code de verificação instantânea e mantenha todos informados com alertas automáticos sobre cada etapa do processo. Acompanhe em tempo real o impacto positivo da sua organização, com um painel exclusivo que mostra a economia de papel, água e outros recursos.`
- `item`:
  - `Assine múltiplos documentos de uma só vez com validade jurídica (certificados ICP-Brasil ou do próprio sistema)`
  - `Transforme seus documentos físicos em digitais com a tecnologia OCR, que permite pesquisar pelo conteúdo dos arquivos anexados.`
  - `Tenha uma visão completa do que está pendente, em andamento ou vencido através de painéis e gráficos interativos.`
- `image`: `diagrama_processos`
- `image2`: `infografico_processos`

### Produto 2

- `id`: `3`
- `subtitle`: `Lx GED`
- `title`: `Organize, Encontre, Assine e Acesse de Qualquer Lugar.`
- `descricao`: `Tenha a segurança de uma gestão digital e elimine o uso de papel. Nossa plataforma GED centraliza seu acervo em um ambiente digital, seguro e acessível de qualquer lugar.`
- `title2`: `Organização do Digital ao Físico`
- `description2`: `Centralize, busque e assine seus documentos digitalmente. Uma plataforma completa com busca inteligente por conteúdo (OCR), validade jurídica, segurança avançada e acesso de onde estiver.`
- `description3`: `Ache documentos instantaneamente com a busca avançada. A tecnologia OCR permite pesquisar até mesmo dentro do conteúdo dos arquivos digitalizados. Assine documentos no padrão ICP-Brasil diretamente na plataforma , garantindo autenticidade e permitindo o descarte legal dos originais físicos. Use nosso aplicativo mobile para pesquisar, visualizar e baixar documentos em seu smartphone. Acompanhe também os indicadores de sustentabilidade do sistema. Defina níveis de sigilo , gerencie permissões por usuário e monitore todas as ações com um sistema de auditoria completo. Cadastre a localização de seus arquivos físicos — como sala, estante e caixa — para encontrá-los facilmente, mesmo após a digitalização.`
- `item`:
  - `Assine documentos no padrão ICP-Brasil diretamente na plataforma , garantindo autenticidade e permitindo o descarte legal dos originais físicos`
  - `Use nosso aplicativo mobile para pesquisar, visualizar e baixar documentos em seu smartphone.`
  - `Cadastre a localização de seus arquivos físicos — como sala, estante e caixa — para encontrá-los facilmente.`
- `image`: `ged`
- `image2`: `ged_2`

### Produto 3

- `id`: `2`
- `subtitle`: `LX SIGN`
- `title`: `Valide Documentos com Segurança e Agilidade`
- `descricao`: `Elimine a burocracia da assinatura em papel. Com nosso módulo de Assinatura Digital, você formaliza documentos em minutos, com total segurança, mobilidade e validade jurídica.`
- `title2`: `Agilidade e Mobilidade`
- `description2`: `Assine documentos em lote, de qualquer dispositivo, com total validade jurídica. Uma plataforma ágil e segura com verificação por QR Code e acompanhamento de status em tempo real.`
- `description3`: `Assine múltiplos documentos de uma só vez (em lote) de qualquer lugar, usando seu computador, tablet ou smartphone (aplicativos disponíveis na App Store e Play Store). Use assinaturas eletrônicas Avançadas ou Qualificadas (ICP-Brasil). Verifique a autenticidade de qualquer documento na hora com o QR Code gerado automaticamente pelo sistema. Tenha uma visão completa do fluxo de assinaturas em um painel de controle intuitivo e receba alertas por e-mail para não perder nenhum prazo. Valide seus documentos com a segurança e com a velocidade que o mundo digital exige.`
- `item`:
  - `Assine múltiplos documentos de uma só vez (em lote) de qualquer lugar.`
  - `Use assinaturas eletrônicas Avançadas ou Qualificadas (ICP-Brasil).`
  - `Tenha uma visão completa do fluxo de assinaturas em um painel de controle intuitivo e receba alertas por e-mail para não perder nenhum prazo.`
- `image`: `assinatura`
- `image2`: `assinatura_2`

### Produto 4

- `id`: `4`
- `subtitle`: `lx control`
- `title`: `Controle Total e Inteligência Estratégica para sua Controladoria`
- `descricao`: `Nossa plataforma web unifica as complexas rotinas da controladoria — contratos, auditorias, obras e conformidade legal — em um só lugar, transformando dados em decisões seguras.`
- `title2`: `Gestão de Contratos`
- `description2`: `Tenha o controle total da sua controladoria. Monitore contratos, gerencie parcerias e automatize a conformidade com uma plataforma estratégica que centraliza todas as suas operações.`
- `description3`: `Monitore a execução financeira de contratos e o avanço de obras, incluindo medições e aditivos, com total visibilidade. Crie checklists de validação personalizados para qualquer finalidade e gere relatórios técnicos de forma ágil, usando textos padronizados para poupar tempo. Gerencie parcerias com o Terceiro Setor (OSCs) , acompanhe a prestação de contas online e centralize a comunicação com o Tribunal de Contas. O sistema notifica sua equipe automaticamente sobre vencimentos de contratos, auditorias e prazos legais , enquanto o painel de controle oferece uma visão completa das atividades.`
- `item`:
  - `Monitore a execução financeira de contratos e o avanço de obras, incluindo medições e aditivos e etc...`
  - `Acompanhe a prestação de contas online e centralize a comunicação com o Tribunal de Contas.`
  - `Gerencie parcerias com o Terceiro Setor (OSCs), acompanhe a prestação de contas online.`
- `image`: `control`
- `image2`: `control_2`

### Produto 5

- `id`: `5`
- `subtitle`: `lx legislação`
- `title`: `Legislação Municipal ao Alcance de Todos: Clareza, Agilidade e Transparência`
- `descricao`: `Manter a legislação municipal organizada e acessível é um desafio. Nossa plataforma web para gestão de atos legais simplifica todo o processo, oferecendo uma ferramenta poderosa para a administração pública e um portal de transparência completo para o cidadão.`
- `title2`: `A Versão Consolidada das Leis`
- `description2`: `Acesse a legislação municipal sempre atualizada em um só lugar. Uma plataforma completa com textos consolidados, busca inteligente e um portal público para total transparência.`
- `description3`: `Chega de consultar dezenas de alterações. O sistema exibe os atos legais de forma consolidada, mostrando o texto vigente com todas as modificações já aplicadas. Navegue facilmente entre as leis e suas alterações através de links automáticos. Ofereça um portal de busca online onde qualquer pessoa pode consultar leis, decretos, portarias e outros documentos oficiais do município. O acesso é simples, ilimitado e pode ser feito de qualquer dispositivo, como celulares e tablets. Centralize a criação e o gerenciamento de todos os tipos de atos, desde projetos de lei até a sanção e publicação. O sistema possui módulos específicos para as necessidades de cada poder, garantindo um fluxo de trabalho integrado. Encontre qualquer documento em segundos. A pesquisa permite buscar por número, data, assunto ou por palavras-chave dentro do texto. O sistema conta até com busca fonética, facilitando a localização mesmo com erros de digitação.`
- `item`:
  - `O sistema exibe os atos legais de forma consolidada, mostrando o texto vigente com todas as modificações já aplicadas.`
  - `Navegue facilmente entre as leis e suas alterações através de links automáticos.`
  - `Centralize a criação e o gerenciamento de todos os tipos de atos, desde projetos de lei até a sanção e publicação.`
- `image`: `legis`
- `image2`: `legis_2`

### Produto 6

- `id`: `6`
- `subtitle`: `lx Ouvidoria`
- `title`: `Ouvidoria Digital: A Ponte Entre o Cidadão e a Gestão Pública`
- `descricao`: `A nossa plataforma web de Ouvidoria cria um canal de comunicação transparente e ágil, que transforma a forma como sua instituição ouve o cidadão e gerencia as manifestações.`
- `title2`: `Canal Aberto com o Cidadão`
- `description2`: ``
- `description3`: `Facilite o registro de manifestações como elogios, sugestões ou denúncias , com opção de anonimato. O cidadão pode acompanhar sua solicitação com um protocolo único, de forma simples e transparente. Visualize o panorama das manifestações com gráficos por tipo, origem e setor. O sistema direciona cada caso ao setor competente e monitora os prazos de resposta automaticamente. Organize as manifestações por status (em aberto, resolvidas, etc.) , registre anotações internas para controle e solicite esclarecimentos antes de formular a resposta final ao cidadão. Emita relatórios gerenciais sobre as manifestações e o perfil dos cidadãos, transformando dados em insights valiosos para a melhoria dos serviços públicos.`
- `item`:
  - `Facilite o registro de manifestações como elogios, sugestões ou denúncias , com opção de anonimato.`
  - `O cidadão pode acompanhar sua solicitação com um protocolo único, de forma simples e transparente.`
  - `Emita relatórios gerenciais sobre as manifestações e o perfil dos cidadãos, transformando dados em insights valiosos para a melhoria dos serviços públicos.`
- `image`: `ouvidoria`
- `image2`: `ouvidoria_2`

## Observações úteis para IA

- A ordem no array original não é sequencial por `id` (`1, 3, 2, 4, 5, 6`).
- O campo `description2` do produto `id: 6` está vazio.
- Há pequenas inconsistências de capitalização em `subtitle` (ex.: `LX SIGN`, `lx control`, `lx legislação`).
- O conteúdo textual está em português (pt-BR) e orientado a software para gestão pública/documental.
