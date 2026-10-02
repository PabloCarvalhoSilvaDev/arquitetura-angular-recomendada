# Como baixar este template para um novo projeto Git

Este repositório é um **template** de arquitetura Angular 20. Use-o como ponto de partida de um projeto novo, em vez de clonar e continuar no mesmo histórico do template.

Repositório de origem:

```
https://github.com/PabloCarvalhoSilvaDev/arquitetura-angular-recomendada
```

## Pré-requisitos

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) — versão fixada em [`.nvmrc`](.nvmrc) (recomendado: [nvm](https://github.com/nvm-sh/nvm) / nvm-windows)
- npm (vem com o Node)

Confira no terminal:

```bash
git --version
nvm use          # ou: nvm install  (lê .nvmrc)
node --version
npm --version
```

**Angular CLI:** não é necessário `npm install -g @angular/cli`. Na pasta do projeto use `npx ng ...` ou `npm run ng -- ...`.

---

## Opção 1 — Usar como template no GitHub (recomendado)

Cria um repositório **novo**, sem o histórico de commits do template.

### 1. Marcar o repositório como template (uma vez)

No GitHub, abra o repositório do template:

1. **Settings**
2. Marque **Template repository**

### 2. Gerar o projeto novo

1. Abra [arquitetura-angular-recomendada](https://github.com/PabloCarvalhoSilvaDev/arquitetura-angular-recomendada)
2. Clique em **Use this template** → **Create a new repository**
3. Informe o **nome** do repositório, a visibilidade (público/privado) e confirme

### 3. Clonar o repositório gerado

```bash
git clone https://github.com/SEU-USUARIO/SEU-NOVO-PROJETO.git
cd SEU-NOVO-PROJETO
nvm use
npm install
npm start
```

Substitua `SEU-USUARIO` e `SEU-NOVO-PROJETO` pelos dados do repositório criado.

---

## Opção 2 — Clonar e iniciar um Git novo (sem GitHub Template)

Use quando o repositório ainda **não** estiver marcado como template, ou quando quiser uma cópia local independente.

### Windows (PowerShell)

```powershell
git clone https://github.com/PabloCarvalhoSilvaDev/arquitetura-angular-recomendada.git meu-projeto
cd meu-projeto
Remove-Item -Recurse -Force .git
git init
git add .
git commit -m "chore: projeto inicial a partir do template de arquitetura Angular"
```

### Linux / macOS

```bash
git clone https://github.com/PabloCarvalhoSilvaDev/arquitetura-angular-recomendada.git meu-projeto
cd meu-projeto
rm -rf .git
git init
git add .
git commit -m "chore: projeto inicial a partir do template de arquitetura Angular"
```

O `Remove-Item` / `rm -rf .git` apaga o histórico do template. O `git init` cria um repositório Git **novo**.

### Publicar no GitHub

Crie um repositório vazio no GitHub (sem README, sem `.gitignore` e sem licença). Depois:

```bash
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-NOVO-PROJETO.git
git push -u origin main
```

---

## Opção 3 — Cópia sem histórico (`degit`)

Baixa os arquivos do template **sem** a pasta `.git`:

```bash
npx degit PabloCarvalhoSilvaDev/arquitetura-angular-recomendada meu-projeto
cd meu-projeto
git init
git add .
git commit -m "chore: projeto inicial a partir do template de arquitetura Angular"
nvm use
npm install
```

Em seguida, adicione o `origin` e faça o `push`, como na opção 2.

---

## Depois de baixar

1. Instale dependências e suba o servidor:

   ```bash
   nvm use
   npm install
   npm start
   ```

   A aplicação fica em `http://localhost:4200/`.

2. Valide a qualidade (recomendado antes do primeiro commit no produto):

   ```bash
   npm run build
   npm run lint
   npm test
   npm run format:check
   ```

   Checklist detalhado: [CHECKLIST-QUALIDADE.md](CHECKLIST-QUALIDADE.md).

3. Ajuste o nome do projeto em:

   - `package.json` → campo `"name"`
   - `angular.json` → chave em `"projects"`

4. Troque textos de exemplo (título em `core/titulo/titulo-aplicacao.config.ts`, menu, páginas) pelo conteúdo do produto real.

5. Não commite `node_modules/`. Ele já está no `.gitignore`.

---

## O que não fazer

| Evite | Por quê |
| ----- | ------- |
| Continuar desenvolvendo no clone do template sem trocar o `origin` | Commits e pushes vão para o repositório do template |
| Fazer *fork* só para um projeto interno novo | Fork mantém vínculo com o original; template ou `git init` isolam o histórico |
| Copiar a pasta com o `.git` antigo | O projeto novo herda o histórico e o remote do template |

Se você clonou o template e o `origin` ainda aponta para ele, confira com:

```bash
git remote -v
```

Troque o remote assim:

```bash
git remote remove origin
git remote add origin https://github.com/SEU-USUARIO/SEU-NOVO-PROJETO.git
```

---

## Resumo

| Situação | Caminho |
| -------- | ------- |
| Repositório já é template no GitHub | **Use this template** e clone o repo gerado |
| Precisa de uma cópia local independente | Clone, apague `.git`, rode `git init` |
| Quer só os arquivos, sem histórico | `npx degit ...` e depois `git init` |

Estrutura (`core/`, `shared/`, `layout/`, `features/`), scripts e qualidade: [README.md](README.md).
