function carregar() {
  var msg = window.document.querySelector(".msg");
  var img = window.document.querySelector(".imagem");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    img.src = "manha.jpg";
    document.body.style.background = "#f0c25eff";
  } else if (hora >= 12 && hora < 18) {
    img.src = "tarde.jpg";
    document.body.style.background = "#b87d66ff";
  } else {
    img.src = "noite.jpg";
    document.body.style.background = "#67496dff";
  }
}
