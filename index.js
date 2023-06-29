import fs from "fs";
var input = fs.readFileSync("stdin", "utf-8");

// Fazendo com que o valor seja separado ao dar espaço
var valores = input.split(" ");

for (let i = 2; i < 101; i++) {
    let check = i % 2;

    if (check === 0) {
        console.log(i);
        i++
    } else {
        i++;
    }
}
