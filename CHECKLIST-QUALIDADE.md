# Checklist de qualidade Angular

Use este documento para marcar **segue / não segue** boas práticas do template. Referência de convenções: [`.cursor/rules/angular-20.mdc`](.cursor/rules/angular-20.mdc).

---

## Registro da verificação

Preencha uma vez por PR, release ou rodada de testes.

| Campo                            | Valor |
| -------------------------------- | ----- |
| Data                             |       |
| Branch / PR                      |       |
| Responsável                     |       |
| Escopo (feature, refactor, etc.) |       |

**Legenda:** marque `[x]` quando passar; deixe `[ ]` quando falhar; use **N/A** na nota se não aplicável.

---

## 1. Pipeline automático (obrigatório)

Rode na raiz do projeto (`npm` / `npx` — não depende de `ng` global).

| OK     | Comando                                           | Resultado esperado (segue) | Notas                                                             |
| ------ | ------------------------------------------------- | -------------------------- | ----------------------------------------------------------------- |
| [ x ]  | `npm run build`                                 | Termina sem erro           | Compilador +`strictTemplates`                                   |
| [ x ]  | `npm run lint`                                  | `All files pass linting` | [angular-eslint](https://github.com/angular-eslint/angular-eslint) |
| [ x ]  | `npm test`                                      | Todos os specs passam      | Karma/Jasmine                                                     |
| [ x ] | `npx prettier --check "src/**/*.{ts,html,css}"` | Exit code 0                | Formatação alinhada ao`package.json`                          |

**Veredicto pipeline:** [ ] Tudo verde &nbsp;&nbsp; [ ] Algum item falhou (descrever abaixo)

Falhas / links:

```
(cole saída resumida ou link do CI)
```

---

## 2. Código alterado — convenções do template

Avalie só o que mudou nesta entrega (ou o projeto inteiro, se for baseline).

### Arquitetura

| OK     | Item                     | Segue quando…                                                                            |
| ------ | ------------------------ | ----------------------------------------------------------------------------------------- |
| [ x ]  | Pasta correta            | `features/` (domínio), `shared/` (UI), `layout/` (shell), `core/` (infra global) |
| [ x ]  | Nome pt-BR               | pasta = arquivo principal = classe (`empresas/empresas.ts` → `Empresas`)             |
| [ x ] | Arquivos agrupados       | `.ts`, `.html`, `.css`, `.spec.ts` juntos na mesma pasta                          |
| [ x ] | Rotas lazy               | Telas via`loadComponent` (ou `loadChildren` se várias rotas na feature)              |
| [ x ] | `core/` enxuto         | Nada de tela ou regra de negócio de feature em`core/`                                  |
| [ x ] | `shared/` sem domínio | Sem serviços com regra de negócio de uma feature                                        |

### TypeScript e Angular

| OK      | Item               | Segue quando…                                                                    |
| ------- | ------------------ | --------------------------------------------------------------------------------- |
| [ x ]   | Build strict       | Sem`any` evitável; tipos coerentes                                             |
| [ x ]   | Standalone         | Sem`NgModule` novo; sem `standalone: true` explícito                         |
| [ x ]   | API do componente  | `input()` / `output()` (não `@Input` / `@Output`)                        |
| [ x ]   | Templates          | `@if`, `@for`, `@switch` (não `*ngIf`, `*ngFor`, `*ngSwitch`)        |
| [ x ]  | Estilo no template | Sem`ngClass` / `ngStyle`; bindings nativos de `class` / `style`           |
| [ N/A]  | Change detection   | OnPush em componentes**novos ou alterados** (recomendado)                   |
| [ x ]  | Serviços          | `inject()` preferido; singleton com `providedIn: 'root'` ou `app.config.ts` |
| [ N/A ] | Host               | Bindings no objeto`host`, não `@HostBinding` / `@HostListener`             |
| [ N/A]  | Imagens            | `<img>` estático com `NgOptimizedImage` quando houver                        |

### Acessibilidade (UI nova ou alterada)

| OK     | Item        | Segue quando…                                          |
| ------ | ----------- | ------------------------------------------------------- |
| [ x ]  | Semântica  | Headings, landmarks, botões/links corretos             |
| [ x ]  | Navegação | `<nav aria-label="...">` onde couber                  |
| [ x ] | Foco        | Ordem de tab e foco visível utilizáveis               |
| [ x ] | Lint a11y   | `npm run lint` sem erros de `templateAccessibility` |

### Testes

| OK    | Item             | Segue quando…                              |
| ----- | ---------------- | ------------------------------------------- |
| [ x ] | Specs            | Comportamento novo relevante coberto ou N/A |
| [ x ] | Specs existentes | Ainda passam após a mudança               |

---

## 3. Laboratório — testar “não segue” (opcional)

Use **branch descartável** ou arquivo temporário: introduza a violação → confirme que a ferramenta **falha** → reverta.

| OK     | Teste        | Violação (exemplo)                    | Deve falhar em       |
| ------ | ------------ | --------------------------------------- | -------------------- |
| [ x ]  | Selector     | `selector: 'wrong'` no `@Component` | `npm run lint`     |
| [ x ] | Compilador   | tipo errado no template                 | `npm run build`    |
| [ x ]  | Prettier     | salvar`.ts` sem formatar              | `prettier --check` |
| [ x ] | Control flow | `*ngIf` no HTML                       | `npm run lint` *   |
| [ x ] | OnPush       | componente novo sem OnPush              | `npm run lint` *   |

\* Só falha se a regra correspondente estiver em `error` no [`eslint.config.js`](eslint.config.js). Hoje o preset padrão pode **não** acusar control flow / OnPush — anote o resultado real na coluna abaixo.

Resultados do laboratório:

| Teste        | Falhou como esperado? (S/N) | Observação |
| ------------ | --------------------------- | ------------ |
| Selector     |                             |              |
| Compilador   |                             |              |
| Prettier     |                             |              |
| Control flow |                             |              |
| OnPush       |                             |              |

---

## 4. O que ainda é revisão manual

Marque se você revisou conscientemente (não há comando no repo hoje).

| OK  | Item                                                     |
| --- | -------------------------------------------------------- |
| [ ] | Feature A não importa código de feature B              |
| [ ] | Menu / rotas alinhados (`app.routes.ts` + links)       |
| []  | Textos e títulos coerentes com`TitleStrategy`         |
| [ ] | WCAG AA amplo / AXE em E2E (quando existir pipeline E2E) |

---

## 5. Veredicto final

|     |                                                                   |
| --- | ----------------------------------------------------------------- |
| [ ] | **Aprovado** — pipeline verde + seção 2 ok para o escopo |
| [ ] | **Aprovado com ressalvas** — descrever                     |
| [ ] | **Reprovado** — corrigir antes de merge                    |

Ressalvas / débitos técnicos:

```
```

---

## Referência rápida

```bash
npm run build
npm run lint
npm test
npx prettier --check "src/**/*.{ts,html,css}"
```

Para endurecer o lint (control flow, OnPush), edite regras em `eslint.config.js` — ver [angular-eslint rules](https://github.com/angular-eslint/angular-eslint/blob/main/docs/RULES_LIST.md).
