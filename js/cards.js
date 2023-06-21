const mainCards = document.getElementById('main')
const carritoLogo = document.querySelector('i#carrito-id.fa-solid')


carritoLogo.addEventListener('click', ()=>{
    location.href = 'carrito.html'
})
carritoLogo.addEventListener('mousemove', ()=>{
    carritoLogo.title = 'ir al carrito'
})

function copiarCards(producto){
    return  `<ul class="cards">
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image">
                            ${producto.imagenes}
                            <button id="${producto.id}" class="compra-btn"><span>$</span>${producto.precio}</button>
                        </div>
                        <div class="card_content">
                            <h2 class="card_title">${producto.cafe}</h2>
                            <div class="card_text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim omnis iure ut alias nobis magni quod! Ullam cum labore possimus, vero dicta accusantium, tempora laboriosam a voluptatem tenetur dignissimos ipsam.</p>
                                <hr />
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut fugit aut ex sed quia voluptatibus quod pariatur corrupti officia itaque aliquam sunt in aspernatur iste suscipit, laboriosam saepe officiis perspiciatis!</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul> `
}

function miArrayDeProductos(){
    main.innerHTML = ''
    productos.forEach((producto) => {
        main.innerHTML += copiarCards(producto)
    })
    clickButton()
}
miArrayDeProductos()

function clickButton(){
    const misBotones = document.querySelectorAll('button.compra-btn')
    for(let btn of misBotones){
        btn.addEventListener('click', (e) =>{
            const caffeElegido = productos.find((producto) => producto.id === parseInt(e.target.id))
            carrito.push(caffeElegido)
            localStorage.setItem('miCarrito', JSON.stringify(carrito))
        })
    }
}

function mostrarProductos() { 
    let contenidoTablaHTML = ''
    const tabla = document.querySelector('tbody')
        tabla.innerHTML = ''
        for (let producto of productos) {
            contenidoTablaHTML += `<tr>
                                       <td>${producto.categoria}</td>
                                       <td>${producto.cafe}</td>
                                       <td>$ ${producto.precio}</td>
                                   <tr>`
        }
        tabla.innerHTML = contenidoTablaHTML || ''
}