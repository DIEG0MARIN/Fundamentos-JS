// para definir una variable global utilzo var
var nombreVariable="Hola esta es mi variable"
// para imprimir el valor de la variable en consola utilizo console.log
console.log(nombreVariable)
Variable ="Segundo nomre de la variable"
console.log(Variable)

// Variables Locales
// un bloque de codigo es cualquier codigo que este encerrado entre llaves
{
    let variableLocal = "primer valor"
    console.log(variableLocal)

    var variableGlobal = "VariableGlobal"
}
console.log(variableGlobal)

let numero = 14;
// para los booleanos tenemos dos posibles valores True y False
let booleano = false                
let caracteres = "hola mundo"                           

var edad =23
{
    var edad =23
    console.log(edad)
}
console.log(edad)

//CONSTANTES

const PI =3.141592
console.log(PI)
//PI =3.95 LAS CONSTANTES NO CAMBIAN SU VALOR


//OPERADORES ARITMETICOS 

//Suma
let num1, num2, resultado
num1 = 65;
num2 = 87;
resultado = num1 + num2 + 100
// al concatenar con la coma me mantiene el dato entipo numerico, pero al concatenar con el + el tipo de dato lo asume como un dato string
console.log("El resultado de la suma es: " ,resultado)

//Multiplicacion
resultado = num1 * num2
console.log("El resultado de la multiplicación es: ", resultado)

// DIVISION
resultado = num1 / num2
console.log("El reultado de la división es: ", resultado)

// JERARQUIA DE OPERACIONES
resultado = (num1 * num2)/(num1 - num2)
console.log("El reultado de la operacion es: ", resultado)

//opcion para CONCATENAR
let num3 , num4, resul
num3 = "65"
num4 = "54"
resul = num3 +num4
console.log(resul)

// OPERADOR DE INCREMENTO
num1 = num1+1
num2++
console.log(num2)
console.log(num1)

// OPERADOR DE DECREMENTO
num1--
console.log(num1)
num2--
console.log(num2)
console.log("***************************************************************************OPERADORES DE COMPARACIÓN *********************************************************************************************")
// OPERADORES DE COMPARACION
let num8 = 8
let num9 = 9
mayor = num8 > num9
console.log(mayor)
menor = num8 < num9
console.log(menor)
mayorOigual = num8>= num9
console.log(mayorOigual)
menorOigual = num8 <= num9
console.log(menorOigual)
igual = num8 == num9
console.log(igual)
diferente = num8 != num9
console.log(diferente)
// DOBLE IGUAL: UNICAMENTE COMPARA EL VALOR MAS NO EL TIPO DE DATO. EJEMPLO:
num1 = 5;
num2 = "5";
resultado = num1 == num2
console.log(resultado)
resultado = "diego" == "diego"
console.log(resultado)

console.log("***************************************************************************OPERADORES LOGICOS *********************************************************************************************")
// OPERADOR Y  (AND) &&
resultado = true && false;
console.log(resultado)

// OPERADOR O (OR) ||
resultado= true || false;
console.log(resultado)

// NEGACION
resultado = !true
console.log(resultado)

