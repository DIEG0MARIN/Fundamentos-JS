// Defincióin o creación de un arreglo 
//Para crear un arreglo solo es necesario utilizar la siguiente estructura
// const nombreArreglo["elemento1", "elemento2",...]
const colores =["Verde","Rosado", "Azul","Morado"]
console.log(colores)
// para acceder a un elemento en especifico de un arreglo se utiliza el id que asigna de la siguiente manera
console.log(colores[2])

//ACCEDER A PRIMER ELEMENTO 
console.log(colores[0])

//En js se pueden realizar arreglos con multiples tipos de datos incluyendo arreglos
const VariosDatos = ["Dato caracter o string", 2356, true, "A", ["diego", 28,["26"]]]
console.log(VariosDatos)
console.log(VariosDatos[4][1])
console.log(VariosDatos[4][2][0])

const informacion = ["Desarrollador" ,"Diego","Marin", 28, "dmarin@gmail.com", 3212454784]
console.log(informacion[1])
console.log(`Mi correo es ${informacion[3]}`)

// METODOS PARA MANIPULACION DE ARREGLOS
// PUSH: SIRVE PARA AGREGAR UN NUEVO ELEMENTO AL ARREGLO
informacion.push("calle 10 este")
console.log(informacion)

//Pop: es el metodo que nos sirve para quitar el ultimo elemento de un arreglo
informacion.pop()
console.log(informacion)

// Fill: sirve para llenar un arreglo con cierta cantidad de datos arreglo de 100 elementos 
const numeros = Array(100).fill(false)
console.log(numeros)
numeros.push(true)
console.log(numeros)

//Propiedad: permite saber el tamaño del arreglo
console.log("El arreglo informacion tiene " , informacion.length , "elementos")

//Splice: permite eliminar un elemento de acuerdo a la posicion que tiene 
//En este caso elimina el elemento de la posición 0  y elimino 2 elementos 
informacion.splice(0,1)
console.log(informacion)

//Recorriendo arreglos
//Para rrecorrer arreglos se suele utilizar la estructura de control for 
const localidades =["kennedy", "usaquen", "bosa", "suba",
"fontibon", "sumapaz", "teusaquillo", "chapinero", "ciuddad bolivar", "antonio nariño", "santa fe", "puente aranda", "soacha", "tunjuelito" , "Engativa", "usme","candelaria"]
console.log(localidades.length)

for(i=0; i < localidades.length; i++){
    console.log(`La localidad ${i} es ${localidades[i]}`)
}

for (let i = 0; i<colores.length; i++){
    console.log(`Tengo el ${colores[i]} en el arreglo de colores`)
}

// Foreach : es una estructura de control especialmente util para estructuras de datos compuedtas como los arreglos                             
informacion.forEach(dato =>{
    console.log(dato)
})

colores.forEach(color =>{
    console.log(`rrecorriendo colores con foreach ${color}`)
})

localidades.forEach( localidades=> {
    console.log(`rrecorriendo localidades con foreach ${localidades}`)
})


const cancionesFavoritas=["Eclipse de amor", "forever de kiss", "dias tras dia ", "el serrucho de mr. black", "Get Lucky", "I waiting for you", "Open sesami", "chau - no te va a gustar", "Perfect", "november rain", "Las mañanitas", "Elevation U2", "Radio Ga Ga", "i wanna be yours","you spin me round", "10 mil porques beret", "universe de colplay"]
console.log(cancionesFavoritas.length)

//Top 3 de las canciones favoritas
for (let i = 0; i < 3; i++) {
    console.log(cancionesFavoritas[i]); 
}

cancionesFavoritas.forEach(cancion=>{
    console.log(`Cancion favorita: ${cancion}`)
})

console.log("-------------------------Objetos ")
//Objetos
//CLASE CARRO
const carro = {
    //Propiedades del carro
    //Propiedades son caracteristicas propias del objeto
    //ATRIBUTOS
    marca: "Suzuki",
    color: "Negro",
    tamanio: "Grande",
    anio: 2021,
    duenios: ["Liliana", "Vanesa", "Juan", "Sebastian"],

    //Metodos del carro
    //Los metodos son comportamiento o acciones propias del objeto
    acelerar: function(){
        return "Estoy acelerando"
    },
    frenar: function(){
        return "Estoy frenando"
    }
}

//Acceder a las propiedades de un objeto
console.log(`El año del vehiculo es ${carro.anio} y la marca es ${carro.marca}. Los dueños son:`)

// console.log(carro.duenios)
//Acceder a las propiedades que se encuentran dentro del arreglo que esta dentro del objeto
//EN ESTE CASO QUIERE SABER CUANTOS DUEÑOS HA TENIDO EL CARRO
carro.duenios.forEach(duenio => {
    console.log(duenio)
})



carro.duenios.pop()
console.log(`El primer dueño del carro fue ${carro.duenios[0]}`)

console.log(carro.duenios)
console.log(carro.duenios[1])
carro.duenios[1]={
    nombre: "Vanessa",
    apellido: "Lineros",
    edad: 21
}
console.log(carro.duenios[1])
console.log(carro.duenios)

//Acceder a los metodos de un objeto
console.log(carro.acelerar())
console.log(carro.frenar())

//Modificar las propiedades de un objeto
console.log(carro.marca)
carro.marca="BMW"
console.log(carro.marca)

const mascota = {

    //Propiedades

    nombre: "Tara",
    edad: "5 años",
    duenio : {
        nombre: "Liliana",
        apellido: "Herrera",
        edad: 32,
        contacto: {
            telefono: 32146556,
            correo: "liliana@gmail.com",
            direccion: "calle 14#54-5"
        }
    },
    vacunado: true,
    raza: "Beagle",
    amigos: ["Tinny", "Tom", "Princesa", "Paquita", "Luna", "Eron", "Simba", "Gordo", "Juana"],
    
    //Metodos O FUNCIONES 
    ladrar: function(){
        return "Guau guau"
    },
    correr: function () {
        return "Estoy corriendo!"
    },
    comer: function () {
        return "Estoy comiendo"
    },
    morder: function(){
        return "Estoy mordiendo"
    }
}

console.log(mascota)
console.log(`El telefono del dueño de la mascota ${mascota.nombre} es: ${mascota.duenio.contacto.telefono}`)
