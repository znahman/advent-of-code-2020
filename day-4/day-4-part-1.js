import { readFileSync } from 'fs';

const input = readFileSync('./input.txt') + '';
const passports = input.split(/\n\s*\n/)
var validPassportCount = 0;

var passportFields = ['byr:', 'iyr:', 'eyr:', 'hgt:', 'hcl:', 'ecl:', 'pid:']

var i;
var j;
for(i = 0; i < passports.length; i++){
    for(j = 0; j < passportFields.length; j++){
        if(passports[i].search(passportFields[j]) === -1){
            break
        } else {
            if(j === passportFields.length - 1){
                validPassportCount++
            }
        }
    }
}

console.log(validPassportCount)