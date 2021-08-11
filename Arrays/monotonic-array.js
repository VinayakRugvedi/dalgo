/*
  For a given array of integers of length N, determine if it is monotonic.
  Return true is its monotonic or false if it is not
  NOTE: An array is called monotonic if its non decreasing or non increasing
  Array : [-1, -9, -89, -100, -101, -101, -1020, -1023]
  Solution : true
*/

function isMonotonic(array) {
  let isNonIncreasing = true
  let isNonDecreasing = true

  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] < array[i]) isNonIncreasing = false
    if (array[i - 1] > array[i]) isNonDecreasing = false
  }

  console.log(`The given array is ${isNonIncreasing || isNonDecreasing ? "monotonic" : "not monotonic"}`)
  return isNonIncreasing || isNonDecreasing
}

const array = [-1, -9, -89, -100, -101, -101, -1020, -1023]
isMonotonic(array)

/*
  Complexity analysis:
    Time complexity : O(N)
    Space complexity : O(1)
*/


