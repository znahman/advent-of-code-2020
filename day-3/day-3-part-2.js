
import { readFileSync } from 'fs';

const input = readFileSync('./input.txt') + '';
const treeMapRows = input.split('\n')

// const downStep = 1;
// const rightStep = 1;

let calculateNumTrees = (downStep, rightStep) => {
    var i;
    var j;
    var treeCount = 0;
    var newMap = [];
    // calculate how many times to repeat the map to the right
    const rightTraverses = treeMapRows[0].length / rightStep;
    const repetitions = Math.ceil(treeMapRows.length / rightTraverses);

    console.log({repetitions});

    // repeat the map 
    for(i = 0; i < treeMapRows.length; i++){
        var mapZoneToRepeat = treeMapRows[i];
        newMap[i] = ``;
        for(j=0; j < treeMapRows.length; j++){
            newMap[i] = newMap[i].concat(mapZoneToRepeat);
        }
    }

    if(downStep === 2){
        var rightStepCounter = 1;
        for(i = 2; i < treeMapRows.length; i+=downStep){
            console.log(`vert: ` + i + ` horiz: ` + rightStepCounter)
            if(newMap[i].charAt(rightStepCounter) === `#`){
                treeCount++;
            }
            rightStepCounter++;
        }
    } else{
        for(i = 1; i < treeMapRows.length; i+=downStep){
            if(newMap[i].charAt(i*rightStep) === `#`){
                treeCount++;
            }
        }
    }

    console.log({treeCount})
    return treeCount;
}

console.log(calculateNumTrees(1,1) * calculateNumTrees(1,3) * calculateNumTrees(1,5) * calculateNumTrees(1,7) * calculateNumTrees(2,1) )