/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let index = 0;
    if (strs.length == 0) {
        return "";
    }
    for (let i = 0; i < strs[0].length; i ++) {
        let f = strs[0][index];
        for (let j = 0; j < strs.length; j ++) {
            if (strs[j].length == i || f != strs[j][index])
                return strs[j].substring(0,index);
        }
        index ++;
    }
    return strs[0].substring(0,index);
};