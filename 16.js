const prompt = require("prompt-sync")();

function sacarFactorial(numero){
    if (numero === 0) return 1;
    return numero * sacarFactorial(numero-1);
}

console.log(sacarFactorial(+prompt("numero a sacar factorial: ")))
