function initModal() {

}

function checkWinner(lista) {

    if (lista.includes("0") && lista.includes("1") && lista.includes("2")) {
        $('#line-h-1').show()
        winner = true
        return winner
    }
    else if (lista.includes("3") && lista.includes("4") && lista.includes("5")) {
        $('#line-h-2').show()
        winner = true
        return winner
    }
    else if (lista.includes("6") && lista.includes("7") && lista.includes("8")) {
        $('#line-h-3').show()
        winner = true
        return winner
    }
    else if (lista.includes("0") && lista.includes("3") && lista.includes("6")) {
        $('#line-v-1').show()
        winner = true
        return winner
    }
    else if (lista.includes("1") && lista.includes("4") && lista.includes("7")) {
        $('#line-v-2').show()
        winner = true
        return winner
    }
    else if (lista.includes("2") && lista.includes("5") && lista.includes("8")) {
        $('#line-v-3').show()
        winner = true
        return winner
    }
    else if (lista.includes("2") && lista.includes("4") && lista.includes("6")) {
        $('#line-detoiz').show()
        winner = true
        return winner
    }

    else if (lista.includes("0") && lista.includes("4") && lista.includes("8")) {
        $('#line-iztode').show()
        winner = true
        return winner
    }
}

function reset() {
    lista_cross = []
    lista_circle = []
    click = 2
    winner = false
    boxes.removeClass('cross')
    boxes.removeClass('circle')
    player1.addClass('turno')
    winnermsg.hide()
    draw.hide()
    resetbtn.hide()
    $('.box-win-h').hide()
    $('.box-win-v').hide()
    $('#line-iztode').hide()
    $('#line-detoiz').hide()
}