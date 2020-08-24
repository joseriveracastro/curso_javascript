'use strict'

var number = parseInt (prompt('Introduce un numero',0));

while(isNaN(number)) 
{
    var number = parseInt (prompt('Introduce un numero',0));
}

if (number % 2 == 0) 
{
    alert("Es un numero par");
} else 
    {
        alert("Es impar");
    }

    