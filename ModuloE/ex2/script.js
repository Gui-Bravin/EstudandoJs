function Tabuada() {
  const numeroCampo = document.querySelector("#numero");
  const numero = Number(numeroCampo.value);
  const res = document.querySelector("#tabuada");

  // Limpa antes de gerar novamente
  res.innerHTML = "";

  // Verifica se o campo está vazio
  if (numeroCampo.value.length === 0) {
    alert("Digite um número!");
    return;
  }

  // Gera cada linha da tabuada
  for (let i = 0; i <= 10; i++) {
    res.innerHTML += `${numero} x ${i} = ${numero * i} <br>`;
  }
}

/* fazendo com um selection box utilizando select no html
function Tabuada() {
  var numero = Number(document.querySelector("#numero").value);
  var res = document.querySelector("#tabuada");

  if (document.querySelector("#numero").value.length == 0) {
    alert("Digite um valor");
    return;
  } else {
    res.innerHTML = ""; // limpa antes de gerar novamente
    for (var i = 0; i <= 10; i++) {
      var resultado = numero * i;
      var item = document.createElement("option");
      item.text = `${numero} x ${i} = ${resultado}`;
      res.appendChild(item);
    }
  }
}
*/
