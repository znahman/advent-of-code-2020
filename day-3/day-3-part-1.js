import { readFileSync } from 'fs';

const input = readFileSync('./input.txt') + '';
const treeMapRows = input.split('\n')

var i;
var j;
var treeCount = 0;
//(1,3), (2,6), (3,9)

// calculate how many times to repeat the map to the right
const rightTraverses = treeMapRows[0].length / 3
const repetitions = Math.ceil(treeMapRows.length / rightTraverses)

console.log({repetitions})

// repeat the map 
for(i = 0; i < treeMapRows.length; i++){
    var mapZoneToRepeat = treeMapRows[i]
    for(j=0; j < treeMapRows.length; j++){
        treeMapRows[i] = treeMapRows[i].concat(mapZoneToRepeat)
    }
}

console.log(treeMapRows[0])

for(i = 1; i < treeMapRows.length; i++){
    if(treeMapRows[i].charAt(i*3) === `#`){
        treeCount++
    }
}

console.log(treeCount)