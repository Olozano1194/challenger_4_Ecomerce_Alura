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
const verTodoButton = document.querySelector('.verTodosConsola');

const render = async (mostrarTodos = false) => {
    try {
        const listaProductosConsola = await productoService.listaProductosConsola();
        const productosLimitados = mostrarTodos ? listaProductosConsola: listaProductosConsola.slice(0, 8);
        
        const productosContainer = document.querySelector("[consolas]");
        producto.innerHTML = ""; // Limpia los productos anteriores

        // const filteredProductos = listaProductosConsola.filter(producto =>
        //     //console.log(producto.name.toLowerCase())
        //     //console.log('Search Term:', searchterm)
                        
        //     producto.name
        // );

        productosLimitados.forEach((elemento) => {
                    
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

// const btnBuscar = document.querySelector('input', () => {
//     const searchTerm = btnBuscar.value;
//     render('consolas', '');
// });


render();

//Agreganis un evento clic para el btn ver todo
verTodoButton.addEventListener('click', () => {
    render(true); //Mostramos todos los productos
});

