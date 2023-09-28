// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.
//  Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 
const propmt = require ("prompt-sync") ();//Imports the prompt-sync module
function netSalary(){
    let salary = parseInt(propmt("Enter basic salary:-"));//Prompt the user for basic salary and converts it to an interger
    let benefits = parseInt(propmt("Enter benefits:-"));//Prompt the user for benefits and converts it to an interger
    

    let grossSalary = salary+benefits;//Calculates gross salary
    console.log(`GrossSalary: ${grossSalary}`);//Displays gross salary
    
    let payee;// defined payee variable
    //Calculates payee based on user's gross salary
    if (grossSalary <= 24000){
        payee = (grossSalary*0.01);
    }
    else if (grossSalary >= 24001 && grossSalary<= 32333){
        payee = (grossSalary*0.25)
    }
    else if (grossSalary >= 32334 && grossSalary <= 500000){
        payee = (grossSalary*0.3)
    }
    else if (grossSalary >= 500001 && grossSalary <= 800000){
        payee = (grossSalary*0.325)
    }
    else {
        payee = (grossSalary*0.35)

    }
    console.log(`Payee: ${payee}`);//Displays calculates payee

    //NHIF Deductions 

    let nhifDeductions;// defined nhifdeductions variable
    //Calculates nhifdeductions based on user's gross salary
    switch(true) {
        case (grossSalary <= 5999):
            nhifDeductions = 150;   
            break;
        case  (grossSalary >= 6000 && grossSalary <= 7999):
            nhifDeductions = 300; 
            break;
        case   (grossSalary >= 8000 && grossSalary <= 11999):
            nhifDeductions = 400; 
            break;
        case  (grossSalary >= 12000 && grossSalary <= 14999):
            nhifDeductions = 500;
            break;
         case  (grossSalary >= 15000 && grossSalary <= 19999):
            nhifDeductions = 600; 
            break;
        case   (grossSalary >= 20000 && grossSalary <= 24999):
            nhifDeductions = 750;
            break;
        case   (grossSalary >= 25000 && grossSalary <= 29999):
            nhifDeductions = 850;
            break;
        case  (grossSalary >= 30000 && grossSalary <= 34999):
            nhifDeductions = 900;
            break;
         case  (grossSalary >= 35000 && grossSalary <= 39999):
            nhifDeductions = 950;
            break;
        case  (grossSalary >= 35000 && grossSalary <= 39999):
            nhifDeductions = 950;
            break;
         case (grossSalary >= 40000 && grossSalary <= 44999):
            nhifDeductions = 1000; 
            break;
        case (grossSalary >= 45000 && grossSalary <= 49999):
            nhifDeductions = 1100;
            break;
        case (grossSalary >= 40000 && grossSalary <= 44999):
            nhifDeductions = 1000; 
            break;
        case (grossSalary >= 50000 && grossSalary <= 59999):
            nhifDeductions = 1200; 
             break;
        case (grossSalary >= 60000 && grossSalary <= 69999):
            nhifDeductions = 1300;
             break;
        case (grossSalary >= 70000 && grossSalary <= 79999):
            nhifDeductions = 1400;
            break;
        case  (grossSalary >= 80000 && grossSalary <= 89999):
            nhifDeductions = 1500;
            break;
        case  (grossSalary >= 90000 && grossSalary <= 99999):
            nhifDeductions = 1600;
            break;
        case  (grossSalary >= 100000):
            nhifDeductions = 1700;
            break;
    }
    console.log(`NHIFDeduction: ${nhifDeductions}`);//displays calculated nhifdeductions 



    // if(grossSalary <= 5999){
    //     nhifDeductions = 150;;
    // }
    // else if (grossSalary >= 6000 && grossSalary <= 7999){
    //     nhifDeductions = 300;
    // }
    // else if (grossSalary >= 8000 && grossSalary <= 11999){
    //     nhifDeductions = 400;
    // }
    // else if (grossSalary >= 12000 && grossSalary <= 14999){
    //     nhifDeductions = 500;
    // }
    // else if (grossSalary >= 15000 && grossSalary <= 19999){
    //     nhifDeductions = 600;
    // }
    // else if (grossSalary >= 20000 && grossSalary <= 24999){
    //     nhifDeductions = 750;
    // }
    // else if (grossSalary >= 25000 && grossSalary <= 29999){
    //     nhifDeductions = 850;
    // }
    // else if (grossSalary >= 30000 && grossSalary <= 34999){
    //     nhifDeductions = 900;
    // }
    // else if (grossSalary >= 35000 && grossSalary <= 39999){
    //     nhifDeductions = 950;
    // }
    // else if (grossSalary >= 40000 && grossSalary <= 44999){
    //     nhifDeductions = 1000;
    // }
    // else if (grossSalary >= 45000 && grossSalary <= 49999){
    //     nhifDeductions = 1100;
    // }
    // else if (grossSalary >= 50000 && grossSalary <= 59999){
    //     nhifDeductions = 1200;
    // }
    // else if (grossSalary >= 60000 && grossSalary <= 69999){
    //     nhifDeductions = 1300;
    // }
    // else if (grossSalary >= 70000 && grossSalary <= 79999){
    //     nhifDeductions = 1400;
    // }
    // else if (grossSalary >= 80000 && grossSalary <= 89999){
    //     nhifDeductions = 1500;
    // }
    // else if (grossSalary >= 90000 && grossSalary <= 99999){
    //     nhifDeductions = 1600;
    // }
    // else if (grossSalary >= 100000){
    //     nhifDeductions = 1700;
    // }
    

    // NSSF Deductions

    let nssfDeduction = (grossSalary*0.06);//Calculates nssfDeductions
    console.log(`NSSFfDeduction: ${nssfDeduction}`);//displays nssfdDeductions

    let netWorth = (grossSalary-( payee + nhifDeductions + nssfDeduction));//Calculates net salary
    console.log(`NetSalary: ${netWorth}`);//displays net salary

}
netSalary();// Calls the function to propmt user for basic salary together with benefits and calculates the net salary