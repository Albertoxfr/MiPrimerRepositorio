// Primer Ejercicio
function sinParametros(){
  return true
}
console.log(sinParametros())

// Segundo Ejercicio

console.log("inicio")
setTimeout(() => {
  console.log("Hola soy una promesa")
}, 5000);

// Tercer Ejercicio

function* indice() { 

let i = 0
 while(true) 
  yield (i++ * 2)
}

let gen = indice();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);