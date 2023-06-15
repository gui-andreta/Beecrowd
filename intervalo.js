import fs from "fs";
var input = fs.readFileSync("stdin", "utf-8");

// Fazendo com que o valor seja separado ao dar enter
var valores = input.split("\n");

// Recebendo valor e colocando como Float
var entrada = parseFloat(valores.shift());

// Variaveis para geração de intervalos
const intervalo = [0, 25, 50, 75, 100];

if (entrada <= 0) {
    console.log("Fora de intervalo");
} else {
    for (let i = 0; i < intervalo.length; i++) {
        if (entrada > 100) {
            console.log("Fora de intervalo");
            break;
        }

        if (entrada > intervalo[i]) {
            var inicio = intervalo[i];
        } else if (entrada <= intervalo[i]) {
            var final = intervalo[i];
            console.log("Intervalo [%d,%d]", inicio, final);
            break;
        }
    }
}
