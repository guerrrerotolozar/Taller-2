const l = ["Tenedor","Cuchillo","Cuchara"]
let resultado = false

function busquelo(imaginalista,imaginaobjeto){

    for ( let i of imaginalista)
        if (imaginalista.includes(imaginaobjeto)) //que si esa lista incluye/contiene ese objeto
        {
                resultado = true
                    return resultado
        }
}

console.log(busquelo(l,"Tenedor"))



function busqueloMejor(imaginalista,imaginaobjeto){

    return(imaginalista.includes(imaginaobjeto))   // no es necesario un bucle for
        
}

console.log(busqueloMejor(l,"Teneor"))