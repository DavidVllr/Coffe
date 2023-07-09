document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('js/api.json')
        const data = await res.json()
        generarHTML(data)
        misBotones(data)
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
}

const generarHTML = (data) => {
    const template = document.querySelector('#template-productos').content
    const fragment = document.createDocumentFragment()
    data.forEach(producto => {
        template.querySelector('img').setAttribute('src', producto.thumbnailUrl)
        template.querySelector('h5').textContent = producto.title
        template.querySelector('p span').textContent = producto.precio
        template.querySelector('button').dataset.id = producto.id
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
    contendorProductos.appendChild(fragment)
}

const misBotones = (data) => {
    const botones = document.querySelectorAll('.card button')
    botones.forEach(btn => {
        btn.addEventListener('click', () => {
            const producto = data.find(item => item.id === parseInt(btn.dataset.id))
            producto.cantidad = 1
            if (carrito.hasOwnProperty(producto.id)) {
                producto.cantidad = carrito[producto.id].cantidad + 1
            }
            carrito[producto.id] = { ...producto }
            localStorage.setItem("miCarrito", JSON.stringify(carrito))
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'se agrego al carrito ✔',
                showConfirmButton: false,
                timer: 1500
            })
            productosCarrito()
            
        })
    })
}


const productosCarrito = () => {
    items.innerHTML = ''
    const template = document.querySelector('#template-carrito').content
    const fragment = document.createDocumentFragment()
    Object.values(carrito).forEach(producto => {
        template.querySelector('th').textContent = producto.id
        template.querySelectorAll('td')[0].textContent = producto.title
        template.querySelectorAll('td')[1].textContent = producto.cantidad
        template.querySelector('span').textContent = producto.precio * producto.cantidad
        template.querySelector('.btn-info').dataset.id = producto.id
        template.querySelector('.btn-danger').dataset.id = producto.id
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment) 
    miFooterHTML()
    sumarRestarProduct()
}


const miFooterHTML = () => {
    footer.innerHTML = ''
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML =  `
                            <th scope="row" colspan="5">0 productos</th>
                            `
        return
    }
    const template = document.querySelector('#template-footer').content
    const fragment = document.createDocumentFragment()
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)
    template.querySelectorAll('td')[0].textContent = nCantidad
    template.querySelector('span').textContent = nPrecio
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)
    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
        carrito = {}
        productosCarrito()
    })
}

const sumarRestarProduct = () => {
    botonesAgregar = document.querySelectorAll('#items .btn-info'),
    botonesEliminar = document.querySelectorAll('#items .btn-danger')
    botonesAgregar.forEach(btn => {
        btn.addEventListener('click', () => {
            const producto = carrito[btn.dataset.id]
            producto.cantidad ++
            carrito[btn.dataset.id] = { ...producto }
            productosCarrito()
        })
    })

    botonesEliminar.forEach(btn => {
        btn.addEventListener('click', () => {
            const producto = carrito[btn.dataset.id]
            producto.cantidad--
            if (producto.cantidad === 0) {
                delete carrito[btn.dataset.id]
            } else {
                carrito[btn.dataset.id] = { ...producto }
            }
            productosCarrito()
        })
    })
}



finDeLaCompra.addEventListener('click', () => {
    Swal.fire({
    title: 'Deseas finalizad la compra?',
    text: "fin del pedido",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Compra realizada con exito!',
        'El pedido esta en camino',
        'success'
      )
    }
  })
})