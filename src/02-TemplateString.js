const nombre = "leo",
  apellido = "avila sanchez";

let dado = 5;

if (true) {
  let dado = 6;
  const nombre = "jaja",
    apellido = "avihez";

  console.log(dado, nombre, apellido);
}

// uso de varibales dentro de Template String
console.log("hola mundo", nombre, apellido, dado);

const nombre3 = ` ${nombre}  ${apellido} `;
console.log(nombre3);

// Incluir caracteres no imprimibles (enter) y operaciones

const nombre4 = `
${nombre}
${apellido}
${1 + 1}
`;

console.log(nombre4);
// ----------------------------------------------------------------
function getSaludo() {
  return "hola mundo";
}
console.log(`este s un texto de una funcion  ${getSaludo()}`);
//  ------------------------------------------------------------
function cadena(texto) {
  return texto;
}

const texto = "Estefania";

console.log(`resultado cadena:  ${cadena(texto)}`);
