import Animal from "./animal";


export default class Aguila extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
    super(nombre, edad, img, comentarios, sonido)
    }

    chillar(){
        console.log('Sonido de Aquila');
        
    }
}