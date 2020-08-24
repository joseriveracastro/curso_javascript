'use strict'
/*
Muestra todos los numero divisores de un numero introducidos de un numero en prompt
*/

var numero_1 = parseInt (prompt("Introduce el primer numero ",0));

document.write ("<h1>Los numero divisores de  "+numero_1+" son:</h1>")
for(var i = 1; i <= numero_1; i++)
{
 if (numero_1 % i == 0)
  {
    document.write(i+"<br/>");
  }
}