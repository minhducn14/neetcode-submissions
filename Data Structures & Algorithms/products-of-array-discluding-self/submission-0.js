class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let output = new Array(n);

        output[0] = 1;
        for (let i = 1; i < n; i++) {
            output[i] = output[i - 1] * nums[i - 1];
        }

        let suffixProduct = 1;
        for (let i = n - 1; i >= 0; i--) {
            output[i] = output[i] * suffixProduct;
            suffixProduct = suffixProduct * nums[i];
        }

        return output;
    }
}
