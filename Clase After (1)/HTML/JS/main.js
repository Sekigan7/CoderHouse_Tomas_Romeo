//Ingreso de datos

let packs;
let amount;
let term;
let exit;
const iva = 21;


do{
    packs = prompt("Ingrese que Tipo de Paquete prefiere (Simple / Estilo / Insignia): ").toLocaleLowerCase();
}while ((packs != "simple") && (packs != "estilo") && (packs != "insignia"));

do {amount = parseFloat(prompt("Ingrese el monto deseado: (Minimo 100.000 / Maximo $5.000.000): "));

}while ((amount < 100000) || (amount > 5000000));

do {
    term =parseInt(prompt("En cuantas cuotas desea pagar? (Maximo 36 meses.: "));
} while ((term < 1 ) || (term >36));

// Proceso
let interest_packs;

switch(packs) {
    case "simple":
        interest_packs = 47;
        cost_account = 1500;
        break;
    case "estilo":
        interest_packs = 37;
        cost_account = 2500;
        break
    case "insignia":
        interest_packs = 27;
        cost_account = 3000;
        break;
}

for (let i=1; i<term; i++);{
    
}

let amount_iva = amount + ((amount * iva) / 100);
console.log("Monto c/Iva: $" + amount_iva);

let amount_interest = amount_iva + ((amount_iva * interest_packs) / 100);
console.log("Monto c/Interes: $ " + amount_interest);


let value_term = (amount_interest / term);
console.log("Cuota: $" + value_term);

amount_interest = interest_packs / 1200;
let pack_pure_interest;
let pack_pure;
let pack_pure_iva;
let cost_total_monthly;
let amount_interest_exit;

for (let i=1; i<term; i++) {
    pack_pure = amount / ((1 - Math.pow(interest_packs+1, - term)) / interest_packs);
    pack_pure_interest = pack_pure - ((pack_pure * 60 ) / 100);
    pack_pure_iva = (pack_pure + pack_pure_iva + cost_account);
    cost_total_monthly = pack_pure + pack_pure_iva + cost_account;
    amount_interest_exit = amount_interest_exit - pack_pure_interest;

    exit += "Cuota: #" + i + "\n" + "|Saldo $" + amount_interest_exit + "\n" + "|Cuota $" + value_term + "\n" + "|Costo cuenta $" + cost_account + "\n" + "|Costo total mensual $" + cost_total_monthly;
}
alert(exit);




//Salida de datos

/*
alert("Paquete: " + packs + "\n" + "Monto: $" + amount.toFixed(2) + "\n" + "Cantidad de cuotas: " + term);
alert ("Prestamo: $" + amount_interest.toFixed(2) + "\n" + "Valor de cuotas: $" + value_term + "\n" + "Iva: $" + amount_iva);
*/