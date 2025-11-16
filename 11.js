const objeto = {}

function aP (objeto, clave, valor) {
        objeto[clave] = valor;
    }

function calculaArea(a,b){
    c = a*b 
    aP(objeto,"area",c) 
}

function calculaPerimetro(a,b){
    c = (a+b)*2
    aP(objeto,"perimetro",c) 
}


function calculoGeneral(ancho,alto){
    calculaArea(ancho,alto)
    calculaPerimetro(ancho,alto)
}

calculoGeneral(3,4)
console.log(objeto)