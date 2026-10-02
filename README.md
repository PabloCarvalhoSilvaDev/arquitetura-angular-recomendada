# Arquitetura Angular Recomendada

Template Angular 20 alinhado ao [Style Guide oficial](https://angular.dev/style-guide): componentes standalone, lazy loading por feature, ESLint (angular-eslint) e convenções em pt-BR (pasta = arquivo = classe).

## Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) — use a versão do [`.nvmrc`](.nvmrc) (`nvm use` / `nvm install`)
- npm (incluído no Node)

Comandos do Angular CLI **no projeto** (não é obrigatório instalar `ng` global):

```bash
npx ng version
npm run ng -- generate component features/exemplo/exemplo
```

Guia para criar um repositório a partir deste template: [COMO-USAR-O-TEMPLATE.md](COMO-USAR-O-TEMPLATE.md).

## Estrutura

```
src/
├── app/
│   ├── core/                   # Infraestrutura global (quando necessária)
│   │   └── titulo/             # titulo-aplicacao.config.ts, titulo-aplicacao.strategy.ts
│   ├── shared/                 # UI reutilizável, sem regra de negócio
│   │   └── cabecalho-pagina/   # cabecalho-pagina.ts → CabecalhoPagina
│   ├── layout/                 # Shell da aplicação
│   │   ├── principal/          # principal.ts → Principal
│   │   └── menu-lateral/       # menu-lateral.ts → MenuLateral
│   ├── features/               # Áreas funcionais carregadas sob demanda
│   │   ├── inicio/             # inicio.ts → Inicio
│   │   ├── sobre/              # sobre.ts → Sobre
│   │   ├── produtos/           # produtos.ts → Produtos
│   │   └── empresas/           # empresas.ts → Empresas
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.ts
├── main.ts
└── styles.css
```

## Camadas

| Pasta       | O que vai aqui                                       | O que não vai                           |
| ----------- | ---------------------------------------------------- | --------------------------------------- |
| `core/`     | Auth, interceptors, `TitleStrategy`, config de app   | Componentes de tela, lógica de feature  |
| `shared/`   | Botões, cabeçalhos, pipes, directives genéricos      | Serviços com regra de negócio           |
| `layout/`   | Header, menu lateral, shell                          | Páginas de feature                      |
| `features/` | Tudo de um domínio (UI + serviços locais)            | Infraestrutura global                   |

Crie `core/` somente quando houver infraestrutura global real. Neste projeto, `core/titulo` define o título em `titulo-aplicacao.config.ts` e compõe as abas no formato `Início · Arquitetura Angular`.

## Princípios do Style Guide

1. **Organize por feature**, não por tipo (`components/`, `services/`, `pipes/`).
2. **Agrupe arquivos relacionados** no mesmo diretório (`.ts`, `.html`, `.css`, `.spec.ts`).
3. **Um conceito por arquivo** (um componente/serviço por arquivo, em geral).
4. **Nome consistente**: pasta = arquivo = classe (`produtos/produtos.ts` → `Produtos`).
5. Use `loadComponent` para telas isoladas e `loadChildren` quando uma feature possuir várias rotas.

## Como adicionar uma feature

```bash
mkdir src/app/features/clientes
npx ng generate component features/clientes/clientes
```

Registre a rota em `app.routes.ts` e, se necessário, o link em `layout/menu-lateral/menu-lateral.html`:

```ts
{
  path: 'clientes',
  title: 'Clientes',
  loadComponent: () =>
    import('./features/clientes/clientes').then((m) => m.Clientes),
}
```

## Padrões de código e IA

Convenções Angular 20, acessibilidade e arquitetura deste repositório: [`.cursor/rules/angular-20.mdc`](.cursor/rules/angular-20.mdc).

Extensões sugeridas no VS Code/Cursor: [`.vscode/extensions.json`](.vscode/extensions.json).

## Qualidade

| Ferramenta | Função |
| ---------- | ------ |
| `npm run build` | Compilador + templates strict |
| `npm run lint` | [angular-eslint](https://github.com/angular-eslint/angular-eslint) (selectors, control flow, OnPush, a11y em templates) |
| `npm test` | Testes unitários (Karma/Jasmine) |
| `npm run format:check` | Prettier |

Checklist imprimível / PR: [CHECKLIST-QUALIDADE.md](CHECKLIST-QUALIDADE.md).

**Escopo deste template:** qualidade coberta por build, lint, testes e Prettier; **E2E com AXE** fica como evolução opcional nos projetos que nascerem do template (item documentado no checklist).

Para adicionar ESLint em outro projeto Angular 20:

```bash
npx ng add angular-eslint@20
```

(use o **mesmo major** do `@angular/core`).

## Scripts

```bash
npm start              # ng serve — http://localhost:4200/
npm run build          # build de produção
npm run lint           # ESLint
npm test               # testes unitários
npm run format:check   # Prettier (check)
npm run format         # Prettier (corrigir arquivos)
```

## Status do template

- Angular 20 standalone, rotas lazy, shell com menu alinhado às rotas
- `TitleStrategy` para título da aba
- ESLint configurado em [`eslint.config.js`](eslint.config.js)
- Documentação: README, COMO-USAR, checklist de qualidade, regra Cursor
