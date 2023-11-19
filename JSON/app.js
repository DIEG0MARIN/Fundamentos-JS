// CREACION DE UN OBJETO PERSONA
const persona ={
    //propiedades
    nombre : "Kelly",
    apellido : "Rincon",
    edad : 26,
    estatura: 1.65,
    peso : "65 kg",
    sexo: "F",
    fechaNacimeinto : "20/08/1997",

}

//ACCEDIENBDO A LA INFROMACION DEL OBJETO

//para acceder a la información de un objeto lo hacemos de la siguiente manera
//nombreObjeto.nombrePropiedad
console.log(persona.nombre)
console.log(persona.estatura)

// MODIFICANDO UNA PROPIEDAD
console.log(persona.peso)
persona.peso = "60kg"
console.log(persona.peso)

//AGREGANDO UNA  NUEVA PROPIEDAD
persona.ciudad = "Bogotá"
console.log(persona)

// PASANDO DE OBJETO JS A FORMATO JSON
let objeto_json = JSON.stringify(persona)
console.log("Objeto persona convertido a json")
console.log(objeto_json)

//PASANDO DE FORMATO JSON A OBJETO
let json_objeto = JSON.parse(objeto_json)
console.log("JSON PERSONA CONVERTIDO NUEVAMENTE A OBJETO")
console.log(json_objeto)