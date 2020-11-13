// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// You can return the array with its elements in any order.
//TESTS:

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.

// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].

// ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.

// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].

// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.

// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].

// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.

// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].

// [1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.

// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].

// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.

// [], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].

// [], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.

// [1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].

// [1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.

function diffArray(arr1, arr2) {
let newArr = []

function onlyInOneArray(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }
  onlyInOneArray(arr1, arr2);
  onlyInOneArray(arr2, arr1);

  return newArr
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// Another solution using .concat and .filter methods:
function diffArray(arr1, arr2) {
  var newArr = []
  // here, we set newArr equal to the result of concatination.
  // First we filter arr1, taking each element attempting to find a matching value in arr2. If the value of element in arr2 is -1, it means it does not exist in the second array.
  // we then do the same thing, but filtering arr2 instead of arr1.
  // here, concat is used to merge the filtered versions of arr1 and arr2 together
  newArr = arr1.filter(el => arr2.indexOf(el)=== -1).concat(arr2.filter(el => arr1.indexOf(el) === -1))
  return newArr
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);




// Solution using objects...although you cannot have an array with different data types in one, so all of the inputs are coerced into strings

function diffArray(arr1, arr2) {
  let newArr = []
  let counter = {}
  let joinedArr = [...arr1, ...arr2]

  for (let el in joinedArr) {
    counter[joinedArr[el]] = (counter[joinedArr[el]] || 0) + 1
  }

  // loop over the keys and check the values
  for (let key in counter) {
    if(counter[key] === 1) {
      newArr.push(key)
    }
  }
  return newArr
}

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])
