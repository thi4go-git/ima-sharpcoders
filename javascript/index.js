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

let N = 4;

let X = [];

X.push(14, 123, 10, -25);

let dentroIntervalo = 0;
let foraIntervalo = 0;

for (let index = 0; index < N; index++) {
    if (X[index] >= 10 && X[index] <= 20) {
        dentroIntervalo++;
    } else {
        foraIntervalo++;
    }
}

console.log(dentroIntervalo + " in");
console.log(foraIntervalo + " out");














