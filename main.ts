let iCounter = 0
let oCounter = 0
input.onPinPressed(TouchPin.P0, function () {
    iCounter = 4
    basic.clearScreen()
    for (let index = 0; index < 5; index++) {
        oCounter = 4
        for (let index = 0; index < 5; index++) {
            led.toggle(oCounter, iCounter)
            basic.pause(200)
            oCounter += -1
        }
        iCounter += -1
    }
})
input.onButtonPressed(Button.A, function () {
    oCounter = 0
    basic.clearScreen()
    for (let index = 0; index < 5; index++) {
        iCounter = 0
        for (let index = 0; index < 5; index++) {
            led.toggle(oCounter, iCounter)
            basic.pause(200)
            iCounter += 1
        }
        oCounter += 1
    }
})
input.onButtonPressed(Button.B, function () {
    oCounter = 4
    basic.clearScreen()
    for (let index = 0; index < 5; index++) {
        iCounter = 4
        for (let index = 0; index < 5; index++) {
            led.toggle(oCounter, iCounter)
            basic.pause(200)
            iCounter += -1
        }
        oCounter += -1
    }
})
input.onPinPressed(TouchPin.P1, function () {
    iCounter = 0
    basic.clearScreen()
    for (let index = 0; index < 5; index++) {
        oCounter = 0
        for (let index = 0; index < 5; index++) {
            led.toggle(oCounter, iCounter)
            basic.pause(200)
            oCounter += 1
        }
        iCounter += 1
    }
})
