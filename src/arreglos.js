
const arreglo =[1,2,3];

// agregar con operador spread
const arreglo2 =[ ...arreglo, 5];

console.log(arreglo);
console.log(arreglo2);

const arreglo3 =arreglo2.map(function(numero){
    return numero * 2;
});

console.log(arreglo3);
