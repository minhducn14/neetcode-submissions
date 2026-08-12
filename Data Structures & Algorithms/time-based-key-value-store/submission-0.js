class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push({ timestamp, value });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return "";
        }

        let list = this.keyStore.get(key);
        let left = 0;
        let right = list.length - 1;
        let result = "";

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (list[mid].timestamp <= timestamp) {
                result = list[mid].value; 
                left = mid + 1; 
            } else {
                right = mid - 1;
            }
        }

        return result;
    }
}
