'use strict'

//localStorage

//Comprobar Disponibilidad de LocaStorage
if (typeof(Storage)!== "undefined"){
    console.log("LocalStorage Disponible");
}else{
    console.log("LocalStorage No Disponible");
}

//Guardar Datos
localStorage.setItem("titulo2", "Curso de JavaScript");

//Recuperar Elemento
// console.log (localStorage.getItem("titulo"));
document.querySelector("#peliculas").innerHTML = (localStorage.getItem("titulo"));

//Guardar Objetos
var usuario = {
    nombre: "Emmanuel Paternina",
    email: "e.paternina@softd3v.com",
    web: "softd3v.com"
};
localStorage.setItem("usuario",JSON.stringify(usuario));

//Recuperar Objeto 
console.log(localStorage.getItem("usuario")); //NO ES UN OBJETO ES UN STRING

var userjs = JSON.parse (localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#peliculas").append(" "+userjs.web+" - "+userjs.nombre);

//Borrar Elementos
localStorage.removeItem("usuario");
localStorage.clear();


