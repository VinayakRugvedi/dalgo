/*
  Question :
    For a given array of integers of length N and a target sum of S, find all the possible triplets which add up to the given sum
  Example :
    Array: [1, 2, -3, 9, -13, 10, 4, 8, -8, 5], N = 10 and S = 7
    Solution: [-8, 5, 10], [-3, 1, 9], [-3, 2, 8], [1, 2, 4]
*/

function threeNumberSum(array, targetSum) {
  array = array.sort((a, b) => a - b)
  const triplets = []
  
  for (let i = 0; i < array.length - 2; i++) {
    let leftIndex = i + 1
    let rightIndex = array.length - 1
    while (leftIndex < rightIndex) {
      const sum = array[i] + array[leftIndex] + array[rightIndex]
      if (sum === targetSum) {
        triplets.push(`[${array[i]}, ${array[leftIndex]}, ${array[rightIndex]}]`)
        leftIndex++
        rightIndex--
      } else if (sum < targetSum) {
        leftIndex++
      } else {
        rightIndex--
      }
    }
  }

  triplets.length === 0 ?
    console.log("No triplets were found") :
    console.log(`The following triplets were found : ${triplets}`)
  return triplets
}

const array = [1, 2, -3, 9, -13, 10, 4, 8, -8, 5]
const targetSum = 7

threeNumberSum(array, targetSum)

/*
  Complexity Analysis
    Time complexity:
      We start by sorting the array which can be considered as O(NlogN)
      After which we have O(N^2)
    Space complexity: O(N)
      We are bound by N though we might have some redundancy
*/