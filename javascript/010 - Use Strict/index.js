
"use strict"; //Usado para corrigir erros tipo: 
//variáveis com nome reservado e criação de variáveis por 
// baixo dos panos e outros erros..

//---------------------------------------------- USE STRICT
(() => {
    teste = 'Teste Strict'
})();
console.log(teste);

//Quando executamos o código acima, o JS cria uma variável por debaixo dos panos
// para que a execução ocorra sem erros. Da forma que codamos a variável 'teste'
//está dentro do escopo da função então na teoria daria erro.
// O JS corrige isso por debaixo dos panos da seguinte forma:

var teste;
(() => {
    teste = 'Teste Strict'
})();
console.log(teste);

//Para desabilitarmos essa correção automática existe uma ferramenta
// que é a "use strict"; que corrige erros tipo: variáveis com nome Reservado
//erros iguais a esse demonstrado.


//Esse código abaixo foi comentado pois dará erro em sua execução pois estamos
//usando o "use strict" no início desse arquivo index.js para corrigir erros JS
//aqui temos o erro de variável com nome reservado e a falta da variável var
// para acessar o objeto fora desse escopo, com o "use strict" declarado o JS
// não criará a variável 'testeStrict' por baixo dos panos;


//var arguments;
//(() => {
//    testeStrict = 'Teste Stricts'
//})();
//console.log(testeStrict);
