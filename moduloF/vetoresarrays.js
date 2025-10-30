let num = [9, 8, 7, 6, 5, 4];
num.sort(); //deixa o array em ordem crescente só funciona em numeros de 1 a 9

/*for (let pos = 0; pos < num.length; pos++) {
  console.log(`O ${pos}º valor de num é: ${num[pos]}`);
}
*/
for (let pos in num) {
  console.log(`O ${pos}º valor de num é: ${num[pos]}`);
}
num.indexOf(7); // o .indexOf() serve para procurar um numero
// em expecifico dentro do array e retornar em qual posicao
// ele esta. Caso não tiver o número, ele retorna -1 ai caso retorne isso é só fazer um if
