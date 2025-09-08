// -------------------------------------------------------------------
// PARTE 1: EL PLANO (LA CLASE MATRIZ)
// -------------------------------------------------------------------
class Matriz {
    static CANT_FILAS = 3;
    static CANT_COLUMNAS = 4;
    constructor() {
        this.datos = Array(Matriz.CANT_FILAS)
            .fill(null)
            .map(() => Array(Matriz.CANT_COLUMNAS).fill(0));
    }
    // -------------------------------------------------------------------
    // PARTE 2: LOS MÉTODOS (LAS ACCIONES QUE PUEDE HACER NUESTRA MATRIZ)
    // -------------------------------------------------------------------
    llenarMatriz() {

        for (let i = 0; i < Matriz.CANT_FILAS; i++) {

            for (let j = 0; j < Matriz.CANT_COLUMNAS; j++) {

                this.datos[i][j] = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
            }
        }
        console.log("La matriz ha sido llenada con números aleatorios entre 10 y 20.");
    }

    promedio() {
        let sumaTotal = 0;
        for (let i = 0; i < Matriz.CANT_FILAS; i++) {
            for (let j = 0; j < Matriz.CANT_COLUMNAS; j++) {
                sumaTotal += this.datos[i][j];
            }
        }
        const totalElementos = Matriz.CANT_FILAS * Matriz.CANT_COLUMNAS;
        const elPromedio = totalElementos === 0 ? 0 : sumaTotal / totalElementos;
        return elPromedio;
    }

    sumaNumero(n) {

        for (let i = 0; i < Matriz.CANT_FILAS; i++) {
            for (let j = 0; j < Matriz.CANT_COLUMNAS; j++) {
                this.datos[i][j] += n;
            }
        }
        console.log(`Se ha sumado ${n} a todas las celdas de la matriz.`);
    }

    duplicarFila(f) {

        if (f >= 0 && f < Matriz.CANT_FILAS) {

            for (let j = 0; j < Matriz.CANT_COLUMNAS; j++) {
                this.datos[f][j] *= 2;
            }
            console.log(`El contenido de la fila ${f} ha sido duplicado.`);
        } else {
            console.log(`Error: La fila ${f} no existe en la matriz. No se hizo nada.`);
        }
    }

    sumaDiagonalPrincipal() {
        let suma = 0;

        const limite = Math.min(Matriz.CANT_FILAS, Matriz.CANT_COLUMNAS);
        for (let i = 0; i < limite; i++) {
            suma += this.datos[i][i];
        }
        return suma;
    }

    sumaDiagonalInversa() {
        let suma = 0;

        for (let i = 0; i < Matriz.CANT_FILAS; i++) {


            const j = Matriz.CANT_COLUMNAS - 1 - i;
            if (j >= 0 && j < Matriz.CANT_COLUMNAS) {
                suma += this.datos[i][j];
            }
        }
        return suma;
    }

    mayorMatriz() {
        if (Matriz.CANT_FILAS === 0 || Matriz.CANT_COLUMNAS === 0) {
            return undefined;
        }


        let elMayor = this.datos[0][0];

        for (let i = 0; i < Matriz.CANT_FILAS; i++) {
            for (let j = 0; j < Matriz.CANT_COLUMNAS; j++) {
                if (this.datos[i][j] > elMayor) {
                    elMayor = this.datos[i][j];
                }
            }
        }
        return elMayor;
    }


    buscaNumero(x) {

        for (let i = 0; i < Matriz.CANT_FILAS; i++) {
            for (let j = 0; j < Matriz.CANT_COLUMNAS; j++) {

                if (this.datos[i][j] === x) {
                    return true;
                }
            }
        }
        return false;
    }


    buscaPosiciones(x) {
        let textoPosiciones = "";

        for (let i = 0; i < Matriz.CANT_FILAS; i++) {
            for (let j = 0; j < Matriz.CANT_COLUMNAS; j++) {

                if (this.datos[i][j] === x) {
                    textoPosiciones += `(${i},${j}) `;
                }
            }
        }

        if (textoPosiciones === "") {
            return "El número no se encontró en la matriz.";
        } else {

            return textoPosiciones.trim();
        }
    }


    modificaBajoDiagonal() {

        for (let i = 0; i < Matriz.CANT_FILAS; i++) {
            for (let j = 0; j < Matriz.CANT_COLUMNAS; j++) {

                if (i > j) {
                    this.datos[i][j] = 0;
                }
            }
        }
        console.log("Los elementos bajo la diagonal principal han sido puestos a cero.");
    }

    intercambiaFilas() {
        for (let f = 0; f + 1 < Matriz.CANT_FILAS; f += 2) {

            for (let j = 0; j < Matriz.CANT_COLUMNAS; j++) {

                const valorTemporal = this.datos[f][j];

                this.datos[f][j] = this.datos[f + 1][j];

                this.datos[f + 1][j] = valorTemporal;
            }
        }
        console.log("Las filas de la matriz han sido intercambiadas por pares.");
    }


    copiaCeldaSuperior() {

        for (let i = 1; i < Matriz.CANT_FILAS; i++) {
            for (let j = 0; j < Matriz.CANT_COLUMNAS; j++) {

                this.datos[i][j] = 2 * this.datos[i - 1][j];
            }
        }
        console.log("Cada celda (excepto la primera fila) ahora contiene el doble de la celda superior.");
    }

    ordenarMatriz() {
        for (let i = 0; i < Matriz.CANT_FILAS; i++) {

            this.datos[i].sort((a, b) => a - b);
        }
        console.log("Cada fila de la matriz ha sido ordenada de menor a mayor.");
    }
    sumaFilas() {

        const sumasPorFila = Array(Matriz.CANT_FILAS).fill(0);

        for (let i = 0; i < Matriz.CANT_FILAS; i++) {

            for (let j = 0; j < Matriz.CANT_COLUMNAS; j++) {
                sumasPorFila[i] += this.datos[i][j];
            }
        }
        return sumasPorFila;
    }


    mayorColumnas() {

        const mayoresPorColumna = Array(Matriz.CANT_COLUMNAS).fill(0);

        if (Matriz.CANT_FILAS === 0) {
            return mayoresPorColumna;
        }

        for (let j = 0; j < Matriz.CANT_COLUMNAS; j++) {

            let mayorEnEstaColumna = this.datos[0][j];

            for (let i = 1; i < Matriz.CANT_FILAS; i++) {

                if (this.datos[i][j] > mayorEnEstaColumna) {
                    mayorEnEstaColumna = this.datos[i][j];
                }
            }

            mayoresPorColumna[j] = mayorEnEstaColumna;
        }
        return mayoresPorColumna;
    }


    toString() {
        let textoMatriz = "";
        // Recorremos cada fila
        for (let i = 0; i < Matriz.CANT_FILAS; i++) {

            textoMatriz += this.datos[i].join("\t") + "\n";
        }
        return textoMatriz;
    }
}

// -------------------------------------------------------------------
// PARTE 3: CÓMO USAR NUESTRA CLASE (EL "MAIN" O PROGRAMA PRINCIPAL)
// -------------------------------------------------------------------


function main() {

    const miMatriz = new Matriz();


    miMatriz.llenarMatriz();
    console.log("\n--- Así se ve nuestra Matriz al inicio ---");
    console.log(miMatriz.toString());




    const elPromedio = miMatriz.promedio();
    console.log(`\nEl promedio de todos los números en la matriz es: ${elPromedio.toFixed(2)}`); // .toFixed(2) para mostrar 2 decimales  
}


main();
