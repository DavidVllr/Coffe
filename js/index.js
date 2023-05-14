


const caffLargo = 745
const caffMocca = 626 
const caffCarajillo = 562
const caffAmericano = 522
const caffExpresso = 165 
const caffCortado = 134

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


