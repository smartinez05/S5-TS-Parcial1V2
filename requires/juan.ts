//export {suma,resta,multiplicacion,division};

//Variables globales 
/*var numero1:number = 5;
var numero2:number = 8;*/

//Función de suma
export function suma(numero1:number,numero2:number):number{
    let suma1:number;
    suma1 = numero1 + numero2;
    return suma1; 
}
//Función de resta
export function resta(numero1:number,numero2:number):number{
    let resta1:number;
    resta1 = numero1 - numero2;
    return resta1;
}
//Función de multiplicación
export function multiplicacion(numero1:number,numero2:number):number{
    let mult:number;
    mult = numero1 * numero2;
    return mult;
}
//Función de división
export function division(numero1:number,numero2:number):number{
    let div:number;
    div = numero1 / numero2;
    return div;
}