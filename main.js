//variables
let opcion;
let continuar;
let cantidadObjetos;
let contador = 0;
let borrar = 0;
let buscarProducto;
let buscar;

//variables de objeto
let datoNombre;
let datoPrecio;
let datoCantidad;

//arrays
let arrayProductos = [];

//funciones
function menu(){
  console.log("¿Que desea hacer?");
  console.log ("A: Ver productos");
  console.log ("B: Agregar productos");
  console.log ("C: Eliminar productos");
  console.log ("D: Buscar productos")
  console.log("------------------------")
  opcion = prompt();
  opcion = opcion.toUpperCase();
  console.log("Usted ingresó la opción " + opcion);
  console.log("------------------------")
}
function pedirDato() {
  datoNombre = prompt("Ingresar nombre del producto");
  datoPrecio = prompt("Ingresar precio del producto");
  datoCantidad = prompt("Ingresar cantidad del producto");
}

alert("Bienvenido al Software de Stock")

while(true){ 
menu();

if(opcion == "A"){
  console.log("Estos son los productos que hay en el stock")
  for(const i of arrayProductos){
    console.log(i);
  }
  console.log("------------------------")
}


if (opcion == "B"){
do{
  cantidadObjetos = Number(prompt("¿Cuantos productos desea ingresar?"));

  for(let i = contador; i < cantidadObjetos + contador; i++){
  pedirDato();

  producto = {
    nombre: datoNombre, 
    precio: datoPrecio,
    cantidad: datoCantidad
  }

    arrayProductos[i] = producto;
    console.log("Usted a añadido el siguiente producto:")
    console.log(arrayProductos[i]);
  }

  continuar = prompt("¿Desea ingresar otro producto?");
  console.log("------------------------")
  continuar = continuar.toUpperCase();
  contador = Number(contador + cantidadObjetos);
  cantidadObjetos = 0;
}while(continuar == "SI");
}

if(opcion == "C"){
  console.log("¿Que elemento desea borrar?");

  for(const i of arrayProductos){
    console.log(i);
  }

  borrar = Number(prompt("Ingrese el numero del objeto que desea borrar")- 1);
  arrayProductos.splice(borrar,1);
  contador = contador - 1;
  console.log("------------------------")
  console.log("Esta es su nueva lista de productos")
  for(const i of arrayProductos){
    console.log(i);
  }
  console.log("------------------------")
}

if(opcion == "D"){
  console.log("¿Que producto desea buscar?")
  buscarProducto = prompt("ingrese el nombre del producto");
  buscarProducto = buscarProducto.toLowerCase();
  buscar = arrayProductos.find((producto) => producto.nombre == buscarProducto);
  if(buscar == undefined){
    console.log("no hay productos encontrados");
    console.log("------------------------")
  }else{
    console.log("Se encontro el producto: ");
    console.log(buscar);
    console.log("------------------------")
  }
}
}
