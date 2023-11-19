// Una API  es un intermediario que puede ayudar en la comunicación de dos programas y asi puedo compartir información 

//REALIZA A SOLICITUD CON FECHA A LA PAGINA DE JSONPLACEHOLDER
fetch("https://jsonplaceholder.typicode.com/users")

//UNA VEZ SE HACE LA SOLICITUD  A JSONPLACEHOLDER TENEMOS UNA RESPUESTA 
// ESA RESPUESTA SE GUARDA AUTOMATICAMENTE
// response.json()

.then(response => response.json())

// cuando ya tenemos esos datos en formato Json podemos acceder a ellos por medio de data

.then(data => {
    console.log(data)
})
