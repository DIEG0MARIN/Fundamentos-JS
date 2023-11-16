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

 /*estructura
 const nombreFuncion = function(parametros{
    Codigo que se desea ejecutar
 }) */ 
 const despedir = function(){
    return "Muchas gracias por usar la app! Hasta luego"
 }
console.log( despedir())

// Ejemplo : crear una funcion declarada que devuelva el nombre de mi mascota y cuantos años tiene
function mascota(nombre,edad){
    return `Mi mascota se llama ${nombre} y tiene ${edad} años.`;
}

console.log(mascota("Sasha", "6"));

// CREAR UNA FUNCION EXPRESADA QUE DEVUELVA EL NOMBRE DE USTEDES, EL DE SU MASCOTA Y LA EDAD

const datos = function(nombre,edad, nombreM,age){
    return `Hola mi nombre es ${nombre} tengo ${edad}  años y esta es mi mascota ${nombreM} ella tiene ${age} años`
}
console.log(datos("Diego", "28", "Sasha", "6"))

// RESOLUCION DEL EJERCICIO ANTERIOR POR LA PROFESORA
const saludarDos= function(nombreMacota,nombre,edad){
    return `Hola mi nombre es ${nombre} , mi edad es de ${edad} años y finalmente mi mascota se llama ${nombreMacota}`
}
console.log(saludarDos("Sasha", "Diego", "28"))





/*Según lo anterior haga un código que haga una función expresada para cada una de las siguientes operaciones:
1. Suma
2. Resta
3. Multiplicación
4. División 
Para seleccionar la operación que se requiere realizar haga un menu con la estructura de control switch
*/
const calcularSuma = function(x,y){
    return (x+y)
}
const calcularResta = function(x,y){
    return (x-y)
}
const calcularMultiplicacion = function(x,y){
    return (x*y)
}
const calcularDiv = function(x,y){
    let operacion = (y==0) ? "No es posible la división por 0" : (x*y)
    return operacion
}
4




// Alertas: puede mostrar salidas o informacion
// Prompt: permiten ingresar informacion
/*alert("Hola! Esta es mi primera alerta")
let mensaje = prompt("Hola, este es mi primer prompt. Por favor deja tu mensaje")
alert(mensaje) */

let opcion =prompt("Seleccione 1.Suma, 2.Resta, 3.Multiplicación, 4.División")
console.log(opcion)
let num1 = 6, num2 = 8;
switch (opcion){
    case "1":
        alert(calcularSuma(num1, num2))
        break;

    case "2":
        alert(calcularResta(num1,num2))
        break;
    
    case "3":
        alert(calcularMultiplicacion(num1,num2))
        break;

    case "4":
        alert(calcularDiv(num1,num2))
        break;
    default:
        alert("opción no valida")
        break;

}

let numero = 1
// METODO PARA PASAR DE TIPO NUMERICO A TIPO STRING O CARACTER toString
console.log(numero.toString())

// PASAR DE TEXTO A NÚMERO entero o tambien esta la opcion parsefloat
let = numeroTexto = "2"
console.log(parseInt(numeroTexto))