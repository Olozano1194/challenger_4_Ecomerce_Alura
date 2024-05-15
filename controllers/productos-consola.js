import { productoService } from "../servicios/productos-servicios.js";

const nuevoProducto = (name, price, imageUrl) => {

    const card = document.createElement("div");

    const contenido = 
        `<div class="contenedor_productos">
            <div class="contenedor_img">
                <img class="imagenes" src=${imageUrl} alt=${name}></img>
            </div>
                <div class="descripcion">
                    <h3 class="categoria" > ${name} </h3>
                    <p class= "precio" >${price}</p> 
                </div>

        </div> ` 
        
    card.innerHTML = contenido;
    card.classList.add("card");

    return card;
};

const producto = document.querySelector("[consolas]");

const render = async (productos, searchterm) => {
    try {
        const listaProductosConsola = await productoService.listaProductosConsola();
        const productosContainer = document.querySelector("[consolas]");
        productosContainer.innerHTML = ""; // Limpia los productos anteriores

        const filteredProductos = listaProductosConsola.filter(producto =>
            producto.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        filteredProductos.forEach((elemento) => {
            productosContainer.appendChild(nuevoProducto(
                elemento.name,
                elemento.price,
                elemento.imageUrl
            ));
        });
    } catch(error){
        console.log(error);
    }
};

const btnBuscar = document.querySelector('input', () => {
    const searchTerm = btnBuscar.value;
    render('consolas', '');
});


document.addEventListener('DOMContentLoaded', () => {
    render('star_wars');
});

