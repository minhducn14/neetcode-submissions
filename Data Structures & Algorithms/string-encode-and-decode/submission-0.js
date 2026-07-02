class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (let s of strs) {
            encoded += s.length + "#" + s;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let i = 0;
        
        while (i < str.length) {
            let slash = str.indexOf('#', i);
            let len = parseInt(str.substring(i, slash));
            
            i = slash + 1;
            
            result.push(str.substring(i, i + len));
            
            i += len;
        }
        return result;
    }
}
