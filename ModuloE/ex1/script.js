function contar() {
  var inicio = document.querySelector("#inicio");
  var fim = document.querySelector("#fim");
  var passo = document.querySelector("#passo");
  var res = document.querySelector("#res");
  // let passos = [];
  if (
    inicio.value.length == 0 ||
    passo.value.length == 0 ||
    fim.value.length == 0
  ) {
    alert("impossivel contar!");
  } else {
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    res.innerHTML = "contando:";
    if (i < f) {
      //contagem crescente
      for (var c = i; c <= f; c += p) {
        /*Guanabara fez um for igual ao meu mas ele usou <= (no meu estava só <) e ele usou o innerhtml mesmo, nao criou o array */
        //passos.push(i);
        res.innerHTML += ` ${c} - `;
      }
    } else {
      //contagem regressiva
      for (var c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} - `;
      }
    }
    /*res.innerHTML = `Inicio: ${inicio} `; utilizava esse while para mostrar o que tinha no meu array
    var c = 0;
    while (c < passos.length) {
      res.innerHTML += ` ${passos[c]} `;
      c++;
    }*/
    res.innerHTML += "Fim! 🏁";
  }
}
