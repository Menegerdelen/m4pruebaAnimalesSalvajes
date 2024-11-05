import Animal from "./animal.js";


export class Lobo extends Animal{
    constructor(nombre, edad, comentarios){
        super(nombre, edad, '../../imgs/Lobo.png', comentarios, 'Aullido.mp3')
    }

    aullido(){
        this.reproducirSonido();
    }
}