<div align="center">

<h1>🎨 Estudos de Frontend</h1>

<p>onde tudo começou. HTML semântico, CSS na veia, tipografia, layouts, tabelas, formulários e os primeiros exercícios de interface — sem framework, sem atalho, na base mesmo.</p>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![Google Fonts](https://img.shields.io/badge/Google%20Fonts-4285F4?style=flat&logo=google&amp;logoColor=white)](https://fonts.google.com/)
[![Status](https://img.shields.io/badge/status-arquivo%20histórico-lightgrey?style=flat)]()

</div>

---

## sobre este repositório

esse repo é o começo da linha do tempo.

antes do Django, antes do DRF, antes do Flutter, tinha HTML puro e CSS do zero. aqui ficam as aulas e exercícios dos primeiros contatos com desenvolvimento web, do primeiro `<h1>` até layouts com gradiente, animações CSS e tipografia com intenção.

não é um projeto de portfólio. é o registro de onde eu saí.

guardo isso público de propósito: qualquer dev que olha só o resultado final não tem ideia do que custou chegar lá. aqui dá pra ver.

---

## estrutura

```
📁 estudos-frontend/
├── 📁 aulas/                        # exercícios guiados em aula
│   ├── 📁 intro-html/               # primeiros passos: tags, listas, links
│   ├── 📁 formulario-css/           # CSS inline, interno e externo na prática
│   ├── 📁 fontes/                   # tipografia com Google Fonts
│   ├── 📁 tabelas/                  # estrutura de tabelas HTML semânticas
│   ├── 📁 portifólio-html/          # primeiro layout real com nav e seções
│   └── 📁 dashboard/                # estrutura de dashboard (em andamento)
└── 📁 exercicios/                   # exercícios livres e experimentações
    ├── 📁 site-evento/              # landing page de evento anos 2000
    ├── 📁 site-evento2/             # variação de evento com galeria
    ├── 📁 site-portifólio/          # página pessoal com seções
    ├── 📁 site-receita/             # página de receita com animações
    └── 📁 tabelas/                  # exercícios de listas e iframe
```

---

## o que tem em cada pasta

### `aulas/`

#### `intro-html/`

o começo de tudo. tags básicas, formatação de texto, listas ordenadas e desordenadas, links, blockquote. o primeiro arquivo HTML que eu escrevi na vida está aqui.

**tags praticadas:** `h1`–`h6`, `p`, `b`, `i`, `u`, `s`, `a`, `ul`, `ol`, `li`, `blockquote`, `hr`

---

#### `formulario-css/`

o mesmo layout implementado três vezes, cada um com um método diferente de aplicar CSS.

| arquivo | método | o que aprende |
|---------|--------|---------------|
| `inline.html` | estilo direto na tag | como funciona, por que não escala |
| `interno.html` | `<style>` no `<head>` | separação HTML/CSS dentro do mesmo arquivo |
| `externo.html` | arquivo `.css` separado | o jeito certo de fazer |

o tema foi uma página sobre Bryan Adams com gradientes, hover na imagem, botão animado e `@keyframes` no header. deu pra testar bastante coisa além do básico.

---

#### `fontes/`

quatro fontes do Google Fonts, cada uma com uma identidade visual diferente.

| fonte | classificação | quando usar |
|-------|--------------|-------------|
| Poppins | sans-serif geométrica | interfaces modernas, tech |
| Merriweather | serif clássica | editorial, leitura longa |
| Staatliches | display condensada | títulos de impacto |
| Gochi Hand | script | projetos com personalidade |

cada arquivo tem CSS próprio com paleta de cores pensada pra combinar com a personalidade da fonte. não foi só trocar a `font-family`.

---

#### `tabelas/`

estrutura semântica de tabela com `thead`, `tbody` e `tfoot`. parece simples mas é onde a maioria esquece o `tfoot` e deixa tudo no `tbody`.

---

#### `portifólio-html/`

primeiro layout com estrutura real: `header`, `nav` com flexbox, `main` com seções, `footer` fixo. CSS externo com paleta de cores consistente, `box-shadow` na imagem e links estilizados na nav.

foi o exercício que mostrou como CSS começa a fazer sentido quando você tem um layout inteiro pra montar, não só um elemento isolado.

---

#### `dashboard/`

estrutura inicial de um dashboard de turma com nav para motores, sensores e telemetria. exercício de organização de interface antes de entrar no conteúdo dinâmico.

---

### `exercicios/`

#### `site-evento/`

landing page temática de festa anos 2000 com hero section, cards, navegação interna com âncoras e integração com Spotify. uso de Poppins, gradientes e estrutura semântica completa.

**destaque técnico:** navegação por âncoras (`#o-que-esperar`, `#confirmar`), cards com flexbox, hero com call-to-action.

---

#### `site-evento2/`

variação de landing page de evento com galeria de imagens e múltiplos arquivos CSS (provavelmente teste de organização de estilos).

---

#### `site-portifólio/`

página pessoal com seções "sobre mim", lista de favoritos e galeria de fotos. tom informal, estrutura semântica, CSS externo.

**contexto:** exercício de apresentação pessoal com HTML/CSS puro.

---

#### `site-receita/`

página de receita com imagem, animações CSS e layout estilizado. mesmo tema da pasta `aulas/formulario-css/` mas com variações de implementação.

---

#### `tabelas/`

exercícios de listas (`ul`, `ol`) e embed de vídeo com `iframe`. páginas temáticas sobre músicas (Fleetwood Mac, Mariah Carey) com background fixo, `backdrop-filter`, media queries e CSS inline no `<style>`.

**destaque técnico:** uso de `backdrop-filter: blur()`, `position: fixed` no background, navegação entre páginas.

---

## o que esse repo mostra na prática

**semântica HTML de verdade** — `header`, `nav`, `main`, `section`, `footer`, `thead`, `tbody`, `tfoot` nos lugares certos, não só `div` pra tudo.

**três formas de CSS** — inline, interno e externo, com consciência de quando cada um faz sentido (e quando não faz).

**tipografia com intenção** — não é só trocar fonte. é entender que Merriweather pede um fundo claro, que Staatliches não funciona em corpo de texto, que misturar display com sans-serif no mesmo layout é uma decisão, não um acidente.

**CSS além do básico** — `@keyframes`, `transition`, `transform`, `linear-gradient`, `radial-gradient`, `box-shadow` com rgba, `flexbox`, `backdrop-filter`. tudo aplicado em contexto real, não em exercício isolado.

**progressão visível** — dá pra ver o código ficando mais limpo, mais intencional, mais organizado de pasta em pasta.

---

## tecnologias

| tecnologia | uso |
|-----------|-----|
| HTML5 | estrutura e semântica |
| CSS3 | estilização, animações, layout |
| Google Fonts | tipografia (Poppins, Merriweather, Staatliches, Gochi Hand) |
| Flexbox | navegação e alinhamento |
| CSS Animations | `@keyframes`, `transition`, `transform` |

---

## contexto

esses arquivos foram produzidos durante o curso **Técnico em Desenvolvimento de Sistemas** no **SENAI**, nas primeiras semanas de contato com desenvolvimento web.

o que veio depois disso está em outros repos: Django com CRUD completo, APIs REST com DRF, app Flutter com arquitetura por features. mas tudo começou aqui.

---

## contato

feito por **Paola Soares Machado**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Paola%20Soares%20Machado-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/paolasoaresmachado)
[![Gmail](https://img.shields.io/badge/Gmail-paolasesi351%40gmail.com-D14836?style=flat&logo=gmail&logoColor=white)](mailto:paolasesi351@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-Paola5858-181717?style=flat&logo=github&logoColor=white)](https://github.com/Paola5858)
