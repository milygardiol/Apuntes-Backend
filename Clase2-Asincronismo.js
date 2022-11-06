
//Asincronismo y sincronismo.
//Los servidores son asincronicos

function mostrar (params) {
    console.log(params)
}

const functionFlecha = (params) => {
    console.log(params)
}

//Callbacks
//comunicacion

function crearSaludo(nombre) {
    return "hola, ${nombre}"
}

//funciones que muestran cosas, devuelven resultados
//datos => proceso => informacion

/* Las funciones que reciben datos, devuelven datos. Las funciones que devuelven informacion, pasan por un proceso, no se habla con el usuario al procesar. 

Funciones de datos (pantalla-mostrar-usuario)
Fiunciones de proceso de informacion (oculto-sistemas)

Devolver => return
hacia dentro, o hacia fuera con console.log

Luego de un proceso, no hay muestra => nunca las dos cosas juntas

*/

//no cumple la regla
function crearSaludo(nombre) {
    //procesa info
    const mensaje = ` hola, ${nombre}`
    //muestra
    console.log(mensaje)
}

//puede llegar a causar problemas, a pesar de no ser una funcion incorrecta

/* Tener fuentes de datos, y otras de cambio */

//Todas las funcionenes hacen return, no hay console.log


//----------

//Esto si se emplea en el backend
//PROCESOS

const crearSaludo = (nombre) => {
    return "hola, ${nombre}"
}
const mostrarMensaje = (mensaje) => {
    //console.log(mensaje)
    //enviar al cliente de alguna manera
}

const saludo = crearSaludo(`mily`)
mostrarMensaje(saludo)

//-------

const saludoEnfatico = (nombre) => {
    return crearSaludo(nombre) + `!!!`
}

const saludoTriste = (nombre) => {
    return crearSaludo(nombre) + `...`
}

//-------
//MUESTRA
const crearSaludoConEstado = (nombre, emocion) => {
    return emocion(crearSaludo(nombre))
}

//se usan las entradas de una funcion, para otra funcion
//paradigma de programacion funcional (solo funciones)

//parametro de tipo funcion => callback

const saludoConEmocion = crearSaludoConEstadoDeAnimo (
    "mily", saludo => `${saludo}!!!`
)

//findIndex, find, filter, predicado, map => callbacks
//splice, push, reduce

//----------
//no se usara, solo callbacks, metodos de arrays
//closure ! currying

function sumar(n1) {
    return function sumarN1(n2) {
        return n1 + n2
    }
}

const sumar5 = sumar(5)
const resultado = sumar5(8)
console.log(resultado)
console.log(sumar5(10))

//------

//Promesas
//async await se usara para tener funciones asincronicas

//----------------------------------
//Funciones sincronicas para leer del lado del servidor

const a = +{}
requestAnimationFrame("fs").writeFile("ruta", "JSON.str")