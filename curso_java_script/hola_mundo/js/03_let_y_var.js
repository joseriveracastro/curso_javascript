'use strict'

//Pruebas de Let y Var


//Prueba con VAR
var numero = 40;
console.log(numero); //Valor 40
if(true)
{
var numero = 50;
console.log (numero); //Valor 50
}

console.log (numero); //Valor 50


// Prueba con LET

var texto = "Curso JS EmmanuelPatenina.com";
console.log (texto);

if (true)
{
 let texto = "Curso Laravel EmmanuelPaternina.com";
 console.log (texto);  //Valor Laravel
}

console.log (texto); // Valor JS