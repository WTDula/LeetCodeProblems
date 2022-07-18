// 1. Two Sum
// Easy

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let tempArray = []
    let remainder
    for(let i = 0; i < nums.length; i++){
        remainder = target - nums[i]
        for(let j = 1; j < nums.length; j++){
            if(nums[j] === remainder){
                tempArray.push(i)
                tempArray.push(j)
                return tempArray
            }
        }

    }
};
//test
let nums = [2,7,11,15]
console.log(twoSum(nums, 9))

// 9. Palindrome Number
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
//     For example, 121 is a palindrome while 123 is not.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
/**
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = (x) => {
    let reverseNum = x
    x = x.toString()
    reverseNum = reverseNum.toString().split("").reverse().join("")
    if(reverseNum === x){
        return "This number is a Palindrome"
    }
    else{
        return "This number is not a Palindrome"
    }
}
//test
console.log(isPalindrome(1221)) //expected true
console.log(isPalindrome(123)) //expected false

// 13. Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9. 
//     X can be placed before L (50) and C (100) to make 40 and 90. 
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.
// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let obj = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
      }
      let total = 0
      for(let i = 0; i < s.length; i++){
        obj[s[i]]< obj[s[i+1]]? total-=obj[s[i]] : total+=obj[s[i]]
      }
      return total
}
//test
console.log("IV in numerals is: ", romanToInt('IV'))
console.log("XIX in numerals is: ", romanToInt('XIX'))

// 118. Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
// Input: numRows = 1
// Output: [[1]]

// Constraints:
//     1 <= numRows <= 30

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generatePT = function(numRows) {
    let generateArray = [] //array to be returned

    for(let i = 0; i < numRows; i++){
        generateArray[i] = new Array(i+1) // new array in generateArray of size i + 1
        for(let j = 0; j < i + 1; j++){
            if(j === 0 || j === i){
                generateArray[i][j] = 1 // if we are at an endpoint, the number will be 1 (0 assumed as one of previous numbers, 1 as other).  Also handles baseline of 1
            }
            else {
                generateArray[i][j] = generateArray[i - 1][j - 1] + generateArray[i - 1][j] //else return addition of previous rows' 2 numbers
            }
        } 
    }
    return generateArray
}

//test
console.log("numRows = 5: ", generatePT(5))
console.log("numRows = 1: ", generatePT(1))