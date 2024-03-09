// Declaración de variables
let message: string | number = "Hola Typescript";

// Uso de tipos
let count: number = 42;
let isDone: boolean = false;

// Funciones
function saludo(name: string): string {
    return `Hola ${name}`
}

// Clases y Herencia

class Animal {
    public nombre: string;
    private años: number;
    protected reino: string;

    constructor(nombre: string, años: number) {
        this.nombre = nombre;
        this.años = años;
        this.reino = "animal";
    }

    añosHumanos() {
        console.log("Año humanos:", this.años);
    }

}

class Perro extends Animal {
    constructor(nombre: string, años: number) {
        super (nombre, años)
    }

    sonido(): void {
        console.log(`${this.nombre} es un perro, ladra y pertenece al reino ${this.reino}`)
    }
}

// Interfaces, permite contrato o estructura de tipos o métodos, aplica para objetos y clases
interface Shape {
    name: string;
    area(): number;
    alias?: string;
}

class Circle implements Shape {
    constructor(
        private radius: number,
        public name: string) {

    }

    area(): number {
        return Math.PI * this.radius ** 2;
    }

}

const miCirculo = new Circle(5, "Circulo")

console.log(miCirculo.area())


const miPerro = new Perro("tom", 5);

miPerro.sonido()