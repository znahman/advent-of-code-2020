import { readFileSync } from 'fs';

const input = readFileSync('./input.txt') + '';
const instructions = input.split('\n')

const instructionExecutionCount = []

var i
for(i = 0; i < instructions.length; i++){
    instructionExecutionCount[i] = 0
}

var programPointer = 0
var accumulator = 0

// console.log(instructions[1].substring(0,3))
// console.log(instructions[1].substring(4,instructions[1].length))

while(programPointer <= instructions.length){
    var operation = instructions[programPointer].substring(0,3)
    var argument = instructions[programPointer].substring(4,instructions[programPointer].length)

    console.log({programPointer})
    console.log({operation})
    console.log({argument})

    console.log('instruction execution count: ' + instructionExecutionCount[programPointer])
    
    if(instructionExecutionCount[programPointer] === 1){
        console.log('stopping before executing twice')
        break
    } else {
        instructionExecutionCount[programPointer]++
        if(operation === 'acc'){
            if(argument.charAt(0) === '+'){
                accumulator+=Number(argument.substring(1, argument.length))
            }
            if(argument.charAt(0) === '-'){
                accumulator-=Number(argument.substring(1, argument.length))
            }
            programPointer++
        }
        if(operation === 'jmp'){
            if(argument.charAt(0) === '+'){
                programPointer+=Number(argument.substring(1, argument.length))
            }
            if(argument.charAt(0) === '-'){
                programPointer-=Number(argument.substring(1, argument.length))
            }
        }
        if(operation === 'nop'){
            programPointer++
        }
    }
}

console.log({accumulator})

