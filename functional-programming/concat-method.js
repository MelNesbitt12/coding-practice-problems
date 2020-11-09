
//Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.

function nonMutatingConcat(original, attach) {
    let newArr = original.concat(attach)
    return newArr
}

var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
