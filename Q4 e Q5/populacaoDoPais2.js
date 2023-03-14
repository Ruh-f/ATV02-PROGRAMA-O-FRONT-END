let populacaoA, populacaoB, taxaCrescimentoA, taxaCrescimentoB;
do {
  popA = prompt("Digite a população do país A:");
  popB = prompt("Digite a população do país B:");
  CrescimentoA = prompt("Digite a taxa de crescimento anual do país A (%):");
  CrescimentoB = prompt("Digite a taxa de crescimento anual do país B (%):");

  popA = parseInt(popA);
  popB = parseInt(popB);
  CrescimentoA = parseFloat(CrescimentoA) / 100;
  CrescimentoB = parseFloat(CrescimentoB) / 100;
  if (popA <= 0 || popB <= 0 || CrescimentoA <= 0 || CrescimentoB <= 0) {
    console.log("Os valores informados devem ser maiores que zero.");
    continue;
  }
  let anos = 0;
  while (popA < popB) {
    popA += popA * CrescimentoA;
    popB += popB * CrescimentoB;
    anos++;
  }
  console.log(`Serão necessários ${anos} anos para que a população de A ultrapasse ou iguale a população de B.`);
  let continuar = prompt("Deseja continuar? (s/n)").toLowerCase();
  if (continuar !== "s" && continuar !== "sim") {
    break;
  }
} while (true);
