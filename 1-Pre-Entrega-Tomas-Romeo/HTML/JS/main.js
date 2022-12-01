
//                                     Por pura formalidad le perdimos al profesor su nombre

let namep = prompt("Ingrese su nombre profesor: ");
    alert("Bienvenido profesor "+ namep);

//       Definimos las variables, le ponemos el nombre del alumno y creamos un bucle por si el profesor desea salir o cargar a un alumno mas

let exam1,exam2,exam3,final,gpa;   
let confirmation=1;
while (confirmation!=2) { 
let namei = prompt("ingrese el nombre del alumno: ");
alert("El alumno cargado es: " + namei);

//                                                Cargamos las notas

exam1 = parseFloat(prompt("Parcial numero 1: "));
exam2 = parseFloat(prompt("Parcial numero 2: "));
exam3 = parseFloat(prompt("Parcial numero 3: "));
final = parseFloat(prompt("Final: "));
gpa = (exam1+exam2+exam3+final)/4;

//                          Calculamos si la suma de los parciales hace al promedio desaprobado o aprobado

if(gpa >= 6.7){
    alert("El promedio de "+ namei + " es " + gpa +" APROBADO");
}else{
    alert("El promedio de "+ namei + " es " + gpa +" DESAPROBADO");
}

//                        Guardamos el porcentaje de los alumnos para tener un registro en la consola
console.log(gpa, namei);


//                              Confirmamos si el profesor quiere cargar a otro alumno

do{
confirmation = prompt("Desea ingresar otro alumno? " + namep + " (1 para si y 2 para no)");
} while ((confirmation !=1) && (confirmation !=2));

//                                      Nos despedimos del profesor!
    if (confirmation = 2);
    alert ("Hasta la proxima! " + namep);
}
