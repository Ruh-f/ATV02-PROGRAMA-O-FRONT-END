let nt;
do {
    nt = parseFloat(prompt("Digite uma nota de 0 a 10: "));
    if (nt < 0 || nt > 10 || isNaN(nt)) {
        alert("Valor inválido.");
    }
} while (nt < 0 || nt > 10 || isNaN(nt));
alert("A nota foi " + nt + ".");
