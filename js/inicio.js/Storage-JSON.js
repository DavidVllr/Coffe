const inputProduct = document.querySelector('input#inputProducto.form-control.me-2')
buttonSearch.addEventListener('click', () =>{
    if (inputProduct.value !== ''){
        localStorage.setItem('nombreProduct', inputProduct.value)
    }
})
if(localStorage.getItem('nombreProduct')){
    inputProduct.value = localStorage.getItem('nombreProduct')
}