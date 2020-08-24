'use strict'

/*
Mostrar todos los numeros impares entre dos numeros
introducidos por el teclado
*/

var numero_1 = parseInt (prompt("Introduce el primer numero ",0));
var numero_2 = parseInt (prompt("Introduce el segundo numero ",0));

document.write ("<h1>De "+numero_1+" a "+numero_2+ " estan estos numeros impares:</h1>")
for(var i = numero_1; i <= numero_2; i++)
{
 if (i % 2 != 0)
  {
    document.write(i+"<br/>");
  }
}