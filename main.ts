input.onPinPressed(TouchPin.P2, function () {
    huenum += 0 - 20
    if (huenum < 0) {
        huenum = 255
    }
    strip.showColor(neopixel.hsl(huenum, 255, 50))
    basic.showNumber(huenum)
})
input.onPinPressed(TouchPin.P1, function () {
    huenum += 20
    if (huenum > 255) {
        huenum = 0
    }
    strip.showColor(neopixel.hsl(huenum, 255, 50))
    basic.showNumber(huenum)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 5; index++) {
        strip.showColor(neopixel.hsl(Math.randomRange(0, 255), 255, 50))
        basic.pause(100)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(100)
    }
    strip.showColor(neopixel.hsl(huenum, 255, 50))
})
let huenum = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGBW)
strip.showColor(neopixel.hsl(huenum, 255, 50))
