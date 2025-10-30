function Tabuada() {
  let num = document.querySelector("#numero");
  let tab = document.querySelector("#tabuada");

  if (num.value.length == 0) {
    alert("Por favor digite um número!");
  } else {
    let n = Number(num.value);
    let c = 1;
    tab.innerHTML = "";
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * C}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
      c++;
    }
  }
}
