/*
  For a given array of strings of length N, find and group all the anagrams
  NOTE: Anagrams are string which consist of the same characters but in a different order
  Example: ["cat", "dog", "god", "tca", "dgo"]
  Solution: [["cat", "tca"], ["dog", "god", "dgo"]]
*/

function groupAnagrams(array) {
  const sortedArrayOfStrings = []
  for (let i = 0; i < array.length; i++) {
    sortedArrayOfStrings[i] = array[i].split("").sort().join("")
  }
  const anagrams = {}
  for (let i = 0; i < sortedArrayOfStrings.length; i++) {
    if (sortedArrayOfStrings[i] in anagrams) anagrams[sortedArrayOfStrings[i]].push(array[i])
    else anagrams[sortedArrayOfStrings[i]] = [array[i]]
  }

  console.log(`The list of anagrams are : ${Object.values(anagrams)}`)
  return Object.values(anagrams)
}

const array = ["cat", "dog", "god", "tca", "dgo"]
groupAnagrams(array)

/*
  Complexity analysis:
    Time complexity: O(N * S*log(S)) where S is the length of the longest string
    Space complexity: O(N * S)
*/