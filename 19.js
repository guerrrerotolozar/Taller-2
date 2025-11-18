const prompt = require("prompt-sync")();

function calcularImpusestos(listaA, tasa){
    let nuevaLista = []
    for( let i of listaA){
        let resultado = i * tasa
        nuevaLista.push(resultado)
    }
    return nuevaLista
}

let salarios = prompt("ingresa los salarios con una , para separarlo => ");
let lista = salarios.split(",");
let tasas = prompt("ingresa la tasa con . para el decimal => ");


console.log(calcularImpusestos(lista,tasas))