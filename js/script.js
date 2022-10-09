// calcolo del prezzo del biglietto del treno

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2 (BONUS):
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

// Dati:
// userKm
// userAge
// ticketPrice = 0,21€/km
// user < 18 years = 20% sale
// user> 65 years = 40% sale
// ticketPrice?

//km
const userKmInput = document.getElementById(`userkm`);
console.log (userKmInput, typeof(userKmInput));

// Prezzo al km senza sconto
const kmPrice = 0.21.toFixed(2);

const submitPrice = document.getElementById(`submitkm`);

// click sul bottone baseprice
submitPrice.addEventListener(`click`, function(){
    const user_Km = parseInt(userKmInput.value);
    console.log (user_Km);

    //    Calcolo del prezzo base
    const ticket_BasePrice = parseInt((user_Km * kmPrice).toFixed(2));
    console.log (typeof(ticket_BasePrice));
    
    // Comunico il prezzo base
    const submitPrice = document.querySelector("div.baseprice");
    submitPrice.innerHTML += `<p> Il prezzo del tuo biglietto è ${ticket_BasePrice}€ </p>`;
})



 // Età
const userAgeInput = document.getElementById(`userage`);
console.log (userAgeInput, typeof(userAgeInput));

// Attribuisco una variabile al bottone dell'età
const submitBtnAge = document.getElementById(`submitage`);

// Al click sul bottone "genera":
submitBtnAge.addEventListener(`click`, function(){
    // Prendo il valore dell'input riferito a age
    const user_Age = parseInt(userAgeInput.value);
    console.log (user_Age);
    // inizializzo all'interno della funzione i km e il prezzo base
    const user_Km = parseInt(userKmInput.value);
    console.log (user_Km);
    const ticket_BasePrice = parseInt((user_Km * kmPrice).toFixed(2));
    console.log (ticket_BasePrice);
    // calcolo il prezzo con sconto applicato
    if(user_Age < 18) {
        const ticketPriceUnder18 = (ticket_BasePrice * 0.80).toFixed(2); 
        console.log(ticketPriceUnder18);
        const finalPrice = document.querySelector("div.price_age");
        finalPrice.innerHTML += `<h3> Grazie allo sconto under18, il prezzo del tuo biglietto è ${ticketPriceUnder18}€</h3>`;
    } if(user_Age > 65) {
        const ticketPriceOver65 = (ticket_BasePrice * 0.60).toFixed(2);
        console.log(ticketPriceOver65);
        const finalPrice = document.querySelector("div.price_age");
        finalPrice.innerHTML += `<h3> Grazie allo sconto over65, il prezzo del tuo biglietto è $${ticketPriceOver65}€</h3>`;

    }
});






