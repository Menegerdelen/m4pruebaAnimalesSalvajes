import Animal from "./animal.js";


export class Serpiente extends Animal{
    constructor(nombre, edad, comentarios){
        super(nombre, edad, '../../imgs/Serpiente.png', comentarios, 'Siseo.mp3')
    }

    sisear(){
        this.reproducirSonido();
    }
}