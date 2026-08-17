# Sistemas Operacionais — 2026.2

Material da disciplina de Sistemas Operacionais do curso de Análise e Desenvolvimento de Sistemas.

**Prof. Thiago Lopes** · Unopar · [thiagolopesdev.com.br](https://thiagolopesdev.com.br)

---

## Estrutura

```
.
├── index.html          ← menu principal
├── assets/
│   ├── deck.css        ← estilo compartilhado
│   └── deck.js         ← navegação compartilhada
├── aula01.html ... aula17.html
└── README.md
```

Os arquivos `assets/` são compartilhados por todos os decks. Alterar uma cor
ou um espaçamento ali muda as 17 aulas de uma vez.

---

## Publicando uma aula

Cada aula fica **oculta** no menu até ser liberada.

1. Suba o `aulaXX.html` da semana.
2. Abra o `index.html` e localize a linha da aula dentro de `var MODULOS`.
3. Troque `pub: false` por `pub: true`.
4. Faça commit dos dois arquivos.

```js
{ id: '02', data: '17.08', pub: true, tt: 'História e tipos de SO',
  ds: 'Das válvulas ao smartphone...' },
```

Só isso. O card sai de "Em breve" e vira link clicável.

---

## Publicando no GitHub Pages

1. Crie o repositório e envie os arquivos.
2. Em **Settings → Pages**, selecione a branch `main` e a pasta `/ (root)`.
3. O site fica disponível em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

Todos os caminhos são relativos, então funciona em qualquer subpasta.

---

## Navegação nos decks

| Ação | Atalho |
|---|---|
| Próximo slide | `→` · `Espaço` · `PageDown` · deslizar |
| Slide anterior | `←` · `PageUp` |
| Primeiro / último | `Home` / `End` |
| Tela cheia | `F` ou o botão na barra |
| Voltar ao menu | `Esc` |

Cada slide tem endereço próprio: `aula05.html#7` abre direto no slide 7.
Útil para retomar a aula depois do intervalo.

---

## Imprimindo em PDF

`Ctrl+P` em qualquer deck gera um PDF com um slide por página — o CSS já tem
regras de impressão. Serve para o aluno que pede material offline.

---

## Programa

| Módulo | Aulas | Conteúdo |
|---|---|---|
| 01 · Fundamentos | 1–4 | Conceitos, história, kernel, chamadas de sistema, shell |
| 02 · Processos e Threads | 5–8 | PCB, estados, threads, escalonamento, sincronização |
| 03 · Arquivos e Permissões | 9–12 | Inodes, chmod/chown, shell script |
| 04 · Memória e Deploy | 13–15 | Alocação, memória virtual, systemd, observabilidade |
| 05 · Entrega | 16–17 | Apresentação, diagnóstico, fechamento |

**17 encontros · 51 horas · segundas-feiras · agosto a dezembro de 2026**

Feriados nacionais que caem na segunda: 07/09, 12/10 e 02/11.

---

## O projeto do semestre

Os alunos colocam uma aplicação Node.js no ar como serviço Linux real:
usuário dedicado, permissões mínimas, unit file do systemd, log no journal
e limites de recurso.

O código da aplicação é gerado por IA a partir de um prompt padronizado
(Aula 13). A camada de sistema operacional é inteiramente executada pelo aluno
— e é o que vale nota.

> **IA faz o que roda dentro. Você faz o que faz rodar.**
