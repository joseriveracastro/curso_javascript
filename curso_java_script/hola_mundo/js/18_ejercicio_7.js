'use strict'

/*AL INTRODUCIR UN NUMERO NOS SACA LA TABLA DE MULTIPLICAR*/
var number = parseInt (prompt('Introduce un numero',0));

/*VALIDAMOS QUE EL VALOR INTRODUCIDO SEA UN NUMERO*/
while(isNaN(number)) 
{
    var number = parseInt (prompt('Introduce un numero',0));
}

for(var i = 1; i <= 12; i++)
{
    var resultado = number * i;
    console.log(number+"x"+i+"= "+resultado);
}
