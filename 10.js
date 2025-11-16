const objeto = {nombre:"alo",edad:20,materias:"ingles"};

function contar (imagina){
    let contador = 0
    for ( let i in imagina){
        contador ++
        console.log(`${i} ++`)
    }
    return contador
}

console.log(contar(objeto))