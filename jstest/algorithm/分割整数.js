// 分割整数的最大乘积
// 例如n = 2, 2 = 1 + 1, f(n) = 1*1 = 1; n = 10; 10 = 3 + 3 + 4; f(n) = 3*3*4 = 36
// dp(n) = max(max(1 * (n-1), 2 * (n-2), ..., (n-1) * 1)), max(1 * dp(n-1), 2 * dp(n-2), ..., (n-2) * dp(2))
function maxMulFromIntegerBreak(n) {
    var dp = [0, 0, 1], i, j;
    for (i = 3; i < n + 1; i++) {
        dp[i] = i - 1;
        for (j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], Math.max(j * dp[i - j], j * (i - j)));
        }
    }
    return dp[n];
}

// console.log(maxMulFromIntegerBreak(10));

// 按平方数来分割整数，最小分割多少个数
// given n = 5, return 2 because 5 = 1 + 4;given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.
// 先求出小于n的所有平方数sqr[m]，dp[n] = min(dp[n-sqr[1]] + 1, dp[n-sqr[2]] + 1, ..., dp[n - sqr[m]] + 1)
function minLengthOfSqrBreak(n) {
    var dp = [0, 1], sqr = sqrArray(n), i, j, sqrlen = sqr.length;
    for (i = 2; i < n + 1; i++) {
        dp[i] = i;
        for (j = 0; j <= sqrlen && sqr[j] <= i ; j++) {
            dp[i] = Math.min(dp[i], dp[i - sqr[j]] + 1);
        }
    }
    return dp[n];
}

function sqrArray(n) {
    var i = 1, sqr = 1, res = [];
    while (sqr <= n) {
        res[i - 1] = sqr;
        i++;
        sqr = i * i;
    }
    return res;
}

console.log(minLengthOfSqrBreak(17));