// 求从矩阵的左上角到右下角的最小路径和，每次只能向右和向下移动。
// [[1,3,1],
//  [1,5,1],
//  [4,2,1]]
// dp(i, j) = min(dp(i,j-1), dp(i-1,j)) + grid[i][j]
function minPathSum(grid) {
    if (!Array.isArray(grid) || grid.length < 1 || !Array.isArray(grid[0])) return -1;

    var row = grid.length, col = grid[0].length, dp = [[grid[0][0]]];
    for (var i = 1; i < col; i++) {
        if (!dp[0]) dp[0] = [];
        dp[0][i] = dp[0][i - 1] + grid[0][i];
    }
    for (var i = 1; i < row; i++) {
        if (!dp[i]) dp[i] = [];
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    for (var i = 1; i < row; i++) {
        for (var j = 1; j < col; j++) {
            dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j];
        }
    }
    return dp[row - 1][col - 1];
}

var grid = [
    [1, 3, 1, 1],
    [1, 5, 1, 2],
    [4, 2, 1, 1]
];
// console.log(minPathSum(grid));

// 矩阵的总路径数 统计从矩阵左上角到右下角的路径总数，每次只能向右或者向下移动。
// f(m,n) = f(m-1,n) + f(m,n-1)
function pathNum(m, n) {
    var dp = [], i = 0, j = 0;
    while (i < m + 1) {
        if (!dp[i]) dp[i++] = [1];
    }
    while (j < n + 1) dp[0][j++] = 1;
    for (i = 1; i < m + 1; i++) {
        for (j = 1; j < n + 1; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m][n];
}

console.log(pathNum(4, 5));