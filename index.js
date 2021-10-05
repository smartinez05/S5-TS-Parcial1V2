"use strict";
exports.__esModule = true;
var jugador_1 = require("./jugador");
var _zelda = new jugador_1.zelda('many');
console.log(_zelda.jump());
var obj = ['bombas', 'espadas', 'mapa', 'brujula', 'ocarina', 'botellas', 'escudo', 'armadura', 'trifuerza', 'arco', 'flechas', 'candelabro', 'pala', 'botas', 'resortera'];
var obj1 = ['saf', 'asdf'];
_zelda.setObjetos(obj);
console.log(_zelda.getObjetos());
