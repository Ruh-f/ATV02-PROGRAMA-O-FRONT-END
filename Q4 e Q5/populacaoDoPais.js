let popA = 80000;
let popB = 200000;
let CrescimentoA = 0.03;
let CrescimentoB = 0.015;
let anos = 0;
while (popA < popB) {
  popA += popA * CrescimentoA;
  popB += popB * CrescimentoB;
  anos++;
}
console.log(`Serão necessários ${anos} anos para que a população de A ultrapasse ou iguale a população de B.`);
