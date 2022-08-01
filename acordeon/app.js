

//Seleccionar todo lo que tenga la clase question-item
const questions = document.querySelectorAll('.question-item');


//Hacemos el recorrido de todas las clases encontradas
questions.forEach(function (question) {

    //Seleccionamos el boton de abrir y cerrar el acordeon
    const btn = question.querySelector('.question-btn');
    console.log(btn);

    //Escuchamos el evento clic del botón
      btn.addEventListener('click', () =>{
            //recorremos cada bloque de la question
            questions.forEach(function (item) {
                console.log(question);

                //Si, el elemento elegido es diferente al del question, entonces remueve la clase show-details
                if(item !== question){
                    item.classList.remove('show-details');
                }
            });

            question.classList.toggle('show-details');
      });
    
});
