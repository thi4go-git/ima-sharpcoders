'use strict'

//------------------------------------------ Resumindo o IF:
// == verifica se é igual sem olhar tipagem (1 == "1") dará true
// === olha se é igual validando tipagem (1 === "1") dará false / para true tem que ser (1 === 1)


const txt = 'valor';
if (txt === 'valor') {
    console.log('igual');
} else {
    console.log('diferente');
}

const number = '10';
if (10 === number) {
    console.log('igual');
} else {
    console.log('diferente');
}

const number2 = '10';
if (10 == number2) {
    console.log('igual');
} else {
    console.log('diferente');
}

//Resumo desse IF:
'valor' === 'valorrrrr'
    ? console.log('igual') // primeira condição é para true
    : console.log('diferente'); // segunda é para false
