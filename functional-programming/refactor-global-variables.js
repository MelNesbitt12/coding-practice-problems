// Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.

// Note: Both functions should return an array, and any new parameters should be added before the bookName parameter


// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
let newBookArray = []

function add (bookList, bookName) {
  newBookArray = bookList.slice(0)
  newBookArray.push(bookName)
  return newBookArray

}

function remove (bookList, bookName) {
  var book_index = bookList.indexOf(bookName);
  let newBookArray = bookList.slice(0)

  if (book_index >= 0) {
    newBookArray.splice(book_index, 1);
    return newBookArray;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(newBookList)
console.log(newerBookList)
console.log(newestBookList)
