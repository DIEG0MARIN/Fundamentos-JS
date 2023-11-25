// Con set podemos guardar informacion en el localStorage

//se declara la variable de nombreUsuario con el valor diego
let nombreUsuario = "diego"

//Se guarda  la variable nombreUsuario en el localStorage con la llave "nombre"
localStorage.setItem("nombre", nombreUsuario)


//Definción del arreglo fruta
const fruta = ["manzana", " mandarina", " banano", " melon"]

// Se guarda el arreglo fruta en el localstorage con la llave "frutaFavorita"
localStorage.setItem("frutaFavorita", fruta)

// mostrar u obtener (getItem) informacion almacenada en el localstorage
// Se guarda la información del localstorage en la variable datoGuardado
let datoGuardado = localStorage.getItem("frutaFavorita")
console.log(datoGuardado)


// DOM 
//TRAER EL ELEMENTO CON EL ID "fruta" y guardarlo 
// el getElementById lo que hace es tarer un elemento que esta en el html para agregarle contenido
let parrafoFruta = document.getElementById("fruta")

//Le añadimos el datoGuardado  al parrfo comida 
parrafoFruta.textContent = `Mis frutas favoritas son: ${datoGuardado}`


// PRACTICA CON FORMULARIO Y ALMACENANDO LA FECHA DE NACIMIENTO EN EL LOCALSTORAGE

/*let fechaNacimiento = document.getElementById("fecha")
let botonFecha = document.getElementById("enviar")
console.log(fechaNacimiento.value) //el .value es para obtener el valor del elemento

// metodo para agregar alguna funcion a amis botones
// ahora quiero guardar este dato en el localstorage

botonFecha.addEventListener("click", function(){
    let valorFecha = fechaNacimiento.value
    localStorage.setItem("fechaNacimiento", valorFecha)
})


// ahora quiero guardar y mostrar la informacion en el html por medio del DOM
let fechaGuardada = localStorage.getItem("fechaNacimiento")
const parrafoFecha = document.getElementById("mostrar-fecha")
parrafoFecha.textContent = `La última fecha guardada es: ${fechaGuardada}`*/


// EJERCICIO FORMULARIO CON JSON, DOM Y LOCALSTORAGE


//guardar todos los elementos del documento  HTML que necesito para el ejercicio
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let fechaNacimiento = document.getElementById("fecha")
let botonFecha = document.getElementById("enviar")

class Usuarios{
    constructor(nombre, apellido, fecha){
        this.nombre = nombre
        this.apellido = apellido
        this.fecha = fecha
    }
}

botonFecha.addEventListener("click", function(){
    let valorNombre = nombre.value
    let valorApellido = apellido.value
    let valorFecha = fechaNacimiento.value

    const user = new Usuarios(valorNombre,valorApellido,valorFecha)
    let usuarios = []

    let localUsuarios = localStorage.getItem("usuarios")

    //Si localUsuarios no esta vacio el cumple if
    if(localUsuarios){
        usuarios = JSON.parse(localUsuarios)
    }

    usuarios.push(user)
    
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    alert("Usuario registrado con exito")
})

const mostrarUsuarios = function(){
    let usuarios = []
    let localUsuarios = localStorage.getItem("usuarios")
    if(localUsuarios){
        usuarios = JSON.parse(localUsuarios)
    }
    let listaUsuarios = document.getElementById("listar-usuarios")

    usuarios.forEach(usuario => {
        let datoUsuario = document.createElement("li")
        datoUsuario.textContent = `Nombre: ${usuario.nombre} - Apellido: ${usuario.apellido} - Fecha nacimiento: ${usuario.fecha}`

        //appendChild permite agregar un elemento HTML desde javascript
        listaUsuarios.appendChild(datoUsuario)
    });
}
mostrarUsuarios()