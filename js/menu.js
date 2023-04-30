document.addEventListener('DOMContentLoaded',() => {
    const btnMenuHamburguesa = document.querySelector('.navbar-toggler');
    btnMenuHamburguesa.addEventListener('click',showNhide);
});

function showNhide() {
    const menu = document.querySelector('#bs-example-navbar-collapse-1');
    const redes = document.querySelector('#redes');
    const hamburguesa = document.querySelector('#navbar-icon');

    if (menu.classList.contains('oculto')) {
        menu.classList.remove('oculto');
        menu.classList.add('mostrar');
      /*  menu.style.maxHeight = menu.children[0].clientHeight + 'px';*/
    } else {
        menu.classList.remove('mostrar');
        menu.classList.add('oculto');
    }

    if (hamburguesa.classList.contains('cerrado')) {
        hamburguesa.classList.remove('cerrado');
        hamburguesa.classList.add('abierto');
      /*  menu.style.maxHeight = menu.children[0].clientHeight + 'px';*/
    } else {
        hamburguesa.classList.remove('abierto');
        hamburguesa.classList.add('cerrado');
    }
}