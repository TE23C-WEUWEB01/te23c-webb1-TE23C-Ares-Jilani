// while (true) {
//     var namn = prompt("Ange ditt namn");
//     var lösenord = prompt("Ange ditt lösenord:");
//     if (lösenord == "12345") {
//         document.writeln(`DU ${namn} är inloggad`);
//         break;
//     } else {
//         document.writeln(`DU ${namn} har skrivit fel lösenord`);
//     }
// }

// Skriv ut talen 20-30
// for (let index = 20; index < 31; index++) {
//     document.writeln(`tal: ${index} <br>`);
// }

// let val = confirm("klicka OK för att fortsätta!"); // true eller false

let val = true;
while (val) {
    val = confirm("klicka OK för att fortsätta!"); // true eller false
}