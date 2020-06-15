function initModal() {

}

function checkWinner(lista) {

    if (lista.includes("0") && lista.includes("1") && lista.includes("2")) {
        $('#line-h-1').removeClass('invisible')
        winner = true
        return winner
    }
    else if (lista.includes("3") && lista.includes("4") && lista.includes("5")) {
        $('#line-h-2').removeClass('invisible')
        winner = true
        return winner
    }
    else if (lista.includes("6") && lista.includes("7") && lista.includes("8")) {
        $('#line-h-3').removeClass('invisible')
        winner = true
        return winner
    }
    else if (lista.includes("0") && lista.includes("3") && lista.includes("6")) {
        $('#line-v-1').removeClass('invisible')
        winner = true
        return winner
    }
    else if (lista.includes("1") && lista.includes("4") && lista.includes("7")) {
        $('#line-v-2').removeClass('invisible')
        winner = true
        return winner
    }
    else if (lista.includes("2") && lista.includes("5") && lista.includes("8")) {
        $('#line-v-3').removeClass('invisible')
        winner = true
        return winner
    }
    else if (lista.includes("2") && lista.includes("4") && lista.includes("6")) {
        $('#line-detoiz').removeClass('invisible')
        winner = true
        return winner
    }

    else if (lista.includes("0") && lista.includes("4") && lista.includes("8")) {
        $('#line-iztode').removeClass('invisible')
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
    winnermsg.addClass('invisible')
    draw.addClass('invisible')
    resetbtn.addClass('invisible')
    $('.box-win-h').addClass('invisible')
    $('.box-win-v').addClass('invisible')
    $('#line-iztode').addClass('invisible')
    $('#line-detoiz').addClass('invisible')
}