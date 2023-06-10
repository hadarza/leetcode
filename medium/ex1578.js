/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */

// Time complexity O(N)
// Space complexity O(1)
var minCost = function(colors, neededTime) {
    let TimeWork = 0; // the time bob need to work to make the rob colorful
    let ArrayFromcolors = colors.split(""); // change colors string to array, so it will be easier to iterate over it
    var currentIndex = 1;
    var prevIndex = 0;

    while(currentIndex < ArrayFromcolors.length){
        console.log("Time work "+ currentIndex +" vs "+ prevIndex +" "+  ArrayFromcolors[currentIndex] + " , "+ ArrayFromcolors[prevIndex])
        if(ArrayFromcolors[prevIndex] === ArrayFromcolors[currentIndex]){
            TimeWork += Math.min(neededTime[currentIndex],neededTime[prevIndex]); // find min time to remove one of the ballons
            if(neededTime[currentIndex] > neededTime[prevIndex]) {
                prevIndex = currentIndex;
            }
        }else{
            prevIndex = currentIndex;
        }
        currentIndex++;
    }
    return TimeWork;
};

module.exports = {minCost}