/*

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Tests:
chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
*/

function chunkArrayInGroups(arr, size) {
  let newArray = [];
  while (arr.length > 0){
    newArray.push(arr.splice(0, size))
  }
  return newArray;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);


// solved with a for loop instead:
function chunkArrayInGroups(arr, size) {
  let newArray = [];
  for (let i = 0; i < arr.length; i + size) {
    newArray.push(arr.splice(i, size))
  }
  return newArray;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
