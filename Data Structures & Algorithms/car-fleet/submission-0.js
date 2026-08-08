class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let n = position.length;
        if (n === 0) return 0;

        let cars = [];
        for (let i = 0; i < n; i++) {
            cars.push({ pos: position[i], time: (target - position[i]) / speed[i] });
        }

        cars.sort((a, b) => b.pos - a.pos);

        let stack = [];

        for (let car of cars) {
            stack.push(car.time);

            if (stack.length >= 2) {
                let currentTime = stack[stack.length - 1];
                let prevTime = stack[stack.length - 2];

                if (currentTime <= prevTime) {
                    stack.pop();
                }
            }
        }

        return stack.length;
    }
}
