import { readFileSync } from 'fs';

const input = readFileSync('./input.txt') + '';
const responses = input.split(/\n\s*\n/)

// leave the new lines in, they mark a new person's response
// need to count instances where the same char is present in each line

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

var everybodyAnsweredYes = 0
var i
for(i = 0; i < responses.length; i++){
    // split on line breaks
    const individualResponses = responses[i].split(/\n|\r/g)

    // check each response for each letter of the alphabet
    // count the instances where a letter is present in all of them
    
    var j
    var k
    for(j = 0; j < alphabet.length; j++){
        var numPeople = individualResponses.length
        var responseContainsCharCount = 0
        for(k = 0; k < numPeople; k++){
            if(individualResponses[k].search(alphabet.charAt(j)) != -1){
                responseContainsCharCount++
            }
        }
        console.log({numPeople})
        console.log({responseContainsCharCount})
        if(responseContainsCharCount === numPeople){
            everybodyAnsweredYes++
        }
    }
}

console.log({everybodyAnsweredYes})



