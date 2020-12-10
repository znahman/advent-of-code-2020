import { readFileSync } from 'fs';

const input = readFileSync('./input.txt') + '';
const xmasData = input.split('\n').map(Number)

var goalSum = 1492208709
var goalSumIndex = 660

var i
for(i = 0; i < goalSumIndex; i++){
    var j
    for(j = i; j < 660; j++){
        var range = xmasData.slice(i,j)

        var sum = range.reduce((a, b) => {
            return a + b
        }, 0)

        if(sum === goalSum){
            var min = Math.min(...range)
            var max = Math.max(...range)
            var sumOfMinAndMax = min + max
            console.log({min})
            console.log({max})
            console.log({sumOfMinAndMax})
        }
    }
}