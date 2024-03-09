"use strict";
// Declaración de variables
let message = "Hola Typescript";
// Uso de tipos
let count = 42;
let isDone = false;
// Funciones
function saludo(name) {
    return `Hola ${name}`;
}
// Clases y Herencia
class Animal {
    constructor(nombre, años) {
        this.nombre = nombre;
        this.años = años;
        this.reino = "animal";
    }
    añosHumanos() {
        console.log("Año humanos:", this.años);
    }
}
class Perro extends Animal {
    constructor(nombre, años) {
        super(nombre, años);
    }
    sonido() {
        console.log(`${this.nombre} es un perro, ladra y pertenece al reino ${this.reino}`);
    }
}
class Circle {
    constructor(radius, name) {
        this.radius = radius;
        this.name = name;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
const miCirculo = new Circle(5, "Circulo");
console.log(miCirculo.area());
const miPerro = new Perro("tom", 5);
miPerro.sonido();
