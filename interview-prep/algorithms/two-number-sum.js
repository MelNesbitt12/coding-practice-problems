/* Two Number Sum: From AlgoExpert

Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in order. If no two numbners sum up to the target sum, the function should return an empty array.

You can't add a single integer to itself in order to reach the target

There will be at least one pair summing to the target in the array

Test Input:
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10

Test Output:
[-1, 11]
*/

// O(n) complexity
function twoNumberSum(array, targetSum) {
// 	create an empty object to hold pairs of numbers
  const numPairs = {}
  let newArr = []
  // 	loop through each number in the array
  for (const num of array) {
  // 		set variable equal to the difference between the target and the currentnumber
    const match = targetSum - num
  // 		if you find a match in the numPairs object
    if (match in numPairs) {
  // 			pushing the match and current number in the newArr
      newArr.push(match, num)
    } else {
  // 			set num value equal to true in the numPairs object so that we can
  // 			compare future numbers in the array to values in the numPairs object
      numPairs[num] = true
    }
  }
  return newArr
}

// Using two for loops:
function twoNumberSum(array, targetSum) {
	let uniqueArr = []
  for(let i = 0; i < array.length; i++) {
		for(let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === targetSum) {
			uniqueArr.push(array[i], array[j])
			}
		}
	}
	return uniqueArr
}

}
