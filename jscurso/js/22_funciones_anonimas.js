'use strict'

//FUNCIONES ANONIMAS
//Es una funcion que no tiene Nombre

function sumame (numero1,numero2,sumaYMuestra,sumaPorDos)
    {
    
    var sumar = numero1 + numero2;
    sumaYMuestra(sumar);
    sumaPorDos(sumar);
    return sumar;    

    }

sumame (5,7,function(dato)
    {
        console.log("La suma es: ", dato);
    },

function(dato)
    {
        console.log("La suma por dos es: ", (dato*2));
    } );
