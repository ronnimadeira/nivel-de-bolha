input.onGesture(Gesture.ScreenUp, function () {
    basic.clearScreen()
    led.plot(2, 2)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
    x += 1
    led.plot(x, y)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.clearScreen()
    x += -1
    led.plot(x, y)
})
let y = 0
let x = 0
x = 2
y = 2
led.plot(x, y)
basic.forever(function () {
	
})
