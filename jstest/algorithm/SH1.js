// 给出两个字符串，如果只用将第一个字符串交换两个字符变成另一个字符串输出1，否则0；
(function () {
    var line = 'aa aa',
        strs = line.split(/\s+/),
        a = strs[0],
        b = strs[1],
        lena = a.length,
        lenb = b.length,
        arr = [],
        i = 0,
        k = 0,
        tag = false,
        ABC = "abcdefghijklmnopqrstuvwxyz".split("");
    if (lena !== lenb) {
        console.log(0);
        return;
    }
    for (i = 0; i < 24; i++) {
        arr[i] = 0;
    }
    for (i = 0; i < lena; i++) {
        arr[ABC.indexOf(a.charAt(i))]++;
        if (arr[ABC.indexOf(a.charAt(i))] > 1) {
            tag = true;
        }
        if (a.charAt(i) !== b.charAt(i)) {
            k++;
        }
    }
    if (k === 0 && tag) {
        console.log(1);
        return;
    }
    if (k !== 2) {
        console.log(0);
        return;
    }
    for (i = 0; i < lenb; i++) {
        arr[ABC.indexOf(b.charAt(i))]--;
    }
    for (i = 0; i < 24; i++) {
        if (arr[i] > 0) {
            console.log(0);
            return;
        }
    }
    console.log(1);
})();

// 从x轴原点出发，每一步可选择左或右，第n步移动的长度一定要是n，
// 输入target，输出在最少移动多少步能到(0, target)
// 如target = 3， 输出 2； 1+2
//   target = 2， 输出 3； 1-2+3
(function () {
    var target = 1,
        n = 1,
        k = 1;
    target = Math.abs(target);
    while (k < target) {
        k += ++n;
    }
    k -= n--;
    // console.log(Math.min(n + 2 * (target - k), n + 1 + 2 * (k + n + 1 - target)));
})();

// 比较两个版本号，格式为1.2.1, v1 < v2 输出 -1，v1 = v2 输出 0， v1 > v2 输出 1；
// 0.1 < 1.2
// 1.0.1 < 1
// 1.0 = 1
// 1.0.2 < 1.0.2.1
(function () {
    var line = '1   1.0'.split(/\s+/),
        v1 = line[0].split("."),
        v2 = line[1].split("."),
        i = 0,
        v1len = v1.length,
        v2len = v2.length;
    for (i = 0; i < v1len && i < v2len; i++) {
        if (parseInt(v1[i]) - parseInt(v2[i]) > 0) {
            console.log(1);
            return;
        }
        if (parseInt(v1[i]) - parseInt(v2[i]) < 0) {
            console.log(-1);
            return;
        }
    }
    while (i < v1len) {
        if (parseInt(v1[i]) > 0) {
            console.log(1);
            return;
        }
        i++;
    }
    while (i < v2len) {
        if (parseInt(v2[i]) > 0) {
            console.log(-1);
            return
        }
        i++;
    }
    console.log(0);
})();
