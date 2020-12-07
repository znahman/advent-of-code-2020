// based on the rules list, want to find the number of different bag colors that can
// eventually contain a shiny gold bag

// for each rule, need to extract how many unique (color) bags they hold
// need to traverse the rules for the unique bags, and see if "shiny gold" is in the list.
// if shiny gold is in the list, then mark the initial rule as good (increment counter)
// else, keep traversing the other bags listed
// the chain ends when a bag is reached that says "contain no other bags"

import { readFileSync } from 'fs';

const input = readFileSync('./input.txt') + '';
const rules = input.split('\n')

let shinyGoldBagSearch = (startRuleIndex) => {
    var ruleSplitOnNumber = rules[startRuleIndex].split(/(\d+)/)
    // console.log(rules[startRuleIndex])
    // console.log(ruleSplitOnNumber)

    var i
    for(i = 0; i < ruleSplitOnNumber.length; i++){
        if(ruleSplitOnNumber[i].search('shiny gold') !== -1){
            console.log('found shiny gold!')
            return true
        }
    }

    if(ruleSplitOnNumber.length === 1){
        console.log('dead end')
        return false
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
                    if(shinyGoldBagSearch(k)){
                        return true
                    }
                }
            }
        }
        return false
    }
}

var p
var trueCount = 0
for(p = 0; p < rules.length; p++){
    if(shinyGoldBagSearch(p) === true){
        trueCount++
    }
}

console.log(trueCount-1)

// 3,1 5,2, 7,3, 9,4