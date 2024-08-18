
// ------------ DECLARACION DE CLASES ----------------------

class Producto{
    Constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito{
    carrito = [];

    añadirProducto(producto){
        this.carrito.push(producto);
    };
}

// ------------ DECLARACION DE OBJETOS ----------------------

const pilaMediana = new Producto('Pila AA', 2000);
const pilaChica   = new Producto('Pila AAA',1000);
const linterna    = new Producto('Linterna a Pilas AA',8000);
const radioPila   = new Producto('Radio Personal',12000);
const linternaRec = new Producto('Linterna recargable',20000);

let tienda = new Carrito();

// ------------ INICIO DE RUTINA ----------------------
