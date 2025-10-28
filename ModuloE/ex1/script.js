function contar() {
  var inicio = Number(document.querySelector("#inicio").value);
  var fim = Number(document.querySelector("#fim").value);
  var passo = Number(document.querySelector("#passo").value);
  var res = window.document.querySelector("#res");
  let passos = [];
  if (inicio == null || passo == 0) {
    res.innerHTML = "Impossivel contar!";
  } else {
    for (var i = inicio; i < fim; i += passo) {
      passos.push(i);
    }
    res.innerHTML = `Inicio: ${inicio} `;
    var c = 0;
    while (c < passos.length) {
      res.innerHTML += ` ${passos[c]} `;
      c++;
    }
    res.innerHTML += "Fim! 🏁";
  }
}
