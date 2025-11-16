const l = [ 
    { nombre:"ana", notas:[70, 80, 90, 60, 100, 80, 70] },
    { nombre:"jose", notas:[40, 60, 50, 30, 70, 60] },
    { nombre:"lopez", notas:[50, 60, 50, 70, 40, 60] },
    { nombre:"petro", notas:[80, 90, 70, 100, 90, 80] },
    { nombre:"uribe", notas:[20, 30, 40, 50, 60, 70] }
];

let aprobados =[]


function sacarParcial ( imagina ) {
    let a = 0;   
    for( let i of imagina ) {
        a += i ;
    }
    return a;
}

function calcularPromedio ( a, b ) {
    return ( a / b ).toFixed( 1 );  
    // Redondear, mantiene la cantidad de decimales que se le indique
}

function promedio (listaEstudiantes){
    
    for ( let i of listaEstudiantes){
        let {nombre:n,notas:esa} = i;
        let notaParcial = sacarParcial(esa);
        let sacarPromedio = calcularPromedio(notaParcial,esa.length);
        

        if ( sacarPromedio >= 60){
            console.log(`${n} pasa con un promedio de ${sacarPromedio}`)
            aprobados.push(i)

        }
    }
    

}
promedio(l)