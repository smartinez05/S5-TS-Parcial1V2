class powerups {
	public name: string;
	public effect: string;
	public duration: number;

	constructor(name: string, effect:string, duration:number) {
        this.name = name;
        this.effect = effect;
        this.duration = duration;
    }

    getName():string{
        return this.name;
    }

    getDuration():number{
        return this.duration;
    }

    getEffect():string{
        return this.effect;
    }

    activation():void{
        console.log('Powerup activado');
    }

    deactivation():void{
        console.log('Powerup desactivado');
    }
}

export {powerups};
