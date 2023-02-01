let Nombre = "Carlos"
let Apellido = "Freitez"
let estudiante = `${Nombre} ${Apellido}`
let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()
let ContarLetras = estudiante.length
let PrimeraLetra = Nombre.charAt(0)
let UltimaLetra = Apellido.charAt(6)
let EliminarEspacios = estudiante.trim()
let PalabraIncluida = estudiante.includes(Nombre)
console.log(PalabraIncluida)