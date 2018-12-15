/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // make sure to do binary search for shorten array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1]
    }
    const m = nums1.length
    const n = nums2.length
    let low = 0
    let high = m
    while(low <= high) {
        const i = low + Math.floor((high - low) / 2)
        const j = Math.floor((m + n + 1) / 2) - i

        const maxLeftA = i === 0 ? -Infinity : nums1[i-1]
        const minRightA = i === m ? Infinity : nums1[i]
        const maxLeftB = j === 0 ? -Infinity : nums2[j-1]
        const minRightB = j === n ? Infinity : nums2[j]

        if (maxLeftA <= minRightB && minRightA >= maxLeftB) {
            return (m + n) % 2 === 1
                ? Math.max(maxLeftA, maxLeftB)
                : (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
        } else if (maxLeftA > minRightB) {
            high = i - 1
        } else {
            low = low + 1
        }
    }
};

findMedianSortedArrays([1, 3, 5, 7, 9], [2, 4, 6, 8]);