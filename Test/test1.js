const nums = [2, 7, 9, 11, 13]
const target = 15
const nameArry = ['h', 'e', 'l', 'o']
console.log(nameArry['o'])


const twoSum = function (nums, target) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (arr[complement] !== undefined) return [arr[complement], i];
        arr[nums[i]] = i;
        console.log(arr)
    }
};

twoSum(nums, target);