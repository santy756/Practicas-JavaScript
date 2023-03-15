let opciones = prompt ("Ingrese la operacion que desea realizar \n" +  
                        "1 - Sumar \n" + 
                        "2 - Restar \n" + 
                        "3 - Dividir \n" + 
                        "4 - Multiplicar \n" + 
                        "5 - Salir ");

opciones = Number(opciones);

const mensaje = ("Su resltado es: ")

function seleccion(opciones) {
    opciones = prompt ("Ingrese la operacion que desea realizar \n" +  
                        "1 - Sumar \n" + 
                        "2 - Restar \n" + 
                        "3 - Dividir \n" + 
                        "4 - Multiplicar \n" + 
                        "5 - Salir ");

    opciones = Number(opciones);
}

function ValoresIngresados() {
    let valores = [];
    let primer_valor = prompt("Ingrese primer valor");
    let segundo_valor = prompt("Ingrese segundo valor");
    primer_valor=Number(primer_valor);
    segundo_valor=Number(segundo_valor);
    valores.push(primer_valor);
    valores.push(segundo_valor);
    return valores;
}


function rtaSuma(valoresResultado) {
    let resultadoSuma = valoresResultado[0] + valoresResultado [1];
    return resultadoSuma;
   }
function rtaResta(valoresResultado) {
    let resultadoSuma = valoresResultado[0] - valoresResultado [1];
    return resultadoSuma;
   }
function rtaDivision(valoresResultado) {
    let resultadoSuma = valoresResultado[0] / valoresResultado [1];
    return resultadoSuma;
   }
function rtaMulti(valoresResultado) {
    let resultadoSuma = valoresResultado[0] * valoresResultado [1];
    return resultadoSuma;
   }

let valoresResultado = ValoresIngresados();



    switch (opciones) {
        case 1:
            alert(mensaje + rtaSuma(valoresResultado))
            
            break;
        case 2:
            alert(mensaje + rtaResta(valoresResultado))
            
            break;
        case 3:
            alert(mensaje + rtaDivision(valoresResultado))
            
            break;
        case 4:
            alert(mensaje + rtaMulti(valoresResultado))
            break;    
        default:
            alert("Elija una de las opciones validas");
            break;
    }

    
    

//Ejercicio 2

let usuario= prompt("Ingrese su Usuario");

let contraseña= prompt("Ingrese su Contraseña");

function credenciales(usuario,contraseña) {
    return usuario + "\n" + contraseña;
}

 console.log(credenciales(usuario,contraseña))


//Ejercicio 3



function potencia() {

    let base = prompt("Ingrese la Base de la potencia")
    let exponente = prompt("Ingrese el exponente de la potencia")
    base = Number(base);
    exponente = Number(exponente);

    let resultado = base;

    for (let index = 1; index < exponente.length; index++) {
        resultado = resultado*base;
    }
    
    return resultado;
}

const rta = potencia(resultado);
alert(rta)

//Ejercicio 4

let cantidadVuelta = prompt("Cantidad de vueltas");

let cantidadASumar = prompt("Cantidad a sumar");

function contador(cantidadASumar, cantidadVuelta) {
    let resultado1 = 0;
    for (let index = 1; index < cantidadVuelta; index++) {
        resultado1+= cantidadASumar;
        console.log(resultado1);
    }
    return resultado1
}

const rtacontador= contador(cantidadVuelta, cantidadASumar);

//contador(2,10)
console.log(rtacontador)
    



    