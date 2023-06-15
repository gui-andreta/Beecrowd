import fs from "fs";
var input = fs.readFileSync("stdin", "utf-8");

// Fazendo com que o valor seja separado ao dar espaço
var valores = input.split(" ");

//Classe e metodos do plano cartesiano
class PlanoCartesiano {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    areaPlano(x, y) {
        if (x === 0 && y === 0) {
            return console.log("Origem");
        } else if (x > 0 && y > 0) {
            return console.log("Q1");
        } else if (x < 0 && y > 0) {
            return console.log("Q2");
        } else if (x < 0 && y < 0) {
            return console.log("Q3");
        } else if (x > 0 && y < 0) {
            return console.log("Q4");
        } else if (x === 0 && (y > 0 || y < 0)) {
            return console.log("Eixo X");
        } else if ((x > 0 || x < 0) && y === 0) {
            return console.log("Eixo X");
        }
    }
}

// Recebendo as coordenadas
var coords = [];
for (let i = 0; i < 2; i++) {
    coords.push(parseFloat(valores.shift()));
}

var plan = new PlanoCartesiano(coords[0], coords[1]);

plan.areaPlano(coords[0], coords[1]);
