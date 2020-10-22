let poop = 0
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 1000; index++) {
        pins.analogWritePin(AnalogPin.P0, index)
        basic.pause(100)
    }
    poop = 1000
    for (let index = 0; index <= 999; index++) {
        pins.analogWritePin(AnalogPin.P0, poop)
        basic.pause(100)
        poop += -1
    }
})
