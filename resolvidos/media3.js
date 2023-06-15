import fs from "fs";
var input = fs.readFileSync("stdin", "utf-8");

// Fazendo com que o valor seja separado ao dar espaço
var valores = input.split(" ");

// Fazendo laço de repetição para receber dados
var nota = [];
for (let i = 0; i < 4; i++) {
    nota.push(parseFloat(valores.shift()));
}

//Definição de pesos para cada nota
nota[0] = nota[0] * 2;
nota[1] = nota[1] * 3;
nota[2] = nota[2] * 4;
nota[3] = nota[3] * 1;

// Definindo divisão normal e por exame
const dividirNota = 10;
const dividirNotaExame = 2;

// Regras para -> APROVADO || DE EXAME || REPROVADO
var notaFinal = (nota[0] + nota[1] + nota[2] + nota[3]) / dividirNota;

if (notaFinal >= 7) {
    console.log("Media: " + notaFinal.toFixed(1));
    console.log("Aluno aprovado.");
} else if (notaFinal < 5) {
    console.log("Media: " + notaFinal.toFixed(1));
    console.log("Aluno reprovado.");
} else if (notaFinal >= 5 && notaFinal < 7) {
    console.log("Media: " + notaFinal.toFixed(1));
    console.log("Aluno em exame.");

    // Registrando nota do exame
    valores = input.split("\n");

    var notaExame = [];
    for (let i = 0; i < 2; i++) {
        notaExame.push(parseFloat(valores.shift()));
    }

    console.log("Nota do exame: " + notaExame[1].toFixed(1));

    // Fazendo a média do exame
    var notaFinalExame = (notaExame[1] + notaFinal) / dividirNotaExame;

    //Regra de Aprovação || Reprovação com exame
    if (notaFinalExame >= 5) {
        console.log("Aluno aprovado.");
        console.log("Media final: " + notaFinalExame.toFixed(1));
    } else if (notaFinalExame < 5) {
        console.log("Aluno reprovado.");
        console.log("Media final: " + notaFinalExame.toFixed(1));
    }
}
