import fs from "fs";
var input = fs.readFileSync("stdin", "utf-8");
var valores = input.split(" ");

var a = parseFloat(valores.shift());
var b = parseFloat(valores.shift());
var c = parseFloat(valores.shift());

var pi = 3.14159;

var tri = a * c / 2;
var circ = pi * c * c;
var trap = (a + b) * c / 2;
var quad = b * b;
var ret = a * b;

console.log("TRIANGULO: " + tri.toFixed(3));
console.log("CIRCULO: " + circ.toFixed(3));
console.log("TRAPEZIO: " + trap.toFixed(3));
console.log("QUADRADO: " + quad.toFixed(3));
console.log("RETANGULO: " + ret.toFixed(3));

