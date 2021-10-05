"use strict";
/*export{frutas, edades, electrodomesticos,estatura,letras,nombre};
[let frutas =["manzanas", "pera", "naranja", "sandia", "melon", "fresas"];]
let edades =[10,15, 45, 31,, 12, 80];
let electrodomesticos= ["microondas", "nevera", "estufa", "estereo"];
let estatura =[ 1.5, 2.5, 1.0, 1.4,0.1E1];
let letras = ['a','b','c','d','e'];
*/
//clase pasada
exports.__esModule = true;
exports.letras = exports.estatura = exports.electrodomesticos = exports.edades = exports.frutas = void 0;
//Función de tipo string
function frutas() {
    var frutas1 = ["manzanas", "pera", "naranja", "sandia", "melon", "fresas"];
    return frutas1;
}
exports.frutas = frutas;
//Función de tipo entera   
function edades() {
    var edades1 = [10, 15, 45, 31, 89, 12, 80];
    return edades1;
}
exports.edades = edades;
// función string
function electrodomesticos() {
    var electrodomesticos1 = ["microondas", "nevera", "estufa", "estereo"];
    return electrodomesticos1;
}
exports.electrodomesticos = electrodomesticos;
// función float
function estatura() {
    var estatura1 = [1.5, 2.5, 1.0, 1.4,];
    return estatura1;
}
exports.estatura = estatura;
//funcion caracter
function letras() {
    var letras1 = ['a', 'b', 'c', 'd', 'e'];
    return letras1;
}
exports.letras = letras;
