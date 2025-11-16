let DatosDeLuis = {nombre:"luis", edad:24};

function aP (objeto, clave, valor) 
    {objeto[clave] = valor;}    // crea o actualiza claves dependiendo su existencia 
aP(DatosDeLuis, "Estado_Civil", "soltero" );

aP(DatosDeLuis, "correo", "luis.co@gmail.com")


// (( objeto, clave, valor ) => {
//     objeto[clave] = valor;  // autoinvocable, una perdida de tiempo
// })( DatosDeLuis, "Estado_Civil", "soltero");


console.log(DatosDeLuis)


