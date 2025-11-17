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

console.log(ordenarA([4,3,5,2,9,4]))
