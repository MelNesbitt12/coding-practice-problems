// Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, "I-like-Star-Wars" would be converted to "I like Star Wars". For this challenge, do not use the replace method.

// sentensify("May-the-force-be-with-you") should return a string.

// sentensify("May-the-force-be-with-you") should return "May the force be with you".
//
// sentensify("The.force.is.strong.with.this.one") should return "The force is strong with this one".
//
// sentensify("There,has,been,an,awakening") should return "There has been an awakening".

function sentensify(str) {
    let newString = str.split(/\W/g).join(' ')
    console.log(newString)
    return newString
}
sentensify("May-the-force-be-with-you");
