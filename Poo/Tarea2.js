class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    datosPersonas(){
        console.log(`Nombre: ${this.nombre}  Edad: ${this.edad}`)
    }
}

class Alumno extends Persona{
    constructor(nombre, edad, matricula){
        super(nombre, edad)
        this.matricula = matricula;
    }
    mostrarDatos(){
        console.log(super.datosPersonas `Matricula: ${this.matricula}`);
    }
}

class Profesor extends Persona{
    constructor(nombre, edad, cubiculo){
        super(nombre, edad);
        this.cubiculo = cubiculo;
        this.info = super.datosPersonas
    }
    datosProf(){
        console.log(`${this.info}, Cubiculo: ${this.cubiculo}`)
    }
}

// let persona1 = new Persona("Karen", 19);
// console.log(persona1.datosPersonas());

// let alumno1 = new Alumno("Karen", 19, 22393147);
// alumno1.mostrarDatos();

let profesor1 = new Profesor("Pablo", 30, "H-129")
//profesor1.datosProf();
profesor1.datosPersonas();