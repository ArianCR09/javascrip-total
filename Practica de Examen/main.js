let estudiantes = [];
let notas = [];


fetch('estudiantes.json')
  .then(response => response.json())
  .then(data => {
    estudiantes = data;
  });


function registrarNota(nombre) {
  let nota;
  do {
    nota = prompt(`Ingrese la nota de ${nombre} 0 a 100:`);
    nota = parseInt(nota);
  } while (isNaN(nota) || nota < 0 || nota > 100);
  return nota;
}


function clasificarNota(nota) {
  if (nota >= 90) return "Excelente";
  else if (nota >= 80) return "Buena";
  else if (nota >= 70) return "Aprobada";
  else return "Reprobada";
}


function registrarNotas() {
  notas = [];
  estudiantes.forEach(nombre => {
    const nota = registrarNota(nombre);
    const clasificacion = clasificarNota(nota);
    notas.push({ nombre, nota, clasificacion });
  });
  mostrarLista();
}


function mostrarLista() {
  const listaDiv = document.getElementById('lista');
  listaDiv.innerHTML = '';
  notas.forEach(est => {
    const color = est.nota >= 70 ? 'aprobado' : 'reprobado';
    listaDiv.innerHTML += `
      <div class="estudiante ${color}">
        <strong>${est.nombre}</strong> - Nota: ${est.nota} - Clasificación: ${est.clasificacion}
      </div>
    `;
  });
}


function generarResumen() {
  if (notas.length === 0) return;
  const aprobados = notas.filter(e => e.nota >= 70).length;
  const reprobados = notas.filter(e => e.nota < 70).length;
  const promedio = (notas.reduce((sum, e) => sum + e.nota, 0) / notas.length).toFixed(2);
  const maxNota = Math.max(...notas.map(e => e.nota));
  const minNota = Math.min(...notas.map(e => e.nota));
  const resumenDiv = document.getElementById('resumen');
  resumenDiv.innerHTML = `
    <h2>Resumen General</h2>
    <p>Aprobados: ${aprobados}</p>
    <p>Reprobados: ${reprobados}</p>
    <p>Promedio general: ${promedio}</p>
    <p>Nota más alta: ${maxNota}</p>
    <p>Nota más baja: ${minNota}</p>
  `;
}

