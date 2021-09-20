import {frases1,frases2,frases3,frases4} from './requires/sebastian';
import { suma,resta,multiplicacion,division } from "./requires/juan";
import {frutas, edades, electrodomesticos,estatura,letras} from './requires/manuel';
import{Var1isDone, Var2isDone, Var3_result_bool, result_bool3, check_A, check_B, check_var_a_and_b, b, f} from "./requires/pablo";

//Sebastian Arias
console.log(suma(5,8));
console.log(resta(5,8));
console.log(multiplicacion(5,8));
console.log(division(5,8));

//Sebastian Martinez
console.log(frases1);
console.log(frases2);
console.log(frases3);
console.log(frases4);

//Manuel Quevedo
console.log(frutas);
console.log(edades);
console.log(electrodomesticos);
console.log(estatura);
console.log(letras);

//Pablo Melo
console.log('Tipo de dato boolean (true and false)');

console.log(Var1isDone);
console.log(Var2isDone);
console.log('---------------');


console.log('&& = Verdadero cuand Var1_bool y Var2_bool son verdaderos');

console.log(Var3_result_bool);
console.log('---------------');


console.log('|| = Verdadero cuando bool1 o bool2 son verdaderos');

console.log(result_bool3);
console.log('---------------');


console.log('!A = verdadero si A es falso.');

console.log(check_A);
console.log(check_B);
console.log('---------------');


console.log('( !== ) = verdadero cuando A y B son diferentes');

console.log(check_var_a_and_b);
console.log('---------------');


console.log('Caso 1');

console.log(b);
console.log('---------------');


console.log('Caso 2');

console.log(f);
console.log('---------------');
