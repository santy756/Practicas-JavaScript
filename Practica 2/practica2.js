// EJERCICIO 1 //

let opcion1 =123;
let opcion2 =322 ;
let opcion3 =725 ;
let opcion4 =15 ;
let opcion5 =88 ;

if (opcion1 % 2 == 0) {
    console.log("La variable es par")
} else {
    console.log("La variable es impar")
}

if (opcion2 % 2 == 0) {
    console.log("La variable es par")
} else {
    console.log("La variable es impar")
}

if (opcion3 % 2 == 0) {
    console.log("La variable es par")
} else {
    console.log("La variable es impar")
}

if (opcion4 % 2 == 0) {
    console.log("La variable es par")
} else {
    console.log("La variable es impar")
}

if (opcion5 % 2 == 0) {
    console.log("La variable es par")
} else {
    console.log("La variable es impar")
}

// FIN EJERCICIO 1 //


// EJERCICIO 2 //

let h1 = "Hola mundo!";
console.log("%cHola mundo!", "color:red;")

// FIN EJERCICIO 2 //

// EJERCICIO 3 //

let i, j;

for (i = 1; i<=6; i++) {
    resultado = " ";
    for (j=1; j<= i; j++){
        resultado += "* ";
    }
    console.log(resultado)
}

// FIN EJERCICIO 3 //

// EJERCICIO 4 //

//Soleado = 1 - Clima soleado ----- Solado = 2 - Clima Lluvioso.

let numero_cancha1 = 1;
let precio_cancha1 = 1200;
let cancha_libre1 = true;
let es_techada1 = true;
let soleado1 = 2;

let numero_cancha2 = 2;
let precio_cancha2 = 1300;
let cancha_libre2 = false;
let es_techada2 = true;
let soleado2 = 2;

let numero_cancha3 = 3;
let precio_cancha3 = 1000;
let cancha_libre3 = false;
let es_techada3 = false;
let soleado3 = 1;

let numero_cancha4 = 4;
let precio_cancha4 = 900;
let cancha_libre4 = true;
let es_techada4 = false;
let soleado4 = 1;


if (cancha_libre1 && soleado1 <= 1) {
    console.log("Felicidades su cancha fue reservada con éxito, por favor abone el monto de $" + precio_cancha1)
} else if (es_techada1) {
    console.log("Felicidades su cancha techada fue reservada con éxito, por favor abone el monto de $" + precio_cancha1)
} else (
    console.log("Esta cancha se encuentra reservada/La cancha no esta preparada para el clima pronosticado")
)

if (cancha_libre2 && soleado2 <= 1) {
    console.log("Felicidades su cancha fue reservada con éxito, por favor abone el monto de $" + precio_cancha2)
} else if (es_techada2) {
    console.log("Felicidades su cancha techada fue reservada con éxito, por favor abone el monto de $" + precio_cancha2)
} else (
    console.log("Esta cancha se encuentra reservada/La cancha no esta preparada para el clima pronosticado")
)

if (cancha_libre3 && soleado3 <= 1) {
    console.log("Felicidades su cancha fue reservada con éxito, por favor abone el monto de $" + precio_cancha3)
} else if (es_techada3) {
    console.log("Felicidades su cancha techada fue reservada con éxito, por favor abone el monto de $" + precio_cancha3)
} else (
    console.log("Esta cancha se encuentra reservada/La cancha no esta preparada para el clima pronosticado")
)

if (cancha_libre4 && soleado4 <= 1) {
    console.log("Felicidades su cancha fue reservada con éxito, por favor abone el monto de $" + precio_cancha4)
} else if (es_techada4) {
    console.log("Felicidades su cancha techada fue reservada con éxito, por favor abone el monto de $" + precio_cancha4)
} else (
    console.log("Esta cancha se encuentra reservada/La cancha no esta preparada para el clima pronosticado")
)


// FIN EJERCICIO 4 //
