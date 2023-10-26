// IIFE - Immediately invoked function Expression
// Função Auto Invocada
//ex 1
(function autoInvoked() {
    console.log('Start autoInvoked');
})();

//ex 2
(function autoInvoked(valor1, valor2) {
    const sum = valor1 + valor2;
    console.log(sum);
})(10, 9);
