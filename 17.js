const prompt = require("prompt-sync")();

function tablas (n){
    for( let i = 1; i <= 10; i ++ ){
        console.log(`${n} x ${i} = ${n * i}`);
        // el console.log esta dentro del bucle porque quiero que se repita una y otra y otra vez, no solo buscar el ultimo resultado
    }
}

tablas(+prompt("numero => "))