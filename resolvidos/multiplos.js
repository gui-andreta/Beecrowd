import fs from "fs";
var input = fs.readFileSync("stdin", "utf-8");

// Fazendo com que o valor seja separado ao dar espaço
var valores = input.split(" ");

// Recebendo os valores
var numeros = [];

for (let i = 0; i < 2; i++) {
    numeros.push(parseInt(valores.shift()));
}

// Fazendo lógica para conferir qual numero é maior e gerando o quaciente
if (numeros[0] >= numeros[1]) {
    var div = numeros[0] % numeros[1];
} else if (numeros[0] < numeros[1]) {
    var div = numeros[1] % numeros[0];
}

// Fazendo a lógica de saída
if (div === 0) {
    console.log("Sao Multiplos");
} else if (div !== 0) {
    console.log("Nao sao Multiplos");
}
