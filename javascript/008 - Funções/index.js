//-------------------------------------------- Funções
//Basic / Convencionais
console.log('-----------------------------Basic / Convencionais');
function devesomar(valor1, valor2) {
    // Como o JS ñ é tipado, devemos verificar se os valores recebidos foram === Number  
    if (typeof valor1 === 'number' && typeof valor2 === 'number') {
        return valor1 + valor2;
    }
    return 'Não foi possível somar invalid Type';

}
console.log(devesomar(15, 20));
console.log(devesomar(15, "20"));
console.log();


console.log('--------------------------- FunctionArrow / Arrow Functions ');
//FuncArrow retorno
const nomeFuncArrow = () => {
    return "teste nomeFuncArrow()";
};
console.log(nomeFuncArrow());

//FuncArrow Retoro direto
const nomeFuncArrowReturn = () => "retorno nomeFuncArrowReturn()";
console.log(nomeFuncArrowReturn());
console.log();


console.log('--------------------------- Método de Classe ');
//Método de uma Classe:
class Carro {
    constructor(nome, marca, ano) {
        this.nome = nome;
        this.marca = marca;
        this.ano = ano;
    }

    getDetalhes() {
        console.log(this.nome + ' - ' + this.marca + ' - ' + this.ano);
    }
}
const carroCelta = new Carro('Celta GM', "Chevrolet", "2010");
carroCelta.getDetalhes();
console.log();


console.log('--------------------------- Função de Objeto');
const lanchonete = {
    cardapio: [
        { nome: "x-Salada", preco: 25 },
        { nome: "x-Bagunça", preco: 35 },
        { nome: "x-Cavalo", preco: 50 }
    ],
    getItemCardapio: function (select) {
        return console.log(this.cardapio[select]);
    },
    adicionarItemCardapio: function (item) {
        this.cardapio.push(item);
        return console.log("Item adicionado");;
    }
};
console.log('Cardapio: ');
console.log(lanchonete.cardapio);
console.log('Item Cardapio obtido: ');
lanchonete.getItemCardapio(0);
const xLoucura = { nome: "x-Loucura", preco: 60 }
lanchonete.adicionarItemCardapio(xLoucura);
console.log(lanchonete.cardapio);
console.log();