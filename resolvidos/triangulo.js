import fs from "fs";
var input = fs.readFileSync("stdin", "utf-8");

// Fazendo com que o valor seja separado ao dar espaço
var valores = input.split(" ");

// Recebendo os valores
var lados = [];

for (let i = 0; i < 3; i++) {
    lados.push(parseFloat(valores.shift()));
}

// Criando a classe Triangulo para conferir se realmente é verdade
class Triangulo {
    constructor(ladoA, ladoB, ladoC) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    conferir(ladoA, ladoB, ladoC) {
        var ladoAB = ladoA + ladoB;
        var ladoAC = ladoA + ladoC;
        var ladoBC = ladoB + ladoC;

        if (ladoAB > ladoC && ladoAC > ladoB && ladoBC > ladoA) {
            return true;
        } else {
            return false;
        }
    }
}

var somaLados = lados[0] + lados[1] + lados[2];
var areaTrapezio = ((lados[0] + lados[1]) * lados[2]) / 2;

// Instanciando classe e colocando os dados
var tri = new Triangulo(lados[0], lados[1], lados[2]);

if (tri.conferir(lados[0], lados[1], lados[2]) === true) {
    console.log("Perimetro = " + somaLados.toFixed(1));
} else {
    console.log("Area = " + areaTrapezio.toFixed(1));
}
