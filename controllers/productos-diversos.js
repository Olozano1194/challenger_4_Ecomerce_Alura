import { productoServiceDiversos } from "../servicios/productos-servicios.js";

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

const producto = document.querySelector("[diversos]");
const verTodoButton = document.querySelector('.verTodosJs');

const render = async (mostrarTodos = false) => {
    try {
        const listaProductosDiversos = await productoServiceDiversos.listaProductosDiversos();

        //llamamos a los primeros 8 productos
        const productosLimitados = mostrarTodos ? listaProductosDiversos: listaProductosDiversos.slice(0, 8);

        //Limpiamos el contenedor antes de rendesizar
        producto.innerHTML = "";

        productosLimitados.forEach((elemento) => {
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

//Agreganis un evento clic para el btn ver todo
verTodoButton.addEventListener('click', () => {
    render(true); //Mostramos todos los productos
});