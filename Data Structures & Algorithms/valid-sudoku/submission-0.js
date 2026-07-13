class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Array(9).fill(0).map(() => new Set());
        const cols = new Array(9).fill(0).map(() => new Set());
        const boxes = new Array(9).fill(0).map(() => new Set());

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const val = board[i][j];
                if (val === '.') continue;

                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) {
                    return false;
                }

                rows[i].add(val);
                cols[j].add(val);
                boxes[boxIndex].add(val);
            }
        }
        return true;
    }
}
