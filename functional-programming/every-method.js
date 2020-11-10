// Use the every method inside the checkPositive function to check if every element in arr is positive. The function should return a Boolean value.

// Your code should use the every method.

// checkPositive([1, 2, 3, -4, 5]) should return false.

// checkPositive([1, 2, 3, 4, 5]) should return true.

// checkPositive([1, -2, 3, -4, 5]) should return false.

function checkPositive(arr) {
 return arr.every((currentValue) => currentValue > 0)
}
checkPositive([1, 2, 3, -4, 5])
