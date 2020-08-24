'use strict'

/*
Hacer un programa que muestre todos los numeros entre
2 numeros numeros introducidos por el ususario
*/

var numero_1 = parseInt (prompt("Introduce el primer numero ",0));
var numero_2 = parseInt (prompt("Introduce el segundo numero ",0));

document.write ("<h1>De "+numero_1+" a "+numero_2+ " estan estos numeros:</h1>")
for(var i = numero_1; i <= numero_2; i++)
{
document.write(i+"<br/>");

}
