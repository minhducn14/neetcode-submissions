class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // 1. Xác định khoảng giá trị của k
            let left = 1;
                let right = Math.max(...piles);
                    let result = right; // Lưu lại kết quả tối ưu

                        while (left <= right) {
                                let mid = Math.floor((left + right) / 2); // Tốc độ ăn thử nghiệm (k)

                                        // Tính tổng số giờ cần thiết với tốc độ mid
                                                let totalHours = 0;
                                                        for (let pile of piles) {
                                                                    // Hàm Math.ceil giúp tính số giờ (ví dụ: đống 7 quả, ăn tốc độ 3 -> ceil(7/3) = 3 giờ)
                                                                                totalHours += Math.ceil(pile / mid);
                                                                                        }

                                                                                                // Kiểm tra xem với tốc độ mid có kịp ăn trong h giờ không
                                                                                                        if (totalHours <= h) {
                                                                                                                    result = mid;       // Khả thi, lưu lại và thử tìm tốc độ nhỏ hơn ở bên trái
                                                                                                                                right = mid - 1;
                                                                                                                                        } else {
                                                                                                                                                    left = mid + 1;     // Quá chậm, phải tăng tốc độ lên ở bên phải
                                                                                                                                                            }
                                                                                                                                                                }

                                                                                                                                                                    return result;
    }
}
