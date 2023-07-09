const contendorProductos = document.querySelector('#contenedor-productos'),
      items = document.querySelector('#items'),
      footer = document.querySelector('#footer-carrito'),
      carritoLogo = document.getElementById('carrito-id'),
      containerCartProducts = document.querySelector('.my-5'),
      finDeLaCompra = document.getElementById('fin-compra')


function cargarMiCarritoJson(){
    let miProducCarrito = localStorage.getItem('miCarrito')
    return miProducCarrito
}cargarMiCarritoJson()
let carrito = {}
let resultado = 0
carritoLogo.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
})
