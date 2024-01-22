/**
 * @param {number[]} nums
 * @return {number}
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */
const removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      nums[i] = 101;
    }
  }
  nums.sort((a, b) => a - b);
  return new Set(nums).size - 1;
};

console.log(removeDuplicates([1, 1, 2]));
