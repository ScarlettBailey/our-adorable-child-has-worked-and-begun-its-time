let Lights_on = false
input.onSound(DetectedSound.Loud, function () {
    Lights_on = !(Lights_on)
    if (Lights_on) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . # . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
