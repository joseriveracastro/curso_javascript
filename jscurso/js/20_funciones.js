'use strict'

//FUNCIONES

// DEFINO LA FUNCIONO
function calculadora(numero_1,numero_2) 
    {

 //CONJUNTO DE INSTRUCCIONES A EJECUTAR
 console.log("Suma: "+(numero_1+numero_2));
 console.log("Resta: "+(numero_1-numero_2));
 console.log("Multiplicacion: "+(numero_1*numero_2));
 console.log("Division: "+(numero_1/numero_2));
  console.log("*************************************************")

    }

/*calculadora();*/
//calculadora(1,4);

for (var i = 1; i<=10; i++)
    {
        console.log(i);
        calculadora(i,8);
    }
