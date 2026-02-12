# Ferramentas de Qualidade de Código

Este projeto utiliza um conjunto de ferramentas para garantir a padronização do código e dos commits.

## Ferramentas Configuradas

| Ferramenta      | Versão | Finalidade                                 |
| --------------- | ------ | ------------------------------------------ |
| **ESLint**      | ^9     | Análise estática de código                 |
| **Prettier**    | ^3.8   | Formatação automática de código            |
| **Husky**       | ^9.1   | Git hooks automatizados                    |
| **lint-staged** | ^16.2  | Executa linters apenas nos arquivos staged |
| **Commitlint**  | ^20.4  | Validação de mensagens de commit           |

---

## Scripts Disponíveis

```bash
# Verificar erros de lint
pnpm run lint

# Formatar todo o projeto
pnpm run format

# Verificar formatação (sem alterar arquivos)
pnpm run format:check
```

---

## Git Hooks (Husky)

Os hooks são executados automaticamente:

### `pre-commit`

Executa **lint-staged**, que:

- Arquivos `*.{ts,tsx,js,jsx,mjs}` → `eslint --fix` + `prettier --write`
- Arquivos `*.{json,css,md}` → `prettier --write`

### `commit-msg`

Valida a mensagem de commit com **Commitlint** usando a convenção [Conventional Commits](https://www.conventionalcommits.org/).

---

## Conventional Commits

As mensagens de commit devem seguir o formato:

```
tipo(escopo?): descrição
```

### Tipos Permitidos

| Tipo       | Descrição                            |
| ---------- | ------------------------------------ |
| `feat`     | Nova funcionalidade                  |
| `fix`      | Correção de bug                      |
| `docs`     | Alterações na documentação           |
| `style`    | Formatação (sem alteração de lógica) |
| `refactor` | Refatoração de código                |
| `perf`     | Melhoria de performance              |
| `test`     | Adição/alteração de testes           |
| `build`    | Alterações no sistema de build       |
| `ci`       | Alterações de CI/CD                  |
| `chore`    | Tarefas de manutenção                |
| `revert`   | Reverter commit anterior             |

### Exemplos

```bash
# ✅ Válidos
git commit -m "feat: adicionar página de login"
git commit -m "fix(auth): corrigir validação de token"
git commit -m "docs: atualizar README"
git commit -m "chore: configurar ferramentas de qualidade"

# ❌ Inválidos
git commit -m "arrumei o bug"
git commit -m "WIP"
git commit -m "fix"
```

---

## Prettier - Regras Configuradas

| Regra            | Valor      | Descrição                      |
| ---------------- | ---------- | ------------------------------ |
| `semi`           | `true`     | Ponto e vírgula no final       |
| `singleQuote`    | `true`     | Aspas simples                  |
| `trailingComma`  | `"all"`    | Vírgula no último item         |
| `printWidth`     | `80`       | Largura máxima da linha        |
| `tabWidth`       | `2`        | Espaços por tab                |
| `endOfLine`      | `"lf"`     | Line feed (Unix)               |
| `arrowParens`    | `"always"` | Parênteses em arrow functions  |
| `bracketSpacing` | `true`     | Espaço dentro de objetos `{ }` |
| `jsxSingleQuote` | `false`    | Aspas duplas em JSX            |

---

## Arquivos de Configuração

| Arquivo                 | Ferramenta                      |
| ----------------------- | ------------------------------- |
| `.prettierrc`           | Prettier                        |
| `.prettierignore`       | Prettier (arquivos ignorados)   |
| `eslint.config.mjs`     | ESLint + eslint-config-prettier |
| `commitlint.config.mjs` | Commitlint                      |
| `.husky/pre-commit`     | Hook de pre-commit              |
| `.husky/commit-msg`     | Hook de commit-msg              |
| `package.json`          | lint-staged config + scripts    |

---

## Configuração Inicial

Ao clonar o projeto, execute:

```bash
pnpm install
```

O script `prepare` do `package.json` configurará automaticamente o Husky.
