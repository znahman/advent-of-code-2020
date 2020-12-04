import { readFileSync } from 'fs';

const input = readFileSync('./input.txt') + '';
const passports = input.split(/\n\s*\n/)
var validPassportCount = 0;
var dataValidatedPassportCount = 0;

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
                // we know we have a valid passport here, now validate the data
                var byrValid = false
                var iyrValid = false
                var eyrValid = false
                var hgtValid = false
                var hclValid = false
                var eclValid = false
                var pidValid = false

                //byr
                var byrYear = passports[i].substring(passports[i].search('byr:')+4, passports[i].search('byr:')+9)
                if(byrYear >= 1920 && byrYear <= 2002){
                    byrValid = true
                }

                // iyr
                var iyrYear = passports[i].substring(passports[i].search('iyr:')+4, passports[i].search('iyr:')+9)
                if(iyrYear >= 2010 && iyrYear <= 2020){
                    iyrValid = true
                }

                //eyr 
                var eyrYear = passports[i].substring(passports[i].search('eyr:')+4, passports[i].search('eyr:')+9)
                if(eyrYear >= 2020 && eyrYear <= 2030){
                    eyrValid = true
                }

                //hgt
                var height = passports[i].split('hgt:')[1].split(' ')[0]
                if(height.search('cm') > 0){
                    var heightNumberCM = height.substring(0, height.search('cm'))
                    if(heightNumberCM >= 150 && heightNumberCM <= 193){
                        hgtValid = true
                    }
                }
                if(height.search('in') > 0){
                    var heightNumberIN = height.substring(0, height.search('in'))
                    if(heightNumberIN >= 59 && heightNumberIN <= 76){
                        hgtValid = true
                    }
                }

                // hcl
                var haircolor = passports[i].substring(passports[i].search('hcl:')+4, passports[i].search('hcl:')+11)
                var validChars = /^[0-9a-zA-Z]+$/;
                if(haircolor.charAt(0) === '#' && haircolor.substring(1, haircolor.length).match(validChars)){
                    hclValid = true
                }
                
                // ecl
                var validEyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
                var eyecolor = passports[i].substring(passports[i].search('ecl:')+4, passports[i].search('ecl:')+7)
                var k;
                for(k = 0; k < validEyeColors.length; k++){
                    if(eyecolor === validEyeColors[k]){
                        eclValid = true
                        break
                    }
                }

                // pid
                var passportID = passports[i].substring(passports[i].search('pid:')+4, passports[i].search('pid:')+13)
                var numChars = /^[0-9]+$/;
                if(passportID.match(numChars)){
                    pidValid = true
                }
                
                if(byrValid && iyrValid && eyrValid && hgtValid && hclValid && eclValid && pidValid){
                    dataValidatedPassportCount++
                }
            }
        }
    }
}

console.log(validPassportCount)
console.log(dataValidatedPassportCount)