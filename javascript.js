// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi a che posizione della lista il nuovo utente si trova


// definizione delle varie variabili
var listaCognomi, cognomeUtente, posizioneLista, contenutoTemp;

var elemento = document.getElementById('mio_id');

var elemento1 = document.getElementById('mio_id1');

var elementoLista = document.getElementById('lista');

// creazione array
listaCognomi = ["Rossi", "Ferrari", "Bianchi", "Ricci", "Costa", "Verdi", "Fontana", "Ferrara"];

cognomeUtente = prompt("Inserisci il tuo cognome con la lattera maiuscola");
listaCognomi.push(cognomeUtente);

// ordinamento ordine alfabetico dell'array
listaCognomi.sort();

elemento1.innerHTML = cognomeUtente;

posizioneLista = listaCognomi.indexOf(cognomeUtente) + 1;
elemento.innerHTML = posizioneLista;

// ciclo per stampare tutti gli elementi dell'array
for (var i = 0; i < listaCognomi.length; i++) {

  contenutoTemp = elementoLista.innerHTML;
  console.log(contenutoTemp);

  elementoLista.innerHTML = contenutoTemp + "<li>" + listaCognomi[i] + "</li>";

}
