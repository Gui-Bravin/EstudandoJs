let itens = [];
let b = window.document.querySelector("#num");
let a = window.document.querySelector("#selnum");

function analisar(num, seln) {
  num = b;
  seln = a;
  if (num < 1 || num > 100) {
    alert("Digite um valor valido!");
  } else {
    let n = Number(num.value);
    itens.push = n;
    let item = document.createElement("option");
    item.text = `Valor ${n} adicionado`;
    seln.appendChild(item);
    console.log(num);
  }
}
function finalizar() {
  let res = window.document.querySelector("#res");
  let num = window.document.querySelector("#num");
  let seln = window.document.querySelector("#selnum");
  let tnc = seln.length;
  res.innerHTML = `Ao todo temos ${tnc} números cadastrados`;
  res.innerHTML += `O maior valor foi ${a.value}`; // analisar é function
}
