function Prooducto(nombre, precio){
    let _nombre = nombre;
    let _precio = precio;

    Object.defineProperties(this, {
        nombre:{
            get: function(){
                return _nombre.toUpperCase();
            },
            set: function(new_name){
                _nombre = new_name;
            }
        },
        precio:{
            get: function(){
                return _precio();
            },
            set: function(new_price){
                _precio = new_price;
            }
        }
    })
}