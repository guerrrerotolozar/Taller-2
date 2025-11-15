const numeros = [4,2,3,1,9,10,3,14]

function buscaMenor (imaginate){
    let primero = imaginate[0];
    
    for (let k of imaginate){
        if (k < primero){
            primero = k;
        }
    }

    return primero
    
}
console.log(buscaMenor(numeros))

// el menor y/o el mayor

cero = numeros[0]
function buscaMayor(lista){
    for (let i of lista){

        if ( i > cero){
                cero = i
        }
    }
    return cero
}

console.log(buscaMayor(numeros))