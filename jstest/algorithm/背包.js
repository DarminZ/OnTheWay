// 有一个容量为 N 的背包，要用这个背包装下物品的价值最大，这些物品有两个属性：体积 w 和价值 v。
// dp[i][j] 前i件物品能装进容量为j的包里的最大价值 = Max(dp[i-1][j], dp[i][j-w[i]] + v[i])
function maxValue(N = 0, w = [], v = []) {
    var len = w.length, dp = [], i = 1, j = 1;
    while (i < len + 1) {
        dp[i++] = [0, 0];
    }
    while (j < N + 1) {
        if (j >= w[0])
            dp[1][j++] = v[0];
        else
            dp[1][j++] = 0;
    }
    for (i = 2; i < len + 1; i++) {
        for (j = 2; j < N + 1; j++) {
            if (j < w[i - 1]){
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w[i - 1]] + v[i - 1]);
            }
        }
    }
    return dp[len][N];
}
var N = 10, w = [3, 2, 6, 4], v = [2, 4, 5, 5];
console.log(maxValue(N, w, v));

/**
 * 120分钟的考试中一共qnums个题目，小明第i题如果花p[i]的时间能拿a[i]分，如果花q[i]的时间能拿b[i]分，求小明最多拿多少分
 * @param qnums 题目个数                            eg. 4
 * @param p     每题花费时间选择1           eg. [20, 10, 20, 30]
 * @param a     每题在时间选择1时能得到的分数 eg. [15, 20, 25, 28]
 * @param q     每题花费时间选择1           eg. [60, 30, 50, 60]
 * @param b     每题在时间选择2时能得到的分数 eg. [30, 30, 30, 30]
 * @returns {*} 最高的得分
 */
function maxScore(qnums, p, a, q, b) {
    var score = [[]],
        i = 0, j = 0, time = 120, temp;
    // 先对输入数据预处理，让p、a保存较少的时间对应的数据，q、b保存较长的时间对应的数据
    for (i = 0; i < qnums; i++) {
        if (p[i] > q[i]) {
            temp = p[i];
            p[i] = q[i];
            q[i] = temp;
            temp = a[i];
            a[i] = b[i];
            b[i] = temp;
        }
    }
    // 初始化score矩阵
    for (i = 1; i < qnums + 1 ; i++) {
        if (!score[i]) score[i] = [0];
    }
    for (j = 1; j < 121; j++) {
        score[0][j] = 0
        if (j >= q[0]) {
            score[1][j] = b[0];
        } else if (j >= p[0]) {
            score[1][j] = a[0]
        } else {
            score[1][j] = 0;
        }
    }
    for (i = 2; i < qnums + 1 ; i++) {
        for (j = 1; j < 121; j++) {
            temp = score[i - 1][j];
            if (j - p[i - 1] >= 0) {
                temp = Math.max(score[i - 1][j - p[i - 1]] + a[i - 1], temp);
            }
            if (j - q[i - 1] >= 0) {
                temp = Math.max(score[i - 1][j - q[i - 1]] + b[i - 1], temp);
            }
            score[i][j] = temp;
        }
    }

    return score[qnums][time];
}
var qnums = 4,
    p = [20, 10, 20, 30],
    a = [15, 20, 25, 28],
    q = [60, 30, 50, 60],
    b = [30, 30, 30, 30];
console.log(maxScore(qnums, p, a, q, b));