//# EJERCICIO 1
const mensaje = "Fin del ejercicio";
console.log(mensaje)
//# FIN EJERCICIO 1

//# EJERCICIO 2

let a = "Hola ";
let b = "mi nombre ";
let c = "es ";
let d = "Santiago Perez ";
let e = "Como estas? ";

console.log(a + b + c + d + e);
console.log(b + e + d + a + c);
console.log(d + e + b + a + c);
console.log(c + a + b + d + e);
console.log(mensaje)

//# FIN EJERCICIO 2

//# EJERCICIO 3

const descuento10 = 0.9;
const tarjeta = 1.18;

let frutas = 9.50;
let verduras = 7.80;
let carne = 23.60;
let comidamascota = 13.50 ;
let papel = 6.80;
let yerba = 5.50;

let total = frutas + verduras + carne + comidamascota + papel + yerba;

let comidacondescuento = comidamascota - descuento10;

console.log( "Precio individual ", frutas, verduras, carne, comidamascota, papel, yerba);
console.log( "Total sin descuento", frutas + verduras + carne + comidamascota + papel + yerba);
console.log ("Descuento 10% mascotas: 13.50 = ", comidamascota * descuento10);
console.log ("Total (Con descuento mascotas)", frutas + verduras + carne + comidacondescuento + papel + yerba);
console.log("Recargo por tarjeta de credito ", total * tarjeta);
console.log("3 Cuotas de ", total * tarjeta / 3);
console.log("Pago en efectivo del 50%", total * .5, "Total del 50 % con recargo por tarjeta de credito", total * .5 * tarjeta);
console.log ("Precio en 3 cuotas del precio final de '39.353'", 39.353 / 3)
console.log(mensaje)

//# FIN EJERCICIO 3


//# EJERCICIO 4


let primero = 1;
let segundo = 2;
let tercero = 3;
let cuarto = 4;
let quinto = 5;
let sexto = 6;

let ejercicio1 = primero > segundo;
console.log ("1 es mayor que 2? ", ejercicio1)
let ejercicio2 = segundo < tercero;
console.log ("2 es menor que 3?", ejercicio2)

let ejercicio3a = primero && segundo == cuarto;
console.log("1 y 2 son igual a 4? ", ejercicio3a)
let ejercicio3b = quinto && sexto <= primero;
console.log("5 y 6 son menor o igual a 1? ", ejercicio3b)
let ejercicio3c = tercero && segundo >= cuarto;
console.log("3 y 2 son mayor o igual a 4? ", ejercicio3c)

//let sextoa = sexto || quinto; 
//console.log("1 o 5 es menor o igual a 6?", sextoa);
//let ejercicio3orB = segundo === 2 || cuarto === 4 === tercero ;
//console.log("2 o 4 es igual a 3?", ejercicio3orB);
//let ejercicio3orC = cuarto === 4 || primero === 1 >= primero;
//console.log("4 o 1 es menor o igual a 1?", ejercicio3orC):






//# FIN EJERCICIO 4


