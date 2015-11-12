// Quelle: https://software.intel.com/en-us/iot/hardware/sensors/grove-light-sensor

var groveSensor = require('jsupm_grove');
// Create the light sensor object using analog AIO pin 0
var light = new groveSensor.GroveLight(0);
// Read the input and print both the raw value and a rough lux value,
// waiting one second between readings
function readLightSensorValue() {
  console.log(light.name() + " raw value ist " + light.raw_value() + ", ca. " +
    light.value() + " lux");
}
setInterval(readLightSensorValue, 1000);
