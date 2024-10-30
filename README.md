<h1 align='center'>E-comerce Alura</h1>

Este proyecto fue desarrollado como parte de uno de los desafíos del curso de Alura Latam. Se centra en la creación de una tienda virtual que organiza productos en tres categorías principales: Consolas, Star Wars, diversos.

## Descripción del Proyecto

El proyecto consiste en una aplicación web que permite a los usuarios navegar por diferentes categorías de productos. La aplicación cuenta con una interfaz de usuario amigable y fácil de usar.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- Fetch API para solicitudes asíncronas

## Cómo Ejecutar el Proyecto

1. Clona el repositorio en tu entorno de desarrollo local.
2. Instala npm,

     -  ```bash
          npm install
        ```
3. Si en el archivo package.json no aparece la dependiencia de json-server, toca instalarla de manera local:

    - ```bash
        npm install json-server --save-dev
      ```
3. Luego nos dirigimos al package.json y creamos el siguiente script para ejecutarlo:

    - ```bash
         "scripts": {
            "start": "json-server --watch db.json",
            "test": "echo \"Error: no test specified\" && exit 1"
        },
      ```
2. Abre el archivo `index.html` en tu navegador web, usa live server  del visual studio code.
3. Para poder mostrar las categorías, ejecuta el siguiente comando en la terminal:

    - ```bash
        npm start
      ```


