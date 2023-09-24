// Write a program that takes the speed of a car as input e.g 80. 
// If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), 
// it should give the driver one demerit point and print the total number of demerit points.

//    > For example, if the speed is 80, it should print: “Points: 2”. 
//    If the driver gets more than 12 points, the function should print: “License suspended”.

const propmt = require ("prompt-sync") ();//Imports the prompt-sync module

function speedInput(){
    let speed = propmt("Enter cars speed:-")//Prompts the user for car speed 
    if(speed<70){ //Checks if speed is less than 70
        console.log("ok") // Displays "ok" if speed is less than 70
    }
    else {
       
        let demeritPoint = ((speed-70)/5); //Calculates demerit points for the speeds greater then 70 by subtracting 70 from the users speed and dividing it by 5
        console.log(`Points: ${demeritPoint}`);// Displays the demerit points
        if (demeritPoint > 12){// Checks if the demerit points are greater than 12
            console.log("License suspended");//Displays 12 when the demerit points are greater than 12
        }
    }
}
speedInput(80);// Calls the function to propmt user for speed and calculates demerit points
