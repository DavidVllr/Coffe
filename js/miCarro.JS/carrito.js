
function mostrarProductos() { 
    let contenidoTablaHTML = ''
    const tabla = document.querySelector('tbody')
        tabla.innerHTML = ''
        for (let carro of miCarrito) {
            contenidoTablaHTML += `<tr>
                                       <td>${carro.categoria}</td>
                                       <td>${carro.cafe}</td>
                                       <td>$ ${carro.precio}</td>
                                   <tr>`
        }
        tabla.innerHTML = contenidoTablaHTML
}
mostrarProductos() 