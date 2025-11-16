let obj1 = {pro1:"alonijfnwjiefnwien"}
let obj2 = {pro2:"alofwdfwedcw"}

function juntar (objeto1,objeto2){
    let obj3 = {}
    for (let i in objeto1){
        obj3[i] = objeto1[i] // i es pro1 asi como objeto1[i] pasa a ser alonijfnwjiefnwien
    }
    for (let i in objeto2){
        obj3[i] = objeto2[i] //asi se junta tanto el primero como el segundo en un nuevo objeto
    }
    return obj3
}


console.log(juntar(obj1,obj2))



/// esta es la opcion creando una nueva ==>



// let obj1 = {pro1:"alonijfnwjiefnwien"}
// let obj2 = {pro2:"alofwdfwedcw"}

// function juntar (objeto1,objeto2){
//     for (let i in objeto1){
//         obj2[i] = objeto1[i] // i es pro1 asi como objeto1[i] pasa a ser alonijfnwjiefnwien
//     }
//     return obj2
// }


// console.log(juntar(obj1,obj2))
