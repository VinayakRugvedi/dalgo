/*
  Question :
    For a given string of length N, find the longest substring which is a palindrome
  Example :
    String: "abaxyzzyxf", N = 10
    Solution: "xyzzyx"
*/

function getPalindromeFrom (string, leftIndex, rightIndex) {
  while (leftIndex >= 0 && rightIndex < string.length) {
    if (string[leftIndex] !== string[rightIndex]) {
      break;
    }
    leftIndex--;
    rightIndex++;
  }

  return [leftIndex + 1, rightIndex];
}

function longestPalindromeSubstring (string) {
  let palindromeSubstringIndices = [0, 1]
  for (let i = 1; i < string.length; i++) {
    const oddLengthPalindrome = getPalindromeFrom(string, i - 1, i + 1)
    const oddLength = oddLengthPalindrome[1] - oddLengthPalindrome[0]
    const evenLengthPalindrome = getPalindromeFrom(string, i - 1, i)
    const evenLength = evenLengthPalindrome[1] - evenLengthPalindrome[0]

    const currentSubstringLength = palindromeSubstringIndices[1] - palindromeSubstringIndices[0]
    if (oddLength > evenLength && currentSubstringLength < oddLength) {
      palindromeSubstringIndices = oddLengthPalindrome
    }
    if (evenLength > oddLength && currentSubstringLength < evenLength) {
      palindromeSubstringIndices = evenLengthPalindrome
    }
  }

  console.log(`The longest palindrome substring found is : ${string.slice(palindromeSubstringIndices[0], palindromeSubstringIndices[1])}`)
  return string.slice(palindromeSubstringIndices[0], palindromeSubstringIndices[1])
}

longestPalindromeSubstring("abaxyzzyxf")

/*
  Complexity analysis:
    Time complexity: O(N^2)
    Space complexity: O(1)
*/