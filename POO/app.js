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
}

// Instanciar un objeto hijo 
const kyser = new Perro("kyser",10, true, "grande")
console.log(kyser)

//accediendo a metodos de su clase padre
console.log(kyser.comer())

//accediendo a los metodos de la clase hija
console.log(kyser.ladrar())


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

//Continuar minuto 01:32:00