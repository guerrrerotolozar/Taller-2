const lista = [
    { nombre: "julian", notas: [5.0, 4.4, 4.5, 5.0, 3.5] },
    { nombre: "camila", notas: [4.2, 4.5, 4.0, 4.8, 4.3] },
    { nombre: "andres", notas: [3.8, 4.0, 4.2, 4.1, 3.9] },
    { nombre: "sofia",  notas: [4.7, 4.8, 5.0, 4.6, 4.9] },
    { nombre: "mateo",  notas: [3.9, 4.1, 4.0, 4.2, 4.3] },
    { nombre: "valeria", notas: [4.3, 4.4, 4.7, 4.5, 4.6] }
];

NotasFinales = []

function sacarParcial ( imagina ) {
    let a = 0;   
    for( let i of imagina ) {
        a += i ;
    }
    return a;
}

function calcularPromedio ( a, b ) {
    c = ( a / b ).toFixed( 1 );  
    return +c
}


// function promedio (listaEstudiantes){
    
//     for ( let i of listaEstudiantes){
//         let {nombre:n,notas:esa} = i;
//         let notaParcial = sacarParcial(esa);
//         let sacarPromedio = calcularPromedio(notaParcial,esa.length);
//         NotasFinales.push({nombre:n,"notaFinal":sacarPromedio})
//     }    
// }
// promedio(lista);

(( listaEstudiantes ) => {
    for ( let i of listaEstudiantes){
        let {nombre:n,notas:esa} = i;
        let notaParcial = sacarParcial(esa);
        let sacarPromedio = calcularPromedio(notaParcial,esa.length);
        NotasFinales.push({nombre:n,"notaFinal":sacarPromedio})
    } 
})(lista);


function buscaMayor(imaginate){
    
    mejorNota = 0
    mejorEst = ""
    for (let k of imaginate){
        let {nombre:n,notaFinal:nF} = k;

        if (nF > mejorNota){
            mejorNota = nF;
            mejorEst = n;
        }
    }
    return `${mejorEst} saco el mayor puntaje, ${mejorNota}`

}  
console.log(buscaMayor(NotasFinales))