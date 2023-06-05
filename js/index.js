const carrito = []
const productos = [{codigo: 1, cafe: 'Capuchino', precio: 400},
                    {codigo: 2, cafe: 'Con leche', precio: 670},
                    {codigo: 3, cafe:'Carajillo', precio: 450},
                    {codigo: 4, cafe:'Largo', precio: 590},
                    {codigo: 5, cafe: 'Macchiato', precio: 700},
                    {codigo: 6, cafe:'Americano', precio: 600},]


function pregunar(){
    alert('saludos! Bienvenido a CoffeDv')
    let respuesta = confirm('Te interesaria hacer alguna compra?')
    if(respuesta === true){
        return comprarProduct()
    } else {
        alert('Muchas gracias por visitarnos 😉 si deseas volver a interactuar solo recarga la pagina!')
    }
}
pregunar()

function comprarProduct(){
    let codigo = prompt('AQUI TE DEJO UN LISTADO DE TODOS LOS DESAYUNOS QUE TENEMOS PARA TI 🙌:\n1 = cafe largo al valor de $590\n2 = cafe Americano al valor de $600\n3 = cafe Carajillo al valor de $450\n4 = cafe Capuchino al valor de $400\n5 = cafe macchiato al valor de $700\n6 = cafe con leche al valor de $670\n\nPOR FAVOR SELECCIONES LO QUE DESEAS CONSUMIR, PROCURA ELEGIR EL CAFE SEGUN SU CODIGO DESIGNADO')
    let cafeSeleccionado =  seleccionDeProducto(codigo)
    console.log(cafeSeleccionado)
    if(cafeSeleccionado !== undefined){
        carrito.push(cafeSeleccionado)
        alert('Tu cafe ' + cafeSeleccionado.cafe + ' al valor de ' + cafeSeleccionado.precio + ' pesos se agrego al carrito de compras')
        let pregunta = confirm('Te interesa comprar algo mas?')
        if(pregunta === true){
            comprarProduct()
        }else{
            finDeLaCompra()
        }
    } else {
        alert('Lo sentimos, creo que ocurrio un error, recarga nuevamente para volver a empezar')
    }
}


