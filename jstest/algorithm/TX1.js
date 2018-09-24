/**
 * 和谐数 各位的和能整除自身的数为和谐数
 * 输入
 *  第1行 t 表示有t个数        如‘5’
 *  第2行 t个空格间隔的整数    如‘13 43 20 23 24’
 * 输出
 *  t行 第i行输出第i个数是否为和谐数（Yes 或 No）
*/
(function () {
    let t = 5,
        line = '13 43 20 23 24'.split(/\s+/),
        n = '',
        sn = 0,
        len = 0,
        i, j, temp;
    for (i = 0; i < t; i++) {
        n = line[i];
        temp = n.split('');
        len = temp.length;
        sn = 0;
        for (j = 0; j < len; j++) {
            sn += parseInt(temp[j]);
        }
        if (parseInt(n) % sn === 0) {
            console.log('Yes');
        } else {
            console.log('No');
        }
    }
})();

/**
 * 1和0 组成的字符串 将它们分割，分割规则是，分割后每块有且只有一个1，问有多少种分隔方法
 * 输入 由1和0组成的字符串
 * 输出 一个整数 表示分割的种数
 */
(function(){
    let str = '1011'.split(""),
        len = str.length,
        result = 0,
        i = 0,
        j = 0,
        flag = false;
    while (str[i] !== '1') {
        i++;
    }
    for (i; i < len; i++) {
        if (str[i] === '0') {
            if (!flag) {
                flag = true;
            }
            j++;
        } else {
            if (result === 0) {
                result = 1;
            }
            if (flag) {
                flag = false;
            }
            result *= (j + 1);
            j = 0;
        }
    }
    console.log(result);
})();


/**
 * 给两个字符串S 和 P，
 * 求S中出现的所有匹配 P 或（P的特殊结合） 的字符串长度平方和 的最大值
 * 相邻的两个P能够融合形成P的特殊结合，融合时它们前缀和后缀相同的部分可能会重叠在一起
 * 如 P为 aba
 * P的特殊结合包括：abaaba, ababa, aba
 */
(function (){
    let s = 'xyabababcba'.split(''),
        p = 'ab'.split(''),
        lens = s.length,
        lenp = p.length,
        next = [-1],
        i, j,
        energy = [],
        result = 0,
        before = -1,
        len = 0;
    for (i = 1, j = -1; i < lenp; i++) {
        while (j >= 0 && p[j + 1] !== p[i]) {
            j = next[j];
        }
        if (p[j + 1] === p[i]) {
            j++;
        }
        next[i] = j;
    }
    for (i = 0, j = -1; i < lens; i++) {
        while (j >= 0 && p[j + 1] !== s[i]) {
            j = next[j];
        }
        if (p[j + 1] === s[i]) {
            j++;
        }
        if (j === lenp - 1) {
            energy[i] = true;
            j = next[j];
        }
    }
    for (i = 0; i < lens; i++) {
        if (energy[i]) {
            if (i - before <= lenp) {
                len += i - before;
            } else {
                result += len * len;
                len = p.length;
            }
            before = i;
        }
    }
    result += len * len;
    console.log(result);
})();
