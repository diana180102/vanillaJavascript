
let count = 0;


const counter = document.querySelector('.counter');
const buttons = document.querySelectorAll('.btn'); //Selecciono todos los botones con clase btn

//console.log(btn);

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e){
        const styles = e.currentTarget.classList; // Genera la lista de clases dentro del selectorALL
         console.log(styles);

        if(styles.contains('decremento')){
            count--;
        }else if (styles.contains('incremento')){
            count++;
        }else{
            count = 0;
        }

        counter.textContent = count;
    })
});



