'use strict'

/*
Programa que pida 2 numeros y que nos diga cual es mayor,menor,igual
PLUS: SI LOS NUMEROS NOS LO SON O SI SON MENORES O IGUALES A CERO QUE LOS 
VUELVA A PEDIR
*/

var numero_1 = parseInt ( prompt("Introduce el primer numero",0)) ;
var numero_2 = parseInt ( prompt("Introduce el segundo numero",0)) ;


while(numero_1 <= 0 || numero_2 <= 0 || isNaN(numero_1) || isNaN(numero_2))
{
    numero_1 = parseInt ( prompt("Introduce el primer numero",0)) ;
    numero_2 = parseInt ( prompt("Introduce el segundo numero",0)) ;
    
}
    if (numero_1==numero_2)
    {
    alert("Los numeros son iguales");
            } else if (numero_1 > numero_2)
            {
                alert("EL NUMERO MAYOR ES: " +numero_1);
                alert("EL NUMERO MENOR ES: " +numero_2);

            } 
            else if  (numero_2 > numero_1)
            {
                alert("EL NUMERO MAYOR ES: " +numero_2);
                alert("EL NUMERO MENOR ES: " +numero_1)
 
            } 
            else
            {
                alert ("INTRODUCE NUMEROS CORRECTOS");
            }

