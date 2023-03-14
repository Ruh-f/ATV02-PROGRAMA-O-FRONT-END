let nome = prompt("Digite o seu nome:");
let idd = prompt("Digite a sua idade:");
let sal = prompt("Digite o seu salário:");
let sex = prompt("Digite o seu sexo (f/m):");
let EC = prompt("Digite o seu estado civil (s/c/v/d):");
if (nome.length <= 3) {
  console.log("O nome deve ter mais de 3 caracteres.");
} else if (idd < 0 || idd > 150) {
  console.log("A idade deve estar entre 0 e 150 anos.");
} else if (sal <= 0) {
  console.log("O salário deve ser maior que zero.");
} else if (sex !== "f" && sex !== "m") {
  console.log("O sexo deve ser 'f' ou 'm'.");
} else if (EC !== "s" && EC !== "c" && EC !== "v" && EC !== "d") {
  console.log("O estado civil deve ser 's', 'c', 'v' ou 'd'.");
} else {
  console.log("Informações válidas!");
}
