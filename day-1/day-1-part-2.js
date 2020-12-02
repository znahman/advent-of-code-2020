import { readFileSync } from 'fs';

const input = readFileSync('./input.txt') + '';
const expenses = input.split('\n').map(Number)

var i;
var j;
var k;

for(i = 0; i < expenses.length; i++){
    for(j = 0; j < expenses.length; j++){
        for(k = 0; k < expenses.length; k++){
            if(expenses[i] + expenses[j] + expenses[k] === 2020){
                console.log(expenses[i])
                console.log(expenses[j])
                console.log(expenses[k])
                console.log(expenses[i] * expenses[j] * expenses[k])
                break
            }
        }
    }
}

//console.log(expenses[0])