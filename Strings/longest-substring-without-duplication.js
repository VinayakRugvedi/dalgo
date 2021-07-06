/*
  Question :
    For a given string of length N, find the longest substring without any duplicate character
  Example :
    String: "lygometryisgod", N = 14
    Solution: "metryisgod"
*/

function longestSubstringWithoutDuplicates (string) {
  const lastSeen = {}

  const substringIndices = {
    start: 0,
    end: 0
  }
  let startIndex = 0

  for (let i = 0; i < string.length; i++) {
    const character = string[i]
    if (character in lastSeen) {
      startIndex = Math.max(lastSeen[character] + 1, startIndex)
    }
    lastSeen[character] = i
    const existingSubstringLength = substringIndices.end - substringIndices.start
    const currentSubstringLength = i - startIndex
    if (currentSubstringLength > existingSubstringLength) {
      substringIndices.start = startIndex
      substringIndices.end = i
    }
  }

  return string.substring(substringIndices.start, substringIndices.end + 1)
}

const string = "lygometryisgod"
const substring = longestSubstringWithoutDuplicates(string)

console.log(`The longest substring without any duplicate character is : ${substring}`)