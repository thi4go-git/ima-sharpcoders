
'use strict'; //Usado para corrigir erros do tipo: 
//variáveis com nome reservado e criação de variáveis por 
// baixo dos panos e outros erros.. (DEVERÁ FICAR SEMPRE NO INÍCIO DO ARQUIVO .JS   )

//------------------------------------------ Variáveis
// var -> usada globalmente 
// ex: 
if (1 === 1) {
    var variavelVar = 'variavelVar';
    console.log("dentro escopo: " + variavelVar);
}
console.log("fora escopo: " + variavelVar);
console.log("--------------------------");

// let  -> usada dentro de um escopo 
//ex: 
if (1 === 1) {
    let variavelLet = 'variavelLet';
    console.log("dentro escopo: " + variavelLet);
}
//console.log("fora escopo: " + variavelLet); // não é possível imprimir aqui pois a 
//variável só está disponível no escopo do IF
console.log("fora escopo não é possível imprimir ");
console.log("--------------------------");

// const é semelhante a LET  -> usada dentro de um escopo 
//ex: 
if (1 === 1) {
    const variavelConst = 'variavelConst';
    console.log("dentro escopo: " + variavelConst);
}
//console.log("fora escopo: " + variavelConst); // não é possível imprimir aqui pois a 
//variável só está disponível no escopo do IF
console.log("fora escopo não é possível imprimir ");
console.log("--------------------------");


//Formas de imprimir String=  "", '' ou ``.
const valorStr = 'teste';
console.log('minha variável: ' + valorStr);
console.log("minha variável: " + valorStr);
console.log(`minha variável: ${valorStr}`);

//let arguments; // teremos problema com esse nome de variável se usarmos o 'use strict'

console.log("--------------------------");
//--------------------------------- Mais Exemplo de Escopo

//let ou const Não imprime objeto fora do escopo
if (1 === 1) {
    const nomeConst = "teste";
    let nome = 'Nome dentro do escopo'
    console.log('nome -> ' + nome);// aqui imprimirá com sucesso.
    console.log('nomeConst -> ' + nomeConst);
}
//console.log('nomeConst -> '+nomeConst);
// console.log('nome -> ' + nome); 
// se retirarmos o comentário aqui ele ñ imprime ocorrerá erro pois está fora do escopo


//var imprime objeto fora do escopo
if (1 === 1) {
    var nomeVar = '*Conteúdo variável*';
    console.log('nomeVar dentro do escopo = "' + nomeVar + '" ');// aqui imprimirá com sucesso.
}
console.log('nomeVar fora do escopo = "' + nomeVar + '" ');// aqui tbm imprimirá com sucesso.

