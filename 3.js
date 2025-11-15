const l = [1,2,3,4,5,6,7,8,9,10]

function contarPar (imagina){
    let r = 0
    for ( let i of imagina) {
        if ( i % 2 == 0){
            r++
        }
    }
    return r
}
console.log(contarPar(l))

//par o impar

function contarImpar (imagina){
    let r = 0
    for ( let i of imagina) {
        if ( i % 2 == 1){
            r++
        }
    }
    return r
}
console.log(contarImpar(l))