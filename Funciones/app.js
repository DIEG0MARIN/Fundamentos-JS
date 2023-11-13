// LAS FUNCIONES SE DEFINEN MEDIANTE LA PALABRA function

// FUNCIONES DECLARADAS

saludar("kelly", 26)

//una función siempre debe tener un nombre al cual yo pueda llamarla mas tarde si es necesario

// los parametros son cualquier dato que yo necesite para ejecutar la funcion, no son obligatorios

/*Estructura de una función declarada
function nombreFuncion(parametros){
    Logica de la aplicacion
} */


function saludar(nombre, edad){
    console.log(`Hola mi nombre es ${nombre} y mi edad es ${edad} años`)
}


saludar("Diego", 28)
saludar("liam", 1)


function sumar(num1, num2){
    //valor de retorno: ese le valor que va a devolver la funcion una vez sea llamada
    let suma = num1+num2;
    console.log(`la suma de los números es: ${suma}`)
}
sumar(5,7)

// OTRA FORMA DE HACER LA SUMA ES :
console.log(suma(28,26))

 function suma(a,b){
    let resultado
    resultado = a+b
    return resultado
 }
 console.log(suma(23,5))

 //Funciones expresadas: Hacen parte del ámbito local, es decir que solo estarán disponibles una vez las haya creado. NO ANTES , NUNCA ESTAN DISPONIBLESANTES DE QUE SE CREEN.

 //console.log( despedir())
 //para el caso anterior si intento ejecutar la función me apareceera error debido a que no se ha inicializado la variable. Cosa que no pasa con las funciones declaradas, que se pueden llamar en cualquier momento.
 const despedir = function(){
    return "Muchas gracias por usar la app! Hasta luego"
 }
console.log( despedir())