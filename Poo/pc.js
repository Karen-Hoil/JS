/*
 * Class = clase -> fabrica.
 * constructor = maquinas de una fabrica.
 * parametros = atributos.
 * Objeto = this
 * this.propiedad = parametros.
 * instancias = class (parametros).
 */

class PikachuPC {
  constructor(
    gabinete,
    tarjetaMadre,
    procesador,
    discoDuro,
    ram,
    fuente,
    tarjetasVideo,
    precio
  ) {
    this.gabinete = gabinete;
    this.tarjetaMadre = tarjetaMadre;
    this.procesador = procesador;
    this.discoDuro = discoDuro;
    this.ram = ram;
    this.fuente = fuente;
    this.tarjetasVideo = tarjetasVideo;
    this.precio = precio;

    this. info = `
    Gabinete: ${this.gabinete} precio: $${this.precio}
    Tarjeta madre: ${this.tarjetaMadre},
    Procesador: ${this.procesador},
    Disco duro: ${this.discoDuro},
    Meroria ram: ${this.ram} GB,
    Fuente de poder: ${this.fuente},
    Tarjeta de video: ${this.tarjetasVideo}`;
  }
  mostrarInfo(){
    console.log(this.info);
  }
}

const pc1 = new PikachuPC(
  "Gamer",
  "Asus pro",
  "Ryzen 5 2600",
  "3Tb sdd",
  64,
  "1200w",
  "RTX 4090",
  50000
);

const pc2 = new PikachuPC(
    "Oficina",
    "Asus",
    "core i3",
    "1Tb sdd",
    16,
    "600w",
    "N/A",
    5999
  );

pc1.mostrarInfo();
pc2.mostrarInfo();