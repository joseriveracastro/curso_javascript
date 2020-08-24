'use strict'

// ARRAYS, ARREGLO, MATRICES

var nombre = "Emmanuel Paternina";
var nombres = ["Jose Martinez","Ana Perez","Luis Morales","Pedro Rodriguez",52,true];

var lenguajes = new Array("php","JS","Go","Java");

var elemento = parseInt(prompt("Que elemento del array quieres? : ",0));

if (elemento>=nombres.length){
    alert("Introduce el numero correcto menor que "+ nombres.length);
}else{
    alert("El Usuario seleccionado es: "+nombres[elemento]);

}
