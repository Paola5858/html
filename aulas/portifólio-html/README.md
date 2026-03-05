# portifólio-html

primeiro layout completo com estrutura semântica.

## arquivos

- `index.html` — estrutura HTML
- `style.css` — estilos externos
- `empresaria.png` — imagem de perfil

## estrutura HTML

```
<header> — cabeçalho com título
<nav> — navegação com flexbox
<main> — conteúdo principal
  <section> — seções temáticas
<footer> — rodapé fixo
```

## técnicas aplicadas

- `flexbox` no `<nav>` com `gap`
- `box-shadow` na imagem
- `position: fixed` no footer
- paleta de cores consistente (#af4c84)

## problema conhecido

`position: fixed` no footer sobrepõe conteúdo em páginas curtas. `position: sticky` seria melhor.

## contexto

primeiro exercício de layout real. mostrou como CSS faz sentido quando você tem estrutura completa, não só elementos isolados.
