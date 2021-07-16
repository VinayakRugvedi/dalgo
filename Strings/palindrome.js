/*
  Question :
    For a given string of length N, check if its a palindrome or not
  Example :
    String: "xyzazyx", N = 7
    Solution: Yes, its a palindrome
*/

// Approach 1
function isPalindrome1 (string) {
  let reversedString = ""
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i]
  }
  console.log(reversedString === string ? `The given string : ${string} is a palindrome` : `The given string : ${string} is not a palindrome`)
  return reversedString === string
}

isPalindrome1("xyzazyx")
isPalindrome1("xydazyx")

/*
  Complexity analysis
  Space Complexity : O(N)
  Time Complexity : O(N^2)
    Its O(N^2) because we are doing string concatenation which always creates a new string as strings are immutable 
*/

// Approach 2
function isPalindrome2 (string) {
  const reversedStringCharacters = []
  for (let i = string.length - 1; i >= 0; i--) {
    reversedStringCharacters.push(string[i])
  }
  const reversedString = reversedStringCharacters.join("")
  console.log(reversedString === string ? `The given string : ${string} is a palindrome` : `The given string : ${string} is not a palindrome`)
  return reversedString === string
}

isPalindrome2("xyzazyx")
isPalindrome2("xydazyx")

/*
  Complexity analysis
  Space Complexity : O(N)
  Time Complexity : O(N)
*/

// Approach 3 - Recursion
function isPalindrome3 (string) {
  if (string.length === 1) return true
  if (string.length === 2) return string[0] === string[1]

  const firstCharacter = string[0]
  const lastCharacter = string[string.length - 1]
  const isPalindrome = firstCharacter === lastCharacter && isPalindrome3(string.substr(1, string.length - 2))
  return isPalindrome
}

console.log(isPalindrome3("xyzazyx") ? `The given string : xyzazyx is a palindrome` : `The given string : xyzazyx is not a palindrome`)
console.log(isPalindrome3("xydazyx") ? `The given string : xydazyx is a palindrome` : `The given string : xydazyx is not a palindrome`)

/*
  Complexity analysis
  Space Complexity : O(N)
  Time Complexity : O(N) (Actually O(N) / 2)
*/

// Approach 4
function isPalindrome4 (string) {
  let i = 0, j = string.length - 1;
  let isPalindrome = true;
  while (i < j) {
    if (string[i] !== string[j]) {
      isPalindrome = false
      break
    }
    i++
    j--
  }
  console.log(isPalindrome ? `The given string : ${string} is a palindrome` : `The given string : ${string} is not a palindrome`)
  return isPalindrome
}

isPalindrome4("xyzazyx")
isPalindrome4("xydazyx")

/*
  Complexity analysis
  Space Complexity : O(1)
  Time Complexity : O(N) (Actually O(N) / 2)
*/