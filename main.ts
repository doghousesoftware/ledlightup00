input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
