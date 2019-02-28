/*
ESERCITAZIONE POMERIDIANA
HTML:
- creare un bottone e un div
JS:
- associare al bottone un evento click
- per ogni click del bottone generare un numero casuale tra 0 e 100 da aggiungere al div
- se l'ultimo numero inserito è pari colorare il background del div in rosso e il testo in nero
- se l'ultimo numero inserito è dispari colorare il background in nero e il testo rosso
- il testo del bottone deve riportare il numero di valori casuali generati (ES:
Genera numero (0) --> Genera numero (1) --> Genera numero (2) --> e così via)
*/

// var elButton = document.getElementById("button");             //associo elButton(JS) a button(HTML)
// var elData = document.getElementById("data");                 //associo elData(JS) a data(HTML)
//
// var array = [];                                               //array vuoto che terrà conto quante volte è stato cliccato il bottone
//
// function getRandom() {                                        //funzione che genera casualmente un numero da 1 a 100
//     return Math.floor(Math.random() * 100) +1;
// }
//
// elButton.addEventListener("click", function() {               //genera evento con 1 click
//   var rndNumber = getRandom();                                //getRandom lo chiameremo rndNumber per comodità
//
//   if (rndNumber % 2 == 0) {                                   //CONDIZIONE: se il numero casuale è pari allora..
//     elData.style.color = "black";                             //l'ID "data" avrà testo nero
//     elData.style.background = "red";                          //e background rosso
//   }else {                                                     //altrimenti..
//     elData.style.color = "red";                               //l'ID "data" avrà testo rosso
//     elData.style.background = "black";                        //e background nero
//   }
//
//   array.push(rndNumber);                                      //immetto il numero casuale nell'array vuoto
//   elButton.innerHTML =  "Genera numero " + array.length;      //stampa nell'ID button...che tramite "array.length" verrà conteggiato quante volte è stato cliccato il bottone
//
//   elData.innerHTML += rndNumber + " - ";                      //stampa nell'ID data...il numero casuale
// });
//


/*-----ESERCIZIO ESEGUITO CON JQUERY-----*/

function getRandom() {                                           //funzione che genera casualmente un numero da 1 a 100
  return Math.floor(Math.random() * 100) +1;
}

var btn = $("#button");                                          //assegno il selettore $("#button") a "btn"
var data = $("#data");                                           //assegno il selettore $("#data") a "data"


btn.click( function() {                                          //all'azione "click" di btn parte la funzione..
  var rndNumber = getRandom();                                   //richiama la funzione per generare i numeri casuali


  if (rndNumber % 2 == 0) {                                      //CONDIZIONE: se il numero casuale è pari allora..
    data.addClass("even");                                       //l'azione ".addClass" aggiunge la classe "even" presente nel CSS all'ID "data" nell'HTML
    data.removeClass("odd");                                     //l'azione ".removeClass" rimuove la classe "odd" presente nel CSS dall'ID "data" nell'HTML
  }else {                                                        //ALTRIMENTI:
    data.addClass("odd");                                        //l'azione ".addClass" aggiunge la classe "odd" presente nel CSS all'ID "data" nell'HTML
    data.removeClass("even");                                    //l'azione ".removeClass" rimuove la classe "even" presente nel CSS dall'ID "data" nell'HTML
  }


  data.append (rndNumber + " - ");                               //l'azione ".append" inserisce il contenuto specificato (rndNumber + " - ") alla fine dell'elemento selezionato (data)

});
