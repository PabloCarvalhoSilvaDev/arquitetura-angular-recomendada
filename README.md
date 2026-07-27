# Arquitetura Angular Recomendada

Projeto Angular 20 alinhado ao [Style Guide oficial](https://angular.dev/style-guide), com componentes standalone e organização por feature.

## Estrutura

```
src/
├── app/
│   ├── shared/               # UI reutilizável, sem regra de negócio
│   │   └── page-header/
│   ├── layout/               # Shell da aplicação (header, nav, outlet)
│   │   ├── main-layout/
│   │   └── sidebar-layout/
│   ├── features/             # Áreas funcionais carregadas sob demanda
│   │   ├── home/
│   │   ├── about/
│   │   └── products/
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.ts
├── main.ts
└── styles.css
```

## Camadas

| Pasta         | O que vai aqui                                      | O que não vai                  |
| ------------- | --------------------------------------------------- | ------------------------------- |
| `shared/`   | Botões, headers, pipes, directives genéricos      | Serviços com regra de negócio |
| `layout/`   | Header, footer, sidebar, shell                      | Páginas de feature             |
| `features/` | Tudo de um domínio (UI + rotas + serviços locais) | Infraestrutura global           |

Crie `core/` somente quando houver infraestrutura global real, como autenticação ou
interceptors. Pastas vazias e código de exemplo não utilizado aumentam a complexidade sem benefício.

## Princípios do Style Guide

1. **Organize por feature**, não por tipo (`components/`, `services/`, `pipes/`).
2. **Agrupe arquivos relacionados** no mesmo diretório (`.ts`, `.html`, `.css`, `.spec.ts`).
3. **Um conceito por arquivo** (um componente/serviço por arquivo, em geral).
4. Use `loadComponent` para telas isoladas e `loadChildren` quando uma feature possuir várias rotas.

## Como adicionar uma feature

```bash
mkdir src/app/features/products
ng generate component features/products/product-list --standalone
```

Para uma única tela, registre diretamente em `app.routes.ts`:

```ts
{
  path: 'produtos',
  title: 'Produtos',
  loadComponent: () =>
    import('./features/products/products').then((m) => m.Products),
}
```

## Scripts

```bash
npm start      # ng serve
npm run build  # build de produção
npm test       # testes unitários
```
