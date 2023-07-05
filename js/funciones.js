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
    mainCards.innerHTML = ''
    productos.forEach((producto) => mainCards.innerHTML += copiarCards(producto) 
    )  
} miArrayDeProductos()


function agregarAlCarrito(){
    const misBotones = document.querySelectorAll('button.compra-btn')
    for(let boton of misBotones){
        boton.addEventListener('click', (e) => {
            cafeSeleccionado = productos.find((producto) => producto.id === parseInt(e.target.id))
            miCarrito.push (cafeSeleccionado)
            
        })
        
    }
}agregarAlCarrito()




function sumarNumeroCarro(){
    const misBotones = document.querySelectorAll('button.compra-btn')
    for(let boton of misBotones){
        boton.addEventListener('click', () => {
            resultado++
            numeroCarro.textContent = resultado
        })
        
    }
}sumarNumeroCarro()