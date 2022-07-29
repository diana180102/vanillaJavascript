const nav = document.querySelector('.nav-bars');
const links = document.querySelector('.links');


nav.addEventListener('click', function () {
     
    //  if(links.classList.contains('show-link')){
    //      links.classList.remove('show-link');
    //  }else{
    //     links.classList.add('show-link');
    //  }

     links.classList.toggle('show-link');
})