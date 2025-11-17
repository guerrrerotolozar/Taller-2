function eliminarDuplicados (imagina){

    let noDuplicados = []
    for ( let i of imagina){
        if  (!noDuplicados.includes(i)) /* [!] ese bicho niega las cosas, como si dijese "no" */
            {                           /* .includes => se refiere a que si inluye( pero con el ! se refeiere a que si NO lo incluye) */
            noDuplicados.push(i)
        }
    }

    return noDuplicados


    // imagina.splice(1,1)
    // return imagina    ==> La facil



    // delete imagina[1]
    // return imagina    ==> [ 1, <1 empty item>, 2, 3 ]
}

console.log(eliminarDuplicados([1,2,2,3,5,1,2,4,1,9,4,2]))