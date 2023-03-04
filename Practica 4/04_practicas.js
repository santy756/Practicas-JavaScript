//EJERCICIO 1
let ganadores_concurso = ["Ana", "Oswaldo", "Raul", "Celia", "Maria", "Antonio"];

// A- Sentido natural
for (let index = 0; index < ganadores_concurso.length; index++) {
    console.log("Los ganadores son: " + ganadores_concurso)
}


// B- Sentido invertido

for (let index = ganadores_concurso.length -1; index >=0; index--) {
    console.log("Ganadores invertidos: " + ganadores_concurso)
}


// C- Cantidad de veces que se repite las vocales


for (let index = 0; index < ganadores_concurso.length; index++) {
    if (ganadores_concurso[index] === "A") {
        console.log("Las nombres que contienen A son : " + ganadores_concurso[index])
    } else{
        console.log("Ningun nombre tiene A")
    }
    
}