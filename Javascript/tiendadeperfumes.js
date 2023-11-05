/*const headercarrito = document.querySelector("#header");
const contenedorcarrito = document.querySelector("contenedorcarrito");
const bodycarrito = document.querySelector("bodycarrito");

window.addEventListener("scroll", function(){
    if(contenedorcarrito.getBoundingClientRect().top<10){
        headercarrito.classList.add("scroll")
    }
    else{
        headercarrito.classList.remove("scroll")
    }
}) */

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

// SOLICITAMOS AL USUARIO QUE INGRESE SUS DATOS PARA HACER UNA COMPRA EN LA TIENDA

async function autenticar() {
    const {
      value: formAutenticar
    } = await Swal.fire({
      title: 'Ingrese su nombre de usuario',
      html: '<div class="form-inline col-sm-12 mt-3">' +
        '<label class="control-label col-sm-4" for="UserName">Usuario</label>' +
        '<input required="" class="form-control col-sm-7" id="UserName" name="usuario" type="text" autofocus style="color: #2e7d32;">' +
        '</div>' +
        '<div class="form-inline col-sm-12 mt-3">' +
        '<label class="control-label col-sm-4" for="UserPass">Contraseña</label>' +
        '<input required="" class="form-control col-sm-7" id="UserPass" name="clave" type="password" style="color: #2e7d32;">' +
        '</div>',
      backdrop: false,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Validar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#40B340',
      cancelButtonColor: '#FF0000',
      showCloseButton: true,
      focusConfirm: true,
      focusCancel: false,
      preConfirm: () => {
        return [
          document.getElementById('UserName').value,
          document.getElementById('UserPass').value
        ]
      },
      onOpen: (modal) => {
        confirmOnEnter = (event) => {
          if (event.keyCode === 13) {
            event.preventDefault();
            modal.querySelector(".swal2-confirm").click();
          }
        };
        modal.querySelector("#UserName").addEventListener("keyup", confirmOnEnter);
        modal.querySelector("#UserPass").addEventListener("keyup", confirmOnEnter);
      }
    });
    if (formAutenticar && formAutenticar[0] != '' && formAutenticar[1] != '') {
      Swal.fire({
        title: 'Datos Correctos',
        icon: 'success',
        backdrop: false
      });
    } else {
      Swal.fire({
        title: 'Datos incorrectos',
        icon: 'warning',
        backdrop: false
      });
    }
  }

// AGREGAMOS SWEET ALERT

Swal.fire({
    title: 'Quieres continuar en nuestra tienda?',
    showDenyButton: true,
    showCancelButton: 'Cancelar',
    confirmButtonText: 'Continuar',
    denyButtonText: `No quiero continuar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Correcto!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Lamentamos que te vayas', '', 'info')
    }
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



// SET TIME OUT

console.log("Inicia proceso")

setTimeout(() => {
  console.log("Solicitamos su nombre de usuario")
}, 2000)

console.log("Fin proceso")




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


// FETCH 

/* function crearTodo (data) {
  let todo = document.createElement("div");
  todo.className = "divItem";
  todo.innerHTML =
  `<h2>${data.id}</h2><p>${data.title}</p>` +
    (data.completed ? "<span>✅</span>" : "<span>🔄</span>");
  return todo;
} */


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
