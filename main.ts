input.onButtonPressed(Button.A, function () {
    Time += 1
    tl = Time
    basic.clearScreen()
    basic.showString("" + (Time))
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    timelock = 1
    if (mode == 0) {
        Time = 0
        while (Time < tl) {
            basic.showString("" + (Time))
            Time += 1
            basic.pause(1000)
            basic.clearScreen()
        }
        music.playMelody("D G A - F C - C5 ", 400)
    } else {
        while (Time > -1) {
            basic.showString("" + (Time))
            Time += -1
            basic.pause(1000)
            basic.clearScreen()
        }
        music.playMelody("D G A - F C - C5 ", 400)
    }
})
input.onButtonPressed(Button.B, function () {
    Time += -1
    tl = Time
    basic.clearScreen()
    basic.showString("" + (Time))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    mode += 1
})
let tl = 0
let mode = 0
let timelock = 0
let Time = 0
Time = 0
timelock = 0
mode = 0
basic.showString("0")
