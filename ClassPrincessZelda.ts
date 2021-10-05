class PrincessZelda{
    private eyes:string;
    private hairColor:string;
    private weight:number;
    private name:string;
    private run:boolean;
    private Weapons:string[];
    private male:string;
    private occupation:string;

    constructor(name:string, run:boolean, Weapons:string[]){
        this.name=name;
        this.Weapons = Weapons;
        this.run = run;
    };

    getName():string{
        return this.name;
    }

    saltar():void{
        console.log('Salta');
    }

    corre():boolean{
       return this.run;
    }

    getWeight():number{
        return this.weight;
    }
    setWeight(weight:number):void{
        this.weight=weight;
    }

    getHairColor():string{
        return this.hairColor;
    }
    setHairColor(hairColor:string):void{
        this.hairColor=hairColor;
    }

    getEyes():string{
        return this.eyes;
    }
    setEyes(eyes:string):void{
        this.eyes=eyes;
    }

    getWeapons():string[]{
        return this.Weapons;
    }
    setWeapons(weapon:string):void{
        this.Weapons.push(weapon);
    }
    
    getMale():string{
        return this.male;
    }
    setMale(male:string):void{
        this.male=male;
    }

    getOccupation(){
        return this.occupation;
    }
    setOccupation(occupation:string):void{
        this.occupation = occupation;
    }
}

export {PrincessZelda};