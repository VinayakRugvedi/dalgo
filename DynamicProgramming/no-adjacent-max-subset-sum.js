/*
  Question :
    For a given array of positive integers of length N, find the maximum possible sum of the subset which doesnt not include any adjacent integers
    Array: [7, 10, 12, 7, 9, 14], N = 6
    Solution: 33 - [7, 12, 14]
*/

function noAdjacentMaxSubsetSum (array) {
  const maximumSumArray = []
  maximumSumArray.push(array[0])
  maximumSumArray.push(Math.max(array[0], array[1]))

  for (let i = 2; i < array.length; i++) {
    const newMaximum = Math.max(
      Math.max(array[i], maximumSumArray[1]),
      array[i] + maximumSumArray[0]
    )
    maximumSumArray[0] = maximumSumArray[1]
    maximumSumArray[1] = newMaximum
  }

  console.log(`The maximum subset sum of [${array}] is : ${maximumSumArray[1]}`)
  return maximumSumArray[1]
}

const array = [7, 10, 12, 7, 9, 14]
noAdjacentMaxSubsetSum(array)