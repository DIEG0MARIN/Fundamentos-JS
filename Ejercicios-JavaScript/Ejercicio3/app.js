/* Según lo anterior haga un código que:
1. Imprima los números del 10 al 1.
2. Imprima los números pares. */
let numero = 10;
while(numero >=1){
    if(numero %2 == 0){
        console.log(numero)
    }
    numero --;

}


// IMPORTANTE ESTE EJERCICIO SE PUEDE USAR PARA LA SUMA DE GAUSS
/*  Realice un código que sume los números del 1 al 5 e imprima el resultado*/
let suma = 0;
for(let i= 1; i <=100; i++){
    suma += i;
}
console.log("La suma de los números del 1 al 5 es: " + suma);



/* Haga un código con while que imprima la tabla de multiplicar del 7.*/
let multiplicar = 1;
while (multiplicar <= 10) {
    let resultado = 7 * multiplicar;
    console.log(`7 x ${multiplicar} = ${resultado}`);
    multiplicar++;
}
