// 一步可以增加1或2或3或4或5，问最少多少步加到x
function minFoot(x) {
    if (x % 5 === 0) return parseInt(x/5);
    else return parseInt(x/5 + 1);
}
console.log(minFoot(10))

/**
 * 给定一个字符串只包含b、w，可以进行0次或多次以下操作：
 * 从某处切分，将两个得到的串同时翻转，再拼接在一起
 * 求最终可以得到的最长的连续的b、w相间的子串长度。
 * @param str
 * @returns {number}
 *
 * 思路： 因为翻转整个字符串和源字符串的最长连续b、w相间的字串数量是一样的，
 * 因此将每次操作后的字符串整个反转一下，这样就相当于将分割处左右的字符串交换位置，
 * 即将左边的部分移动到右边，这样看每次操作的结果就都是原字符串左边某一块移到右边。
 * 即都为 str + str 的子字符串，也就有可能连接处将b、w连在一块而形成最大子字符串，
 * 否则最大子字符串就为原字符串中最大子字符串
 */
function func(str) {
    str = str + str;
    var k = 1,
        max = 0,
        len = str.length,
        i;
    for (i = 1; i < len; i++) {
        if (str.charAt(i) !== str.charAt(i - 1)) {
            k++;
        } else {
            max = Math.max(max, k);
            k = 1;
        }
    }
    return Math.min(len / 2, max);
}

/**
 * n栋房子，标号从1到n，两个在标号上相差为1的房子视为相邻，
 * 这些房子中有k栋房子已有住户，现在搬入一栋房子的条件是房子没有人住，且房子两边都有住户，
 * 现在要求最小的可能符合要求的房子数，以及最大的可能符合要求的房子数。
 *
 * 例如 有6栋房子
 * #代表有住户， -代表空位，这种情况（###---），没有满足条件的房子，输出0
 * 最大的情况（#-#-#-），有两个位置满足条件，为最大，故输出2
 *
 * 输入： 第一行 t 表示测试用例数t
 *        接下来t行 每行两个整数 n 和 k ，（1 <= n <= 1,000,000,000, 0 <= k <= n）
 * 输出： 对于每个用例输出最小的可能数 以及 最大的可能数
 */
(function (){
    var t = parseInt(readline()),
        i = 0;
    for (i = 0; i < t; i++) {
        var line = readline(),
            nandk = line.split(/\s+/),
            n = nandk[0],
            k = nandk[1];
        console.log("0 " + Math.min(n - k, Math.max(k - 1, 0)));
    }
})()