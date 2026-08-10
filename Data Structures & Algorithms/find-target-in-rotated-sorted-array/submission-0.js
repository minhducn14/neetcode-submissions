class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
            let right = nums.length - 1;

                while (left <= right) {
                        let mid = Math.floor((left + right) / 2);

                                // Nếu tìm thấy target ngay ở giữa, trả về index luôn
                                        if (nums[mid] === target) {
                                                    return mid;
                                                            }

                                                                    // Kiểm tra xem nửa bên trái có đang được sắp xếp tăng dần bình thường không
                                                                            if (nums[left] <= nums[mid]) {
                                                                                        // Nếu target nằm trong khoảng của nửa trái này
                                                                                                    if (nums[left] <= target && target < nums[mid]) {
                                                                                                                    right = mid - 1; // Tìm ở nửa trái
                                                                                                                                } else {
                                                                                                                                                left = mid + 1;  // Tìm ở nửa phải
                                                                                                                                                            }
                                                                                                                                                                    } 
                                                                                                                                                                            // Ngược lại, nửa bên phải phải đang được sắp xếp tăng dần bình thường
                                                                                                                                                                                    else {
                                                                                                                                                                                                // Nếu target nằm trong khoảng của nửa phải này
                                                                                                                                                                                                            if (nums[mid] < target && target <= nums[right]) {
                                                                                                                                                                                                                            left = mid + 1;  // Tìm ở nửa phải
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                        right = mid - 1; // Tìm ở nửa trái
                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                                    // Không tìm thấy target
                                                                                                                                                                                                                                                                                        return -1;
    }
}
