let stringaCalcolo = ""
    
function aggiungiSimbolo(event) {
    const valore = event.target.innerText
    switch(valore) {
        case "x":
            stringaCalcolo += "*"
            break
        case ":":
            stringaCalcolo += "/"
            break
        case "C":
            stringaCalcolo = ""
            break
        case "=":
            let risultato = ""
            try{
                risultato = eval(stringaCalcolo)
            }catch(err){
                risultato = "errore"
            }
            stringaCalcolo = risultato
            break
        default:
            stringaCalcolo += valore
            break
    }
    document.getElementById("numeri").innerText=stringaCalcolo
    
}





































