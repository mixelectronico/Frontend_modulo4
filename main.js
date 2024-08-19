
// ------------ DECLARACION DE CLASES ----------------------

class Producto{
    Constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito{
    carrito = [];

    añadirProducto(nuevoProducto){
        this.carrito.push(nuevoProducto);
    };

    mostrarCarrito(){
        let muestraCarrito = `Tienes los siguientes elementos en el carrito:\n\n`;
        if(this.carrito.length === 0){
            alert('El carrito se encuentra vacío, por favor, agregue al menos un producto para visualizar la compra.');
        }else{
            alert('Deberia mostrar el contenido de la compra pero tengo problemas para iterar el carrito.')
        }
    }
}

// ------------ DECLARACION DE OBJETOS ----------------------

const linterna    = new Producto('Linterna a Pilas AA',8000);
const linternaRec = new Producto('Linterna recargable',20000);
const radioPila   = new Producto('Radio Personal',12000);
const pilaMediana = new Producto('Pila AA', 2000);
const pilaChica   = new Producto('Pila AAA',1000);

let tienda = new Carrito();

// ------------ DECLARACION DE VARIABLES ----------------------

let salirDeLaTienda = false;

// ------------ INICIO DE RUTINA ----------------------

alert('Bienvenido a la tienda!')

do{ // SE REPETIRÁ HASTA QUE "salirDeLaTienda" SEA <TRUE>

    let option = parseInt(window.prompt('Por favor, elije uno de los productos que desees agregar al carrito:\n\n   1. Linterna a pilas              $8.000\n   2. Linterna Recargable     $20.000\n   3. Radio a Pilas                $12.000\n   4. Pila AA                           $2.000\n   5. Pila AAA                         $1.000\n\n0. SALIR DE LA TIENDA' ));

    if(option >= 0 && option <= 5 || option === 9){
        switch(option){
            case 0:
                salirDeLaTienda = true;
                break;

            case 1:
                tienda.añadirProducto(linterna);
                alert('Has añadido una linterna al carrito de compras')
                break;
            
            case 2:
                tienda.añadirProducto(linternaRec);
                alert('Has añadido una linterna recargable al carrito de compras')
                break;

            case 3:
                tienda.añadirProducto(radioPila);
                alert('Has añadido una radio a pilas al carrito de compras')
                break;

            case 4:
                tienda.añadirProducto(pilaMediana);
                alert('Has añadido una pila AA al carrito de compras')
                break;

            case 5:
                tienda.añadirProducto(pilaChica);
                alert('Has añadido una pila AAA al carrito de compras')
                break;

            case 9:
                tienda.mostrarCarrito();
                break;
        }
    }else{
        alert('La opcion ingresada no es válida, intentalo de nuevo...');
    };
}while(!salirDeLaTienda)

alert('Gracias por preferir la tiendita, vuelve otra vez!')