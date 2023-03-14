let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let num2 = parseInt(prompt("Digite o segundo número inteiro:"));
let menor, maior;
if (num1 < num2) {
  menor = num1;
  maior = num2;
} else {
  menor = num2;
  maior = num1;
}
for (let i = menor; i <= maior; i++) {
  console.log(i);
}
