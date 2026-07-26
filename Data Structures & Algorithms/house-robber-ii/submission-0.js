class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];
    
        const robLinear = function(arr) {
            let prev2 = 0;
            let prev1 = 0;
            for (let num of arr) {
                let current = Math.max(prev1, prev2 + num);
                prev2 = prev1;
                prev1 = current;
            }
            return prev1;
        };

        let option1 = robLinear(nums.slice(0, nums.length - 1));
        
        let option2 = robLinear(nums.slice(1));

        return Math.max(option1, option2);
    }
}
