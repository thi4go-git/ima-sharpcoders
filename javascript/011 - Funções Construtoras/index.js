'use strict'
// Java Script sempre será um Objeto


console.log('---------------------Exemplo Construtor data');
console.log(new Date());
console.log(new Date().toDateString());
console.log(new Date().toISOString());
console.log();



console.log('---------------------Exemplo Função 1');
function Name() {
    this.name = "Judas Scariots";
    this.idade = 15;
    this.dataCriacao = new Date();
}
const nome = new Name();
console.log(nome);
console.log(nome.name);
console.log();



console.log('---------------------Exemplo Função 2');
function Name2(nome) {
    this.name = nome;
}
const nome2 = new Name2('Paulo silas');
console.log(nome2);
console.log(nome2.name);
console.log();



console.log('---------------------Exemplo Função dentro de Função');
function Name3(nome, sobrenome) {
    this.name = nome;
    this.mostraNome = () => {
        return `${nome} ${sobrenome}`;
    };
}
const nome3 = new Name3('Paulo silas', 'lascado');
console.log(nome3);
console.log(nome3.name);
console.log(nome3.mostraNome());
console.log();



console.log('---------------------Exemplo Função Calculadora');
function Calculadora(valor1, valor2) {
    this.soma;
    this.somar = () => {
        if (typeof valor1 === 'number' && typeof valor2 === 'number') {
            this.soma = valor1 + valor2;
        } else {
            console.log("Não foi possível Somar");
        }
    }
    this.imprimir = () => {
        if (this.soma) {
            console.log(this.soma);
        }
    }
}

const calc = new Calculadora(6, 4);
calc.somar();
calc.imprimir();

const calc2 = new Calculadora(6, "4");
calc2.somar();
calc2.imprimir();
console.log();


console.log('---------------------Exemplo Função Calculadora 2');
function Calculadora2() {
    this.soma;
    this.somar = (valor1, valor2) => {
        if (typeof valor1 === 'number' && typeof valor2 === 'number') {
            this.soma = valor1 + valor2;
        } else {
            console.log("Não foi possível Somar");
        }
    }
    this.imprimir = () => {
        if (this.soma) {
            console.log(this.soma);
        }
    }
}
const calc3 = new Calculadora2();
calc3.somar(15, 2);
calc3.imprimir();

calc3.somar(15, '2');


console.log('--------------------- Exemplo Função parecida com private function mostraNome() ');
function QualNome(nome) {
    function mostraNome() {
        return nome;
    }
    return mostraNome();
}
console.log(QualNome('Sauro jr'))


console.log('--------------------- Outra função calculadora ');
function CalculadoraFull(valor1, valor2) {

    const soma = () => {
        return `soma: ${valor1+valor2}`
    };

    const subtracao = () => {
        return `subtracao: ${valor1-valor2}`
    };

    const multiplicacao = () => {
        return `multiplicacao: ${valor1*valor2}`
    };

    const divisao = () => {
        return `divisao: ${valor1/valor2}`
    };

    return {
        soma: soma(),
        subtracao: subtracao(),
        multiplicacao: multiplicacao(),
        divisao: divisao(),
    }
}

console.log(new CalculadoraFull(150,4))
console.log(new CalculadoraFull(150,4).soma)
console.log(new CalculadoraFull(150,4).multiplicacao)


