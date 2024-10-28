//Get

const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

export const productoServices = {

    listaProductos
};

const listaProductosConsola = () => fetch("http://localhost:3000/consola").then(respuesta => respuesta.json());

export const productoService = {

    listaProductosConsola
};

const listaProductosDiversos = () => fetch("http://localhost:3000/diversos").then(respuesta => respuesta.json());

export const productoServiceDiversos = {

    listaProductosDiversos
};