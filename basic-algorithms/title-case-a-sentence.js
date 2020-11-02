/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Tests:
titleCase("I'm a little tea pot") should return a string.

titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.

titleCase("sHoRt AnD sToUt") should return Short And Stout.

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.

*/
function titleCase(str) {
  let lowercase = str.toLowerCase().split(' ')
  for (let i = 0; i < lowercase.length; i++) {
    lowercase[i] = lowercase[i].charAt(0).toUpperCase() + lowercase[i].slice(1)
  }
  return lowercase.join(' ')
}

titleCase("I'm a little tea pot");