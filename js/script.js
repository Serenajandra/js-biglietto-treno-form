// calcolo del prezzo del biglietto del treno

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// Dati:
// userKm
// userAge
// ticketPrice = 0,21€/km
// user < 18 years = 20% sale
// user> 65 years = 40% sale
// ticketPrice?

// Quanti km?
const userKm = parseFloat(document.getElementById(`userkm`));
console.log (userKm, typeof(userKm));

// Eta?
const userAge = parseInt(document.getElementById(`userage`));
console.log (userAge);

// Prezzo senza sconto
const kmPrice = 0.21.toFixed(2);

const ticketPrice = (userKm * kmPrice).toFixed(2);
console.log (ticketPrice);

// Prezzo con sconto applicato

// if(userAge<18) {
//     const ticketPriceUnder18 = (ticketPrice * 0.80).toFixed(2); 
//     console.log(ticketPriceUnder18);
//     alert(`Grazie allo sconto under18, il prezzo del tuo biglietto è ${ticketPriceUnder18}€`);
// } else if(userAge>65) {
//     const ticketPriceOver65 = (ticketPrice * 0.60).toFixed(2);
//     console.log(ticketPriceOver65);
//     alert(` Grazie allo sconto over65, il prezzo del suo biglietto è ${ticketPriceOver65}€`);

//     // prezzo senza sconto
// } else {
//     alert(`Il prezzo del suo biglietto è ${ticketPrice}€`);
//     console.log(ticketPrice);
// }


