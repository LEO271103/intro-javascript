// DESTRUCTURACION o AISGNACION DESESTRUCTURANTES
const per={
    nombre: "leo", 
    edad: 20, 
    clave: 21232, 
};


const {nombre, edad, clave}=per;
console.log("nombre : ", nombre);
console.log("edad : ",edad);
console.log("clave : ",clave);

const ret= ({nombre, edad}) => {
    console.log("este es el otro nombre", nombre);
}
console.log(ret(per));

const ret2 = ({nombre, edad, clave})=> {
    return {
        nombreClave: clave,
        anios: edad, 
        latng:{
            lt: 14.3234, 
            lng: -23.43242
        }

    }
}

const { nombreClave, anios, latng:{lt, lng}}= ret2(per);
console.log(nombreClave, anios, lt, lng);