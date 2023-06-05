class RellCarrito{
    constructor(unCarrito){
        this.carrito = unCarrito
    }
    finDelPedido(){
        if(this.carrito.length > 0){
            return this.carrito.reduce((acc, producto) => acc + producto.precio, 0)
        }
    }
}

function tienda(carrito){
    const ventas = new compra(carrito)
    alert('El precio final de tu compra es: $ ' + ventas.finDelPedido() + ' ✔')
}

function seleccionDeProducto(codigo){
    const resultado = productos.find((producto) => producto.codigo === parseInt(codigo))
    return resultado
}

function finDeLaCompra(){
    const contenido = new RellCarrito(carrito)
    alert('El valor total de tu compra es: $' + contenido.finDelPedido() +'\nMUCHAS GRACIAS POR LA COMPRA ✌')
    console.log()
}

