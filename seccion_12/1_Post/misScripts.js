async function crearPost(titulo, contenido) {
    try {
        let respuesta = await fetch('https://api.restful-api.dev/objects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: titulo,
                data: contenido,
            }),
        });

        if (!respuesta.ok) {
            throw new Error('Error en la solicitud: ' + respuesta.statusText);

        }

        let data = await respuesta.json();
        console.log("Regitro creado:", data);
    } catch (error) {
        console.error("Algo salió mal al crear  el registro:", error);
    }
}

crearPost("Mi titulo de ejemplo",
    {"contenido1:": "mi contenido1 de ejemplo",
     "contenido2": "mi contenido2 de ejemplo",});
 