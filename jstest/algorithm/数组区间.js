// 给出数组[-4 ,2, 3, -3] 求区间 i ~ j 的和，
// 可以转换为 sum[j] - sum[i-1]，其中 sum[i] 为 0 ~ i 的和。
var sums = [];

function initSum(nums) {
    var i, n = nums.length;
    sums.length = nums.length;
    sums[0] = nums[0];
    for (i = 1; i < n; i++) {
        sums[i] = sums[i - 1] + nums[i];
    }
}

function sumRange(i, j) {
    if (i > j || i < 1 || j > sums.length) return 'error';
    if (i === 1) return sums[j - 1];
    return sums[j - 1] - sums[i - 2];
}

function calcumRange(nums, i, j) {
    initSum(nums);
    console.log(sumRange(i, j));
    // console.log(sumRange(i2, j2));
    // console.log(sumRange(i3, j3));
}

// calcumRange([-4, 2, 3, -3], 2, 3);

// 连续子数组最大和
function maxSubArray(nums) {
    if (!Array.isArray(nums) || nums.length === 0) return 0

    var dp = [nums[0]], n = nums.length, max = nums[0];
    for (var i = 1; i < n; i++) {
        dp[i] = dp[i - 1] > 0 ? dp[i - 1] + nums[i] : nums[i];
        max = Math.max(dp[i], max);
    }
    return max;
}

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 数组中等差递增子区间的个数,[1,2,3,4]中有[1,2,3],[2,3,4],[1,2,3,4] 3个
// dp(i)代表以i结尾的等差递增子区间的个数,如果i处满足i-2，i-1，i是等差递增的，那么dp(i) = dp(i-1) + 1;
function numbersOfIncreaseArray(nums) {
    var dp = [0, 0], n = nums.length, i, total = 0;
    for (i = 2; i < n; i++) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            dp[i] = dp[i - 1] + 1;
        } else {
            dp[i] = 0;
        }
        total = total + dp[i];
    }
    return total;
}

console.log(numbersOfIncreaseArray([1, 2, 3, 4, 5]));