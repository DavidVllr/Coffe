const carrito = []
const productos =  [{id:1, categoria: 'coffe', cafe:'Cafe capuchino', precio: 400, imagenes:'<img src="./mulimedia/inicio/caffe-img/Cafe-Capuchino.jpg">'},
                    {id:2, categoria: 'masas', cafe: 'Media lunas', precio: 354, imagenes:'<img src="./mulimedia/inicio/masas-img/masa-1.jpg">'},
                    {id:3, categoria: 'coffe', cafe: 'Cafe con leche', precio: 670, imagenes:'<img src="./mulimedia/inicio/caffe-img/Cafe-con-leche.jpg">'},
                    {id:4, categoria: 'masas', cafe: 'Pan saborizado', precio: 543, imagenes:'<img src="./mulimedia/inicio/masas-img/masa-2.jpg">'},
                    {id:5, categoria: 'coffe', cafe: 'Cafe carajillo', precio: 450, imagenes:'<img src="./mulimedia/inicio/caffe-img/cafe-carajillo.jpg">'},
                    {id:6, categoria: 'masas', cafe: 'Galletas saborizadas', precio: 134, imagenes:'<img src="./mulimedia/inicio/masas-img/masa-3.jpg">'},
                    {id:7, categoria: 'coffe', cafe: 'Cafe largo', precio: 590, imagenes:'<img src="./mulimedia/inicio/caffe-img/Cafe-largo.jpg">'},
                    {id:8, categoria: 'masas', cafe: 'Croissants con mermelada', precio: 321, imagenes:'<img src="./mulimedia/inicio/masas-img/masa-4.jpg">'},
                    {id:9, categoria: 'coffe', cafe: 'Cafe macchiato', precio: 700, imagenes:'<img src="./mulimedia/inicio/caffe-img/Café-Americano.jpg">'},
                    {id:10, categoria: 'masas', cafe: 'Medialunas con dulce de leche ', precio: 413, imagenes:'<img src="./mulimedia/inicio/masas-img/masa-5.jpg">'},
                    {id:11, categoria: 'coffe', cafe: 'Cafe americano', precio: 600, imagenes:'<img src="./mulimedia/inicio/caffe-img/cafe-macchiato.avif">'},
                    {id:12, categoria: 'masas', cafe: 'Facturas', precio: 513, imagenes:'<img src="./mulimedia/inicio/masas-img/masa-6.jpg">'}]



// todo lo de abajo no anda para nada, falta ver tutorial en youtube

const proMenor = document.querySelector('ullia.dropdown-item#filtro-mayor')
function filtrarMenor(){
    proMenor.addEventListener('click', () =>{
        return productoMenor()
    })
}
function productoMenor(){
    productos.sort((a, b) => {
        if(a.precio > b.precio){
            return 1
        }
        if(a.precio < b.precio){
            return -1
        }
        return 0
    })
}



const proMayor = document.querySelector('ullia.dropdown-item#filtro-menor')
function filtrarMayor(){
    proMenor.addEventListener('click', () =>{
        return productoMayor()
    })
}
function productoMayor(){
    productos.sort((a, b) => {
        if(a.precio < b.precio){
            return 1
        }
        if(a.precio > b.precio){
            return -1
        }
        return 0
    })
}
