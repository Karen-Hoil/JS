class Libro {
    constructor(titulo, autor, genero, numPaginas){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.numPaginas = numPaginas;

        this.prestado = false;
    }

    prestar(libro){
        if(this.prestado){
            console.log(`El libro ${libro.titulo} ya esta prestado, no te lo puedo prestar`);
        }else{
            this.prestado = true;
            console.log("El libro se ha prestado correctamente")
        }
    }
    devolver(){
        if(this.prestado){
            this.prestado = false;
        console.log("El libro de ha devuelto correctamente");
        }else{
            console.log("El libro no esta prestado, no se puede devolver")
        }
        
    }
    }


class Biblioteca {
    constructor(){
        this.libros = [];
    }

    agregarLibro(libro){
        this.libros.push(libro);
        console.log("El libro se ha agregado correctamente");
    }

    eliminarLibro(libro){
        const index = this.libros.indexOf(libro);

        if(index !== -1){
            this.libros.slice(index,1);
            console.log("El libro se ha eliminado correctamente");
        }else{
            console.log("El libro no se ha encontrado");
        }
    }

    mostrarCatalogo(){
        console.log("Catalogo de libros");
        
        this.libros.forEach((libro, index) => {
            console.log(`${index+1} Nombre: ${libro.titulo}
            Autor: ${libro.autor} Genero: ${libro.genero}
            Paginas: ${libro.numPaginas}`)
        });
    }

    buscarLibro(criterio){
        const resultado = this.libros.filter((libro) =>{
            return(
                libro.titulo.toLowerCase().includes(criterio.toLowerCase()) ||
                libro.autor.toLowerCase().includes(criterio.toLowerCase()) ||
                libro.genero.toLowerCase().includes(criterio.toLowerCase())
            );
        });

        if(resultado.length > 0){
            console.log(`Resultado de la busqueda con ${criterio}` );
            resultado.forEach((libro, index)=>{
                console.log(`${index+1} Nombre: ${libro.titulo}
                Autor: ${libro.autor} Genero: ${libro.genero}
                Paginas: ${libro.numPaginas}`);
            });
        }else{
            console.log(`No se encontraron resultados con ${criterio}`);
        };
    };

    modificarLibro(libro, titulo, autor, genero, numPaginas){
        const index = this.libros.indexOf(libro);

        if(index !== -1){
            this.libros.slice(index,1, {titulo, autor, genero, numPaginas});
            console.log("El libro se ha modificado correctamente");
            console.log(titulo, autor, genero, numPaginas)
        }else{
            console.log("El libro no se ha encontrado");
        }
    };
        
    };


const biblioteca = new Biblioteca();
let libro1= new Libro("El señor de los anillos", "J.R.R Tolkien", "Fantasia", 1000);
let libro2 = new Libro("", "J.R.R Tolkien", "Fantasia", 1000);
// biblioteca.agregarLibro(libro1);

libro1.prestar(libro1)
libro1.prestar(libro1);
libro1.devolver();
libro1.prestar();
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.mostrarCatalogo();
biblioteca.buscarLibro("fantasia");
biblioteca.eliminarLibro(libro1);
biblioteca.modificarLibro(libro1, "El principito", "Autor","Fantasia", 100);