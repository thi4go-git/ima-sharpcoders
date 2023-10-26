'use strict'

//-------------------------- FALSO(Falsy)= false, 0, "", NaN, undefined e null
if (false) {
    console.log("TRUE 1");
} else {
    console.log("FALSE 1");
}

if (0) {
    console.log("TRUE 2");
} else {
    console.log("FALSE 2");
}

if ("") {
    console.log("TRUE 3");
} else {
    console.log("FALSE 3");
}

if (NaN) {
    console.log("TRUE 4");
} else {
    console.log("FALSE 4");
}

if (undefined) {
    console.log("TRUE 5");
} else {
    console.log("FALSE 5");
}

if (null) {
    console.log("TRUE 6");
} else {
    console.log("FALSE 6");
}

console.log('----------------------');

//----------------- TRUE = Qualquer um diferente desses que dão FALSO