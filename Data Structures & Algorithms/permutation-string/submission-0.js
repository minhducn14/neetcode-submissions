class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        let s1Count = new Array(26).fill(0);
        let s2Count = new Array(26).fill(0);
        let aCharCode = 'a'.charCodeAt(0);

        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - aCharCode]++;
            s2Count[s2.charCodeAt(i) - aCharCode]++;
        }

        const matches = (arr1, arr2) => {
            for (let i = 0; i < 26; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        };

        if (matches(s1Count, s2Count)) return true;

        let left = 0;
        for (let right = s1.length; right < s2.length; right++) {
            s2Count[s2.charCodeAt(right) - aCharCode]++;
            s2Count[s2.charCodeAt(left) - aCharCode]--;
            left++;

            if (matches(s1Count, s2Count)) return true;
        }

        return false;
    }
}
