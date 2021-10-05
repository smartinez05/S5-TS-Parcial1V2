import {zelda} from "./jugador"
let _zelda = new zelda('many');
console.log(_zelda.jump());
let obj:string[]=['bombas','espadas','mapa','brujula','ocarina','botellas','escudo','armadura','trifuerza','arco','flechas','candelabro','pala','botas','resortera'];
let obj1:string[]=['saf','asdf'];
_zelda.setObjetos(obj);
console.log(_zelda.getObjetos());