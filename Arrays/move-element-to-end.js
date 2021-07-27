/*
  Question :
    For a given array of integers of length N and an element E which needs to be moved,
    move all the occurrences of the element E to the end of the array.
  Example :
    Array: [5, 6, 1, 5, 5, 10, 7, 5], N = 8 and E = 5
    Solution: [1, 6, 7, 10, 5, 5, 5, 5]
    Note: The order of the elements before the moved element is unimportant.
*/

function moveElementToEnd(array, elementToMove) {
  let startIndex = 0, endIndex = array.length - 1;
  while (startIndex < endIndex) {
    while (startIndex < endIndex && array[endIndex] === elementToMove) endIndex-=1

    if (array[startIndex] === elementToMove) {
      const temp = array[startIndex]
      array[startIndex] = array[endIndex]
      array[endIndex] = temp
    }
    startIndex++
  }

  console.log(`The array after moving all ${elementToMove}'s to end is : ${array}`)
  return array
  // NOTE: Here the algorithm is in place, might have to make a copy of the input array if required
}

const array = [5, 6, 1, 5, 5, 10, 7, 5]
const elementToMove = 5
moveElementToEnd(array, elementToMove)