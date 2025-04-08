radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    stopServo = false
    radio.sendString("B Pressed: Gate Open!")
    music.play(music.stringPlayable("B C5 A B C5 A B C ", 246), music.PlaybackMode.UntilDone)
    if (!(stopServo)) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P0, 50)
    }
})
let stopServo = false
radio.setGroup(1)
stopServo = true
basic.showIcon(IconNames.Heart)
