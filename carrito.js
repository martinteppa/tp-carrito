
class mesaDeEstudio {
    constructor(){
    this.cantidadDisponible= 10
    this.precio =4000
    this.nombre = "mesa de estudio",
    this.descripcion = "descripcion de la mesa de estudio"
    }
}
class cartuchera {
    constructor(){
    this.cantidadDisponible= 10
    this.precio =490
    this.nombre = "cartuchera",
    this.descripcion = "descripcion de la mesa de estudio"
    }
}
class lapicera {
    constructor(){
    this.cantidadDisponible= 10
    this.precio =40
    this.nombre = "lapicera",
    this.descripcion = "descripcion de la mesa de estudio"
    }
}
class cartulina {
    constructor(){
    this.cantidadDisponible= 10
    this.precio =50
    this.nombre = "cartulina",
    this.descripcion = "descripcion de la mesa de estudio"
    }
}
class resma {
    constructor(){
    this.cantidadDisponible= 10
    this.precio =250
    this.nombre = "resma",
    this.descripcion = "descripcion de la mesa de estudio"
    }
}


var cont;
var compra=new Array();
var cantmesaDeEstudio
var cantcartulina
var cantlapicera
var cantcartuchera
var cantresma


function crearCarrito(){
    
    compra=[];
    cont = 0
    cantmesaDeEstudio=0
    cantcartulina=0
    cantlapicera=0
    cantcartuchera=0
    cantresma=0
    
}

function agregarItem(prod,cant){

    compra[cont]=prod
    cont++;
    if(prod=="mesa de estudio"){
        cantmesaDeEstudio=cant
    }
    if(prod=="lapicera"){
        cantlapicera=cant
    }
    if(prod=="cartulina"){
        cantcartulina=cant
    }
    if(prod=="cartuchera"){
        cantcartuchera=cant
    }
    if(prod=="resma"){
        cantresma=cant
    }
}

function validarCantidad(cantidad){
    if(cantidad<=0){
        /*console.log("Indique cantidad mayor a cero para: " + producto.nombre)*/
        return false
    }else{
        return true
    }
}

function validarCantidadProvisoria(producto,cantidad){
    var cantidadProvisoria=producto.cantidadDisponible-cantidad
    if(cantidadProvisoria <= 0 ){
        return false
        
        
    }else{
        return true
    }

}

function elegirProducto(producto,cantidad){
    
    var cantidadProvisoria=producto.cantidadDisponible-cantidad
    if(validarCantidad(cantidad)==true && validarCantidadProvisoria(producto,cantidad)==true){
    
        for(var i=0;i<4;i++){

        
            if(compra[i]==producto.nombre){
                console.log("ya ha elegido este producto: " + producto.nombre)
                break
            }else if(validarCantidadProvisoria(producto,cantidad)==true && validarCantidad(cantidad)==true){
                agregarItem(producto.nombre,cantidad)
                producto.cantidadDisponible=cantidadProvisoria;
                break
            }

            
        }
    }
    
}

function eliminarProducto(productoE){

    

    for(var i=0;i<compra.length;i++){

        if(compra[i]==productoE.nombre){
            compra[i]=undefined
            if(productoE.nombre=="mesa de estudio"){
                cantmesaDeEstudio=0
            }
            if(productoE.nombre=="lapicera"){
                cantlapicera=0
            }
            if(productoE.nombre=="cartulina"){
                cantcartulina=0
            }
            if(productoE.nombre=="cartuchera"){
                cantcartuchera=0
            }
            if(productoE.nombre=="resma"){
                cantresma=0
            }



            break
        }


    }
}





function mostrarArray(){
    for(var i=0;i<compra.length;i++){

        console.log(compra[i])
    }
    console.log("cantidad de mesas compradas: " + cantmesaDeEstudio)
    console.log("cantidad de cartucheras compradas: " + cantcartuchera)
    console.log("cantidad de cartulinas compradas: " + cantcartulina)
    console.log("cantidad de lapiceras compradas: " + cantlapicera)
    console.log("cantidad de resmas compradas: " + cantresma)
}

function validarPrecioMayorAcero(producto){


    if(producto.precio>0){
        return true
    }else{
        return false
    }

}





cartulina1= new cartulina();
resma1=new resma();
mesa1=new mesaDeEstudio();
cartuchera1=new cartuchera();
lapicera1=new lapicera();

/*

crearCarrito();
elegirProducto(resma1,4);
elegirProducto(cartulina1,2);

mostrarArray();
*/

//module.exports = validarCantidad;
//module.exports = validarPrecioMayorAcero;
module.exports = validarCantidadProvisoria;