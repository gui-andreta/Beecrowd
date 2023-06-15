import fs from "fs";
var input = fs.readFileSync("stdin", "utf-8");
var valores = input.split("\n");

const notas = [100, 50, 20, 10, 5, 2, 1];

function calcularNotas(valor) {
    const quantidadeNotas = [];

    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        const quantidade = Math.floor(valor / nota); //faz a divisão arredondar

        quantidadeNotas.push(quantidade);
        valor -= quantidade * nota; // subtrai valor ja usado
    }

    return quantidadeNotas;
}

var valor = parseInt(valores.shift());
const quantidadeNotas = calcularNotas(valor);

console.log(valor);
for (let i = 0; i < notas.length; i++) {
    console.log(quantidadeNotas[i] + " nota(s) de R$ " + notas[i] + ",00");
}
