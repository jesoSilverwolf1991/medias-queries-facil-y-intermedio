
var elementoAMostrar = document.querySelector('.elemento-a-mostrar');


function verificarAnchoPantalla() {
    if (window.innerWidth <= 768) {
        elementoAMostrar.style.display = 'none';
    } else {
        elementoAMostrar.style.display = 'block';
    }
}

verificarAnchoPantalla();


window.addEventListener('resize', verificarAnchoPantalla);
