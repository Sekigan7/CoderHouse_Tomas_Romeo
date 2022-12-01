//valores en variable

let nombre = "Homer";
let edad = 45;
let direccion ="Calle falsa 123";
//alert (nombre + " "+ edad + " " + direccion);

/*
const valores = {nombre: "Homer", edad: 45, direccion: "Calle falsa 123"};
console.log(valores); 
*/


/*
//accediendo a los valores de un objeto
console.log(persona);
alert(persona.nombre);
alert(persona.edad);
*/

/*
const mayorEdad = (valor) => {
    if (valor >=18){
        return true;
    }else {
        return false;
    }
}


const persona = { name: nombre,
    edad: mayorEdad(edad),
    direccion: "calle falsa 123"
};
console.log (persona);

//Modificando los valores de un Objeto.

persona.name = "Tomas";
persona["edad"] = 23;
alert(persona.nombre);
alert(persona.edad);

*/

//funciones constructoras

/*
function persona (valor1, valor2, valor3){
    this.nombre = valor1;
    this.edad = valor2;
    this.direccion = valor3;
}



function persona2 (objeto){
    this.name = objeto.nombre;
    this.age= objeto.edad;
    this.adress = objeto.direccion;
    this.live = true;
}

const humano1 = new persona ("Tomás", 24, "calle falsa 123");
const humano2 = new persona ("Ariana", 23, "calle falsa 1234");
console.log (humano1);
console.log (humano2);
const humano3 = new persona2 (humano1);
console.log(humano3);
*/

// ejemplo de constructor Auto

/*
function auto(marca, modelo, anio, stock){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.stock = stock;
}

const Peugeot = new auto (1, "Peugeot", 2000, 10, "https://cdn.motor1.com/images/mgl/my4w4/s1/4x3/adios-al-peugeot-207-compact.webp");
console.log(Peugeot);

*/

/*
//funcion
//funciones: generalmente retornar un valor y son de acceso global
function f1 (){
    return this;
}
*/

//Metodo y propiedades

let cadena = "Hola Coders!";
//propiedad de objeto de string: largo de la cadena
console.log("Largo: " + cadena.length);
//metrodo de objeto string: pasar a minuscula
console.log("Minuscula: " + cadena.toLowerCase());
//metrodo de objeto string: pasar a mayuscula
console.log("Mayuscula: " + cadena.toUpperCase());

/*

function persona (nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.darNombre = () => {
        alert("Nombre: " + this.nombre + " ( " + this.edad + ")")
}
}

const persona1 = new persona ("Homero", 39, "Calle falsa 123");
const persona2 = new persona ("Marge", 36, "Calle falsa 123");
persona1.darNombre();

*/

/*
const persona1 = { nombre: "Homero", edad: 39, calle: "av. siempre viva"};
//devuelve true porque la clave "nombre existe en el objeto personal"
console.log ( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto personal
console.log ("origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for....in
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}
*/
/*
class persona {
    constructor (nombre, sexo, altura, peso){
        this.nombre = nombre;
        this.sexo = sexo;
        this.altura= altura;
        this.peso = peso;
        this.imc = 0;
        this.salud = "";
    }
    calcularIMC() {
        if (this.altura == 0) {
            alert ("No se ingreso la altura!");
            return false;
        }
        if (this.peso == 0) {
            alert ("No se ingreso el peso!");
            return false;
        }
        this.imc = (peso / (altura * altura));
    }
}
    obtener_condicion() {
    if (this.sexo == "M") {
          if (this.imc < 18.5) {
            this.salud = "peso inferior al normal";
        } else if (this.imc >=18.5 && this.imc <24.9){
            this.salud = "Normal";
        } else if (this.imc >= 25 && this.imc <29.9){
            this.salud = "peso superior al normal";
        } else {
            this.salud = "Obesidad";
        }
    }
} else {
    if (this.imc< 16.5) {
        this.salud = "Peso inferior al normal";
    } else if (this.imc >= 16.5 && this.imc < 22.9){
        this.salud = "Normal";
    } else if (this.imc >= 23 && this.imc < 27.9 ) {
        this.salud = "Peso superior al normal";
    }else{
        this.salud = "Obesidad"
    }
}
*/