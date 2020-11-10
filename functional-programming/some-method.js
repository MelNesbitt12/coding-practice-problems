// Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value.

// checkPositive([1, 2, 3, -4, 5]) should return true.

// checkPositive([1, 2, 3, 4, 5]) should return true.

// checkPositive([-1, -2, -3, -4, -5]) should return false.

function checkPositive(arr) {

  return arr.some((currentValue) => currentValue > 0)

}
checkPositive([1, 2, 3, -4, 5])
