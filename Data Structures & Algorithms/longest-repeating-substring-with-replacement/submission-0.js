class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map();
        let left = 0;
        let maxFreq = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            let char = s[right];
            map.set(char, (map.get(char) || 0) + 1);
            
            maxFreq = Math.max(maxFreq, map.get(char));

            if ((right - left + 1) - maxFreq > k) {
                let leftChar = s[left];
                map.set(leftChar, map.get(leftChar) - 1);
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
}
