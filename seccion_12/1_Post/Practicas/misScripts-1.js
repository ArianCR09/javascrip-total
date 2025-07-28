async function agregarRegistro(nombre, datos) {
    try {
        const respuesta = await fetch('https://api.restful-api.dev/objects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nombre,
                data: datos
            })
        });

        const resultado = await respuesta.json();
        console.log("Registro agregado:", resultado);
    } catch (error) {
        console.error("Error al agregar el registro:", error);
    }
}
agregarRegistro("Arian", {
    edad: 16,
    email: "arianstevenr09@gmail.com",
    ciudad: "Alajuela, San Rafael",
});