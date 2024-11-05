

const obtenerAnimales = async () => {
    try {
        const respuesta = await fetch('./animales.json');
        if (!respuesta.ok) {
            throw new Error('La ruta no se encuentra disponible');
        }
        const datos = await respuesta.json();
        return datos.animales;
    } catch (error) {
        console.error('Error al obtener el listado de animales', error);
        return {};
    }
}


export {obtenerAnimales}