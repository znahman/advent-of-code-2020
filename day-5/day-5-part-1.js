import { readFileSync } from 'fs';

const input = readFileSync('./input.txt') + '';
const boardingPasses = input.split('\n')

// F means lower half
// B means upper half
// there are 128 rows (numbered 0 through 127)

var recursionCount = 0
let binaryIndexReducer = (boardingPass, lowIndex, highIndex, lowChar, highChar) => {
    //var currentChar = boardingPass[recursionCount]
    //console.log({currentChar})
    if(boardingPass[recursionCount] === lowChar){
        // take the lower half
        highIndex = highIndex - Math.ceil((highIndex-lowIndex)/2)
        //console.log('taking the lower half with low index: ' + lowIndex + ' and high index: ' + highIndex)
    } else {
        // take the upper half
        lowIndex = lowIndex + Math.ceil((highIndex-lowIndex)/2)
        //console.log('taking the upper half with low index: ' + lowIndex + ' and high index: ' + highIndex)
    }
    recursionCount++
    if((highIndex - lowIndex === 1)){
        if(boardingPass[recursionCount] === lowChar){
            // return lower
            recursionCount = 0
            return lowIndex
        } else {
            // return upper
            recursionCount = 0
            return highIndex
        }
    } else {
        return binaryIndexReducer(boardingPass, lowIndex, highIndex, lowChar, highChar)
    }
}

let seatIDs = []
var i
for(i = 0; i < boardingPasses.length; i++){
    var rowSpecifier = boardingPasses[i].substring(0,7)
    var columnSpecifier = boardingPasses[i].substring(7,10)

    var row = binaryIndexReducer(rowSpecifier, 0, 127, 'F', 'B')
    var column = binaryIndexReducer(columnSpecifier, 0, 7, 'L', 'R')

    seatIDs[i] = row * 8 + column
    //console.log(seatIDs[i])
}

console.log(Math.max(...seatIDs))


