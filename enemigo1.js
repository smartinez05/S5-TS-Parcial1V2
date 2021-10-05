var enemy = /** @class */ (function () {
    function enemy(name) {
        this.name = name;
    }
    enemy.prototype.finalAbility = function () {
        return "La habilidad definitiva es: " + this.ability;
    };
    enemy.prototype.highDamage = function () {
        return this.damage;
    };
    return enemy;
}());
var myEnemy = new enemy("Orco");
myEnemy.ability = "Puño de hierro";
myEnemy.damage = 60;
console.log(myEnemy.finalAbility());
console.log("El daño más alto del enemigo es del: " + myEnemy.highDamage() + "%");
