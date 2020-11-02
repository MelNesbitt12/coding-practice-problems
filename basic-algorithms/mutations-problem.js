/* Basic Algorithm Scripting: Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string “hello” does not contain a “y”.
Lastly, ["Alien", "line"], should return true because all of the letters in “line” are present in “Alien”.*/

function mutation(arr) {
  let pt1 = arr[0].toLowerCase()
  let pt2 = arr[1].toLowerCase()
  for (let i = 0; i < pt2.length; i++){
    // let curr = pt1[i]
    // for (let j = 0; j < pt2.length; j++){
      if (pt1.indexOf(pt2[i]) < 0) {
        return false;
      }
  }
  return true;
}

mutation(["Hello", "Hey"]);
