# fontes

quatro fontes do Google Fonts, cada uma com identidade visual própria.

## arquivos

| fonte | classificação | quando usar | arquivo |
|-------|--------------|-------------|---------|
| Poppins | sans-serif geométrica | interfaces modernas, tech | `fonte1.html` + `fonte1.css` |
| Merriweather | serif clássica | editorial, leitura longa | `fonte2.html` + `fonte2.css` |
| Staatliches | display condensada | títulos de impacto | `fonte3.html` + `fonte3.css` |
| Gochi Hand | script | projetos com personalidade | `fonte4.html` + `fonte4.css` |

## decisões técnicas

- **fonte3.css** usa Staatliches só no título e stack de sistema no corpo (fonte display não funciona em texto longo)
- **fonte4.css** importa duas fontes (Gochi Hand + Poppins) — poderia ser otimizado com um único `@import`

## o que aprendi

não é só trocar `font-family`. cada fonte pede paleta de cores, espaçamento e hierarquia específicos.

## contexto

exercício de tipografia. cada arquivo tem CSS próprio com paleta pensada pra combinar com a personalidade da fonte.
