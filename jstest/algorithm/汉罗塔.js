// a,b,c三个容器 n个大小不同盘在a上，一次移动一个盘，大盘永远不能在小盘上面，借住b把盘全部转移到c上
// f(n,a,b,c) = f(n-1,a,c,b) + a=>c + f(n-1,b,a,c) 即现把a上面的n-1个放到b中，再把最大盘放到c中，在递归将b中的n-1个放到c中
function HanoTemple(n) {
    function f(n, a, b, c) {
        var time1 = 0, time2 = 0;
        if (n === 1) {
            //console.log(a + ' => ' + c);
            return 1;
        }
        time1 = f(n - 1, a, c, b);
        //console.log(a + ' => ' + c);
        time2 = f(n - 1, b, a, c);
        return 1 + time1 + time2
    }

    console.log(f(n, 'a', 'b', 'c'));
}

function HanoTemple2(n) {
    var dp_cur = 1, dp_str = 'a => c', temp;
    for (var i = 1; i < n; i++) {
        dp_cur = dp_cur * 2 + 1;
        temp = dp_str;
        //dp_str = temp.replace(/b/g, 't').replace(/c/g, 'b').replace(/t/g, 'c') + '\na => c\n' + temp.replace(/a/g, 't').replace(/b/g, 'a').replace(/t/g, 'b');
    }
    console.log(dp_cur, dp_str);
}

function HanoTemple3(n) {
    var stack = [{n: n, a: 'a', b: 'b', c: 'c'}], top, time = 0;
    while (stack.length > 0) {
        top = stack.pop();
        if (top.n === 1) {
            time++;
            //console.log(top.a + ' => ' + top.c);
        } else {
            stack.push({n: top.n - 1, a: top.b, b: top.a, c: top.c});
            stack.push({n: 1, a: top.a, b: top.b, c: top.c});
            stack.push({n: top.n - 1, a: top.a, b: top.c, c: top.b});
        }
    }
    console.log(time);
}

HanoTemple(30);