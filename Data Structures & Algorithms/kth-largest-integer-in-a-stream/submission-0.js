class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.nums = nums.sort((a, b) => a - b);
        while (this.nums.length > k) {
            this.nums.shift();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        let added = false;
        for (let i = 0; i < this.nums.length; i++) {
            if (val < this.nums[i]) {
                this.nums.splice(i, 0, val);
                added = true;
                break;
            }
        }
        if (!added) this.nums.push(val);

        if (this.nums.length > this.k) {
            this.nums.shift();
        }
        
        return this.nums[0];
    }
}
