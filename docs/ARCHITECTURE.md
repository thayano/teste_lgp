# Arquitetura do Projeto — LXTec

## Visão Geral

Projeto construído com **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS 4** e **pnpm** como gerenciador de pacotes.

A arquitetura foi desenhada para suportar **duas fases de desenvolvimento**:

| Fase       | Descrição                  | Status              |
| ---------- | -------------------------- | ------------------- |
| **Fase 1** | Landing Page institucional | ✅ Estrutura criada |
| **Fase 2** | Blog com conteúdo dinâmico | 📋 Planejado        |

---

## Stack Tecnológica

| Tecnologia            | Versão | Propósito                                                |
| --------------------- | ------ | -------------------------------------------------------- |
| Next.js               | 16.1.6 | Framework React com App Router e Server Components       |
| React                 | 19.2.3 | Biblioteca de UI                                         |
| TypeScript            | ^5     | Tipagem estática                                         |
| Tailwind CSS          | ^4     | Estilização utility-first                                |
| pnpm                  | 10.x   | Gerenciador de pacotes (mais rápido, eficiente em disco) |
| lucide-react          | —      | Ícones SVG                                               |
| clsx + tailwind-merge | —      | Merge inteligente de classes CSS                         |

---

## Estrutura de Diretórios

```
site_versao-t/
├── app/                      # Rotas e layouts (App Router)
│   ├── (marketing)/          # Route Group — Landing Page
│   │   ├── layout.tsx        # Layout com Navbar + Footer
│   │   ├── page.tsx          # Página principal "/"
│   │   └── _components/      # Componentes privados desta rota
│   ├── layout.tsx            # Root Layout (global)
│   ├── not-found.tsx         # Página 404
│   └── globals.css           # Estilos globais + Tailwind
│
├── features/                 # Lógica de negócio por feature
│   └── marketing/
│       ├── data.ts           # Dados estáticos
│       └── actions.ts        # Server Actions
│
├── components/               # Componentes reutilizáveis
│   ├── ui/                   # Primitivos (Button, Card, etc.)
│   ├── layout/               # Navbar, Footer
│   └── shared/               # Componentes compartilhados
│
├── lib/                      # Utilitários e helpers
│   ├── utils.ts              # cn() — merge de classes
│   ├── fonts.ts              # Configuração de fontes
│   └── constants.ts          # Constantes do projeto
│
├── config/                   # Configurações do projeto
│   └── site.ts               # Metadata, SEO, navegação
│
├── types/                    # Interfaces TypeScript globais
│   └── index.ts
│
└── public/                   # Assets estáticos
    └── images/
        ├── hero/
        ├── logo/
        └── icons/
```

---

## Decisões de Arquitetura

### 1. Route Groups `(marketing)` e `(blog)`

**Decisão:** Usar Route Groups do Next.js para separar contextos de navegação.

**Motivação:**

- Cada contexto pode ter seu próprio `layout.tsx` (a landing page tem Navbar + Footer; o blog terá sidebar)
- O agrupamento **não afeta a URL** — `app/(marketing)/page.tsx` serve a rota `/`, não `/marketing/`
- Facilita adicionar o blog na Fase 2 sem impactar a landing page existente

**Alternativa descartada:** Manter tudo flat em `app/`. Funcionaria agora, mas tornaria difícil aplicar layouts diferentes por seção quando o blog for adicionado.

---

### 2. Diretório `features/` — Separação de Lógica de Negócio

**Decisão:** Isolar lógica de negócio (dados, Server Actions, API calls) em `features/`, separada dos componentes de UI.

**Motivação:**

- Componentes em `_components/` ficam focados em **apresentação** (como renderizar)
- `features/` concentra **o quê** renderizar (dados dos serviços, lógica de formulário)
- Facilita testes unitários da lógica sem dependência de React
- Permite reutilizar a mesma lógica em diferentes interfaces (ex: mesmos dados de serviços na landing page e no blog)

**Exemplo prático:**

```
features/marketing/data.ts    → Lista de serviços, info da empresa
features/marketing/actions.ts → Server Action do formulário de contato
```

---

### 3. Componentes Globais fora de `app/`

**Decisão:** Manter `components/`, `lib/`, `config/` e `types/` na raiz do projeto, fora de `app/`.

**Motivação:**

