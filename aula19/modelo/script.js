function verificar() {
  var ano = document.querySelector("#ano");
  var res = document.querySelector("#res");
  var data = new Date();
  var anoatual = data.getFullYear();
  var img = document.querySelector(".imagem");

  if (ano.value.length == 0 || Number(ano.value) > anoatual) {
    alert("Verifique os dados e tente novamente!");
  } else {
    var idade = anoatual - Number(ano.value);
    var sexo = document.getElementsByName("radsex");
    var genero = "";

    if (sexo[0].checked) {
      genero = "Masculino";
    } else {
      genero = "Feminino";
    }

    // Verificação de idade e gênero
    if (idade < 12 && genero == "Masculino") {
      img.src = "imagens/menino.jpg";
    } else if (idade < 12 && genero == "Feminino") {
      img.src = "imagens/menina.jpg";
    } else if (idade < 18 && genero == "Masculino") {
      img.src = "imagens/jovemM.jpg";
    } else if (idade < 18 && genero == "Feminino") {
      img.src = "imagens/jovemF.jpg";
    } else if (idade < 60 && genero == "Masculino") {
      img.src = "imagens/adultoM.jpg";
    } else if (idade < 60 && genero == "Feminino") {
      img.src = "imagens/adultoF.jpg";
    } else if (idade >= 60 && genero == "Masculino") {
      img.src = "imagens/idosoM.jpg";
    } else {
      img.src = "imagens/idosoF.jpg";
    }

    // Mostrando resultado
    res.innerHTML = `A idade é de: ${idade} e o gênero é ${genero}.`;
    // res.appendChild(img);
  }
}
