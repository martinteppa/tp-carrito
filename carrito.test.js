
//const validarCantidad = require('./carrito');

const validarCantidadProvisoria = require('./carrito');


test("validarCantidadProvisoria", () => {
    class cartuchera{
        constructor(cantidad){
        this.cantidaddDisponible=cantidad
        }
    }
    const producto1 = new cartuchera(8);
    
    
    
    expect(validarCantidadProvisoria(producto1,4)).toBe(true)


})


/*

describe("validarCantidad", () => {
    it('deberia dar true si la cantidad de producto elegido es mayor a cero', () => {

    
        const num = 3
        expect(validarCantidad(num)).toBe(true)
    })
})  

})
*/