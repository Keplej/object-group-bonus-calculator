const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?
// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// let percentagePeramerter= {
//   minPer: 0,
//   maxPer:.13
// }





// let bonusPercentage = {
//   reviewRating: 
//   bonusPercentageNumber: 
// }

// function bonusTest(employeesArray) {
//   const new = {
//     name: employeesArray.name,

//   }
//   for (let i of employeesArray) {
//     if (i.reviewRating <= 2) {
//       bonus = 0;
//     if (condition) {
      
//     }
//     if (condition) {
      
//     }
//   }
// }


//The bonusPercentage property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.
// let reviewPercentage3 = annualSalary * .04;
// let reviewPercentage4 = annualSalary * .06;
// let reviewPercentage5 = annualSalary * .10;

// function checkReviewRating(){
//   let compensation3 = annualSalary * .04;
//   let compensation4 = annualSalary * .06;
//   let compensation5 = annualSalary * .10;
// for (const review of employees){
//   console.log(review);
//   if(review.reviewRating = 3){
// }return compensation3;
// }
// }
// console.log(checkReviewRating());

// function percentageArray(array){
//   let total = 0
//   for(let i =0; i < array.length; i++){
//     if( array.annualSalary = 3) {  
      
//     } 
//   }
// }

// for (let index = 0; index < employees.length; index++) {
//   bonusCalc = employees[index];
  
// }

function bonusCalc(employee) {
  let newEmp = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  } //the block of code below is for the percentage number 
  if (employee.reviewRating <= 2) {
    newEmp.bonusPercentage = 0;
  } else if (employee.reviewRating === 3) {
    newEmp.bonusPercentage = .04;
  } else if (employee.reviewRating === 4) {
    newEmp.bonusPercentage = .06;
  } else if (employee.reviewRating === 5) {
    newEmp.bonusPercentage = .1;
  }//the block below is for the percentage of employee number if they qualify
  if (employee.employeeNumber == 4 && employee.reviewRating >= 2) {
    newEmp.bonusPercentage += .05;
  }//this block is for showing salary above 65000
  if (employee.annualSalary > 65000) {
     newEmp.bonusPercentage -= .01;
  }//This block is for showing the peramerters of the pergentage someone can get min 0%  max 13%
  if (newEmp.bonusPercentage > .13) {
    newEmp.bonusPercentage = .13
  }else if (newEmp.bonusPercentage < 0) {
    newEmp.bonusPercentage = 0;
  }
return 
}

console.log(bonusCalc(employees[0]));


//console.log(employees);

// var jsonObj=[];
// for (var index = 0; index < content.items.length; index++) {
//   var obj = {};
//   console.log(obj);
//   obj["id"]=content.items[index].id;
//   obj["title"]=content.items[index].summary;
//   obj["start"]=content.items[index].start.dateTime;
//   obj["description"]="";
//   jsonObj.push(obj);
//   console.log(jsonObj);
  //gcalEvents[index] = jsonObj;
//}

//bonusPercentage = individual bonus (.02, .03, .04, .05)
//totalCompensation = bonus + base annual
//if we take bonusPercertage * base annual = total bonus 
//totalBonus + annualSalary
//name: 'Mayella', employeeNumber: '89068', annualSalary: '35000' * reivewRaiting (let percentageNumber5 =
//{ per: 10%}