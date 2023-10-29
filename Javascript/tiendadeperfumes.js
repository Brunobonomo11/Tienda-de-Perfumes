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

// PRIMER PRE-ENTREGA PROYECTO FINAL 

/*alert("BIENVENIDOS A TIENDA DE PERFUMES")

let nombreIngresado = prompt("Ingrese su Nombre");
let apellidoIngresado = prompt("Ingrese su Apellido")
let espacio = " ";

if ((nombreIngresado != "") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado + espacio + "Apellido: "+apellidoIngresado);
}
else{
    alert("Error: Ingresar nombre y apellido");
}

console.log("Bienvenido" + espacio + nombreIngresado)

let marcaIngresada = prompt("Seleccione una marca ej Paco Rabanne")
console.log("Usted ha seleccionado Paco Rabanne")

const arrayMarcas = ["","DOLCE & GABANNA","AZZARO","PACO RABANNE","TOM FORD","JEAN PAUL GAULTIER"];
arrayMarcas.push("YVES SAINT LAURENT")
// console.log(arrayMarcas.length);


let perfumeIngresado = prompt("Ingrese un Perfume ej Azzaro");
console.log("Usted ha seleccionado" + espacio + perfumeIngresado)

if (perfumeIngresado == "") {
    alert("No ingresaste ningún producto");
}
else{
    alert("Seleccionaste" + espacio + perfumeIngresado);
}

let entrada = prompt("Seleccione otro perfume")
while(entrada != "exit"){
    alert("El usuario ingresó "+ entrada);
    entrada = prompt("Seleccione un nuevo perfume")
}

console.log("Escriba un perfume a seleccionar")

for (let i = 0; i < 10; i++) {
    if (i == 8){
        break;
    }
    console.log(i);

}*/

Swal.fire({
    title: 'Error!',
    text: 'Queres continuar?',
    icon: 'error',
    confirmButtonText: 'Cool'
})




const Perfumes = [{ id: 1, perfume: "The one gold EDP", precio: 108520, aroma: "vainilla"},
{ id: 2, perfume: "The one light blue EDP", precio: 96450, aroma: "frutal"},
{ id: 3, perfume: "The one pour homme EDP", precio: 79800, aroma: "amaderado"},
{ id: 4, perfume: "The one only one EDP", precio: 112600, aroma: "lavanda"},
{ id: 5, perfume: "The most wanted EDP", precio: 89300, aroma: "citrus"},
{ id: 6, perfume: "Paco rabanne lady million EDP", precio: 87600, aroma: "fresh"},
{ id: 7, perfume: "Tom ford oud wood EDP", precio: 132500, aroma: "aromatico"},
{ id: 8, perfume: "Tom ford tobaco and vainille EDP", precio: 125300, aroma: "vainilla"},
{ id: 9, perfume: "Azzaro chrome EDP", precio: 152630, aroma: "frutal"},
{ id: 10, perfume: "One million deluxe EDP", precio: 123400, aroma: "amaderado"},
{ id: 11, perfume: "PR Invictus EAU", precio: 105250, aroma: "aromatico,frutal"}];



const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};


// ALMACENAMOS ARRAY COMPLETO 

guardarLocal("listaProductos", JSON.stringify(Perfumes));



class Perfume {
    constructor(obj) {
        this.nombre = obj.perfume.toUpperCase();
        this.precio = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}




// OBTENEMOS EL LISTADO DE PRODUCTOS ALMACENADOS

const almacenados = JSON.parse(localStorage.getItem("listaProductos"));

for (const objeto of almacenados)
    Perfumes.push(new Perfume(objeto));




    // let contenedorcompras = document.getElementById("contenedorcompras");
// console.log(contenedorcompras.innerHTML);

//let precioproducto1 = document.getElementsByClassName("precioproducto1");
//console.log(precioproducto1[0].innerHTML);

//let precioproducto2 = document.getElementsByClassName("precioproducto2");
//console.log(precioproducto2[0].innerHTML);

//let precioproducto4 = document.getElementsByClassName("precioproducto4");
//console.log(precioproducto4[0].innerHTML);

//let precioproducto5 = document.getElementsByClassName("precioproducto5");
//console.log(precioproducto5[0].innerHTML);




// AGREGAMOS OPCIONES DESDE EL ARRAY MARCAS

const arrayNuevosPerfumes = ["CHANEL", "KERASTASE", "DIOR", "GIVENCHY"];
arrayNuevosPerfumes.push("HERMES")
// console.log(arrayNuevosPerfumes.length);



// AGREGAMOS EVENTOS

let boton = document.getElementsByClassName("botoncarrito")
boton.onclick = () => {console.log("Click")}
boton.onmousemouve = () => {console.log("Move")}



// AGREGAMOS LocalStorage

localStorage.setItem("bienvenido", "Hola Tienda de Perfumes");
localStorage.setItem("esValido", true);
localStorage.setItem("unNumero", 23);



// LocalStorage Getitem

let mensaje = localStorage.getItem("bienvenido");
let bandeja = localStorage.getItem("esValido");
let numero = localStorage.getItem("unNumero");

console.log(mensaje);
// console.log(bandeja);
// console.log(numero);



// STRINGIFY

const fragancia1 = {id: 1, fragancia: "The one gold EDP", precio: 108520, esencia: "amaderada"};
const enJSON = JSON.stringify(fragancia1);

console.log(enJSON);
console.log(typeof fragancia1);
console.log(typeof enJSON);

localStorage.setItem("fragancia1", enJSON);

const fragancia2 = {id: 2, fragancia: "The one light blue EDP", precio: 96450, esencia: "frutal"};
const enJSON2 = JSON.stringify(fragancia2);

console.log(enJSON2);
console.log(typeof fragancia2);
console.log(typeof enJSON2);

localStorage.setItem("fragancia2", enJSON2);

const fragancia3 = {id: 3, fragancia: "The one pour homme EDP", precio: 79800, esencia: "violetas"};
const enJSON3 = JSON.stringify(fragancia3);

console.log(enJSON3);
console.log(typeof fragancia3);
console.log(typeof enJSON3);

localStorage.setItem("fragancia3", enJSON3);

// PARSE

/*const enJSON5 = '{"id":6,"fragancia":"The one gold EDP","precio":108520,"esencia":"amaderada"}'
const fragancia5 = JSON.parse(enJSON5);

console.log(typeof enJSON5);
console.log(typeof fragancia5);
console.log(fragancia5.fragancia);

const fragancia6 = JSON.parse(localStorage.getItem("fragancia3"));

console.log(fragancia6.id); */

console.dir(document.body)


// RECUPERAMOS ESTADOS PREVIOS

let usuario;
let usuarioEnLS = JSON.stringify(localStorage.getItem("usuario"))

// SI HABIA ALGO ALMACENADO LO RECUPERAMOS

if (usuarioEnLS) {
    usuario = usuarioEnLS
} else {
    usuario = prompt("Ingrese su nombre de usuario")
}

// ALMACENAR ARRAY DE OBJETOS

/*let carrito = []
let carritoEnLS = JSON.stringify(localStorage.getItem("carrito"))

// INICIALIZO MI APP CON CARRITO COMO ARRAY VACIO O CON EL REGISTRO QUE HAYA QUEDADO EN LS

if(carritoEnLS) {
    carrito = carritoEnLS
}

// FUNCION QUE RENDERIZARIA EL CARRITO

renderCarrito (carrito)*/

// ELIMINAMOS DATOS ALMACENADOS EN EL LOCAL STORAGE

//localStorage.clear();
//sessionStorage.clear();
