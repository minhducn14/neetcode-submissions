class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;

        let m = matrix.length;
        let n = matrix[0].length;
        
        let left = 0;
        let right = m * n - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            
            let row = Math.floor(mid / n);
            let col = mid % n;
            let val = matrix[row][col];

            if (val === target) {
                return true;
            } else if (val < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }
}
