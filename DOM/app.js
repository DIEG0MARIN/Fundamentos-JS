// Como obtener un elemento en el documento HTML por medio de los selectores

//Para obtener un elemento por medio de una etiqueta HTML
//document hace referencia al documento HTML
console.log(document.getElementsByTagName("p"))//obtener algun elemento HTML por medio de la etiqueta
console.log(document.getElementsByClassName("elemento-selector")) // obetener algun elemento HTML por medio de las clases
console.log(document.getElementById("principal-title"))

//Para acceder a un elemento en especifico ya sea seleccionando por etiqueta o por clases podemos utilizar nuestra sintaxis de arreglos

console.log(document.getElementsByTagName("li")[1])


let  parrafo = document.getElementById("parrafo")
console.log(parrafo)
parrafo.textContent = "Hola, este es mi primer parrafo por medio del DOM"
let numUno = 15, numDos = 26;
parrafo.textContent = `El resultado de la suma es: ${numUno +numDos}`
console.log(parrafo)

// Crear otro parrafo  
/*let parrafo2 = document.createElement("p")
parrafo2.setAttribute("id","segundo-parrafo")
console.log(document.getElementById("segundo-parrafo"))*/


let botonFormulario =  document.getElementById("boton-formulario")

// con addEvenListener podemos crearle eventos a nuestros botones

/*botonFormulario.addEventListener("click", function(){
    alert("Se dio click")
})*/

botonFormulario.addEventListener("click", function(){
    let nombreFormulario = document.getElementById("nombre")

    //value permite obtener el valor que ingresa en una entrada de un formulario
    //console.log(nombreFormulario.value)

    let parrafoResultado = document.getElementById("resultadoFormulario")
parrafoResultado.textContent = `El nombre es: ${nombreFormulario.value}`
})

// CALCULADORA CON EL DOM

//se crea una variable resultado para guardar los resultados de las operaciones que realicemos
let resultado
//Obtengo por medio del DOM y del ID el elemento boton sumar
let botonSumar = document.getElementById("sumar")

//cuando se le da click al botonSumar entonces el ejecuta la siguiente función 
botonSumar.addEventListener("click",function(){

    // obtener los numeros del formulario por medio del id, pero como getElement obtiene todo el elemento (hasta el HTML) y nosotros solo necesitamos el valor, utilizamos la propiedad value para extraer el valor de la entrada
    let numeroUno = document.getElementById("num1").value
    let numeroDos = document.getElementById("num2").value


    //console.log(numeroUno, numeroDos)
    //Una vez tengo los datos,  realizo la operación suma, pero como el valor de los formularios esta en tipo string, se pasa a tipo entero con el metodo parseInt
    resultado  =parseInt(numeroUno) +parseInt(numeroDos)
    let impresionResultado = document.getElementById("resultadoCalculadora")
    impresionResultado.textContent = `El resultado de la suma es: ${resultado}`
})

// BOTON RESTAR
let botonRestar = document.getElementById("restar")
botonRestar.addEventListener("click",function(){


    let numeroUno = document.getElementById("num1").value
    let numeroDos = document.getElementById("num2").value
    resultado  =parseInt(numeroUno)  - parseInt(numeroDos)
    let impresionResultado = document.getElementById("resultadoCalculadora")
    impresionResultado.textContent = `El resultado de la resta es: ${resultado}`
})

//BOTON MULTIPLICAR
let botonMultiplicar = document.getElementById("multi")
botonMultiplicar.addEventListener("click",function(){


    let numeroUno = document.getElementById("num1").value
    let numeroDos = document.getElementById("num2").value
    resultado  =parseInt(numeroUno)  * parseInt(numeroDos)
    let impresionResultado = document.getElementById("resultadoCalculadora")
    impresionResultado.textContent = `El resultado de la multiplicación es: ${resultado}`
})

// BOTON DIVIDIR

let botonDividir = document.getElementById("dividir")
botonDividir.addEventListener("click",function(){
    let numeroUno = document.getElementById("num1").value
    let numeroDos = document.getElementById("num2").value
    resultado  =parseInt(numeroUno)  / parseInt(numeroDos)
    let impresionResultado = document.getElementById("resultadoCalculadora")
    impresionResultado.textContent = `El resultado de la división es: ${resultado}`
})

// CONTINUAR EN CLASE DEL 4 DE OCTUBRE