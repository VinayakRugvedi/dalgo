/*
  Question :
    For a given array of integers of length N and a target sum of S, find 2 such integers from the array if any which add up to the given sum
  Example :
    Array: [1, 2, -3, 9, -13, 10, 4, 8, -8, 5], N = 10 and S = 7
    Solution: -3(index 2) + 10(index 5) = 7
*/

function twoNumberSum(array, targetSum) {
  const visited = {}
  for (let i = 0; i < array.length; i++) {
    const requiredNumber = targetSum - array[i]
    if (requiredNumber in visited) {
      return [visited[requiredNumber], i]
    }
    visited[array[i]] = i
  }
  return []
}

const array = [1, 2, -3, 9, -13, 10, 4, 8, -8, 5]
const targetSum = 7
const result = twoNumberSum(array, targetSum)
if (result.length) {
  const [firstIndex, secondIndex] = result
  console.log(`The required sum of ${targetSum} can be obtained by ${array[firstIndex]} + ${array[secondIndex]} at index ${firstIndex} and ${secondIndex}`)
} else {
  console.log(`The required sum of ${targetSum} can not be obtained`)
}

/*
  Complexity analysis:
    Time complexity : O(N)
    Space complexity : O(N)
*/