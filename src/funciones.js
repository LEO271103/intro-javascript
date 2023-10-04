function hola(nombre) {
  return `hola,  ${nombre} `;
}
console.log(hola("juan"));

const saludar = function (nomnre) {
  return `hola, ${nomnre}`;
};

console.log(saludar("leo"));

//  funciones con notacion de flecha
const kiubu = (nomnre) => {
  return `hola, ${nomnre}`;
};
console.log(kiubu("valeria"));

const kiubu2 = (nombre) => `hola, ${nombre}`;
console.log(kiubu2("antonio"));

const getUser = ()=> ({
  id: "ABC",
  username: "usuario 1 "
});

const user = getUser();
console.log(user);

const getUserActivo = (nombre) => ({
  uid: "222",
  user: nombre
});

const userActivo = getUserActivo ("hugo");
console.log(userActivo);
