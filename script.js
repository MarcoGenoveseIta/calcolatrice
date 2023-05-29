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



function esempioSwitch(età){
    switch(true){
        case età<16:
            console.log("No patente")
            break;
        case età<18:
            console.log("No alcool")
            break
        default:
            console.log("Maggiorenne")
            break
    }
}

// esempioSwitch(15)

function esempioSwitchFrutta(frutto){
    switch(frutto){
        case 'ananas':
        case 'mela':
            console.log("Non mi piace")
            break
        case 'arancia':
        case 'mango':
            console.log("Mi piace")
            break
        default:
            console.log("Boh")
            break;

    }
}

// esempioSwitchFrutta('banana')




































