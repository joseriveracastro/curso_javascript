'use strict'
/*
Calculadora:
- Pida dos numeros por pantalla
- Si metemols uno mal que nos los vuelva a pedir
- En el cuerpo dela pagina, eun una alerta y por la consolta el resultado
de sumar, restar, multiplicar y dividir esas dos cifras.
*/


var numero_1 = parseInt (prompt('Introduce un numero',0));
var numero_2 = parseInt (prompt('Introduce un numero',0));

while ( numero_1 < 0 || numero_2 < 0 || isNaN(numero_1) || isNaN(numero_2) )
{
    numero_1 = parseInt (prompt('Introduce un numero',0));
    numero_2 = parseInt (prompt('Introduce un numero',0));
    
}

var resultado = "La suma es: " +(numero_1+numero_2)+"<br/>"+
                "La resta es: " +(numero_1-numero_2)+"<br/>"+
                "La multiplicacion es: " +(numero_1*numero_2)+"<br/>"+
                "La division es: " +(numero_1/numero_2)+"<br/>";

                var resultado_consola = "La suma es: " +(numero_1+numero_2)+"\n"+
                "La resta es: " +(numero_1-numero_2)+"\n"+
                "La multiplicacion es: " +(numero_1*numero_2)+"\n"+
                "La division es: " +(numero_1/numero_2)+"\n";

document.write(resultado);

console.log(resultado_consola);


