const prompt = require("prompt-sync")();
const vocales = ["a","e","i","o","u"]
function contarVocales (palabra){
    let contador = 0
    for (let i of palabra.toLowerCase()){ //to lower case es para poner todas en minisculas y que si le lea correctamente( eso porque en la lista solo las tengo en minusculas)
        for(let j of vocales){
            if (i === j){
                contador++
            }
        }
    }
    return contador
} 

console.log(contarVocales(prompt("palabra => ")))