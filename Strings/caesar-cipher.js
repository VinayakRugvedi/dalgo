/*
  Question :
    For a given string of length N consisting of lowercase characters, and an integer X,
    shift each character of the string with X characters down the alphabet
  Example :
    String: "xyz", N = 3 and X = 2
    Solution: "zab"
*/

function caesarCipher (string, numberOfPlaces) {
  numberOfPlaces = numberOfPlaces % 26;
  const shiftedCharacters = []
  for (let i = 0; i < string.length; i++) {
    const asciiCode = string.charCodeAt(i)
    let shiftedCode = asciiCode + numberOfPlaces
    if (shiftedCode > 122) {
      shiftedCode = 97 + (shiftedCode % 122)
    }
    const shiftedCharacter = String.fromCharCode(shiftedCode)
    shiftedCharacters.push(shiftedCharacter)
  }
  const shiftedString = shiftedCharacters.join("")
  console.log(`The caesar cipher text for ${string} is : ${shiftedString}`)
  return shiftedString
}

const string = "xyz"
const numberOfPlaces = 2
caesarCipher(string, numberOfPlaces)

/*
  Complexity analysis
  Space Complexity : O(N)
  Time Complexity : O(N)
*/