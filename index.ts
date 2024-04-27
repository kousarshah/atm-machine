#!/usr/bin/env node 

import inquirer from "inquirer";

let myBalance = 10000; // Dollar

let myPin = 2134;

let pinAnswer = await inquirer.prompt(
[
    {
        name : "pin",
        message :"Enter your pin",
        type : "number"
    }
]
);

// 21345 === 2134
if (pinAnswer.pin === myPin){
    console.log("Correct pin code!!!");

    let operationAns = await inquirer.prompt(
        [
            {
                name : "operation",
                message : "Please select option",
                type : "list",
                choices : ["fast cash", "withdraw" , "check balance"],
            }
        ]
    );

    // console.log(operationAns);


    if (operationAns.operation === "fast cash") {
        let fashcash  = await inquirer.prompt(
            [
                {
                    name : "withdrawalAmount",
                    message : "please select the withdrawal amount",
                    type : "list",
                    choices : ["1000", "2000", "5000", "7000"]

                }
            ]
        );
        // assignment operators =, =+, -=
        myBalance -= (fashcash.withdrawalAmount);
        console.log("your remaining balance is " + `${myBalance}`);

    } else if (operationAns.operation === "withdraw"){

        let amountAns = await inquirer.prompt([
            {
                name : "amount",
                message : "Enter your amount",
                type : "number"
            },
        ]);
        if (amountAns.amount > myBalance){
            console.log("Insufficient Balance");
        } else {
            myBalance -= amountAns.amount;
            console.log("Your remainig balance is :" + `${myBalance}`);
        } 
     } else if (operationAns.operation === "check balance"){
            console.log("Your balance is : " + `${myBalance}`);
      }
    } else {
            console.log("Incorrect pin number");
        }