const d = document;
let menu = d.querySelector(".nav__menu");
let boton = d.querySelector(".hamburguer");
let close = d.querySelector(".nav__close");

close.addEventListener('click', ()=>{
    menu.classList.remove("nav__menu--visible");
});
boton.addEventListener('click', ()=>{

    menu.classList.toggle("nav__menu--visible");

});

