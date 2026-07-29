class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
        let left = 0;
        let right = height.length - 1;
        let maxWater = 0;

        while (left < right) {
            let width = right - left;
            
            let h = Math.min(height[left], height[right]);
            
            let currentWater = width * h;
            maxWater = Math.max(maxWater, currentWater);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxWater;
    }
}
