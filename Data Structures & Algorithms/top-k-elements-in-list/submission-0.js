class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        
        for (let [num, freq] of map) {
            buckets[freq].push(num);
        }

        const result = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i].length > 0) {
                for (let num of buckets[i]) {
                    result.push(num);
                    if (result.length === k) return result;
                }
            }
        }
    }
}