- Padrão recomendado pela comunidade Next.js e pela [documentação oficial](https://nextjs.org/docs/getting-started/project-structure)
- `app/` fica exclusivamente para rotas, layouts e Server Components de página
- Componentes em `components/` são reutilizáveis por qualquer Route Group

**Organização dos componentes:**

| Pasta                | Responsabilidade                          | Exemplo             |
| -------------------- | ----------------------------------------- | ------------------- |
| `components/ui/`     | Primitivos de UI genéricos                | Button, Card, Input |
| `components/layout/` | Estrutura de layout                       | Navbar, Footer      |
| `components/shared/` | Componentes compartilhados entre features | SectionHeader       |

---

### 4. Private Folders `_components/`

**Decisão:** Usar o prefixo `_` (convenção Next.js) para pastas de componentes dentro de Route Groups.

**Motivação:**

- O App Router trata qualquer pasta sem `_` como potencial segmento de rota
- `_components/` garante que os componentes **não são acessíveis via URL**
- Colocation: componentes ficam próximos da página que os utiliza, sem risco de roteamento acidental

---

### 5. Configuração Centralizada em `config/site.ts`

**Decisão:** Centralizar metadata, links de navegação e configurações do site em um único arquivo.

**Motivação:**

- Alterações de SEO, nome do site ou navegação são feitas em **um só lugar**
- O Root Layout e componentes como Navbar e Footer importam de `config/site.ts`
- Facilita manutenção e consistência

**Estrutura:**

```typescript
export const siteConfig = {
  name: 'LXTec',
  description: '...',
  url: '...',
  nav: [{ label: '...', href: '...' }],
  contact: { email: '...', phone: '...' },
};
```

---

### 6. Função `cn()` para Classes CSS

**Decisão:** Usar `clsx` + `tailwind-merge` encapsulados na função `cn()`.

**Motivação:**

- `clsx` permite classes condicionais: `cn("base", { "active": isActive })`
- `tailwind-merge` resolve conflitos: `cn("px-4", "px-6")` → `"px-6"` (não duplica)
- Padrão amplamente utilizado (shadcn/ui, etc.)

---

### 7. Server Components por Padrão

**Decisão:** Todos os componentes são Server Components, exceto os que explicitamente usam `"use client"`.

**Motivação:**

- Menor bundle JavaScript enviado ao navegador
- Componentes de servidor podem acessar dados diretamente (sem APIs intermediárias)
- Apenas componentes interativos (Navbar com menu mobile, formulários) usam `"use client"`

**Componentes Client (atualmente):**

- `components/layout/navbar.tsx` — estado do menu mobile

---

### 8. Tailwind CSS 4 com `@theme inline`

**Decisão:** Usar a nova API do Tailwind v4 com design tokens via CSS custom properties.

**Motivação:**

- Alinhado com a arquitetura do Tailwind v4 (sem `tailwind.config.ts` na maioria dos casos)
- Tokens definidos diretamente no CSS com `@theme inline { ... }`
- Facilita theming (dark mode via `prefers-color-scheme`)

---

## Camadas da Aplicação

```
┌─────────────────────────────────────────────┐
│                  app/                        │
│  Rotas, Layouts, Pages (Server Components)   │
├──────────────┬──────────────────────────────┤
│  _components/│     Route-specific UI         │
├──────────────┴──────────────────────────────┤
│              components/                     │
│  UI reutilizável (Button, Navbar, Footer)    │
├─────────────────────────────────────────────┤
│              features/                       │
│  Lógica de negócio (data, actions, API)      │
├─────────────────────────────────────────────┤
│         lib/ + config/ + types/              │
│  Utilitários, configuração, tipos globais    │
└─────────────────────────────────────────────┘
```

**Regra de dependência:** Camadas superiores podem importar das inferiores, mas **nunca** o contrário. Por exemplo:

- `app/(marketing)/page.tsx` → importa de `_components/`, `features/`, `components/`
- `features/marketing/data.ts` → importa de `types/`, `lib/`
- `components/ui/button.tsx` → importa de `lib/utils.ts`
- `lib/utils.ts` → não importa de nenhuma camada superior

---

## Preparação para Fase 2 (Blog)

A arquitetura já está preparada para o blog:

```
app/(blog)/               ← Novo Route Group
│   ├── layout.tsx        ← Layout específico do blog
│   ├── blog/
│   │   ├── page.tsx      ← "/blog"
│   │   └── [slug]/
│   │       └── page.tsx  ← "/blog/meu-post"
│   └── _components/

features/blog/            ← Lógica do blog
│   ├── api.ts
│   ├── types.ts
│   └── actions.ts
```

**Fonte de conteúdo:** A definir (opções: MDX, Contentlayer, CMS headless como Sanity ou Strapi).

---

## Convenções do Projeto

| Convenção            | Descrição                                                            |
| -------------------- | -------------------------------------------------------------------- |
| **Nomenclatura**     | Arquivos em `kebab-case` (ex: `section-header.tsx`)                  |
| **Componentes**      | `PascalCase` para nomes de componentes e exports                     |
| **Imports**          | Alias `@/` mapeia para a raiz do projeto (`tsconfig.json`)           |
| **Server vs Client** | Server Component por padrão; `"use client"` apenas quando necessário |
| **Dados**            | Dados estáticos/mockados vivem em `features/*/data.ts`               |
| **Ações**            | Server Actions em `features/*/actions.ts` com `"use server"`         |
| **Estilos**          | Tailwind CSS classes direto nos componentes; `cn()` para merge       |
