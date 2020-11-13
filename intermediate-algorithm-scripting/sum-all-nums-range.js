// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// TESTS:
// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.

// sumAll([4, 1]) should return 10.

// sumAll([5, 10]) should return 45.

// sumAll([10, 5]) should return 45.


function sumAll(arr) {
  // arr.sort((a,b) => a - b)
  // let sum = 0
  // for (let i = arr[0]; i <= arr[1]; i++) {
  //   sum += i
  // }
  // return sum

  // using the spread operator to get the min and max value from th array
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i
  }
  return sum
}

sumAll([1, 4])
