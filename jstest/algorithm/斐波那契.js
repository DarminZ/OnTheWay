// 1，1，2，3，5，8
// f(n) = f(n-1) + f(n-2) if n>2
function fibonacci(n) {
    if (typeof n !== 'number' || n < 1) return -1;

    var dp = [1, 1];
    for (var i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n - 1];
}

// console.log(fibonacci(7));

// 爬楼梯 一次可以爬一阶或二阶 求爬到n阶的方法数
function climbStairs(n) {
    if (typeof n !== 'number' || n < 1) return 0;

    var dp = [1, 2];
    for (var i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n - 1];
}

// 抢劫一排住户，但是不能抢邻近的住户，求最大抢劫量。
// f(i) = max(f(i-1), values[i] + f(i-2))
function maxRob(values) {
    if (!Array.isArray(values) || values.length === 0 || typeof values[0] !== 'number') return -1;

    var len = values.length;
    if (len === 1) return values[0];

    if (typeof values[1] !== 'number') return -1;
    var dp = [values[0], Math.max(values[0], values[1])];
    for (var i = 2; i < len; i++) {
        if (typeof values[i] !== 'number') return -1;

        dp[i] = Math.max(dp[i - 1], values[i] + dp[i - 2]);
    }
    return dp[len - 1];
}

// console.log(maxRob([2, 5, 4, 8, 3]));

// 抢劫环形住户，但是不能抢邻近的住户，求最大抢劫量。
// max (maxValue[1, ..., n-1], maxValue[2, ..., n])
function maxRob2(values) {
    if (!Array.isArray(values) || values.length === 0 || typeof values[0] !== 'number') return -1;

    var len = values.length;
    if (len === 1) return values[0];
    if (typeof values[1] !== 'number') return -1;
    if (len === 2) return Math.max(values[0], values[1]);

    var dp1 = [values[0], Math.max(values[0], values[1])];
    for (var i = 2; i < len - 1; i++) {
        if (typeof values[i] !== 'number') return -1;

        dp1[i] = Math.max(dp1[i - 1], values[i] + dp1[i - 2]);
    }

    if (typeof values[2] !== 'number') return -1;
    var dp2 = [0, values[1], Math.max(values[1], values[2])];
    for (var i = 3; i < len; i++) {
        if (typeof values[i] !== 'number') return -1;

        dp2[i] = Math.max(dp2[i - 1], values[i] + dp2[i - 2]);
    }

    return Math.max(dp1[len - 2], dp2[len - 1]);
}

// console.log(maxRob2([7, 5, 4, 8, 7]));

// 母牛生产 成熟的母牛每年都会生 1 头小母牛，小母牛第4年成熟, 求n年的牛数量
function cow(n) {
    var dp_c = [1, 1, 1]; // 每年成熟的母牛数量
    for (var i = 3; i < n; i++) {
        dp_c[i] = dp_c[i - 1] + dp_c[i - 3];
    }
    return 2 * dp_c[n - 1] + dp_c[n - 2] + dp_c[n - 3]; // 第n年成熟的母牛 + 近三年的小母牛
}

console.log(cow(5));