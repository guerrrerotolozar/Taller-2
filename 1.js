const lista = [5,5,5]  // puede cambiar cantidad de digitos o a cualquier numero que se plazca con la funcion que realize

function sumarArray(numeros) // ese "numeros" va a ser una lista imaginaria para realizar la funcion por el momento, despues al llamarla se necesita poner la lista real que necesitemos usar
{
    let a = 0;
    for ( let i of numeros)
    {
        a = a + i;
    }
    return a;   // importate devolver el resultado a la funcion para que compile correctamente
}

console.log(sumarArray(lista))