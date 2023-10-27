"use strict"; //Usado para corrigir erros tipo: 
//variáveis com nome reservado e criação de variáveis por
// baixo dos panos e outros erros..


//comentário

/*
comentário
comentário
*/


// Ler variáveis no Beecrowd semelhante ao prompt: lines.shift()
// exemplo:

//para ler 1 valor de 1 linha ex: 3.0
// let valor = parseInt(lines.shift());

//para ler mas de 1 valor de 1 linha ex: 3.0 4.0 5.2
// let linha = lines.shift().split(" ")
//  linha[0] -> 3.0 linha[1] -> 4.0  linha[2] -> 5.2


let A = 3.0;
let B = 4.0;
let C = 5.2;

const pi = 3.14159;
let areaTriangulo = ((A * C) / 2).toFixed(3);
let areaCirculo = (pi * C * C).toFixed(3);
let areaTrapezio = (((A + B) * C) / 2).toFixed(3);
let areaQuadrado = (B * B).toFixed(3);
let areaRetangulo = (A * B).toFixed(3);

console.log(areaTriangulo);
console.log(areaCirculo);
console.log(areaTrapezio);
console.log(areaQuadrado);
console.log(areaRetangulo);





