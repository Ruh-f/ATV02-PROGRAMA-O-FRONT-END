let num = [];
for (let i = 1; i <= 5; i++) {
  let numero = Number(prompt(`Digite o número ${i}:`));
  num.push(numero);
}
let soma = 0;
for (let i = 0; i < num.length; i++) {
  soma += num[i];
}
let media = soma / num.length;
console.log(`A soma dos números é ${soma}`);
console.log(`A média dos números é ${media}`);
