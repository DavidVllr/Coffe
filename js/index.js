alert('Bienvenido a coffeDv');
let nombreUsuario = prompt('Ingresar nombre de usuario');

if (nombreUsuario.trim() == ''){
    console.warn('no ingresaste nombre de usuario🤔');
}else{
    console.log = alert('Te damos la bienvenid@ ' + nombreUsuario);
 }; //el bloque solo pide tu nombre y te da la bienvenida. si no se cumple se mostrara en la consola


const iva = 1.21;

function calcularPrecios(caffe, meses, neto){
    console.log('precio total con inpuestos')
    let precioFinal = (caffe * neto) / meses
    for (let i = 0; i < meses; i++) {
        console.log ('cuotas ' + (i + 1) + ' AR$' + precioFinal)
    }
} // copiar y pegar: calcularPrecios(567, 12, iva)  puedes cambiar precio y meses si se desea :D
