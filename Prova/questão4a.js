let salario = parseFloat(prompt("Informe o salário inicial do funcionário:"));
let anoInicial = 1995;
let anoAtual = new Date().getFullYear();
let percentual = 0.0015; 

if (isNaN(salario) || salario <= 0) {
    alert("Salário inválido. Tente novamente.");
} else {
    for (let ano = 1996; ano <= anoAtual; ano++) {
        salario += salario * percentual;
        if (ano >= 1997) {
            percentual *= 2;
        }
    }

    alert(`Salário atual em ${anoAtual}: R$ ${salario.toFixed(2)}`);
}
