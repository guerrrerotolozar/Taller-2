const prompt = require("prompt-sync")();
const listaDeCompra  = [{producto:"Galleta",precio:10000,cantidad:2,descuento:10},
                        {producto:"Chocolate",precio:20000,cantidad:1,descuento:0},
                        {producto:"Pan",precio:10000,cantidad:1,descuento:30,},
                        {producto:"Huevos",precio:18000,cantidad:1,descuento:0},
                        ]

function subtotal (a,b){
    return a*b;
}

function calculoDesc (a,b){
    return a * (1 - b / 100);
}

function descuentoObtenido(a,b){
    return a - b;
}



function totalCarrito (lista){
    let total = 0;
    let acumulado = 0;
    
    for(let i of lista){
        let {producto:pro,precio:pre,cantidad:can,descuento:des} = i;

        //let subtotal = pre*can;
        const sub = subtotal(pre,can);

        //let calculoDesc = subtotal * (1 - des / 100);
        const descuento = calculoDesc(sub,des);

        //let descuentoObtenido = subtotal - calculoDesc 
        const descuentoAcumulado = descuentoObtenido(sub, descuento);

        console.log(`lleva ${can} de ${pro} que cuesta ${pre}`)

        if ( des > 0 ){
            console.log(`- El ${des}% de descuento que en ${descuento}; ${descuentoAcumulado}`)
            acumulado += descuentoAcumulado
        }

        total += descuento;
    }

    return {
    total: total,
    ahorro: acumulado
    }

}
const p = totalCarrito(listaDeCompra)
console.log("TOTAL",p.total, "AHORRADO",p.ahorro);