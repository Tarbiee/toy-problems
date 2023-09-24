// Write a function that prompts the user to input student marks. 
// The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

//         A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

const propmt = require ("prompt-sync") ();//Imports the prompt-sync module

 function gradeStudent(){ 
    let marks = parseInt(propmt("Enter marks between 0 and 100:-")); //Prompt the user for input and converts it to an interger

 if(isNaN(marks) || marks < 0 || marks > 100){ // Check if number is between 0 and 100
    console.log("Marks are invalid!")
 }
 else {
    let grade;
    // Calculates the grade based on the input marks
    if (marks>=79){
        grade = 'A';
    }
    else if (marks>=60 && marks<=79){
        grade = 'B';
    }
    else if (marks>=50 && marks<=59){
        grade = 'C';
    }
    else if (marks>=40 && marks<=49){
        grade = 'C';
    }
    else {
        grade = 'D';
    }
    console.log(grade); //Outputs calculated grade
}

 }
 gradeStudent(); // Calls the function to propmt user for input and calculate grade