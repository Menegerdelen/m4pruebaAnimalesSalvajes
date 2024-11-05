import Animal from "./animal.js";


export class Oso extends Animal{
    constructor(nombre, edad, comentarios){
        super(nombre, edad, '../../imgs/Oso.png', comentarios, 'Grunido.mp3')
    }

    gruñir(){
        this.reproducirSonido();
    }
}