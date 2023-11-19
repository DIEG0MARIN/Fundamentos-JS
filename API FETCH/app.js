// Una API  es un intermediario que puede ayudar en la comunicación de dos programas y asi puedo compartir información 

//REALIZA A SOLICITUD CON FECHA A LA PAGINA DE JSONPLACEHOLDER
fetch("https://jsonplaceholder.typicode.com/posts")

//UNA VEZ SE HACE LA SOLICITUD  A JSONPLACEHOLDER TENEMOS UNA RESPUESTA 
// ESA RESPUESTA SE GUARDA AUTOMATICAMENTE
// response.json()

.then(response => response.json())

// cuando ya tenemos esos datos en formato Json podemos acceder a ellos por medio de data

// Si ocurre algun error utilizamos catch
.catch(error => console.log(`El error es: ${error}`))

//rrecorrer cada elemento del arreglo
.then(data =>{
    data.forEach(elemento => {
        console.log(`El título del libro es: ${elemento.title} `)
    });
})

// Hacer un API FETCH que traiga los elementos del comments de jsonplaceholder https://jsonplaceholder.typicode.com/comments  e imprimir el siguiente mensaje por cada uno de los elementos en el json
// El correo  ${elemento.email} dejo el siguiente mensaje ${elemento.body}

fetch("https://jsonplaceholder.typicode.com/comments")

.then(response => response.json())

// en este caso comentarios es un arreglo y como tal queremos acceder a la información de ese arreglo
.then(comentarios =>{
    comentarios.forEach(elemento => {
        console.log(`El correo  ${elemento.email} dejo el siguiente mensaje: ${elemento.body} `)
    });
})

// API FETCH PARA EL JSON DE DATOS que cree en datos.json
fetch("datos.json")
.then(respuesta => respuesta.json())
.then( datos =>{
    console.log(datos)
    datos.forEach(persona =>{
        console.log(`${persona.nombre} ${persona.apellido } tiene  ${persona.edad} y su número de telefono es ${persona.contacto.telefono}`)
    });
})
