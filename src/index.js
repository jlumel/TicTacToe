let boxes = $(".box")
let click = 2
let lista_cross = []
let lista_circle = []
let winner
let resetbtn = $('#reset')
let winnermsg = $('#winner')
let draw = $('#draw')
let jugador1 = $('#jugador1')
let jugador2 = $('#jugador2')
let startbtn = $('#start')
let modal = $('.myModal')
let player1 = $('#player1')
let player2 = $('#player2')

boxes.click(function () {
    let box = $(this)
    if (box.hasClass("circle") === false && box.hasClass("cross") === false) {
        if (click % 2 === 0 && winner !== true) {
            box.addClass("cross")
            lista_cross.push(box[0].id)
            player2.addClass('turno')
            player1.removeClass('turno')
        } else if (click % 2 === 1 && winner !== true) {
            box.addClass("circle")
            lista_circle.push(box[0].id)
            player1.addClass('turno')
            player2.removeClass('turno')
        }

        if (checkWinner(lista_cross)) {
            player1.removeClass('turno')
            player2.removeClass('turno')
            winnermsg.show()
            resetbtn.show()
            winnermsg.text('Ganó ' + player1.text().substring(3) + '!')

        } else if (checkWinner(lista_circle)) {
            player1.removeClass('turno')
            player2.removeClass('turno')
            winnermsg.show()
            resetbtn.show()
            winnermsg.text('Ganó ' + player2.text().substring(3) + '!')
        }


        if (click === 10 && !winner) {
            resetbtn.show()
            draw.show()
            player1.removeClass('turno')
            player2.removeClass('turno')
        }
        click++;
    }
});

resetbtn.click(function () {
    reset()
})

startbtn.click(function (e) {
    e.preventDefault()
    if (jugador1.val().length > 0 && jugador2.val().length > 0) {
        modal.hide()
        player1.text('X- ' + jugador1.val())
        player2.text('O- ' + jugador2.val())
        player1.addClass('turno')
    }
})