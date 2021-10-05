class Cat{
    private ojos:string;
    private colorPelo:string;    
    private peso:number;
    private nombre:string;

    constructor(nombre:string){
        this.nombre=nombre;
    }

    meow():void{
        console.log('Maulla');
    }
    run():boolean{
        return true;
    }
    getWeigth():number{
        return this.weigth;
    }
    setWeigth(weigth:number):void{
        this.weigth=weigth;
    }
}

let matilda=new Cat('Matilda');