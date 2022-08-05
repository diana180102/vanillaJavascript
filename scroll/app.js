






/* Evento de menu responsive */
const btnBar = document.querySelector('.btn-bar');
const menu = document.querySelector('.nav')
const links = document.querySelector('.links');

btnBar.addEventListener('click', () => {
    menu.classList.toggle('nav-show');

    const containerHeight = menu.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(containerHeight === 0){
        menu.style.height = `${linksHeight}px`
    }else{
        menu.style.height = 0;
    }

});

/* Evento para mostrar fecha actualizada */
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();


/* navbar fijo cuando se hace scroll */

const navbar = document.getElementById('container-nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    
    //pageYOffset devuelve  el # de pixeles que se ha desplazado en el  documento HTML
    const scrollheight = window.pageYOffset; 
    //console.log(scrollheight);
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollheight > navHeight){
        navbar.classList.add('fixed-nav');
    }else{
        navbar.classList.remove('fixed-nav');
    }

    if(scrollheight > 500){
        topLink.classList.add('show-link');
    }else{
        topLink.classList.remove('show-link');
    }

});





