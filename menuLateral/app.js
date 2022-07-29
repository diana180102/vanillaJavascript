

// botones
const btnNav = document.querySelector('.nav-bars');
const btnClose = document.querySelector('.btn-close');

//
const menu = document.querySelector('.aside');
const nav = document.querySelector('.nav');

//boton de abrir menu
btnNav.addEventListener('click', () =>{
    
    //abro menu
    menu.classList.add('aside-show');
    
    //se esconde barra horizontal
    nav.classList.add('nav-oculto');

});

//Cerra menu
btnClose.addEventListener('click', () =>{
    menu.classList.remove('aside-show');
    nav.classList.remove('nav-oculto');
});

