import { powerups as pu } from "./powerups";
let SuperVelocidad = new pu('SuperVelocidad','velx2',10);

console.log(SuperVelocidad.getName());

SuperVelocidad.activation();
SuperVelocidad.deactivation();