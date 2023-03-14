let num = [];
for (let i = 1; i <= 5; i++) {
  let numero = Number(prompt(`Digite o número ${i}:`));
  num.push(numero);
}
let maior = num[0];
for (let i = 1; i < num.length; i++) {
  if (num [i] > maior) {
    maior = num[i];
  }
}
console.log(`O maior número é ${maior}`);
