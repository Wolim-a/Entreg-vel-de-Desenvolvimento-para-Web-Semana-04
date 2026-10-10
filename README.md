# Desafios de JavaScript: Arrays, DOM e Eventos

Projeto da aula sobre Arrays, DOM e Eventos em JavaScript.

## Como usar

1. Abra o arquivo `index.html` no navegador.
2. Aperte **F12** para abrir o Console e ver os resultados.

O código fica no `app.js`, dividido em 3 blocos.

## Bloco 1: Arrays

- **forEach**: passa por cada item do array e faz algo com ele (ex.: imprimir no console). Não devolve nada.
- **map**: pega cada item, transforma e devolve um **novo array** (ex.: nomes em maiúsculas).
- **filter**: devolve um **novo array** só com os itens que passam em uma condição (ex.: preços acima de 20).
- **reduce**: junta todos os itens em **um único valor** (ex.: soma de todos os preços).

O `map` e o `filter` não mudam o array original.

## Bloco 2: DOM

O DOM é a página HTML vista pelo JavaScript. Com ele dá para mudar a página.

- `querySelector` e `querySelectorAll`: escolhem elementos da página (por `#id` ou `.classe`).
- `textContent`: troca o texto de um elemento.
- `innerHTML`: coloca HTML dentro de um elemento (usado para inserir os 2 itens da lista).
- `createElement`: cria um elemento novo (ex.: um `<li>`).
- `append`: coloca o elemento criado dentro de outro na página.
- `classList.add`: adiciona uma classe CSS. `classList.contains`: confere se o elemento tem a classe.

## Bloco 3: Eventos

Evento é algo que o usuário faz na página (clicar, passar o mouse, digitar, enviar um formulário). O `addEventListener` diz o que fazer quando isso acontecer.

- No formulário, o `e.preventDefault()` impede a página de recarregar.
- O `.trim()` tira os espaços das pontas, assim campo vazio não vira item.

### Event Delegation

Em vez de colocar um listener em cada `<li>`, colocamos **um só na lista** (`#lista`). Quando alguém clica em um item, o clique também chega na lista, e o `e.target` mostra qual item foi clicado. Se for um `LI`, fazemos a ação.

Por que isso é bom:

- **Performance**: é um listener só, em vez de um para cada item.
- **Itens novos funcionam**: um `<li>` criado depois pelo JavaScript ou pelo formulário já responde ao clique, sem precisar colocar listener nele.
