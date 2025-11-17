function ordenarA(imagina, ordenado = []){ // al poner esa variable ahi, dejo de usar variables gloables y la funcion puede volverse a usar con diferentes listas 
    
    if (imagina.length === 0) {
        return ordenado;}
    
    let objetivoEnLaMira = imagina[0];

    for (let i of imagina){
        if ( i < objetivoEnLaMira){
            objetivoEnLaMira = i;
        }
    }

    ordenado.push(objetivoEnLaMira)

    const index = imagina.indexOf(objetivoEnLaMira);

    if (index !== -1)  {
        imagina.splice(index, 1);
        }

    
    return ordenarA(imagina, ordenado)  //  importante tambien devolver esa nueva varible, es un nuevo parametro
}
//--------------------^^^^^^^^^^^^^^^---------------//
//-------------------FUNCION RECURSIVA--------------//
//------------------------a-mano--------------------//
//console.log(ordenarA([4,3,5,2,9,4]))

function bubbleSort(lista) {

    for (let i = 0; i < lista.length; i++) {

        for (let j = 0; j < lista.length - 1; j++) { // crear un bucle para tener una segunda lista de referencia

            if (lista[j] > lista[j + 1]) {
                // Intercambio
                let temp = lista[j]; // `temp` pasa a ser algo{} como "guardemelo un momento" 
                lista[j] = lista[j + 1]; // aca se hace que el segundo elemento pase a ser el primero, como decir que la silla se mueve de lado derecho de la mesa, a exitir en el lado izquierdo 
                lista[j + 1] = temp; // y aca recuperamos el otro numero y lo ponemos en el espacio derecha de la mesa
            }

        }
    }

    return lista;
}

console.log(bubbleSort([4,3,5,2,9,4]));

// hecho con IA