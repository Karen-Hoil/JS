// POO Animales

class Animal{
    constructor(expecie, raza, numPatas, color){
        this.expecie = expecie;
        this.raza = raza;
        this.numPatas = numPatas;
        this.color = color;

        this.info = `Mi especie es: ${this.expecie} soy un ${this.raza} 
        tengo ${this.numPatas} patas, soy de color ${this.color}`
    }

mostrarInfo(){
    console.log(this.info);
}

grasnar(){
    console.log("piii piiii piii");
}

}


class Perro extends Animal{
    constructor(especie, raza, numPatas, color, tamaño, cola){
        super(especie, raza, numPatas, color);
        this.tamaño = tamaño;
        this.cola = cola;   

        this.info = `Mi raza es: ${this.raza} mi tamaño es ${this.tamaño} 
        tengo ${this.numPatas} patas, soy de color ${this.color}`
    }

    mostrarInfoPerro(){
        console.log(this.info);
    }

    ladrar(){
        console.log("guau guau");
    }

    morder(){
        console.log("ñam ñam");
    }

}


const animal1 = new Animal("Ave", "Cardenal", 2, "Rojo");

const animal2 = new Animal("Mamifero", "Perro", 4, "Café");

const pitbull1 = new Perro("Pitbull", 4, "Café", "Grande", "Larga");

animal1.mostrarInfo();
animal1.grasnar();animal1.grasnar();animal1.grasnar();animal1.grasnar();animal1.grasnar();
pitbull1.mostrarInfo();
pitbull1.mostrarInfoPerro();