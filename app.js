console.log("===== BLOCO 1 =====");
const nomes = ["Ana", "Bruno", "Carla"];
nomes.forEach(nome => console.log(`Olá, ${nome}!`));
const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
console.log("Nomes em maiúsculas:", nomesMaiusculos);
console.log("Array original intacto:", nomes);

const precos = [10, 25, 40, 5, 60];
const precosAcima20 = precos.filter(preco => preco > 20);
console.log("Preços acima de 20:", precosAcima20);
const somaPrecos = precos.reduce((acc, preco) => acc + preco, 0);
console.log("Soma dos preços:", somaPrecos);

const produtos = [
  { nome: "Caderno", preco: 15 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caneta", preco: 4 },
  { nome: "Calculadora", preco: 45 }
];
const nomesProdutos = produtos.map(p => p.nome);
console.log("Nomes dos produtos:", nomesProdutos);
const produtosBaratos = produtos.filter(p => p.preco < 50);
console.log("Produtos com preço < 50:", produtosBaratos);
const totalProdutos = produtos.reduce((acc, p) => acc + p.preco, 0);
console.log("Soma dos preços dos produtos:", totalProdutos);
produtos.forEach(p => console.log(`${p.nome}: R$ ${p.preco}`));

console.log("===== BLOCO 2 =====");

const meuNome = "Jubileu";

const titulo = document.querySelector("#titulo");
titulo.textContent = `Blog do ${meuNome}`;

const paragrafos = document.querySelectorAll(".texto");
paragrafos.forEach(p => console.log("Parágrafo:", p.textContent));

const lista = document.querySelector("#lista");
lista.innerHTML += `
  <li>Primeiro item</li>
  <li>Segundo item</li>
`;

const terceiro = document.createElement("li");
terceiro.textContent = "Terceiro item";
lista.append(terceiro);

terceiro.classList.add("destaque");
console.log("Terceiro item tem a classe 'destaque'?", terceiro.classList.contains("destaque"));

const tarefas = ["Estudar JS", "Fazer exercícios", "Revisar DOM"];

tarefas.forEach(tarefa => {
  const li = document.createElement("li");
  li.textContent = tarefa;
  lista.append(li);
});

lista.querySelector("li").classList.add("feito");

console.log("Total de itens <li> na página:", document.querySelectorAll("li").length);


console.log("===== BLOCO 3 =====");
const botao = document.querySelector("#botao");
botao.addEventListener("click", () => console.log("Clicou!"));
botao.addEventListener("mouseover", () => {
  botao.textContent = "Pode clicar!";
});

const campoNome = document.querySelector("#nome");
campoNome.addEventListener("keyup", () => console.log("Valor atual:", campoNome.value));

lista.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("feito");
    console.log("Item clicado:", e.target.textContent);
  }
});
const itemDinamico = document.createElement("li");
itemDinamico.textContent = "Item criado via JS (clique em mim!)";
lista.append(itemDinamico);
const formulario = document.querySelector("#formulario");
const campoTarefa = document.querySelector("#tarefa");

formulario.addEventListener("submit", e => {
  e.preventDefault();

  const texto = campoTarefa.value.trim();
  if (texto === "") return;
  const li = document.createElement("li");
  li.textContent = texto;
  lista.append(li);

  campoTarefa.value = "";
  campoTarefa.focus();
});
