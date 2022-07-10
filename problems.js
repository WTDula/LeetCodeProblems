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