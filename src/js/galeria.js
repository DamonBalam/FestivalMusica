document.addEventListener('DOMContentLoaded', function () {
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('img');

        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        // ? Añadir funcion
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('li');
        lista.appendChild(imagen);
        galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId);

    // ? GENERANDO IMAGEN
    const imagen = document.createElement('img');
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay-galeria');

    // ? BOTON PARA CERRAR IMAGEN
    const btnCerrar = document.createElement('button');
    btnCerrar.textContent = 'X';
    btnCerrar.classList.add('btn-cerrar');

    btnCerrar.onclick = cerrarImagen;

    overlay.appendChild(btnCerrar);

    //? mostrar en el html
    const body = document.querySelector('body');
    body.appendChild(overlay);

    body.classList.add('fijar-body');
}

function cerrarImagen() {
    document.querySelector('body').classList.remove('fijar-body');

    document.querySelector('.overlay-galeria').remove();
}
