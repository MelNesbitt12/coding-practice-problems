/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

Tests:
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
*/

function bouncer(arr) {
  let boolArr = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]) boolArr.push(arr[i])
  }
  return boolArr
}

bouncer([7, "ate", "", false, 9]);
