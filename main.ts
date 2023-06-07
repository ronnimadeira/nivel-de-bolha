input.onGesture(Gesture.ScreenUp, function () {
    basic.clearScreen()
    led.plot(2, 2)
})
input.onGesture(Gesture.TiltLeft, function () {
    if (x < 5) {
        basic.clearScreen()
        x += -1
        led.plot(x, y)
    } else {
        x = -4
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (x < 5) {
        basic.clearScreen()
        x += 1
        led.plot(x, y)
    } else {
        x = 4
    }
})
let y = 0
let x = 0
x = 2
y = 2
led.plot(x, y)
