const btn = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const article = document.querySelectorAll('.tab-item');

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id; //Tener id del botón
    //console.log(id);
    
    /* si ID existe entonces la clase ACITVE sera removida del btn seleccionado
       Y la clase active sera agregada  */
    if (id) {
        btn.forEach((btns) =>{
            btns.classList.remove('active');
            e.target.classList.add('active');
            console.log(e.target.classList.add('active'));
        });

        //ocultar los otros articulos
        article.forEach((articles)=>{
            articles.classList.remove('active');
         });
         const element = document.getElementById(id);
         element.classList.add('active');
        }
    }

);