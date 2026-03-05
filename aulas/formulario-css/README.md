# formulario-css

mesmo layout implementado três vezes com métodos diferentes de CSS.

## arquivos

| arquivo | método | observação |
|---------|--------|------------|
| `inline.html` | CSS direto na tag | usa JavaScript inline para hover (não escala) |
| `interno.html` | `<style>` no `<head>` | CSS e HTML no mesmo arquivo |
| `externo.html` | arquivo `.css` separado | método correto |
| `receita.css` | folha de estilos externa | usada pelo `externo.html` |

## técnicas aplicadas

- `linear-gradient` — gradientes no background
- `@keyframes fadeInDown` — animação no header
- `transition` — hover suave em imagem e botão
- `transform: translateY()` — movimento vertical no hover
- `box-shadow` com `rgba` — sombras com transparência

## problema conhecido

`inline.html` usa `onmouseover` com JavaScript inline. os outros arquivos corrigem isso com `:hover` em CSS puro.

## contexto

exercício sobre Bryan Adams. tema escolhido pela professora.
