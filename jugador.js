"use strict";
exports.__esModule = true;
exports.zelda = void 0;
var zelda = /** @class */ (function () {
    function zelda(name) {
        this.name = name;
    }
    zelda.prototype.getObjetos = function () {
        return this._objetos;
    };
    zelda.prototype.setObjetos = function (value) {
        this._objetos = value;
    };
    zelda.prototype.jump = function () {
        return true;
    };
    zelda.prototype.attacks = function () {
        return 1;
    };
    return zelda;
}());
exports.zelda = zelda;
