var CyclicRotation = function(array,k){
    // pop from array in the last index and push to this array in the first index
    for(var i=0;i<k;i++){
        array.unshift(array[array.length-1])
        array.pop()
    }
    return array;
}

module.exports = {CyclicRotation}