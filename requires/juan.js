"use strict";
//export {suma,resta,multiplicacion,division};
exports.__esModule = true;
exports.division = exports.multiplicacion = exports.resta = exports.suma = void 0;
//Variables globales 
var numero1 = 5;
var numero2 = 8;
//Función de suma
function suma(numero1, numero2) {
    var suma1;
    suma1 = numero1 + numero2;
    return suma1;
}
exports.suma = suma;
//Función de resta
function resta(numero1, numero2) {
    var resta1;
    resta1 = numero1 - numero2;
    return resta1;
}
exports.resta = resta;
//Función de multiplicación
function multiplicacion(numero1, numero2) {
    var mult;
    mult = numero1 * numero2;
    return mult;
}
exports.multiplicacion = multiplicacion;
//Función de división
function division(numero1, numero2) {
    var div;
    div = numero1 / numero2;
    return div;
}
exports.division = division;
