/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = new Array()
    let temp = new Array
    dfs(res, temp, nums, 0)
    return res
};

let dfs = (res, temp, nums, j) => {
    let temp1 = new Array()
    for (let a of temp) {
        temp1.push(a)
    }
    res.push(temp1)
    for (let i = j; i < nums.length; i ++) {
        temp1.push(nums[i])
        dfs(res, temp1, nums, i + 1)
        temp1.pop()
    }
}