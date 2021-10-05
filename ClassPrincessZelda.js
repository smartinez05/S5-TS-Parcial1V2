"use strict";
exports.__esModule = true;
exports.PrincessZelda = void 0;
var PrincessZelda = /** @class */ (function () {
    function PrincessZelda(name, run, Weapons) {
        this.name = name;
        this.Weapons = Weapons;
        this.run = run;
    }
    ;
    PrincessZelda.prototype.getName = function () {
        return this.name;
    };
    PrincessZelda.prototype.saltar = function () {
        console.log('Salta');
    };
    PrincessZelda.prototype.corre = function () {
        return this.run;
    };
    PrincessZelda.prototype.getWeight = function () {
        return this.weight;
    };
    PrincessZelda.prototype.setWeight = function (weight) {
        this.weight = weight;
    };
    PrincessZelda.prototype.getHairColor = function () {
        return this.hairColor;
    };
    PrincessZelda.prototype.setHairColor = function (hairColor) {
        this.hairColor = hairColor;
    };
    PrincessZelda.prototype.getEyes = function () {
        return this.eyes;
    };
    PrincessZelda.prototype.setEyes = function (eyes) {
        this.eyes = eyes;
    };
    PrincessZelda.prototype.getWeapons = function () {
        return this.Weapons;
    };
    PrincessZelda.prototype.setWeapons = function (weapon) {
        this.Weapons.push(weapon);
    };
    PrincessZelda.prototype.getMale = function () {
        return this.male;
    };
    PrincessZelda.prototype.setMale = function (male) {
        this.male = male;
    };
    PrincessZelda.prototype.getOccupation = function () {
        return this.occupation;
    };
    PrincessZelda.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
    };
    return PrincessZelda;
}());
exports.PrincessZelda = PrincessZelda;
