class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            ')': '(',
            ']': '[',
            '}': '{'
        };

        for (let char of s) {
            if (map[char]) {
                const topElement = stack.length === 0 ? '#' : stack.pop();
                
                if (topElement !== map[char]) {
                    return false;
                }
            } else{
                stack.push(char);
            }
        }
        return stack.length === 0;
    }
}
