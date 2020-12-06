import { readFileSync } from 'fs';

const input = readFileSync('./input.txt') + '';
const responses = input.split(/\n\s*\n/)

var globalUniqueCount = 0
var i
for(i = 0; i < responses.length; i++){
    // remove line breaks
    const oneLine = responses[i].replace(/\n|\r/g, '')

    // sort lexicographically
    const alphabetical = oneLine.split('').sort()

    var j
    var currentChar
    var savedChar = alphabetical[0]
    var localUniqueCount = 1 // always call the first char unique, cus it's special
    for(j = 1; j < alphabetical.length; j++){
        currentChar = alphabetical[j]
        if(currentChar !== savedChar){
            localUniqueCount++
            savedChar = currentChar
        }

    }
    globalUniqueCount+=localUniqueCount
}

console.log({globalUniqueCount})



