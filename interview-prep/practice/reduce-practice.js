
const numbers = [1, -1, 2, 3]

// REDUCER BEHIND THE SCENES
// let sum = 0
//
// for (let n of numbers)
//   sum += n
//
// console.log(sum)

// HOW REDUCE WORKS
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5


// first arg callback(accumulator), second arg is initial value
const sum = numbers.reduce((accumulator, currentValue) => {
  // reduce method gets result and stores it in accumulator
  return accumulator + currentValue
}, 0)
console.log(sum)
