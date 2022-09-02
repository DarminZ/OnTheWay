function swap(arr, i , j) {
  let tmp  = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function generateArray(length = 100) {
  let arr = new Array(length);
  for(let i = 0;i < length; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  return arr;
}

// 插入排序 ///////////////////////////////////
// O(n^2)
function insertSort1(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
}
// insertSort1 
// cost(10000): 105, cost(100000): 11280
// 问题: 内层循环判断 arr[j] < arr[j - 1] 不需要全部执行，因为插入前，前i个已经是排好序了，只用往前比较到没有比自己小的就可以停了
function insertSort2(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      swap(arr, j, j - 1);
    }
  }
}
// insertSort2
// cost(10000): 56, cost(100000): 4407
// 问题: 内层循环中如果要向前间隔多次插入的话，需要交换位置多次，
//      每次设置3次值(tmp、arr[j]、arr[j - 1]), 但其实大部分交换中的arr[j - 1]设值后会被再次覆盖
//      因此不需要交换，单纯后移就行，这样只需要设置arr[j]，最后将i的值插入到正确的位置后
function insertSort3(arr) {
  let n = arr.length;
  let tmp, j;
  for (let i = 1; i < n; i++) {
    tmp = arr[i];
    for (j = i; j > 0 && tmp < arr[j - 1]; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = tmp;
  }
}
// insertSort3
// cost(10000): 42, cost(100000): 3796
// 插入排序  end///////////////////////////////////

// 快速排序 ///////////////////////////////////
function quickSort1 (arr, i = 0, j = arr.length - 1) {
  let l = i, r = j, ref = arr[l];
  if (l >= r) return ;

  while (l < r) {
    while (arr[r] >= ref && l < r) {
      r--;
    }
    swap(arr, r, l);
    while (arr[l] <= ref && l < r) {
      l++;
    }
    swap(arr, r, l);
  }

  quickSort1(arr, i, l - 1);
  quickSort1(arr, r + 1, j);
}
// quickSort1
// cost(10000): 6, cost(100000): 70, cost(1000000): error栈溢出
// 问题：参考值交换来交换去，没必要，可以交互，可以做到一次外循环只交换一次
function quickSort2 (arr, i = 0, j = arr.length - 1) {
  let l = i + 1, r = j, ref = arr[i];
  if (l >= r) return ;

  while (l < r) {
    while (arr[r] >= ref && l < r) {
      r--;
    }
    while (arr[l] <= ref && l < r) {
      l++;
    }
    if (l < r) {
      swap(arr, r, l);
    }
  }
  swap(arr, i, r);

  quickSort2(arr, i, l - 1);
  quickSort2(arr, r + 1, j);
}
// quickSort1
// cost(10000): 6, cost(100000): 65, cost(1000000): error栈溢出
// 优化效果不大，hh

function test(sort) {
  let arr = [42,66,89,63,13,63,41,74,9,20,34,6,2,5,23];
  sort(arr);
  console.log(arr.join(','));
}

function costTest(sort, length) {
  let arr = generateArray(length);
  let startTime = Date.now();
  sort(arr);
  console.log(Date.now() - startTime);
}

// insertSort1 insertSort2 insertSort3 
// quickSort1 quickSort2
let testSort = quickSort2;

test(testSort);
costTest(testSort, 10000);
costTest(testSort, 100000);