import Animal from "./animal";


export default class Leon extends Animal{
    constructor(nombre, edad, img, comentarios, sonido){
        super(nombre, edad, img, comentarios, sonido)
    }

    rugir(){
        console.log('Sonido de Leon');
        
    }
}