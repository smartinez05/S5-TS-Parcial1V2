export class zelda {
    public _objetos: string[];
    public skin: string;
    private name:string;
    public attack: number;

    constructor(name:string){
        this.name=name;
    }
    
    public getObjetos(): string[] {
        return this._objetos;
    }
    public setObjetos(value: string[]) {
       this._objetos = value;
    }
    jump():boolean{
        return true;
    }
    attacks():number{
        return 1;
    }


}