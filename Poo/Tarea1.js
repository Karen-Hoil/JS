// fabrica de cuchillos: precio, tipo de hoja de filo, color del mango, material del mango, material de la hoja, estilo, largo total, largo de la hoja, color de la hoja

class cuchillos{
    constructor(
        Estilo,
        Precio,
        TipoHoja,
        MaterialHoja,
        ColorHoja,
        LargoHoja,
        MaterialMango,
        ColorMango,
        LargoTotal,
    ){
        this.Estilo = Estilo;
        this.Precio = Precio;
        this.TipoHoja = TipoHoja;
        this.MaterialHoja = MaterialHoja;
        this.ColorHoja = ColorHoja;
        this.LargoHoja = LargoHoja;
        this.MaterialMango = MaterialMango;
        this.ColorMango = ColorMango;
        this.LargoTotal = LargoTotal;

        this.info = `Estilo: ${this.Estilo} Precio: $${this.Precio}
        Tipo de hoja de filo: ${this.TipoHoja},
        Material de hoja: ${this.MaterialHoja},
        Color de hoja: ${this.ColorHoja},
        Largo de la hoja: ${this.LargoHoja},
        Material del mango: ${this.MaterialMango},
        Color del mango: ${this.ColorMango},
        Largo total del cuchillo: ${this.LargoTotal}`
    }
    mostrarinfo(){
        console.log(this.info);
    }
}

const Cuchillo1 = new cuchillos(
    "Cuchillo de supervivencia",
    317,
    "Liso",
    "Acero inoxidable",
    "Negro",
    "14 cm",
    "Metal",
    "Negro",
    "27 cm"
);

const Cuchillo2 = new cuchillos(
    "Cuchillo de cocina",
    289,
    "Liso",
    "Acero inoxidable",
    "Plateado",
    "14 cm",
    "Madera",
    "Cafe",
    "27.5 cm"
);

Cuchillo1.mostrarinfo();
Cuchillo2.mostrarinfo();