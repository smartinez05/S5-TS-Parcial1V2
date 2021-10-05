class enemy{
    public name:string;
    public damage:number;
    public ability:string;

    constructor(name:string){
        this.name = name;
    }

    finalAbility():string{
        return "La habilidad definitiva es: " + this.ability
    }

    highDamage():number{
        return this.damage;
    }
}

let myEnemy = new enemy("Orco");
myEnemy.ability = "Puño de hierro"
myEnemy.damage = 60;
console.log(myEnemy.finalAbility());
console.log("El daño más alto del enemigo es del: " + myEnemy.highDamage() + "%");