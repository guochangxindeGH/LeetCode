/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    permuteDFS(nums, 0, res);
    return res;
};

let permuteDFS = (num, start, res) => {
    if (start >= num.length) {
        var tmp = num.map(function(item) {
            return item;
        });
        res.push(tmp);
    }else {
        for (let i = start; i < num.length; i ++) {
            // [num[start],num[i]] = [num[i],num[start]];
            // num.splice(i,1,...num.splice(start, 1 , num[i]));

            let temp = num[start];
            num[start] = num[i]
            num[i] = temp

            permuteDFS(num, start + 1, res);

            // [num[start],num[i]] = [num[i],num[start]];
            // num.splice(i,1,...num.splice(start, 1 , num[i]));

            num[i] = num[start]
            num[start] = temp
        }
    }

}

let addItem = (a, b) => {

}

