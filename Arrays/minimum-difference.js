/*
  Question :
    For the given two arrays of length N and M consisting of integers, find a pair (an integer from each array)
    which has the smallest difference
  Example :
    First Array: [1, 2, -3, 9, -13, 10, 4, 8, -8, 5], N = 10
    First Array: [1, 2, -3, 9, -13, 10, 4, 8, -8, 5], M = 10
    Solution: []
*/

function minimumDifference(firstArray, secondArray) {
  firstArray = firstArray.sort((a, b) => a - b);
  secondArray = secondArray.sort((a, b) => a - b);
  let firstIndex = 0, secondIndex = 0, smallestDifference = Infinity;
  let currentDifference = Infinity;
  let minimumDifferencePair = []

  while(firstIndex < firstArray.length && secondIndex < secondArray.length) {
    const firstNumber = firstArray[firstIndex]
    const secondNumber = secondArray[secondIndex]
    if (firstNumber === secondNumber) {
      smallestDifference = 0
      minimumDifferencePair = [firstArray[firstIndex], secondNumber]
      break
    }
    if (firstNumber < secondNumber) {
      currentDifference = secondNumber - firstNumber;
      firstIndex++
    }
    if (firstNumber > secondNumber) {
      currentDifference = firstNumber - secondNumber;
      secondIndex++
    }
    if (currentDifference < smallestDifference) {
      smallestDifference = currentDifference;
      minimumDifferencePair = [firstNumber, secondNumber]
    }
  }

  console.log(`The smallest difference is ${smallestDifference} from ${minimumDifferencePair}`)
  return minimumDifferencePair;
}

const firstArray = [-1, 5, 10, 20, 28, 3]
const secondArray = [26, 134, 135, 15, 17]
minimumDifference(firstArray, secondArray)

/*
  Complexity Analysis:
    Time complexity: O(NlogN + MlogM)
    Space complexity: O(1)
*/