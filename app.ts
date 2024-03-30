#! /usr/bin/env node
import inquirer from 'inquirer'


let myBalance = 50000;
let myPin = 1234;

const pinAnswer = await inquirer.prompt([
    {
        name: "questionOne",
        message: "Enter Your Pin",
        type: "number"
    },
])
if (pinAnswer.questionOne == myPin) {
    console.log("\n Correct Pin Code!   Welcome M Salman  : In your Account \n")
    const operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Your Option",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Check Balance"]
        }
    ])
    if (operationAnswer.operation == "Withdraw") {
        let amountAnswer = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter Your Withdraw Amount",
                    type: "number",
                }
            ]
        )

        if (amountAnswer.amount > 50000) {
            console.log(`\n Sorry You have Not enough Money \n`)
        }
        else {
            myBalance -= amountAnswer.amount;
            console.log(`\n Your Remaining balance is  ${myBalance} \n`)
        }
    }
    else if (operationAnswer.operation === "Fast Cash") {
        let amountAnswer = await inquirer.prompt(
            [
                {
                    name: "fastCash",
                    message: "Select Your Fast Cash",
                    type: "list",
                    choices: ["1000", "5000", "10000", "25000"]
                }
            ]
        )
        console.log(` \n You Withdraw Fast Cash ${amountAnswer.fastCash} :`)
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log(`\n You Have ${myBalance} Balance! \n`)
    }

} else {
    console.log("Incorrect Pin Code!")

}