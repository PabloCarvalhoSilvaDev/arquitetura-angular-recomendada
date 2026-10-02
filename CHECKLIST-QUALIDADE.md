# Checklist de qualidade Angular

Marque **segue / não segue** antes de merge ou release. Convenções: `[.cursor/rules/angular-20.mdc](.cursor/rules/angular-20.mdc)`.

---

## Registro da verificação


| Campo       | Valor |
| ----------- | ----- |
| Data        |       |
| Branch / PR |       |
| Responsável |       |
| Escopo      |       |


**Legenda:** `[x]` passou · `[ ]` falhou · anote **N/A** quando não aplicável.

---

## 1. Pipeline automático (obrigatório)

Rode na raiz (`npm` / `npx` — não depende de `ng` global).


| OK  | Comando                | Resultado esperado       |
| --- | ---------------------- | ------------------------ |
| [ ] | `npm run build`        | Termina sem erro         |
| [ ] | `npm run lint`         | `All files pass linting` |
| [ ] | `npm test`             | Specs passam             |
| [ ] | `npm run format:check` | Exit code 0              |


**Veredicto pipeline:** [ ] Tudo verde    [ ] Falhou

```
(falhas / link CI)
```

---

## 2. Convenções do template (escopo alterado)

### Arquitetura


| OK  | Item                  | Segue quando…                                             |
| --- | --------------------- | --------------------------------------------------------- |
| [ ] | Pasta correta         | `features/`, `shared/`, `layout/`, `core/` conforme papel |
| [ ] | Nome pt-BR            | pasta = arquivo = classe                                  |
| [ ] | Arquivos agrupados    | `.ts`, `.html`, `.css`, `.spec.ts` na mesma pasta         |
| [ ] | Rotas lazy            | `loadComponent` / `loadChildren` em `app.routes.ts`       |
| [ ] | `core/` enxuto        | Sem telas ou regra de negócio de feature                  |
| [ ] | `shared/` sem domínio | Sem serviços de negócio de feature                        |


### TypeScript e Angular


| OK  | Item               | Segue quando…                                                                        |
| --- | ------------------ | ------------------------------------------------------------------------------------ |
| [ ] | Build strict       | Sem `any` evitável                                                                   |
| [ ] | Standalone         | Sem `NgModule` novo; sem `standalone: true` explícito                                |
| [ ] | API do componente  | `input()` / `output()`                                                               |
| [ ] | Templates          | `@if`, `@for`, `@switch` (lint: `prefer-control-flow`)                               |
| [ ] | Estilo no template | Sem `ngClass` / `ngStyle`                                                            |
| [ ] | OnPush             | `ChangeDetectionStrategy.OnPush` (lint: `prefer-on-push-component-change-detection`) |
| [ ] | Serviços           | `inject()` / `providedIn: 'root'` ou `app.config.ts`                                 |


### Acessibilidade


| OK  | Item             | Segue quando…                                       |
| --- | ---------------- | --------------------------------------------------- |
| [ ] | Semântica / foco | Landmarks, headings, tab utilizável                 |
| [ ] | Lint a11y        | `npm run lint` sem erros de `templateAccessibility` |


### Testes


| OK  | Item                                  |
| --- | ------------------------------------- |
| [ ] | Specs cobrem mudança relevante ou N/A |
| [ ] | Specs existentes passam               |


---

## 3. Laboratório — violação proposital (opcional)

Branch ou arquivo temporário → violar → comando **falha** → reverter.


| OK  | Teste        | Violação                | Comando                |
| --- | ------------ | ----------------------- | ---------------------- |
| [ ] | Selector     | `selector: 'wrong'`     | `npm run lint`         |
| [ ] | Compilador   | tipo errado no template | `npm run build`        |
| [ ] | Prettier     | arquivo desformatado    | `npm run format:check` |
| [ ] | Control flow | `*ngIf` no HTML         | `npm run lint`         |
| [ ] | OnPush       | componente sem OnPush   | `npm run lint`         |


Regras em `[eslint.config.js](eslint.config.js)`.

---

## 4. Revisão manual


| OK  | Item                                                                                                                 |
| --- | -------------------------------------------------------------------------------------------------------------------- |
| [ ] | Features não importam outras features                                                                                |
| [ ] | Menu alinhado a `app.routes.ts`                                                                                      |
| [ ] | Títulos da aba coerentes com `TitleStrategy`                                                                         |
| [ ] | WCAG AA + AXE em E2E — **N/A no template**; opcional no produto (`ng add @playwright/test` + `@axe-core/playwright`) |


---

## 5. Veredicto


|       |                            |
| ----- | -------------------------- |
| [ ]   | **Aprovado**               |
| [ x ] | **Aprovado com ressalvas** |
| [ ]   | **Reprovado**              |


Ressalvas:

```

```

---

## Referência rápida

```bash
npm run build
npm run lint
npm test
npm run format:check
```

