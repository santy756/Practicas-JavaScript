//EJERCICIO 1

console.log("EJERCICIO 1")

let valoresRandom = [20, 55, 33, 12, 17 ];
let acumulador = 0;

for (let i = 0; i < valoresRandom.length; i++) {
    acumulador += valoresRandom[i];
    if (acumulador %2===0 ) {
        console.log (acumulador + " Es par");
    } else {
        console.log(acumulador + " Es impar")
    }
}

//EJERCICIO 2

console.log("EJERCICIO 2")

let palabras = ["Sueño", "Hola", "Casa", "Tarde", "Frio", "Mundo","Celular"];  
let holamundo = "";
let hola = "";
let mundo = "";

for (let index2 = 0; index2<palabras.length; index2++) {
    if (palabras[index2] == "Hola") {
        holamundo += palabras[index2]
    } else if (palabras[index2] == "Mundo") {
        holamundo += palabras[index2]
    }
} console.log(holamundo)


for (let i=0; i<palabras.length; i++) {
    if (palabras[i]== "Hola" || palabras[i] == "Mundo") {
        
    }
} 


//EJERCICIO 3

console.log("EJERCICIO 3")

let peces = [15, 65, 78, 11, 9];
let maspesado = 1;
let masliviano = 999;

for (let i = 0; i<peces.length; i++) {
    if (maspesado<peces[i]) {
        maspesado = peces[i]        
    } else if (masliviano>peces[i]) {
        masliviano = peces[i]
    }
}console.log("El pez mas pesado es de " + maspesado+ " Kg")
console.log("El pez mas liviano es de " + masliviano+ " Kg")


//EJERCICIO 4

console.log("EJERCICIO 4")

let base = 2;
let resultado = 1;

for (let i = 0; i <8; i++) {
    resultado = resultado * base;
}

console.log(resultado);

//EJERCICIO 5 

console.log("EJERCICIO 5")

//Crear un ciclo que ingresando el un numero me genere la tabla de multiplicar de dicho numero

//Ejercicio utlizando el resultado en 0

let numero = 2;
let resultado2 = 0;

for (i=0; i<10; i++) {
    resultado2 = numero + resultado2;
    console.log(resultado2)
}

//EJERCICIO 6

console.log("EJERCICIO 6")

//Ejercicio utlizando el i para multiplicar

let numero3 = 4;
let resultado3 = 1;

for (i=1; i<11; i++) {
    resultado3 = numero3 * i;
    console.log(numero3 + " X " + i + " = " + resultado3)
}

//EJERCICIO 7 

console.log("EJERCICIO 6")

let productodescuento = ["Gaseosa", "Vino", "Fernet" ]
let listacompra = ["Tomate", "Aceite", "Leche", "Galletas", productodescuento, "Gaseosa"]

let descefectivo = "Consultar descuento por x producto";
let cargotarjeta = 1.17;

for (i=0; i<listacompra.length; i ++) {
    if (listacompra[i] == "Gaseosa") {
        console.log(descefectivo)
    } 
    
}