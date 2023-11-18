//CLASE PADRE

class Mascota{ //Definición de una clase
    // El metodo constructor no es mas que el molde o la plantilla para los atributos de mis objetos que cree con la clase.

    // Instanciar no es mas que crear un nuevo objeto
    constructor(nombre,edad,adoptado){

        //this hace referencia a la misma clase
        //Estos son los atributos o propiedades que van a compartir las mascotas que cree con la clase Mascota.
        this.nombre = nombre
        this.edad = edad
        this.adoptado = adoptado
    }

    // METODOS
    comer(){
        return "Estoy comiendo"
    }
    moverse(){
        return 
    }
    saludar(){
        return "Hola, soy una mascota"
    }



}

//CREAR OBJETOS
// Definición de un objeto con clases
const sasha = new Mascota("Sasha", 6,true)
const luna = new Mascota("luna", 7)
console.log(sasha)
console.log(luna)


//Ejemplo de como crear un objeto de la forma larga ( sin clase)
/*const princesa = {
    nombre : "kelly"
    edad : 26
} 
console.log(princesa)
*/

//ACCEDER A INFORMACION DE LOS OBJETOS que se crean a partir de clases
// PROPIEDADES
console.log(`sasha es adoptada ? ${sasha.adoptado}`)

//acceder a los metodos
console.log(luna.comer())
console.log(sasha.saludar())

// HERENCIA 
//CLASE HIJA
class Perro extends Mascota{
    constructor(nombre, edad, adoptado, tamanio){
        // Super es el metodo que va a llamar al constructor de la clase padre

        super(nombre, edad, adoptado)
        this.tamanio = tamanio

    }
    //crear metodo
    ladrar(){
        return "Guau guau"
    }
    moverse(){
        return "Me muevo en 4 patas"
    }
    //sobreescritura del metodo saludar 
    saludar(){
        return `Hola soy un perro y mi nombre es ${this.nombre}`
    }

}

// Instanciar un objeto hijo 
const kyser = new Perro("kyser",10, true, "grande")
console.log(kyser)

//accediendo a metodos de su clase padre
console.log(kyser.comer())

//accediendo a los metodos de la clase hija
console.log(kyser.ladrar())
console.log(kyser.saludar())


// CREANDO CLASE GATO
// Definición de la clase Gato que hereda de Mascota
class Gato extends Mascota {
    constructor(nombre, edad, adoptado, raza) {
        // Llamamos al constructor de la clase padre usando super
        super(nombre, edad, adoptado);
        this.raza = raza;
    }

    maullar() {
        return "¡Miau!";
    }
}

// Definición de la clase Ave que hereda de Mascota
class Ave extends Mascota {
    constructor(nombre, edad, adoptado, tipo) {
        // Llamamos al constructor de la clase padre usando super
        super(nombre, edad, adoptado);
        this.tipo = tipo;
    }

    volar() {
        return "Estoy volando";
    }
}

// Crear objetos
const sashas = new Gato("Sasha", 6, true, "Siames");
const lunas = new Gato("Luna", 7);

const piolin = new Ave("Piolín", 2, false, "Canario");

console.log(sasha);
console.log(luna);
console.log(piolin);

// Ejemplo de profesora crear clase gato y ave

class Cat extends Mascota{
    constructor(nombre,edad,adoptado,vidas){
        //con el metodo super heredo las propiedades de la clase padre
        super(nombre,edad,adoptado)

        //inicializar atributo 
        this.vidas = vidas
    }

    // METODOS
    ronronear(){
        return"Rrr"
    }
    cantidadVidas(){
        // para este caso debo cambiar el iker por this , dado a que si lo dejo asi. Solo me va a retornar la información de iker  y no de los otros objetos que pueda crear
       /* return `${iker.nombre} tiene ${iker.vidas} vidas`*/
       return `${this.nombre} tiene ${this.vidas} vidas`

    }

    // SOBREESCRITURA
    saludar(){
        return `Hola soy un gato y mi nombre es ${this.nombre}`
    }
}

// Instanciar la clase gato o crear objetos de la clase gato
const iker = new Cat("iker",1, true, 7)
console.log(iker)
console.log(iker.cantidadVidas())
console.log(iker.ronronear())
console.log(iker.saludar())



// crear otro gato
const botas = new Cat("botas", 5, true, 5)
console.log(botas.cantidadVidas())
console.log(botas.saludar())
//AHORA CREAR LA CLASE AVE
class Bird extends Mascota{
    constructor (nombre, edad, color ){
        super(nombre,edad)
        this.color = color
        // plumas inicialmente esta vacio
        this.plumas = null 
    }
    cantar(){
        return "pio pio"
    }
    // Setters y getters
    //Get es el método que obtiene algún valor de la clase
    get getcolor(){
        return this.color
    }

    // SET es el metodo que permite modificar el valor o alguna propiedad de la clase
    set setplumas(plumas){
        this.plumas = plumas
    }
    get getplumas(){
        return this.plumas
    }
}

//crear objeto
const pollito = new Bird("pollito", 3, "amarillo", "pequeño")

console.log(pollito.cantar())
console.log(pollito.getcolor)

// parte del metodo set
pollito.setplumas ="Largas"
console.log(pollito.getplumas)



// continuar con la clase del 2 de octubre
