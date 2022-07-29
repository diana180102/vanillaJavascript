const animals = [
    {
        id:1,
        name: "susan smith",
        job: "Desarrollador de Pulgas",
        img: "img/5f98baebe97d9.jpg",
        text: "Princesa Perrura dolor sit amet consectetur adipisicing elit. Porro optio temporibus dolorem veniam dignissimos? Repudiandae amet architecto ipsam! Magnam ipsum labore nisi autem nam laudantium dolor quasi obcaecati blanditiis repellat",
    },

     {
        id:2,
        name: "Gato volador",
        job: "caza ratones",
        img: "img/cat2.jpg",
        text: "Gato eduardo ipsum dolor sit amet consectetur adipisicing elit. Porro optio temporibus dolorem veniam dignissimos? Repudiandae amet architecto ipsam! Magnam ipsum labore nisi autem nam laudantium dolor quasi obcaecati blanditiis repellat",
    },

     {
        id:3,
        name: "Firulais",
        job: "Comer mucho",
        img: "img/dog-3277416_1280.jpg",
        text: "Perro gloton sit amet consectetur adipisicing elit. Porro optio temporibus dolorem veniam dignissimos? Repudiandae amet architecto ipsam! Magnam ipsum labore nisi autem nam laudantium dolor quasi obcaecati blanditiis repellat",
    },

];


//seleccionar items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const work = document.getElementById("working");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.btn-surprise');



let itemActual = 0;

//cargar item inicial

window.addEventListener('DOMContentLoaded', function() {
    showAnimal(itemActual);
});

//Mostrar animal 
function showAnimal(animal) {

    const item = animals[animal];
    img.src = item.img;
    author.textContent = item.name;
    work.textContent = item.job;
    info.textContent = item.text;
    
}

//Mostrar tarjeta anterior
    prevBtn.addEventListener('click', function() {
        itemActual--;
         if(itemActual < 0){
            itemActual = animals.length-1;
        }
        showAnimal(itemActual);

});

 nextBtn.addEventListener('click', function() {
        itemActual++;
        if(itemActual > animals.length-1){
            itemActual = 0;
        }
        showAnimal(itemActual);

});

// tarjeta aleatoria
randomBtn.addEventListener('click', function () {
    itemActual = Math.floor(Math.random() * animals.length);
    showAnimal(itemActual);
});





