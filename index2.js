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
    if(grossSalary <= 59999){
        nhifDeductions = 150;;
    }
    else if (grossSalary >= 6000 && salary <= 7999){
        nhifDeductions = 300;
    }
    else if (grossSalary >= 8000 && salary <= 11999){
        nhifDeductions = 300;
    }
    else if (grossSalary >= 12000 && salary <= 14999){
        nhifDeductions = 300;
    }
    else if (grossSalary >= 15000 && salary <= 19999){
        nhifDeductions = 300;
    }
    else if (grossSalary >= 20000 && salary <= 24999){
        nhifDeductions = 300;
    }
    else if (grossSalary >= 25000 && salary <= 29999){
        nhifDeductions = 300;
    }
    else if (grossSalary >= 30000 && salary <= 34999){
        nhifDeductions = 300;
    }
    else if (grossSalary >= 35000 && salary <= 39999){
        nhifDeductions = 300;
    }
    else if (grossSalary >= 40000 && salary <= 44999){
        nhifDeductions = 300;
    }
    else if (grossSalary >= 45000 && salary <= 49999){
        nhifDeductions = 300;
    }
    else if (grossSalary >= 50000 && salary <= 59999){
        nhifDeductions = 300;
    }
    else if (grossSalary >= 60000 && salary <= 69999){
        nhifDeductions = 300;
    }
    else if (grossSalary >= 70000 && salary <= 79999){
        nhifDeductions = 300;
    }
    else if (grossSalary >= 80000 && salary <= 89999){
        nhifDeductions = 300;
    }
    else if (grossSalary >= 90000 && salary <= 99999){
        nhifDeductions = 300;
    }
    else if (salary >= 100000){
        nhifDeductions = 300;
    }
    console.log(`NHIFDeduction: ${nhifDeductions}`);//displays calculated nhifdeductions 

    // NSSF Deductions

    let nssfDeduction = (grossSalary*0.06);//Calculates nssfDeductions
    console.log(`NSSFfDeduction: ${nssfDeduction}`);//displays nssfdDeductions

    let netWorth = (grossSalary-( payee + nhifDeductions + nssfDeduction));//Calculates net salary
    console.log(`NetSalary: ${netWorth}`);//displays net salary

}
netSalary();// Calls the function to propmt user for basic salary together with benefits and calculates the net salary