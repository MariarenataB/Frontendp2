let C = parseFloat(prompt("Capital inicial (R$):"));
let i = parseFloat(prompt("Taxa de juros mensal (%):")) / 100;
let t = parseInt(prompt("Tempo (meses):"));

let M = C * Math.pow(1 + i, t);

alert(`Montante: R$ ${M.toFixed(2)}`);
