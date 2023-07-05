// DOM
const mainCards = document.getElementById('main')
const carritoLogo = document.querySelector('#carrito')
const conCartProducts = document.querySelector('.container-cart-products');
const numeroCarro = document.getElementById('numero-carrito')
const misBotones = document.querySelectorAll('button.compra-btn')
const divProduct = document.querySelector('.misProductos')


const miCarrito  = []
let resultado = 0

// eventoClick
carritoLogo.addEventListener('click', () =>{
    divProduct.classList.toggle('#elProducto')
})