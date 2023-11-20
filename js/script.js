// variable definitions
const priceForKm = 0.21;
let discount = 0;

//buttons variable definition 

let ticketGenerator = document.getElementById('confirm');
let ticketReset = document.getElementById('resetAll');

// button confirm event listener

ticketGenerator.addEventListener('click',

    function() {
        //variable definitions
        let userName = document.getElementById('nameSurname').value;
        let userDistance = parseInt(document.getElementById('distance').value);
        let userAge = document.getElementById('userAge').value;

        console.log(userName);
        console.log(userDistance);
        console.log(userAge);

        //discount function 

        if (userAge == '1') {
            discount = 0.2;
        } else if (userAge == '2'){
            discount = 0.4;
        } else {
            discount= 0;
        }

        //ticket price 

        let ticketPrice = (userDistance * priceForKm);
        ticketPrice -= ticketPrice * discount;

        // controllo output

        console.log('Nome user ' + userName);
        console.log('distanza da percorrere: ' + userDistance);
        console.log('eta viaggiatore: ' + userAge);
        console.log('Sconto applicato : ' + discount);
        console.log(`Totale= ${ticketPrice}`);

        // output su biglietto

        document.getElementById('passengerName').innerHTML = userName;
        document.getElementById('ticket_prc').innerHTML = (ticketPrice).toFixed(2) + "€";
        document.getElementById('carriageNum').innerHTML = Math.floor((Math.random() * 10) + 1);
        document.getElementById('trainCode').innerHTML = Math.floor((Math.random() * 1000) + 1);

            // applicated discount 
            if (userAge == '1') {
                document.getElementById('kindOfOffer').innerHTML = 'Sconto Under18 (-20%)';
            } else if (userAge == '2'){
                document.getElementById('kindOfOffer').innerHTML = 'Sconto Senior (-40%)';
            } else {
                document.getElementById('kindOfOffer').innerHTML = 'Tariffa Standard';
            }
        


        //ticket preview 


        const ticketShow = document.getElementById('container_hidden');
        ticketShow.style.display = 'block'
    }

)