import { PrincessZelda} from "./ClassPrincessZelda";
let Princess = new PrincessZelda('Princess Zelda', false,['Florete', 'Batuta de los Vientos']);

console.log(Princess.getName());

Princess.saltar();

if (Princess.corre() == true){
    console.log('Corre');
}else{
    console.log('Descansa');
}

Princess.setWeight(35);
console.log(Princess.getWeight());

Princess.setHairColor('Rubio');
console.log(Princess.getHairColor());

Princess.setEyes('Azul');
console.log(Princess.getEyes());

Princess.setWeapons('Cetro de Dominio');
console.log(Princess.getWeapons());

Princess.setMale('Mujer');
console.log(Princess.getMale());

Princess.setOccupation('Princess');
console.log(Princess.getOccupation());