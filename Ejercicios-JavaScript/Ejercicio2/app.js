let a,b,c,op;
a = 2;
b = 3;
c = 5;
op = (a*b)/c
console.log(op)
op = (b +c)*a
console.log(op)
op = (a/b) - (a + c)
console.log(op)
op = a % b;
console.log(op)


// INCREMENTAR EN MAS DE UNA UNIDAD EN JAVASCRIPT
let numero = 5;
// Incrementar en 3 unidades
numero += 3;
console.log(numero); 
 //Esto imprimirá 8 en la consola, ya que 5 + 3 = 8

 // Realice un código que realice una tabla de verdad de AND y OR dadas dos variables booleanas.
 // Variables booleanas
let variable1 = true;
let variable2 = false;

// Tabla de verdad para el operador AND
console.log("Tabla de verdad para AND:");
console.log(`(${variable1} && ${variable2}) = ${variable1 && variable2}`);
console.log(`(${variable1} && ${!variable2}) = ${variable1 && !variable2}`);
console.log(`(${!variable1} && ${variable2}) = ${!variable1 && variable2}`);
console.log(`(${!variable1} && ${!variable2}) = ${!variable1 && !variable2}`);

// Tabla de verdad para el operador OR
console.log("\nTabla de verdad para OR:");
console.log(`(${variable1} || ${variable2}) = ${variable1 || variable2}`);
console.log(`(${variable1} || ${!variable2}) = ${variable1 || !variable2}`);
console.log(`(${!variable1} || ${variable2}) = ${!variable1 || variable2}`);
console.log(`(${!variable1} || ${!variable2}) = ${!variable1 || !variable2}`);
