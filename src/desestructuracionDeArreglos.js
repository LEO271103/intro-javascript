// DESESTRUCTURACION DE ARREGLOS

const gennin = ['naurto', 'zazuke', 'zacura'];

// con los corchetes de define un desestructuracion

const [e1]= gennin;
console.log(e1);

const [, e2]= gennin;
console.log(e2);

const [, ,  e3]= gennin;
console.log(e3);

const retArr = ()=> {
    return[ 1213, 'ABC'];
}

const [letras, num]= retArr();
console.log(letras, num);