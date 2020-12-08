import { readFileSync } from 'fs';



let runTheProgram = (indexToChange) => {

    // get that fresh input from file
    const input = readFileSync('./input.txt') + '';
    const instructions = input.split('\n')

    const instructionExecutionCount = []

    var instructionToChange = instructions[indexToChange]
    var argumentToNotChange = instructionToChange.substring(4,instructionToChange.length)


    if(instructionToChange.substring(0,3) === 'jmp'){
        instructions[indexToChange] = 'nop ' + argumentToNotChange
    } else if(instructionToChange.substring(0,3) === 'nop'){
        instructions[indexToChange] = 'jmp ' + argumentToNotChange
    }

    //console.log(instructions[indexToChange])

    var i
    for(i = 0; i < instructions.length; i++){
        instructionExecutionCount[i] = 0
    }
    
    var programPointer = 0
    var accumulator = 0

    while(programPointer < instructions.length){
        //console.log({programPointer})
        
        var operation = instructions[programPointer].substring(0,3)
        var argument = instructions[programPointer].substring(4,instructions[programPointer].length)
        
        // console.log('instruction execution count: ' + instructionExecutionCount[programPointer])
        
        if(instructionExecutionCount[programPointer] === 1){
            //console.log('infinite loop detected')
            return 0
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
                // do nothing
                programPointer++
            }
        }
    }
    if(programPointer === instructions.length){
        console.log('reached the end!')
        return accumulator
    }
}

const input = readFileSync('./input.txt') + '';
const globalInstructions = input.split('\n')

var i
for(i = 0; i < globalInstructions.length; i++){
    if(globalInstructions[i].substring(0,3) === 'jmp'){
        var accumulatorJMP = runTheProgram(i)
        if(accumulatorJMP !== 0){
            console.log({i})
            console.log({accumulatorJMP})
        }
    }
    if(globalInstructions[i].substring(0,3) === 'nop'){
        var accumulatorNOP = runTheProgram(i)
        if(accumulatorNOP !== 0){
            console.log({i})
            console.log({accumulatorNOP})
        }
    }
}

