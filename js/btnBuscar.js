const btnBuscar = document.getElementById('btnBuscar');

function compruebaLetra(key) {

    let estado = /^[A-Za-z]$/;
    if (estado.test(key)) {
    console.log(key);
    return false; // Es una letra válida
    } else {
    console.log(key);
    return true; // No es una letra válida
    }

}

function verificaLetra(keycode) {
    if (typeof keycode === "number" && keycode  >= 65 && keycode <= 90) {
        return true;
    } else {
        return false;
    }
}

// compruebaLetra();

btnBuscar.addEventListener('keyup', e => {

    console.log(e);
});