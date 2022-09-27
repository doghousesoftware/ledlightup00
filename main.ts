input.onPinPressed(TouchPin.P0, function () {
    iCounter = gridSize - 1
    basic.clearScreen()
    for (let index = 0; index < gridSize; index++) {
        oCounter = gridSize - 1
        for (let index = 0; index < gridSize; index++) {
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
    for (let index = 0; index < gridSize; index++) {
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
    oCounter = gridSize - 1
    basic.clearScreen()
    for (let index = 0; index < gridSize; index++) {
        iCounter = gridSize - 1
        for (let index = 0; index < gridSize; index++) {
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
    for (let index = 0; index < gridSize; index++) {
        oCounter = 0
        for (let index = 0; index < gridSize; index++) {
            led.toggle(oCounter, iCounter)
            basic.pause(200)
            oCounter += 1
        }
        iCounter += 1
    }
})
let oCounter = 0
let iCounter = 0
let gridSize = 0
gridSize = 5
basic.clearScreen()
