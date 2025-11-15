const antes = ["primero",1,"segundo",2,"tercero",3,"cuarto",4]

function invertirArray(imagina){

    const despues = []
    
    for (let i of imagina){
    despues.unshift(i) // para poner al PRINCIPIO de la nueva lista
    }

    return despues  // que no se me pase que un return SIEMPRE es necesario
}
console.log(invertirArray(antes))