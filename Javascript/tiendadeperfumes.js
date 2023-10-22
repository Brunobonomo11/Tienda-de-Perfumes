const headercarrito = document.querySelector("#header");
const contenedorcarrito = document.querySelector("contenedorcarrito");
const bodycarrito = document.querySelector("bodycarrito");

window.addEventListener("scroll", function(){
    if(contenedorcarrito.getBoundingClientRect().top<10){
        headercarrito.classList.add("scroll")
    }
    else{
        headercarrito.classList.remove("scroll")
    }
})