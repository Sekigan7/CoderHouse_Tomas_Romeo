//Estructura If
/*
let YouareOld = true;
let YouareYoung = false;

if (YouareOld){
    alert("Sos mayor?")
}

if (YouareYoung){
    alert("Por favor salga de la pagina.")
}
*/



//Estructura If ingresado por el usuario
/*

let aNumber = prompt("Ingrese el numero: "); 


if(aNumber == 10) { // El signo == es para comparar "igual que.""
    alert("El numero es 10!");
}

if (aNumber >= 11) { // El signo != es para comparar "distinto que."
    alert("El numero no es mayor a 10!");
}

if (aNumber <= 9) { // El signo >= es para comparar "es menor o igual a X", se puedfe usar todas las combinaciones <, <= o >=
    alert("El numero es menor o igual a 10");
}

*/

//Condicional con un String

/*

let aColor = prompt("Por favor ingrese el color Rojo: ");

if (aColor.toLowerCase() == "rojo"){ 
    alert("El color es Rojo!");

} else {
    alert("El color no es Rojo.");
}
*/
//"toLowerCase" Combierte todo el minuscula.
//"toUpperCase" Combierte todo el texto en mayuscula.


// condiciones con if y else if
/*
let price = prompt("Por favor ingrese el precio: ");

if (price <20){
    alert("El precio es menor que 20!");
}
else if (price <50){
    alert("El precio es menor que 50!");
}
else if (price <100){
    alert("El precio es menor que 100!");
}
else{
    alert("El precio es mayor o igual que 100!")
}

*/

//True o False
/*
let aNumber = prompt("Por favor ingrese el numero 5");
let isOlder = (aNumber >= 5); //Almacenara true o false

if(isOlder){
    alert("El numero es mayor o igual que 5!.")
}else{
    alert("No es mayor ni es 5...")
}
*/


//Encontrar un caracter y marcarlo como verdadero
/*
let text = "Hola!";
let character = text.includes("!"); //.includes busca dentro de un texto un caracter.
alert(character);
*/



//operadores logicos

/*
let a=6;
let b=5;
let c=3 +2;
let d=parseInt(a) + b;

//A es igula a B

if (a==b) {
    console.log("A es igual a B!");
}

// A es estrictamente igual que C

if (a === b) {
    console.log("A es estrictamente igual a B!")
}

// A es distinto de B
if (a != b) {
    console.log("A es distinto de B!")
}

//A es estrictamente distinto que B

if (a !==b){
    console.log("A es estrictamente distinto de B!");
}

//Menor o igual

if (a<=b) {
    console.log("A es menor o igual que B!");
}

//Mayor o igual

if (a=>b) {
    console.log("A es mayor o igual que B!");
}

//Verdadero y verdadero = verdadero

if ((a == 10) && (b==10)) { 
    console.log("A y B valen igual a 10")
}

//Verdadero o falso = verdadero

if ((a == 10) || (b==10)) {
    console.log("A y B valen igual a 10")
}

// ! operador not. Te hace la inversa, si es true sale false y si es false sale true

if (!((a == 10) && (b == 10))) {
    alert("Estoy aca!")
}

*/

//operador en JS
/*
let user = prompt("Ingrese su usuario: ")
let key = prompt("Ingrese su clave: ")
*/
/*
if ((user.length !="") && (key.lenght !="")) {
    alert ("Su usuario es: " + user + " " + " Su contraseña es: "  + key);
}else{
    alert("Error! Ingrese correctamente su usuario.")
}
*/

/*

if ((user == null) || (key == null)) {
    alert ("Error! Ingrese correctamente su Usuario y Contraseña.");
} else if ((user.legth ==0) && (key.length == 00)) {
    alert("Error! Ingrese correctaemente su Usuario y Contraseña.");
} else {
    alert ("Su usuario es:" + user + " " + "Su contraseña es: " + key);
}

*/

/*

let userName = prompt("Ingrese su usuario").toUpperCase();
let ageRange = parseInt(prompt("Ingrese su edad:")); //Convertimos valores a enteros
if ((ageRange >=18) && ((userName=="sekigan") || (userName == "SEKIGAN"))){
    alert("1-El nombre ingresado es Sekigan")      
 } else{
    alert("1-El nombre ingresado no es Sekigan.")
 }


*/
// Ejercicios en clase (COMPLETAR)

/*
let high = parseFloat(prompt("Ingrese su altura: "));
let peso = parseFloat(prompt("Ingrese su peso: "));
let IMC = peso / (high - high);

if (IMC < 18.5); {
    alert("Peso inferior al normal");
} else if ((IMC >=18.5) && (IMC <=24.9) {
    alert ("Normal");
} else if ((IMC >=25) && IMC <=29.9) {
    alert("Peso superior al normal")
}else{
    alert("Obesidad")
}
*/
