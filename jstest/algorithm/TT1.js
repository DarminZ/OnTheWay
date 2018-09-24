// 字符串 无重复字符的最长子字符串长度
// 遍历字符串，记录当前位置不重复的子字符串长度，以及其中每个字符的下标，
// 之后出现已在记录的字符串中的字符后，就将原子字符串中这个字符之前的字符清除掉，并更新该字符的下标，
// 例如 记录abcd后下一个字符是c，那么把abcd中c之前字符的清除，dc留下
// 每次操作前记录下长度，最后返回最长的长度。
(function () {
    let str = 'aaabcdafgehij',
        len = str.length,
        max = 0,
        i = 0,
        j = 0,
        help = {len: 0};
    for (i; i < len; i++) {
        let s = str.charAt(i);
        if (typeof help[s] === 'number' && help[s] !== -1) {
            max = Math.max(max, help.len);
            for (j; j < help[s]; j++) {
                help[str.charAt(j)] = -1;
                help.len--;
            }
            help[s] = i;
            j++;
        } else {
            help[s] = i;
            help.len++;
        }
        max = Math.max(max, help.len);
    }
    console.log(max);
})();

// 输出一串数字，看能转换出多少种情况的ip
// 先可以检查这串数字满不满足ip字符串的格式，不满足直接返回0
// 再通过递归，n个格子，第一格取一个数，取两个数，取三个数，的三种情况下余下字符串能凑成（n-1）个格子满足条件的情况的和
(function () {
    let line = '000000',
        len = line.length,
        regexp = /^([01]*[0-9]*[0-9]|2[0-4][0-9]|25[0-5]){4}$/;
    if (len > 12 || len < 4 || !regexp.test(line)) {
        console.log(0);
        return;
    }

    function func(str, n) {
        let len = str.length,
            regexp = new RegExp('^([01]*[0-9]*[0-9]|2[0-4][0-9]|25[0-5]){' + n + '}$'),
            temp1,
            may = 0,
            i;
        if (len < n || len > 3 * n || !regexp.test(str)) {
            return 0;
        }
        if (1 === n) return 1;
        for (i = 1; i < len && i <= 3; i++) {
            temp1 = new RegExp('^[0-9]{' + i + '}([01]*[0-9]*[0-9]|2[0-4][0-9]|25[0-5]){' + (n - 1) + '}$');
            if (temp1.test(str)) {
                may += func(str.substring(i), n - 1);
            }
        }
        return may;
    }

    console.log(func(line, 4));
})()

// 给出一个m * m 的矩阵，每项的值只有1和0两种，
// 上下或左右相连的多个1为一组， 求有多少组
// 例如下面这个矩阵有3组
// 1 0 0 1 1
// 1 0 0 1 1
// 0 0 1 0 0
// 0 0 1 0 0
// 0 0 1 0 0
let readInx = 1,
    mm_in = [
        [0, 1, 0, 1],
        [1, 1, 1, 1],
        [0, 0, 1, 1],
        [0, 1, 1, 0]
    ];

function readline() {
    if (1 === readInx++) return mm_in.length;
    return mm_in[readInx - 3].join(" ");
}

(function () {
    readInx = 1;
    let m = readline(),
        i, j,
        line,
        rest = [],
        groups = [],
        stack = [],
        group,
        temp;
    for (i = 0; i < m; i++) {
        line = readline().split(/\s+/);
        for (j = 0; j < m; j++) {
            if (line[j] === '1') {
                rest.push({row: i, col: j});
            }
        }
    }

    function belongOneGroup(a, b) {
        if (a.row === b.row && Math.abs(a.col - b.col) === 1) return true;
        else if (a.col === b.col && Math.abs(a.row - b.row) === 1) return true;
        return false;
    }

    while (rest.length > 0) {
        group = [rest.shift()];
        for (i = 0; i < rest.length; i++) {
            let resti = rest[i];
            if (belongOneGroup(resti, group[0])) {
                rest.splice(i--, 1);
                group.push(resti);
                stack.push(resti);
            }
        }
        while (stack.length > 0) {
            temp = stack.pop();
            for (i = 0; i < rest.length; i++) {
                let resti = rest[i];
                if (belongOneGroup(resti, temp)) {
                    rest.splice(i--, 1);
                    group.push(resti);
                    stack.push(resti);
                }
            }
        }
        groups.push(group);
    }
    console.log(groups.length);
})();