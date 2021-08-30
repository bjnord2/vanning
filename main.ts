let minimumFukt = 30
let doseringsTid = 10000
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    if (smarthome.ReadSoilHumidity(AnalogPin.P1) < minimumFukt) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(doseringsTid)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    basic.pause(60000)
})
