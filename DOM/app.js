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
parrafoResultado.textContent = nombreFormulario.value
})

