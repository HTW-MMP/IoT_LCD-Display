var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console

// Will be called when we want to clear a line on the LCD
var clearString = "                "; 
var screen = require('jsupm_i2clcd'); // A new object of class "jsupm_i2clcd" (lcd class)
var LCD = new screen.Jhd1313m1 (0, 0x3E, 0x62); //Initialize Jhd1313m1 at 0x62 (RGB_ADDRESS) and 0x3E (LCD_ADDRESS)

// change background color
LCD.setColor (199,255,144);
// Set Cursot to Row 0, Column 0
LCD.setCursor(0,0);
// write hello
LCD.write("Hello");
// set Cursor to Row 1, Column 1
LCD.setCursor(1,0);
// write MMP
LCD.write("MMP");
// Clear display
setTimeout(clear,5000);



function clear(){
// clear the screen (also sets cursor to 0,0)
    LCD.clear();
// to only clear one line, use the following code
    /*
    LCD.setCursor(0,0);
    LCD.write(clearString);
    */
}

