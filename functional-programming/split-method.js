// Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

// Tests:
// splitify("Hello World,I-am code") should return ["Hello", "World", "I", "am", "code"].

// splitify("Earth-is-our home") should return ["Earth", "is", "our", "home"].

// splitify("This.is.a-sentence") should return ["This", "is", "a", "sentence"].

function splitify(str) {
  let newString = str.split(/\W/g)
  return newString
}
splitify("Hello World,I-am code");
