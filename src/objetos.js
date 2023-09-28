// objeto
const persona = {
  nombre: "leo",
  apellido: "avila",
  edad: 20,
  direccion: {
    ciudad: "guadalajara",
    cp: 45595,
    lat: 12.343,
    lng: 378283892,
  },
};

// console.log(persona);
// console.log({ persona });
console.table(persona);

// heredar el otro objeto
const persona2 = { ...persona };
persona2.nombre = "Peter";
console.table(persona2);
