let opciones = prompt ("Ingrese la operacion que desea realizar \n" +  
                        "1 - Sumar \n" + 
                        "2 - Restar \n" + 
                        "3 - Dividir \n" + 
                        "4 - Multiplicar \n" + 
                        "5 - Salir ");

opciones = Number(opciones);


function seleccion(opciones) {
    opciones = prompt ("Ingrese la operacion que desea realizar \n" +  
                        "1 - Sumar \n" + 
                        "2 - Restar \n" + 
                        "3 - Dividir \n" + 
                        "4 - Multiplicar \n" + 
                        "5 - Salir ");

    opciones = Number(opciones);
}



function sumar(primerValor) {
    while (primerValor!=0) {
        primerValor= prompt("Ingrese un valor o 0 para terminar la operacion")
        primerValor=Number(primerValor)
        rtasuma += primerValor;
    };
}

function multi(multi1Valor, multi2Valor) {
    return multi1Valor * multi2Valor;
}



let rtasuma = 0;

let multi1Valor = "";
let multi2Valor = "";





while (opciones!=5) {
    switch (opciones) {
        case 1:
            let primerValor = alert("Presione Aceptar")
            sumar(primerValor);
            alert(rtasuma);
            seleccion(opciones);
            break;
        case 2:
            restar(resta1, resta2);
            alert(rtaresta);
            seleccion(opciones)
            break;
        case 3:
            let tercerValor = prompt("Ingrese un valor 3")
            tercerValor=Number;
            division(tercerValor);
            alert(rtadivision);
            seleccion(opciones);
            break;
        case 4:
            multi1Valor=prompt;
            multi2Valor=prompt;
            multi(multi1Valor, multi2Valor)
            alert (multi(multi1Valor, multi2Valor))
            seleccion(opciones);
            break;
        default:
            alert("Elija una de las opciones validas")
            opciones = prompt ("Ingrese la operacion que desea realizar \n" +  
                        "1 - Sumar \n" + 
                        "2 - Restar \n" + 
                        "3 - Dividir \n" + 
                        "4 - Multiplicar \n" + 
                        "5 - Salir ");
            opciones = Number(opciones);
            break;
    }
}


//Ejercicio 2

let usuario= prompt("Ingrese su Usuario");

let contraseña= prompt("Ingrese su Contraseña");

function credenciales(usuario,contraseña) {
    return usuario + "\n" + contraseña;
}

console.log(credenciales(usuario,contraseña))





//Ejercicio 4

let cantidadVuelta = 20;

let cantidadASumar = 1;

let resultado = 0; 


for (let index = 0; index < cantidadVuelta; index++) {
    resultado+= cantidadASumar;
    console.log(resultado);
}


    



    