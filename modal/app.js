
// Botones
const abrir = document.querySelector('.open-modal');
const cerrar = document.querySelector('.close-modal');

//clase
const modal = document.querySelector('.modal');

//abrir modal
abrir.addEventListener('click', ()=> {
    modal.classList.add('modal-show');
});

//cerrar modal
cerrar.addEventListener('click',()=>{
    modal.classList.remove('modal-show');
});