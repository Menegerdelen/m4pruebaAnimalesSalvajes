import { obtenerAnimales } from "../data/data.js";
import { Aguila } from "../models/aguila.js";
import { Leon } from "../models/leon.js";
import { Lobo } from "../models/lobo.js";
import { Oso } from "../models/oso.js";
import { Serpiente } from "../models/serpiente.js";


const recibirDatos = () => {
    const animal = document.getElementById('animal').value;
    const edad = document.getElementById('edad').value;
    const comentarios = document.getElementById('comentarios').value;
    
    if (!animal || !edad || !comentarios) {
        throw new Error('Todos los campos son requeridos');
    }
    
    return { animal, edad, comentarios };
}
