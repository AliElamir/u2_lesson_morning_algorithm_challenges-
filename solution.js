// 1. Sum Squares

const sumSquares = (num) => {
  let total = 0
  for (let i = num; i > 0; i--) {
    total += i * i
  }
  return total
}

// Test

let startNum = 3

console.log('Result 1:', sumSquares(startNum)) // Expected output is 14

// 2. Invert Values

const invertValues = (numArr) => {
  let answer = 0
  let arr = []
  for (let i = 0; i < numArr.length; i++) {
    answer = numArr[i] * -1
    arr.push(answer)
  }
  return arr
  // Your solution here
}

// Test

const numArr2 = [1, 3, 4, 5]
console.log('Result 2:', invertValues(numArr2)) // Expected output is [-1, -3, -4, -5]

// 3. Reversed Strings

const reverseString = (str) => {
  // Your solution here
  arrStr = str.split('')
  let reversedStr = []
  for (i = arrStr.length - 1; i >= 0; i--) {
    reversedStr.push(arrStr[i])
  }

  return reversedStr.join('')
}

// Test

let stringToReverse = 'Wario'
console.log('Result 3:', reverseString(stringToReverse)) // Expected output is "oiraW"

// 4. Find Smallest Integer Not Present in Original Array (non-inclusive of zero)

const findSmallestInt = (numArr) => {
  // Your solution here
}

// Test

const numArr3 = [1, 3, 4, 5]
console.log('Result 4:', findSmallestInt(numArr3)) // Expected output is 2

// 5. Counting Sheep

const countingSheep = (boolArr) => {
  // Your solution here
}

// Test

const sheepArr = [true, false, false, true, true]
console.log('Result 5:', countingSheep(sheepArr)) // Expected output is 3

// 6. Calculate Average

const calculateAverage = (numArr) => {
  // Your solution here
}

// Test

const numArr4 = [20, 10, 60]
console.log('Result 6:', calculateAverage(numArr4)) // Expected output is 30

// 7. isPalindrome

const isPalindrome = (str) => {
  // Your solution here
}

// Test

const testStr = 'kayak'
console.log('Result 7:', isPalindrome(testStr)) // Expected output is true

// 8. Find the middle element

const findMiddleElement = (numArr) => {}

// Test

const arrayForMiddle = [10, 2, 33, 74, 5]
console.log('Result 8:', findMiddleElement(arrayForMiddle)) // Expected output is 33

// 9. Training on vowel count

const countVowels = (str) => {
  // Your solution here
}

// Test

const testStr2 = 'Casiopia'
console.log('Result 9:', countVowels(testStr2)) // Expected output is 5

// 10. Recursive Sum of an Array

const recursiveSum = (numArr) => {
  // Your solution code
}

// Test

const numbers = [1, 2, 3, 4, 5]
console.log('Result 10', recursiveSum(numbers))

// 11. Find the index of the numerically middle number

const findMiddleIndex = (numArr) => {
  // Your solution code
}

// Test

const outOfOrderArr = [4, 8, 1, 2, 3]
console.log('Result 11', findMiddleIndex(outOfOrderArr)) // Expected output is 1

// 12. Are Anagrams

const areAnagrams = (str1, str2) => {
  // Your solution here
}

// Test

console.log('Result 12:', areAnagrams('listen', 'silent')) // Expected output is true

// 13. Sum Diagonals

const sumDiagonals = (twoDArray) => {}

// Test

const testTwoDArray = [[1, 3, 2], [3, 6, 4][(7, 1, 9)]]

console.log('Result 13:', sumDiagonals(testTwoDArray)) //Expected output is 31
