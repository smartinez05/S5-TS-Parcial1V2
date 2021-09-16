console.log('Tipo de dato boolean (true and false)');
let Var1isDone: boolean = false;
let Var2isDone: boolean = true;

console.log(Var1isDone);
console.log(Var2isDone);



console.log('&& = Verdadero cuand Var1_bool y Var2_bool son verdaderos');
let Var1_bool: boolean = true;
let Var2_bool: boolean = true;
let Var3_result_bool: boolean = Var1_bool && Var2_bool;

console.log(Var3_result_bool);



console.log('|| = Verdadero cuando bool1 o bool2 son verdaderos');
let bool1: boolean = false;
let bool2: boolean = true;
let result_bool3: boolean = bool1 || bool2;

console.log(result_bool3);



console.log('!A = verdadero si A es falso.');
let A: boolean = false;
let B: boolean = true;
let check_A: boolean = !A;
let check_B: boolean = !B;

console.log(check_A);
console.log(check_B);



console.log('( !== ) = verdadero cuando A y B son diferentes');
let var_a: boolean = false;
let var_b: boolean = false;

let check_var_a_and_b = var_a !== var_b;

console.log(check_var_a_and_b);



console.log('Caso 1');
let x = 0;
let y = 2;
let b:boolean = ( x != 0 ) && ( ( y / x ) != 0 );
console.log(b);



console.log('Caso 2');
let s = 0;
let m = 2;
let f:boolean = ( s == 0 ) && ( ( s / m ) == 0 );
console.log(f);




export{Var1isDone, Var2isDone, Var3_result_bool, result_bool3, check_A, check_B, check_var_a_and_b, b, f};