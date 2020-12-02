import { readFileSync } from 'fs';

const input = readFileSync('./input.txt') + '';
const expenses = input.split('\n').map(Number)

var i;
var j;

for(i = 0; i < expenses.length; i++){
    for(j = 0; j < expenses.length; j++){
        if(expenses[i] + expenses[j] === 2020){
            console.log(expenses[i])
            console.log(expenses[j])
            console.log(expenses[i] * expenses[j])
        }
    }
}

//console.log(expenses[0])