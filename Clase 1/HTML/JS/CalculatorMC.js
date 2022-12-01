let weight = parseFloat(prompt("Ingrese su peso: "));
let height = parseFloat(prompt("ingrese su altura: "));
IMC = weight / (height * weight);

alert("Tu IMC es: " + IMC.toFixed(3));