import { productoService } from "../servicios/productos-servicios.js";

const nuevoProducto = (name, price, imageUrl) => {
    // ... tu código para crear la tarjeta de producto ...
};

const renderProductos = async (productos, searchTerm) => {
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
    } catch (error) {
        console.log(error);
    }
};

const searchField = document.querySelector('#btnBuscar');
searchField.addEventListener('input', () => {
    const searchTerm = searchField.value;
    renderProductos('consolas', searchTerm);
});

// Llama a la función de render al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderProductos('consolas', ''); // Carga los productos iniciales (sin filtrar)
});
