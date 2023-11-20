// Descrizione:**
/*
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.

    MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone(non stilizzati), realizziamo le specifiche scritte sopra.
    La risposta finale(o output) sarà anch’essa da scrivere in console.

    MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora finalizzeremo il layout di pagina, in cui l’utente vedrà il form stilizzato e tutto l’output stampato in pagina(il prezzo dovrà sempre essere formattato con massimo due decimali).
*/
// variable definitions
const priceForKm = 0.21;
let discount = 0;

// Declarations of buttons variables

const btnConfirm = document.getElementById('confirm');
const resetAll = document.getElementById('resetAll');

// bntConfirm add event listener function

btnConfirm.addEventListener('click',

    function () {
        //user variables declaration
        let userName = document.getElementById('nameSurname').value;
        let userDistance = document.getElementById('distance').value;
        let userAge = document.getElementById('userAge').value;

        //  debug (control user output)
        console.log(userName);
        console.log(userDistance);
        console.log(userAge);

        //discount application
        if (userAge == '1') {
            discount = 0.2;
        } else if (userAge == '2') {
            discount = 0.4;
        } else {
            discount = 0;
        }

        // ticket price 

        let ticketPrice = (userDistance * priceForKm);
        ticketPrice -= ticketPrice * discount;

        if (userAge == '1') {
            document.getElementById('kindOfOffer').innerHTML = 'Sconto Under18 (-20%)';
        } else if (userAge == '2') {
            document.getElementById('kindOfOffer').innerHTML = 'Sconto Senior (-40%)';
        } else {
            document.getElementById('kindOfOffer').innerHTML = 'Tariffa Standard';
        }
        //User info print output on hidden ticket

        document.getElementById('passengerName').innerHTML = userName;
        document.getElementById('carriageNum').innerHTML = Math.floor((Math.random() * 10) + 1);
        document.getElementById('trainCode').innerHTML = Math.floor((Math.random() * 1000) + 1);
        document.getElementById('ticket_prc').innerHTML = (ticketPrice).toFixed(2);

        let hiddenTicket = document.getElementById('container_hidden');
        hiddenTicket.style.display = 'block';
    }

);
// Reset all add event listener funcion

resetAll.addEventListener('click',
    function () {
        history.go(0);
    }
);