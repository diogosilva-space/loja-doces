const readLine = require("readline-sync");

const idade = readLine.questionInt("Digite sua idade: ");
console.log("Sua idade é " + idade);

if (idade >= 18) {
  console.log("Entre");
} else if (idade <= 6) {
  console.log("Va pra brinquedoteca");
} else {
  console.log("Nao entre");
}

console.log("programa finalizado");
