import { productoServices } from "../servicios/productos-servicios.js";

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

const producto = document.querySelector("[datos-productos]");

const render = async () => {
    try {
        const listaProductos = await productoServices.listaProductos();
        listaProductos.forEach((elemento) => {
            producto.appendChild(nuevoProducto(
                    elemento.name,
                    elemento.price, 
                    elemento.imageUrl
                    )
                    );
       });
    } catch(error){
        console.log(error);
    }
};

render();