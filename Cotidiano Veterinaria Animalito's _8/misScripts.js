class animal {
            constructor(nombre, peso, edad) {
                this.nombre = nombre;
                this.peso = peso;
                this.edad = edad;
            }
            informacion() {
                return `Nombre: ${this.nombre}, Peso: ${this.peso}, Edad: ${this.edad}`;
            }
        }

        class Perro extends animal {
            constructor(nombre, peso, edad, Raza) {
                super(nombre, peso, edad);
                this._Raza = Raza;
            }
            get Raza() {
                return this._Raza;
            }
            set Raza(nuevaRaza) {
                this._Raza = nuevaRaza;
            }
            informacion() {
                return `${super.informacion()}, Raza: ${this._Raza}`;
            }
        }

        class Gato extends animal {
            constructor(nombre, peso, edad, sexo) {
                super(nombre, peso, edad);
                this._sexo = sexo;
            }
            get sexo() {
                return this._sexo;
            }
            set sexo(nuevosexo) {
                this._sexo = nuevosexo;
            }
            informacion() {
                return `${super.informacion()}, Sexo: ${this._sexo}`;
            }
        }

        class Conejo extends animal {
            constructor(nombre, peso, edad, color) {
                super(nombre, peso, edad);
                this._color = color;
            }
            get color() {
                return this._color;
            }
            set color(nuevocolor) {
                this._color = nuevocolor;
            }
            informacion() {
                return `${super.informacion()}, Color: ${this._color}`;
            }           
        }

        let perro1 = new Perro("Candy", "20kg", 10, "Pitbull");
        let gato1 = new Gato("Miausculos", "10kg", 5, "Masculino");
        let conejo1 = new Conejo("Rabittt", "2kg", 1, "gris");

        let array1 = [perro1, gato1, conejo1];

        function mostrarAnimales() {
            const lista = document.getElementById("listaAnimales");
            lista.innerHTML = ""; 

            for (let h = 0; h < array1.length; h++) {
                let li = document.createElement("li");
                li.textContent = array1[h].informacion();
                lista.appendChild(li);
            }
        }