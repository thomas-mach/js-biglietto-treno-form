// Calcolo prezzo biglietto
// sotto 18 anni sconto 20%
// sopra 65 anni sconto 40%
// prezzo base 0.21 euro/km

let eta, distanza, sconto, prezzoBiglietto
const prezzoBase = 0.21
// Capire eta del passeggero
const etaElement = document.getElementById('eta')
// Capire la distanza da percorrere
const distanzaElement = document.getElementById('distanza')
const submitElement = document.getElementById('submit')
const prezzoBaseElement = document.getElementById('prezzoBase')
const scontoElement = document.getElementById('sconto')
const totaleElement = document.getElementById('totale')
const warningElement = document.getElementById('warning')
// Calcolare prezzo biglieto a base di chilometri



submitElement.addEventListener('click', function() {
    eta = etaElement.value
    distanza = distanzaElement.value
    prezzoBiglietto = (prezzoBase * distanza)
    if (eta === 'minorenne') {
        // calcolo sconto del 20% moltiplico prezzo biglietto per 0.2
        sconto = (prezzoBiglietto * 0.2)
        // calcolo prezzo scontato
        const prezzoScontato = (prezzoBiglietto - sconto)
        prezzoBaseElement.innerHTML += `${prezzoBiglietto.toFixed(2)}`
        scontoElement.innerHTML += `${sconto.toFixed(2)}`
        totaleElement.innerHTML += `${prezzoScontato.toFixed(2)}`

    } else if (eta === 'over65') {
        // calcolo sconto del 40% moltiplico prezzo biglietto per 0.4         
        sconto = (prezzoBiglietto * 0.4)         
        // calcolo prezzo scontato
        const prezzoScontato = (prezzoBiglietto - sconto)   
        prezzoBaseElement.innerHTML += `${prezzoBiglietto.toFixed(2)}`
        scontoElement.innerHTML += `${sconto.toFixed(2)}`
        totaleElement.innerHTML += `${prezzoScontato.toFixed(2)}`      
     
    } else {
             // calcolo sconto del 40% moltiplico prezzo biglietto per 0.4         
             sconto = 0        
             // calcolo prezzo scontato
             const prezzoScontato = (prezzoBiglietto - sconto)   
             prezzoBaseElement.innerHTML += `${prezzoBiglietto.toFixed(2)}`
             scontoElement.innerHTML += `${sconto.toFixed(2)}`
             totaleElement.innerHTML += `${prezzoScontato.toFixed(2)}`      
    }
     
}) 








   