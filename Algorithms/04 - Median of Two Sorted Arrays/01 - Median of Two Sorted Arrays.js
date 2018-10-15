/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let s = nums1.concat(nums2);
    s.sort(function(a, b) {
        return a - b;
    });
    let len = s.length;
    if (len % 2 === 1) {
        return s[~~(len / 2)];
    }else {
        return (s[len/2-1] + s[len/2])/2
    }
};