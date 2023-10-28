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

alert("BIENVENIDOS A TIENDA DE PERFUMES")

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
console.log(arrayMarcas.length);


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
    if (i == 7){
        break;
    }
    console.log(i);

}



class Perfume {
    constructor(nombre, precioLista, precioCuotas, cuotas) {
        this.nombre = nombre.toUpperCase();
        this.precioLista = parseFloat(precioLista);
        this.cuotas = parseFloat(cuotas)
        this.Valorcuotas = parseFloat(precioCuotas);
        this.vendido = false;
    }
    sumaIva() {
    this.precioLista = this.precioLista * 1.21;
    }
    // PRECIO EN 6 CUOTAS
    precioCuotas() {
        this.Valorcuotas = this.precioLista * 1.21 / 6;
    }
    // trescuotasPrecio() {
    //     this.precioLista = this.precioLista / 3;
    // }
    vender() {
        this.vendido = true;
    }
}

let perfume1 = new Perfume("The one gold EDP", "108520", "()", "6");
let perfume2 = new Perfume("The one light blue EDP", "96450", "()", "6");
let perfume3 = new Perfume("The one pour homme EDP", "79800", "()", "6");
let perfume4 = new Perfume("The one only one EDP", "112600", "()", "6");
let perfume5 = new Perfume("The most wanted EDP", "89300", "()", "6");
let perfume6 = new Perfume("Paco rabanne lady million EDP", "87600", "()", "6");
let perfume7 = new Perfume("Tom ford oud wood EDP", "$132.500", "()", "6");
let perfume8 = new Perfume("Tom ford tobaco and vainille EDP", "$125300", "()", "6");
let perfume9 = new Perfume("Azzaro chrome EDP", "$152.630", "()", "6");

const perfumes = [];
perfumes.push(new Perfume("One million deluxe EDP", "123400", "()", "6"));
perfumes.push(new Perfume("PR Invictus EAU", "105250", "()", "6"));
perfumes.push(new Perfume("Ultraviolet for women EAU", "82300", "()", "6"));

for (const Perfume of perfumes)
Perfume.sumaIva()

const nombre = perfumes.map((el) => el.nombre)
console.log(nombre)

console.dir(document.body)


// PRODUCTO PRECIO EN 3 CUOTAS

perfume1.precioCuotas();
perfume2.precioCuotas();
perfume3.precioCuotas();
perfume4.precioCuotas();
perfume5.precioCuotas();
perfume6.precioCuotas();
perfume7.precioCuotas();
perfume8.precioCuotas();
perfume9.precioCuotas();

// PRODUCTO PRECIO + IVA

perfume1.sumaIva();
perfume2.sumaIva();
perfume3.sumaIva();
perfume4.sumaIva();
perfume5.sumaIva();
perfume6.sumaIva();
perfume7.sumaIva();
perfume8.sumaIva();
perfume9.sumaIva();

// PRODUCTO VENDIDO

perfume1.vender();
perfume2.vender();
perfume3.vender();
perfume4.vender();
perfume5.vender();
perfume6.vender();
perfume7.vender();
perfume8.vender();
perfume9.vender();