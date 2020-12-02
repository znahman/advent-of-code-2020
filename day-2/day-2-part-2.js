import { readFileSync } from 'fs';

const input = readFileSync('./input.txt') + '';
const passwords = input.split('\n')

var validPasswordCount = 0;

// console.log({minNumber})
// console.log({maxNumber})
// console.log({keyLetter})
// console.log({password})

var i;
for(i = 0; i < passwords.length; i++){
    // get the current password parameters
    const minNumber = passwords[i].split('-')[0]
    const maxNumber = passwords[i].split('-')[1].split(':')[0].split(' ')[0]
    const keyLetter = passwords[i].split('-')[1].split(' ')[1].charAt(0)
    const password = passwords[i].split(' ')[2]

    // check to see if the current password is valid
    var indexOneContainsKeyLetter = false
    var indexTwoContainsKeyLetter = false 

    if(password.charAt(minNumber-1) === keyLetter){
        indexOneContainsKeyLetter = true
    }
    if(password.charAt(maxNumber-1) === keyLetter){
        indexTwoContainsKeyLetter = true
    }

    if((indexOneContainsKeyLetter && !indexTwoContainsKeyLetter)){
        validPasswordCount++
    }
    if(!indexOneContainsKeyLetter && indexTwoContainsKeyLetter){
        validPasswordCount++
    }
}

console.log({validPasswordCount})
