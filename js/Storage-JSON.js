const inputProduct = document.querySelector('input#inputProducto.form-control.me-2')
const buttonProduct = document.querySelector('button#myButtonProducto.btn.btn-outline-success')
buttonProduct.addEventListener('click', () =>{
    if (inputProduct.value !== ''){
        localStorage.setItem('nombreProduct', inputProduct.value)
    }
})
if(localStorage.getItem('nombreProduct')){
    inputProduct.value = localStorage.getItem('nombreProduct')
}