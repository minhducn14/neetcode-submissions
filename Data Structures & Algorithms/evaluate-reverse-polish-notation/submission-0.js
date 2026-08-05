class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for (let token of tokens) {
            if (token === '+') {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(a + b);
            } else if (token === '-') {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(a - b);
            } else if (token === '*') {
                let b = stack.pop();
                let a = stack.pop();
                stack.push(a * b);
            } else if (token === '/') {
                let b = stack.pop();
                let a = stack.pop();
                let res = Math.trunc(a / b);
                stack.push(res);
            } else {
                stack.push(Number(token));
            }
        }

        return stack[0];
    }
}
