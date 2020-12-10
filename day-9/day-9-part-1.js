import { readFileSync } from 'fs';

const input = readFileSync('./input.txt') + '';
const xmasData = input.split('\n').map(Number)

var preambleLength = 25

var i
for(i = preambleLength; i < xmasData.length; i++){
    var considerationRangeStartIndex = i - preambleLength
    var considerationRangeEndIndex = i - 1
    var considerationValue = xmasData[i]
    var considerationValueIsValid = false

    var j
    for(j = considerationRangeStartIndex; j <= considerationRangeEndIndex; j++){
        var k
        for(k = considerationRangeStartIndex; k <= considerationRangeEndIndex; k++){
            if(j !== k){
                if(xmasData[j] + xmasData[k] === considerationValue){
                    considerationValueIsValid = true
                }
            }
        }
    }

    if(!considerationValueIsValid){
        console.log('value: ' + considerationValue + ' is invalid!')
    } else {
        //console.log('value: ' + considerationValue + ' is valid!')
    }
}