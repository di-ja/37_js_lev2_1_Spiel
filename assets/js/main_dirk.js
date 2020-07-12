function agegame() {
    let resultPlayer01=Number(document.getElementById("agePl01").value) * 7 + Number(document.getElementById("sizePl01").value)
    console.log(resultPlayer01)
    let resultPlayer02=Number(document.getElementById("agePl02").value) * 7 + Number(document.getElementById("sizePl02").value)
    console.log(resultPlayer02)
    let resultPlayer03=Number(document.getElementById("agePl03").value) * 7 + Number(document.getElementById("sizePl03").value)
    console.log(resultPlayer03)
    let resultPlayer04=Number(document.getElementById("agePl04").value) * 7 + Number(document.getElementById("sizePl04").value)
    console.log(resultPlayer04)

    if (resultPlayer01 > resultPlayer02 && resultPlayer01 > resultPlayer03 && resultPlayer01 > resultPlayer04) {
        document.getElementById("winner").innerHTML = "And the Winner is: Player 1"
        document.getElementById("points").innerHTML =  resultPlayer01
    }
    else if (resultPlayer02 > resultPlayer01 && resultPlayer02 > resultPlayer03 && resultPlayer02 > resultPlayer04) {
        document.getElementById("winner").innerHTML = "And the Winner is: Player 2"
        document.getElementById("points").innerHTML = resultPlayer02
    }
    else if (resultPlayer03 > resultPlayer01 && resultPlayer03 > resultPlayer02 && resultPlayer03 > resultPlayer04) {
        document.getElementById("winner").innerHTML = "And the Winner is: Player 3"
        document.getElementById("points").innerHTML = resultPlayer03
    }
    else if (resultPlayer04 > resultPlayer01 && resultPlayer04 > resultPlayer02 && resultPlayer04 > resultPlayer03) {
        document.getElementById("winner").innerHTML = "And the Winner is: Player 4"
        document.getElementById("points").innerHTML = resultPlayer04
    }
else {
    document.getElementById("winner").innerHTML = "... there is no winner - DRAW "
}
}