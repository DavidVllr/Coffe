function darBienvenida() {
    let nombre = prompt('por favor, introduce tu nombre:')
    alert('Bienvenido/a ' + nombre + ', Disfruta de coffeDv!🙌')
}
darBienvenida()


const caffLargo = 745
const caffMocca = 626 
const caffCarajillo = 562
const caffAmericano = 422
const caffExpresso = 365 
const caffCortado = 234

let dineroDis = parseFloat(prompt( 'cuanto dinero deseas gastar en un cafe?')) 
if (dineroDis >= caffLargo){
    alert ('puedes comprarte un caffe largo que vale: ' + caffLargo + ' pesos')
    alert ('puedes comprarte un caffe moca que vale: ' + caffMocca + ' pesos')
    alert ('puedes comprarte un caffe carajillo que vale: ' + caffCarajillo + ' pesos')
    alert ('puedes comprarte un caffe americano que vale: ' + caffAmericano + ' pesos')
    alert ('puedes comprarte un caffe expreso que vale: ' + caffExpresso + ' pesos')
    alert ('puedes comprarte un caffe cortado que vale: ' + caffCortado + ' pesos')
} else if (dineroDis >= caffMocca) {
    alert ('puedes comprarte un caffe moca que vale: ' + caffMocca + ' pesos')
    alert ('puedes comprarte un caffe carajillo que vale: ' + caffCarajillo + ' pesos')
    alert ('puedes comprarte un caffe americano que vale: ' + caffAmericano + ' pesos')
    alert ('puedes comprarte un caffe expreso que vale: ' + caffExpresso + ' pesos')
    alert ('puedes comprarte un caffe cortado que vale: ' + caffCortado + ' pesos')
} else if (dineroDis >= caffCarajillo) {
    alert ('puedes comprarte un caffe carajillo que vale: ' + caffCarajillo + ' pesos')
    alert ('puedes comprarte un caffe americano que vale: ' + caffAmericano + ' pesos')
    alert ('puedes comprarte un caffe expreso que vale: ' + caffExpresso + ' pesos')
    alert ('puedes comprarte un caffe cortado que vale: ' + caffCortado + ' pesos')
} else if (dineroDis >= caffAmericano) {
    alert ('puedes comprarte un caffe americano que vale: ' + caffAmericano + ' pesos')
    alert ('puedes comprarte un caffe expreso que vale: ' + caffExpresso + ' pesos')
    alert ('puedes comprarte un caffe cortado que vale: ' + caffCortado + ' pesos')
} else if (dineroDis >= caffExpresso) {
    alert ('puedes comprarte un caffe expreso que vale: ' + caffExpresso + ' pesos')
    alert ('puedes comprarte un caffe cortado que vale: ' + caffCortado + ' pesos')
} else if (dineroDis >= caffCortado) {
    alert ('puedes comprarte un caffe cortado que vale: ' + caffCortado + ' pesos')
}
else {
    alert('tienes poco dinero, no te alcanza para nada 😂')
}


let respuesta = ''
while(respuesta !== 'salir') {
    respuesta = prompt('Que tal le parecio nuestros precios? Escribe: bien/regular/mal segun tu experiencia👏 para finalizar pon: salir')
    if (respuesta === 'bien') {
        alert('Nos alegra mucho saber que te ha gustado 🐱‍🏍')
    } else if (respuesta === 'regular') {
        alert('tomaremos en cuenta tu comentario para seguir mejorando nuestro sitio ✔')
    } else if (respuesta === 'mal') {
        alert('lo sentimos mucho 😢 por cualquier inconveniente que hayas experimentado por favor dejalo en el apartado de contactos!')
    } else if (respuesta !== 'salir') {
        alert('no hemos entendido tu respusta. Por favor escribe bien/regular/mal para recibir una respuesta adecuada :D')
    }
}