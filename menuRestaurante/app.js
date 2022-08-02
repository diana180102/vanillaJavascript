const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./img/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./img/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./img/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./img/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./img/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./img/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./img/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./img/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./img/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./img/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

/* Seleccionamos la etiqueta .container-menu que CONTIENE todos
    los items del MENU
 */
const section = document.querySelector('.container-menu');
const btnContainer = document.querySelector('.category');

/* Redibujamos el contenido de los bloques donde 
   se encuentra el MENU */
window.addEventListener('DOMContentLoaded', ()=>{
   
      displayMenuItems(menu);
      menuButtons();
    
   });

    //console.log(displayMenu);

/* Función que nos permite acceder a los datos del mapa
  que contiene la información de los diferentes MENU. */
function displayMenuItems(menuItems) {
   
   //Se accede a la información del mapa y la cargamos a las propiedad y atributos html
   let displayMenu = menuItems.map((item)=>{
       
       return `  <article class="menu">
                <div class="image">
                    <img src=${item.img} alt="${item.title}" class="photo">
                </div>
                <div class="details">
                    <div class="details-header">
                        <h3>${item.title}</h3>
                        <p>$${item.price}</p>
                    </div>
                    <div class="details-body">
                        <p>${item.desc}</p>
                    </div>
                </div>
            </article>`;
   });

   displayMenu = displayMenu.join('');
   console.log(displayMenu);
   
   //Cargamos los nodos descendientes de bloque de sección
   section.innerHTML = displayMenu;
}

//función para filtrar los menus por categoria
function menuButtons() {
  //
   const categories = menu.reduce(
   //Toma un valor y evalua cada item
    function (value, item) {

      /* Se evalua SI, el valor NO se encuentra 
         dentro de una de las categoria del map, entonces
        
       */
       if(!value.includes(item.category)){
         value.push(item.category);
       }
        console.log(value);
       return value;
    },
      ['all']
   );

   const categoryBtn = categories.map(
    function (category) {
      return `<button class="btn-item" data-id=${category}>${category}</button>`;
    }).join('');

    btnContainer.innerHTML = categoryBtn;
    console.log(btnContainer);

    const filterbtn = btnContainer.querySelectorAll('.btn-item');
     
     console.log(filterbtn);

     filterbtn.forEach((btn)=>{
      btn.addEventListener('click', (e)=>{
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter((menuItem)=>{
           if(menuItem.category== category){
            return menuItem;
           }
        });

        if (category === 'all') {
          displayMenuItems(menu);
        }else{
          displayMenuItems(menuCategory);
        }
      });
     });
}