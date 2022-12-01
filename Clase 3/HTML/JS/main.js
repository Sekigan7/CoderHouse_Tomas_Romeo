
//                              for de 0...10
/*
for (let i = 0; i <= 10; i++){
    alert(i);
}


for (let i=1; i<=10; i++){
    alert(i);
}
*/

/*

let ingresarNumero = parseInt(prompt("Ingresar Numero"));

for (let i=1; i <=10; i++){
    let resultado = ingresarNumero * i;
    alert (ingresarNumero + " X " + i + " = " + resultado);
}
*/

//                             Sentencia Break
/*
let valor = 10;

for (let i=1; i <=10; i++){
    if (valor == 15) {
        break;
    }

valor++;
alert ("valor" + valor);
}

let valor = 10;
*/
//                          Sentencia continue
/*
for (let i=1; i <=10; i++){
    alert ("Valor: " + valor);
    valor++;

    if (valor == 15) {
        continue;
    }
    alert("Valor incrementado: " + valor);
}
*/

//                      Ciclo While
/*
let repeat = true;
while(repeat) {
    console.log("Al infinito y... MAS ALLA!");
}
*/

/*
let enter =prompt("Ingresar un dato");
let tries = 3;

while(enter != "ESC") {
    alert("Ingresaste: " + enter);
    enter = prompt("Ingrese un dato: ");
    tries --;
    if (tries == 0){
        enter = "ESC";
    }
}
alert("Fin del ciclo While");
*/

//                          do.. While

/*
let number = 0;
do{
    //repetimos con do... while mientras el usuario ingresa un numero.
    number = prompt("Ingresar numero");
    console.log(number);
    //Si el parseo no resulta un numero se interrumpe el bucle
}while(parseInt(number));
*/

//                         SWITCH

/*
let number = 7;
switch(number) {
    case 5:
        alert("El numero es 5!");
        break;
    case 10:
        alert("El numero es 10!");
        break;
    case 15:
        alert("El numero es 15");
        break
    default:
        alert("El numero es: " + number);
        break
}
*/

/*
let name = prompt("Ingrese su Nombre:").toLowerCase();

switch(name) {
    case "Paula":
        alert("El nombre es Paula!");
        break;
    case "Lucas":
        alert("El nombre es Lucas");
        break;
    case "Adela":
        alert("El nombre es Adela!");
        break
    default:
        alert("El nombre es: " + name);
        break;
}
*/

//              while con switch
/*
let nombre= prompt("Ingrese un nombre: ").toUpperCase();

while((nombre != "ESC") && (nombre != "SALIR")){
    switch(nombre){
        case "Juan":
            alert("Hola Juan!")
            break;
        default:
            alert("Quien sos?");
            break;
    }
    nombre =prompt("Ingrese un nombre: ").toUpperCase();
}
*/

//                  Ejemplo de Clase
//              Variables de negocio
const max_add_products = 100000
const max_products = 5;
let blackfriday = 15;
let iva = 21;

// variable del programa

let add_product = 0;
let total_product = 0;
let name_product = prompt("Ingrese el nombre del producto: ");
let price_product = parseFloat(prompt("Ingrese el valor del producto: "));

while ((name_product != "ESC") && (name_product != null)) {
    add_product = add_product + price_product;
    console.log("Suma productos:" + add_product);


   /* if ((add_product>= max_add_products) || (total_product >= max_products)) {
        break;
    }*/

    total_product ++;
    console.log("productos totales:" + total_product);
    name_product = prompt("Ingrese el nombre del producto (ESC para salir)");
    price_product = parseFloat(prompt("Ingrese el Valor del producto: "));

}



//                      Aplico IVA
add_product = add_product + ((add_product * iva)/100);
console.log("c/IVA: " + add_product);

//              Valido si supera la cantidad max de productos y el monto max

if ((add_product > max_add_products ) && (total_product > max_products)) {
    add_product = add_product - ((add_product * blackfriday) /100);
    console.log ("c/Descuento: " + add_product)
}
alert ("La suma total de productos es de: " + add_product.toFixed(2) + "PESOS!" );