<div align="center">

# Sistemas Operacionais

**Análise e Desenvolvimento de Sistemas** · Unopar · 2026.2

*Prof. Thiago Lopes*

<br>

[![Acessar o material](https://img.shields.io/badge/📚_ACESSAR_O_MATERIAL-FFB000?style=for-the-badge&logoColor=15121A)](https://SEU-USUARIO.github.io/so2026/)

<br>

`17 aulas` · `51 horas` · `Segundas-feiras` · `Agosto a Dezembro`

</div>

---

## Sobre a disciplina

Sistemas Operacionais tem fama de ser uma disciplina teórica. Ela é — não dá para fugir de kernel, escalonamento e memória virtual, e nem queremos.

Mas aqui existe um acordo: **toda teoria apresentada vira comando no terminal no mesmo dia.** Você não vai apenas estudar o que é um processo. Vai listar os seus, mudar a prioridade deles, matá-los e vê-los renascer.

No fim do semestre você terá **uma aplicação sua rodando sozinha em um servidor Linux** — como serviço de verdade, com usuário próprio, permissões corretas, log estruturado e reinício automático.

O tipo de coisa que se conta em entrevista de emprego.

---

## Como usar o material

Cada aula é uma apresentação que abre direto no navegador. Nada para instalar.

| Ação | Atalho |
|:--|:--|
| Avançar | `→` · `Espaço` · deslizar para o lado |
| Voltar | `←` |
| Início / fim | `Home` / `End` |
| Tela cheia | `F` |
| Voltar ao menu | `Esc` |

Cada slide tem endereço próprio. Se você precisar mandar um trecho específico para um colega, é só copiar a URL — `aula05.html#7` abre direto no slide 7.

Precisa estudar offline? Abra qualquer aula e use `Ctrl+P` para gerar um PDF com um slide por página.

> As aulas são publicadas **após** cada encontro presencial. O que ainda aparece como *"Em breve"* será liberado no dia.

---

## O caminho até dezembro

### Módulo 01 · Fundamentos
`Aulas 1 – 4`

O que é um sistema operacional, de onde ele veio e como conversa com o hardware. Kernel, modo usuário e modo kernel, chamadas de sistema. O terminal deixa de ser assustador.

### Módulo 02 · Processos e Threads
`Aulas 5 – 8`

O que acontece quando um programa vira processo. Estados, hierarquia, escalonamento. Threads compartilhando memória — e os bugs que só aparecem em produção.

### Módulo 03 · Arquivos e Permissões
`Aulas 9 – 12`

Onde os dados moram e quem tem direito de tocá-los. Inodes, `chmod`, `chown` e automação com Shell Script.

### Módulo 04 · Memória e Deploy
`Aulas 13 – 15`

Como a RAM é dividida e por que a memória virtual é a ilusão mais bem construída da computação. E o momento em que a sua aplicação sobe como serviço real.

### Módulo 05 · Entrega
`Aulas 16 – 17`

Apresentação dos projetos e a última lição: consertar vale mais que construir.

---

## O que você precisa

**Notebook em todas as aulas.** Não é opcional — metade de cada encontro é você digitando.

**Acesso a um Linux.** Qualquer uma das opções abaixo serve:

- **Windows** → WSL 2 com Ubuntu *(recomendado — é o mais rápido de configurar)*
- **macOS** → terminal nativo, com alguns comandos adaptados
- **Linux** → você já está pronto
- **Qualquer sistema** → máquina virtual com VirtualBox

Vamos padronizar em **Ubuntu**. Não por ser melhor que as outras distribuições, mas porque assim o problema de um é o problema de todos — e a gente resolve junto em vez de debugar trinta ambientes diferentes.

---

## O projeto do semestre

A partir da **Aula 13**, cada aluno coloca uma aplicação Node.js no ar como serviço Linux completo: usuário dedicado, permissões mínimas, unit file do systemd, log no journal e limites de recurso.

O código da aplicação é gerado por IA, a partir de um prompt padronizado. Isso é proposital — o objetivo da disciplina não é escrever CRUD, é **fazer o sistema rodar e mantê-lo rodando**.

<div align="center">
<br>

### IA faz o que roda dentro.<br>Você faz o que faz rodar.

<br>
</div>

A avaliação não recai sobre o código gerado. Recai sobre o que você construiu em volta dele — e sobre a sua capacidade de descobrir a causa quando ele parar de funcionar.

---

## Calendário

| | Agosto | Setembro | Outubro | Novembro | Dezembro |
|:--|:--|:--|:--|:--|:--|
| | **10** · Aula 01 | ~~07~~ · Feriado | **05** · Aula 08 | ~~02~~ · Feriado | **07** · Aula 15 |
| | **17** · Aula 02 | **14** · Aula 05 | ~~12~~ · Feriado | **09** · Aula 11 | **14** · Aula 16 |
| | **24** · Aula 03 | **21** · Aula 06 | **19** · Aula 09 | **16** · Aula 12 | **21** · Aula 17 |
| | **31** · Aula 04 | **28** · Aula 07 | **26** · Aula 10 | **23** · Aula 13 | |
| | | | | **30** · Aula 14 | |

---

## Bibliografia

**TANENBAUM, Andrew S.** · *Sistemas Operacionais Modernos*
**MACHADO, Francis B.; MAIA, Luiz P.** · *Arquitetura de Sistemas Operacionais*

Material complementar de Linux, permissões e Shell Script é disponibilizado ao longo do semestre.

---

<div align="center">

**Prof. Thiago Lopes**

Desenvolvedor Full Cycle · CEO da Daring Tech, TGMA e LabsDev
Relações Institucionais · Ninhotech — Governança de Inovação de Arapongas

[thiagolopesdev.com.br](https://thiagolopesdev.com.br)

<br>

<sub>Dúvida durante a semana? Traga para a aula seguinte.<br>
Em terminal, dúvida não resolvida vira erro acumulado três aulas depois.</sub>

</div>
