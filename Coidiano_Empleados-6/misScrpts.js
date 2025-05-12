function RegistroEmpleado(id, nombre, apellido, nacimiento, puesto) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.puesto = puesto;
}

let listaEmpleados = [];

function registrarEmpleado() {
    let id = document.getElementById("txtExpediente").value;
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let nacimiento = document.getElementById("txtNacimiento").value;
    let puesto = document.getElementById("txtCargo").value;

    let nuevoRegistro = new RegistroEmpleado(id, nombre, apellido, nacimiento, puesto);
    listaEmpleados.push(nuevoRegistro);

    limpiarFormulario();
    alert("Registro exitoso.");
}

function mostrarListaEmpleados() {
    if (listaEmpleados.length === 0) {
        alert("No hay registros disponibles.");
        return;
    }

    let resumen = "Empleados Registrados:\n\n";
    for (let i = 0; i < listaEmpleados.length; i++) {
        resumen += `Expediente: ${listaEmpleados[i].id}\nNombre: ${listaEmpleados[i].nombre}\nApellido: ${listaEmpleados[i].apellido}\nNacimiento: ${listaEmpleados[i].nacimiento}\nPuesto: ${listaEmpleados[i].puesto}\n\n`;
    }

    alert(resumen);
}

function limpiarFormulario() {
    document.getElementById("txtExpediente").value = "";
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtApellido").value = "";
    document.getElementById("txtNacimiento").value = "";
    document.getElementById("txtCargo").value = "";
}