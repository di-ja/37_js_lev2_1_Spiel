function game() {
    let resultPlayer1=Number(document.getElementById("alter01").value)*5+Number(document.getElementById("groesse01").value)
    console.log(resultPlayer1)
    let resultPlayer2=Number(document.getElementById("alter02").value)*5+Number(document.getElementById("groesse02").value)
    console.log(resultPlayer2)
    let resultPlayer3 = Number(document.getElementById("alter03").value) * 5 + Number(document.getElementById("groesse03").value)
    console.log(resultPlayer3)
    let resultPlayer4 = Number(document.getElementById("alter04").value) * 5 + Number(document.getElementById("groesse04").value)
    console.log(resultPlayer4)
    
    if (resultPlayer1 > resultPlayer2 && resultPlayer1 > resultPlayer3 && resultPlayer1 > resultPlayer4) {
        document.getElementById("Gewinner").innerHTML = "Spieler1"
        document.getElementById("Punkte").innerHTML = resultPlayer1
    } else if (resultPlayer2 > resultPlayer1 && resultPlayer2 > resultPlayer3 && resultPlayer2 > resultPlayer4) {
        document.getElementById("Gewinner").innerHTML = "Spieler2"
        document.getElementById("Punkte").innerHTML = resultPlayer2
    } else if (resultPlayer3 > resultPlayer1 && resultPlayer3 > resultPlayer2 && resultPlayer3 > resultPlayer4) {
        document.getElementById("Gewinner").innerHTML = "Spieler3"
        document.getElementById("Punkte").innerHTML = resultPlayer3
    } else if (resultPlayer4 > resultPlayer1 && resultPlayer4 > resultPlayer2 && resultPlayer4 > resultPlayer3) {
        document.getElementById("Gewinner").innerHTML = "Spieler4"
        document.getElementById("Punkte").innerHTML = resultPlayer4
    }      
}