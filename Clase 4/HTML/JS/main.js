// Declaracin de una funcion sin parametros.

/*
function saludar(){
    console.log("Hola Coders!");
    alert("Hola Coders!");
}
saludar(); 
*/

//Ejemplo de funcion
/*
let namelogin = prompt("Ingresar nombre: ");
alert(namelogin);
let namelogin = prompt("Ingresar nombre: ");
alert(namelogin);
let namelogin = prompt("Ingresar nombre: ");
alert(namelogin);
*/

/*

// es lo mismo que:

function namelogin (){
    let namelogin = prompt("Ingrese su nombre");
    alert (namelogin);
}
namelogin ();
namelogin ();
namelogin ();

// o

for (let i= 0; i < 3; i++){
    namelogin();
}

*/

//Funciones con parametros


/*

function namelogin(msg){
    alert("Tu nombre es: " + msg);
}
function elderage (age){
    if (age >=18){
        alert ("Si, sos mayor de edad");
    } else {
        alert ("Sos menor de edad");
    }

}

function valuedata (namelogin, age){
    if (age >=18){
        alert(namelogin + "!Si, sos mayor de edad!");
} else {
    alert (namelogin + "...No, no sos mayor de edad.");
}
}

let loginName = prompt("Ingrese su nombre");
namelogin(loginName);
let value = parseInt(prompt("Ingrese su edad: ")); // Variable que contiene un valor numerico entero
elderage(value);
//mayor de edad (valor)
valuedata(loginName, value);
console.log(valuedata);

*/


/*
//Ejemplo de Sumar

//declaracion de variable para guardar el resultado de la suma
let result = 0;
//funcion que suma dos numeros y asigna a resultado
function sumar(primerNumero, segundoNumero){
        result = primerNumero + segundoNumero;
}
//funcion que muestra resultado por consola
function mostrar(mensaje) {
    console.log(mensaje);
}
// llamamos primero a sumar y luego a mostrar
sumar(6 , 3) ;
mostrar(result);
*/


// Calculadora

/*
function calculator (firtNumber, secondNumber, operation){
    switch(operation){
        case"+":
            return firtNumber + secondNumber;
            break;
        case "-":
            return firtNumber - secondNumber;
            break;
        case "*":
            return firtNumber * secondNumber;
            break;
        case "/":
            return firtNumber / secondNumber;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculator(10,5,"*"));

function darDatos(nombre){
    nombre = "Sr./Sra. " + nombre
    return nombre;
    alert("Nombre: " + nombre); //codigo innacesible
    console.log("Nombre: " + nombre)
}

*/

// variable global  y local

/*
let resultado = 0 // variable global
function sumar(valor1, valor2){
    resultado = valor1 + valor2;
    alert ("resultado: " + resultado);
}
sumar (10, 20);
alert (resultado);
*/

/*
let resultado = 0; // variable global

function sumar(valor1, valor2){
    let resultado = valor1 + valor2; // variable local
    alert ("resultado: " + resultado);
}
sumar (10, 20);
alert (resultado); // 0

*/

//funciones anonimas

//Generalmente, las funciones anonimas se asignan a variablers declaradas como constantes
/*
const suma = function (a, b) { return a + b}
const resta = function (a, b) { return a - b}
console.log (suma(15,20))
console.log (resta (15,5))
*/

//funciones flechas

/*
const suma = (a , b) => {return a + b}
//Si es una funcion de una sola linea con retorno podemos evitar escribir el cuerpo
const resta = (a, b) => a - b ;
console.log ( suma (15,20))
console.log (resta(20,5))
*/

//Ejemplo aplicado al calcular precio.



const suma = (a , b) => { return a + b};
const resta = (a , b) => { return a - b};
// si una funcion es una sola linea con retorno y un parametro puede evitar escribir los ()
const iva = x => { return x * 0.21}; // 105
let precioProducto = 500;
let descuento = 10;
// calculo precioProdcuto + Iva * descuento
let nuevoPrecio = resta(suma(precioProducto, iva (precioProducto)), descuento);
console.log(nuevoPrecio);

