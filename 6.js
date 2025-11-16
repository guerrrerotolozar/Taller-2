// const l = [ 
// {nombre:"ana", notas:[1,2,3,1,3,4,2]},
// {nombre:"jose", notas:[2 ,4.5 ,3 ,3.5 ,2 ,2.5]},
// {nombre:"lopez", notas:[3 ,3.5 ,3.5 ,3.5 ,3 ,2]},
// {nombre:"petro", notas:[4 ,4.5 ,3.8 ,4 ,3.9 ,4.7]},
// {nombre:"uribe", notas:[2 ,1 ,1.5 ,2 ,3 ,4.7]},
// ]

// function sacarParcial ( imagina ) {
//     let a = 0;   
//     for( let i of imagina ) {
//         a += i ;
//     }
//     return a;
// }

// function calcularPromedio ( a, b ) {
//     return ( a / b ).toFixed( 1 );  
//     // Redondear, mantiene la cantidad de decimales que se le indique
// }

// function promedio (listaEstudiantes, protipo){

//     for ( let i of listaEstudiantes){

//         let {nombre:n,notas:esa} = i;
//         let notaParcial = sacarParcial(esa);
//         let sacarPromedio = calcularPromedio(notaParcial,esa.length);
        

//         if ( n == protipo){
//             return console.log(`${i} tiene ${sacarPromedio}`)
//         }

//     }

// }
// promedio(l,"ana")

// caso de lista

function sacarParcial ( imagina ) {
    let a = 0;   
    for( let i of imagina ) {
        a += i ;
    }
    return a;
}

function calcularPromedio ( a, b ) {
    return ( a / b ).toFixed(1);
}

function promedio(estudiante){

        let {notas:esa} = estudiante
        let notaParcial = sacarParcial(esa);
        let sacarPromedio = calcularPromedio(notaParcial,esa.length);

        console.log(`${sacarPromedio}`)
        


}
promedio({nombre:"ana", notas: [80, 90, 90] })



