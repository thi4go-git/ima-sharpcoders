
//------------------------------For
console.log('For');
for (let index = 0; index < 10; index++) {
    console.log(index);
}
console.log();


//------------------------------while
console.log('while');
const parar = 4;
let contador = 0;
while (contador !== parar) {
    console.log(`contador = ${contador} | parar = ${parar}`);
    contador++;
}
console.log();


//----------------------------Foreach no Objeto Pessoa
//Classe
class Pessoa {
    nome;
    idade;
    cpf;
}

//Objetos
const pessoa1 = {
    nome: 'Pessoa 1',
    idade: 25,
    cpf: '04955897462'
}
const pessoa2 = {
    nome: 'Pessoa 2',
    idade: 30,
    cpf: '149555597465'
}

//Lista de Pessoas adicionando pessoas
const listaPessoa = [];
listaPessoa.push(pessoa1, pessoa2);

console.log("          Lista de Pessoas");
console.log(listaPessoa);
console.log('listaPessoa tamanho ' + listaPessoa.length);
console.log();

//Foreach com lista de Pessoas
console.log('----------------------');
console.log("         Foreach com lista de Pessoas");
listaPessoa.forEach(pessoaAtual => {
    console.log(pessoaAtual);
    console.log(pessoaAtual.nome + ' - ' + pessoaAtual.idade + ' - ' + pessoaAtual.cpf);
    console.log();
});

