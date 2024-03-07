// Calcolo prezzo biglietto
// sotto 18 anni sconto 20%
// sopra 65 anni sconto 40%
// prezzo base 0.21 euro/km

let eta,
distanza, 
sconto, 
prezzoBiglietto,
nome,
prezzoScontato

const prezzoBase = 0.21
const etaElement = document.getElementById('eta')
const distanzaElement = document.getElementById('distanza')
const submitElement = document.getElementById('submit')
const prezzoBaseElement = document.getElementById('prezzoBase')
const scontoElement = document.getElementById('sconto')
const totaleElement = document.getElementById('totale')
const warningElement = document.getElementById('warning')
const resetElement = document.getElementById('ricalcola')
const anullaElement = document.getElementById('anulla')
const bigliettoElement = document.getElementById('biglietto')
const nomeElement = document.getElementById('nome')
const nomeOutPut = document.getElementById('nomeOutPut')

bigliettoElement.style.display = 'none'

anullaElement.addEventListener('click', function(){
    nomeElement.value = ''
    distanzaElement.value = ''
    etaElement.selectedIndex = 2
    bigliettoElement.style.display = 'none'
    warningElement.innerHTML = ''
})

submitElement.addEventListener('click', function() {
    nome = (nomeElement.value)
    eta = (etaElement.value)
    distanza = parseInt(distanzaElement.value)
    
    if ((!isNaN(distanza)) && (distanza > 0) && (nome !== '') && (distanza !== '')){
        bigliettoElement.style.display = 'flex'
        prezzoBiglietto = (prezzoBase * distanza)
        nomeOutPut.innerHTML = nome
            if (eta === 'minorenne') {
                // calcolo sconto del 20% moltiplico prezzo biglietto per 0.2
                sconto = (prezzoBiglietto * 0.2)
                // calcolo prezzo scontato
                prezzoScontato = (prezzoBiglietto - sconto)
                prezzoBaseElement.innerHTML = `${prezzoBiglietto.toFixed(2)}`
                scontoElement.innerHTML = `${sconto.toFixed(2)}`
                totaleElement.innerHTML = `${prezzoScontato.toFixed(2)}`

            } else if (eta === 'over65') {
                // calcolo sconto del 40% moltiplico prezzo biglietto per 0.4         
                sconto = (prezzoBiglietto * 0.4)         
                // calcolo prezzo scontato
                prezzoScontato = (prezzoBiglietto - sconto)   
                prezzoBaseElement.innerHTML = `${prezzoBiglietto.toFixed(2)}`
                scontoElement.innerHTML = `${sconto.toFixed(2)}`
                totaleElement.innerHTML = `${prezzoScontato.toFixed(2)}`      
            } else {
                sconto = 0        
                prezzoScontato = (prezzoBiglietto - sconto)   
                prezzoBaseElement.innerHTML = `${prezzoBiglietto.toFixed(2)}`
                scontoElement.innerHTML = `${sconto.toFixed(2)}`
                totaleElement.innerHTML = `${prezzoScontato.toFixed(2)}`      
            }
    }  else {
        warningElement.innerHTML = `${'Dati non validi'}`
    }
}) 