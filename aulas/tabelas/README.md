# tabelas

estrutura semântica de tabelas HTML.

## arquivo

- `table.html` — tabela com `thead`, `tbody`, `tfoot`

## estrutura

```html
<table>
  <thead> <!-- cabeçalho --> </thead>
  <tbody> <!-- corpo --> </tbody>
  <tfoot> <!-- rodapé --> </tfoot>
</table>
```

## problema conhecido

usa `border="1"` (atributo HTML depreciado). o correto é via CSS:

```css
table { border-collapse: collapse; }
td, th { border: 1px solid #333; padding: 8px; }
```

## contexto

exercício de estrutura semântica. a maioria esquece o `<tfoot>` e joga tudo no `<tbody>`.
