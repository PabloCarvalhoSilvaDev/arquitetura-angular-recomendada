# Arquitetura Angular Recomendada

Projeto Angular 20 com estrutura de pastas alinhada ao [Style Guide oficial](https://angular.dev/style-guide) e às práticas modernas (standalone + feature-first).

## Estrutura

```
src/
├── app/
│   ├── core/                 # Infraestrutura global (singletons)
│   │   ├── auth/             # Auth + guard no mesmo conceito
│   │   └── http/             # Interceptors HTTP
│   ├── shared/               # UI reutilizável, sem regra de negócio
│   │   └── page-header/
│   ├── layout/               # Shell da aplicação (header, nav, outlet)
│   │   └── main-layout/
│   ├── features/             # Domínios de negócio (lazy-loaded)
│   │   ├── home/
│   │   └── about/
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.ts
├── environments/
├── main.ts
└── styles.css
```

## Camadas

| Pasta         | O que vai aqui                                      | O que não vai                          |
| ------------- | --------------------------------------------------- | --------------------------------------- |
| `core/`     | Auth, interceptors, guards, config de app           | Componentes de tela, lógica de feature |
| `shared/`   | Botões, headers, pipes, directives genéricos      | Serviços com regra de negócio         |
| `layout/`   | Header, footer, sidebar, shell                      | Páginas de feature                     |
| `features/` | Tudo de um domínio (UI + rotas + serviços locais) | Infraestrutura global                   |

## Princípios do Style Guide

1. **Organize por feature**, não por tipo (`components/`, `services/`, `pipes/`).
2. **Agrupe arquivos relacionados** no mesmo diretório (`.ts`, `.html`, `.css`, `.spec.ts`).
3. **Um conceito por arquivo** (um componente/serviço por arquivo, em geral).
4. **Features com rotas próprias** e lazy loading via `loadChildren`.

## Como adicionar uma feature

```bash
mkdir src/app/features/produtos
ng generate component features/produtos/produto-lista --standalone
```

Crie `produtos.routes.ts` e registre em `app.routes.ts`:

```ts
{
  path: 'produtos',
  loadChildren: () =>
    import('./features/produtos/produtos.routes').then((m) => m.PRODUTOS_ROUTES),
}
```

## Scripts

```bash
npm start      # ng serve
npm run build  # build de produção
npm test       # testes unitários
```
