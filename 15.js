// console.log(!isNaN("7")) =>
// console.log(!isNaN("a"))
// console.log(!isNaN(7))
// console.log(!isNaN("@"))


function validar (imagina){
    let tieneNumero = false;
    let tieneMayuscula = false;
    if (imagina.length < 8){
        console.log(`subile, tiene que ser mas de 8`)
        return false // retirada de funciton si no se valida la condicion
    }
    for ( let i of imagina){
        if (!isNaN(i)){
            tieneNumero = true
        }
        if (i === i.toUpperCase() && i !== i.toLowerCase()) { // esta cosa la saque de la ia, no supe como
            tieneMayuscula = true        }
    }
    if (!tieneNumero){
        console.log(`debe incluir minimo un numero`)
    }
    if (!tieneMayuscula){
        console.log(`debe incluir minimo una mayuscula`)
    }

    return tieneNumero && tieneMayuscula;
}


console.log(validar("Casa0909"))