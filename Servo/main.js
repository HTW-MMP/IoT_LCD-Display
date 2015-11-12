// Original https://github.com/intel-iot-devkit/upm/blob/master/examples/javascript/es08a.js
//
//Load servo module.
var servoModule = require("jsupm_servo");

console.log("Hello World");

//Instantiate Servo module on GPIO 5
var servo = new servoModule.ES08A(5);

function loop(angle){
    // use the library to set the angle
    servo.setAngle(angle);
    // log new angle to console
    console.log("Set angle to " + angle);
    // set new Angle
    if(angle >= 90){
    var newAngle = 0;
    }
    else{
        newAngle = 90;
    }
    // go for another round in 2 seconds
    setTimeout(function(){loop(newAngle)},2000);
}

// start loop
loop(0);
