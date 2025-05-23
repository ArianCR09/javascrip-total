class animal {
            constructor(nombre, peso, edad) {
                this.nombre = nombre;
                this.peso = peso;
                this.edad = edad;
            }
            informacion() {
                return `Nombre ${this.nombre} Peso ${this.peso} Edad ${this.edad}`;
            }
        }
        class Perro extends animal {
            constructor(nombre, peso, edad, Raza) {
                Super(nombre, peso, edad);
                this._Raza = Raza;
            }
            get Raza() {
                return this._Raza;
            }
            set Raza(nuevaRaza) {
                this._Raza = nuevaRaza;
            }

        }
        let perro1 = new Perro("Candy", "20kg", 10, "Pitbul");

        class Gato extends animal {
            constructor(nombre, peso, edad, sexo) {
                Super(nombre, peso, edad);
                this._sexo = sexo;
            }
            get sexo() {
                return this._sexo;
            }
            set sexo(nuevosexo) {
                this._sexo = nuevosexo;
            }
        }
        let Gato1 = new Gato("Miausculos", "10kg", 5, "Masculino");

        class Conejo extends animal {
            constructor(nombre, peso, edad, color) {
                Super(nombre, peso, edad);
                this._color = color;
            }
            get color() {
                return this._color;
            }
            set color(nuevocolor) {
                this._color = nuevocolor;
            }
        }
        let conejo1 = new Conejo("Rabittt", "2kg", 1, "gris");

        let array1 = [perro1, Gato1, conejo1];
        
        document.getElementById("listaAnimales")
        function mostrarAnimales() {

        }