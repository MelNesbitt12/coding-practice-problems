/* Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.

Passed
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].

Passed
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000].

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3]. */


// return an array consisting of the largest number from each provided sub-array

// return an array consisting of the largest number from each provided sub-array

function largestOfFour(array) {
  // first, declare an empty array to hold the largest values from each sub-array
  let largestValues = []
  // next, create two loops: one to loop through each sub-array and another to check the values within the sub-arrays
  for (let i = 0; i < array.length; i++) {
    // declare a variable to represent the current array iterating over
    let currSubArray = array[i]
    // set variable equal to first number (in index 0) of the current sub array.
    let largestNum = currSubArray[0]
    // second for loop should loop over the numbers in the sub-array
    for (let j = 0; j < currSubArray.length; j++) {
      // declare a variable to represent the index you're iterating over
      let currNum = currSubArray[j]
      if (currNum > largestNum) {
        largestNum = currNum
      }
    }
    largestValues.push(largestNum)
  }
  return largestValues;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
