class Zapatos{
    constructor(estilo, talla, color){
        this.Estilo = estilo;
        this.Talla = talla;
        this.Color = color;
        this.Info = 
        `Zapato: ${this.Estilo}
        Talla: ${this.Talla}
        Color: ${this.Color}
        `
    }
    mostrarInfo(){
        console.log(this.Info);
    }
}

class Tennis extends Zapatos{
    constructor(estilo, talla, color, agujetas){
        super(estilo, talla, color);
        this.Agujetas = agujetas;

        this.Info =
        `Tennis: ${this.Estilo}
        Talla: ${this.Talla}
        Color: ${this.Color}
        Agujetas: ${this.Agujetas}`
    }
    mostrarInfoTennis(){
        console.log(this.Info);
    }
}

class Tacones extends Zapatos{
    constructor(estilo, talla, color, plataforma){
        super(estilo, talla, color);
        this.Plataforma = plataforma;

        this.Info = 
        `Tacones: ${this.Estilo}
        Talla: ${this.Talla}
        Color: ${this.Talla}
        Plataforma: ${this.Plataforma}`
    }
    mostarInfoTacon(){
        console.log(this.Info);
    }
}

const Zapato1 = new Zapatos("Vestir", 25, "Negro")
Zapato1.mostrarInfo();

const Tennis1 = new Tennis("Deportivo", 26.5, "Blanco con rojo", "largas");
Tennis1.mostrarInfoTennis();

const Tacones1 = new Tacones("Formal", 24, "Negro", "3cm");
Tacones1.mostarInfoTacon();