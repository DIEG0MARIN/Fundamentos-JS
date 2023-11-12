let edad = 32;
let nombre = "Diego";
if(edad >18){
    // Para sacar `` estas tildes es altGr y la tecla
    //Esta forma de imprimir es similar a un format en python
    console.log( `Bienvenido ${nombre} tu edad es ${edad}`)
}else if(edad ==18){
    console.log("Todavia no tienes la edad suficiente")
}
else{
    console.log("Lo siento", nombre , "no eres mayor de edad")
}


//OPERADOR TERNARIO 
// ? => si se cumple - verdadero
//: => de lo contrario -falsa
let age = 71;
let mayorEdad  = (age >= 18) ? "Eres mayor de edad" : "Eres nor de edad"
console.log(mayorEdad)

//Estructura switch
let opcion, num1, num2, resultado;
opcion = "suma"
num1 =12;
num2 = 54;
switch (opcion) {
    case "suma":
        console.log("Escogiste la suma")
        resultado = num1 +num2
        break;
    case "resta":
        console.log("Escogiste la resta")
        resultado = num1 -num2;
        break;
    case "multiplicacion":
        console.log("Escogiste la multiplicación")
        resultado = num1*num2;
        break;
    case "division":
        console.log("Escogiste la división")
        resultado  = num1/ num2;
        break;

    default:
        console.log("Operación no definida")
        break;
}
console.log(resultado)

// MINUTO 01:57.00