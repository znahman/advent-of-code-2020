import { readFileSync } from 'fs';

const input = readFileSync('./input.txt') + '';
const rules = input.split('\n')

var totalBags = 0
let shinyGoldBagSearch = (startRuleIndex) => {
    var ruleSplitOnNumber = rules[startRuleIndex].split(/(\d+)/)
    // console.log(rules[startRuleIndex])
    // console.log(ruleSplitOnNumber)
    console.log({ruleSplitOnNumber})
    var i
    for(i = 0; i < ruleSplitOnNumber.length; i++){
        if(ruleSplitOnNumber[i].match(/(\d+)/)){
            totalBags += Number(ruleSplitOnNumber[i])
        }
    }

    console.log({totalBags})

    if(ruleSplitOnNumber.length === 1){
        console.log('dead end')
        return true
    } else {
        // spawn search functions for the other color bags in the rule
        var numToSpawn = (ruleSplitOnNumber.length - 1)/2
        //console.log(numToSpawn)
        
        // numToSpawnTimes
            // find the index of the rule that matches the color
            // call shinygoldbagsearch

        var j
        for(j = 2; j < numToSpawn*2+1; j+=2){
            var colorToFind = ruleSplitOnNumber[j].split('bag')[0].trim()
            
            var k
            for(k = 0; k < rules.length; k++){
                if(rules[k].substring(0, colorToFind.length) === colorToFind){
                    //console.log('calling with ' + colorToFind)
                    var t
                    for(t = 0; t < ruleSplitOnNumber[j-1]; t++){
                        if(!shinyGoldBagSearch(k)){
                            return false
                        }
                    }
                    
                }
            }
        }
        return true
    }
}

var p
var trueCount = 0
var reachedEnd = shinyGoldBagSearch(267)
console.log({totalBags})

console.log({reachedEnd})

// 3,1 5,2, 7,3, 9,4