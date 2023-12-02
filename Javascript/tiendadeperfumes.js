// AGREGAMOS SWEET ALERT

Swal.fire({
  title: "Quieres continuar en nuestra tienda online?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Continuar",
  denyButtonText: `Salir`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire("Muchas Gracias!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});

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
{ id: 11, perfume: "PR Invictus EAU", precio: 105250, aroma: "aromatico,frutal"},
{ id: 12, perfume: "Yves Saint Laurent MYSL", precio: 136256, aroma: "bosque, amaderado"},
{ id: 13, perfume: "Jean Paul Gaultier Divine", precio: 155203, aroma: "aromatico,frutal"},
{ id: 14, perfume: "Paco Rabanne Puor Homme EDP", precio: 94300, aroma: "bosque, jardin"},
{ id: 15, perfume: "Paco Rabanne One million deluxe EDP", precio: 123400, aroma: "aromatico"}];



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

let boton = document.getElementById("btnprincipal")
boton.addEventListener("click", respuestaClick)
function respuestaClick() {
    console.log("Respuesta evento");
}

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
/*
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
*/

// PARSE

/*const enJSON5 = '{"id":6,"fragancia":"The one gold EDP","precio":108520,"esencia":"amaderada"}'
const fragancia5 = JSON.parse(enJSON5);

console.log(typeof enJSON5);
console.log(typeof fragancia5);
console.log(fragancia5.fragancia);

const fragancia6 = JSON.parse(localStorage.getItem("fragancia3"));

console.log(fragancia6.id); */

/* console.dir(document.body) */



// RECUPERAMOS ESTADOS PREVIOS

let usuario;
let usuarioEnLS = JSON.stringify(localStorage.getItem("usuario"))



// SI HABIA ALGO ALMACENADO LO RECUPERAMOS

if (usuarioEnLS) {
    usuario = usuarioEnLS
} else {
    usuario = prompt("Ingrese su nombre de usuario")
}



// SET TIME OUT

/*
console.log("Inicia proceso")

setTimeout(() => {
  console.log("Solicitamos su nombre de usuario")
}, 2000)

console.log("Fin proceso")
*/




// CALL STACK

function multiply (x, y) {
  return x * y;
}

function printSquare (x) {
  let s = multiply(x,
    x);
      console.log(s);
}

printSquare(5); 




let tiempo = 3000;

let timeout = setTimeout (() => {
  console.log("");
}, tiempo);

// CLEAR TIMEOUT

clearTimeout(timeout);

// SET INTERVAL

let intervalo = setInterval(() => {
  console.log("Solicitamos su nombre de usuario " + tiempo / 1000 + "");
  tiempo += 3000;
  
  // CLEAR INTERVAL
  if(tiempo >= 9000) clearInterval(intervalo);
}, tiempo); 


// PROMESAS


const eventoFuturo = (res) => {
  return new Promise ( (resolve, reject) => {
    if (res === true) {
      resolve ("Promesa resuelta")
    } else {
      reject ("Promesa rechazada")
    }
  })
} 

console.log( eventoFuturo(true))
console.log( eventoFuturo(false)) 


// THEN & CATCH

eventoFuturo(true)
.then((response) => {
  console.log(response)
})

eventoFuturo(false)
.catch((error) => {
  console.log(error)
}) 


// AGREGAMOS LISTA DE TAREAS TO-DOs FETCH & AJAX 

function crearTodo (data) {
  let todo = document.createElement("div");
  todo.className = "divItem";
  todo.innerHTML =
  `<h2>${data.id}</h2><p>${data.title}</p>` +
    (data.completed ? "<span>✅</span>" : "<span>🔄</span>");
  return todo;
}

// GET
let todos = document.getElementById("todos");

document.getElementById("idUser").addEventListener("input", (e) => {
  let id = e.target.value;
  todos.innerHTML = '';

  fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    for (const item of data) {
      todos.appendChild(crearTodo(item))
    }
  })

})

// POST

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let [texto, completa] = e.target.children;

  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: 'POST',
    body: JSON.stringify({
      title: texto.value, 
      complete: completa.checked, 
      userID: 1,
    }),
    headers: {"Content-type": "application/json; charset=UTF-8"},
  })
  .then((response) => response.json())
  .then((data) => {
    todos.appendChild(crearTodo(data));
  });
});


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
