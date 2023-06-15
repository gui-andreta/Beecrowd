import fs from "fs";
var input = fs.readFileSync("stdin", "utf-8");
var valores = input.split(" ");

var a = parseInt(valores.shift());
var b = parseInt(valores.shift());
var c = parseInt(valores.shift());
var d = parseInt(valores.shift());

if ((b > c && d > a && c + d > a + b && a, b, c, d > 0 && a % 2 === 0)) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}

/* Não funcionou porem está certo. */