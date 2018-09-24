function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var arr1 = [];
var arr2 = [1];
var arr3 = [4, 2, 6, 4, 3, 2, 6, 8, 1];

// 冒泡排序
function popSort(arr) {
    if (!Array.isArray(arr)) return [];
    var sortedArr = arr.concat(),
        len = arr.length,
        i = 0, j = 0;
    for (i = 0; i < len; i++) {
        for (j = 1; j < len - i; j++) {
            if (sortedArr[j - 1] > sortedArr[j]) {
                swap(sortedArr, j - 1, j);
            }
        }
    }
    return sortedArr;
}

// console.log(arr, popSort(arr));

// 选择排序
function selectSort(arr) {
    if (!Array.isArray(arr)) return [];
    var sortedArr = arr.concat(),
        len = sortedArr.length,
        i = 0, j = 0, min = 0;
    for (i = 0; i < len; i++) {
        min = i;
        for (j = i + 1; j < len; j++) {
            if (sortedArr[min] > sortedArr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(sortedArr, min, i);
        }
    }
    return sortedArr;
}

// console.log(arr1, selectSort(arr1));
// console.log(arr2, selectSort(arr2));
// console.log(arr3, selectSort(arr3));

// 插入排序
function insertSort(arr) {
    if (!Array.isArray(arr)) return [];
    var sortedArr = arr.concat(),
        len = sortedArr.length,
        i = 0, j = 0;
    for (i = 0; i < len; i++) {
        for (j = i + 1; j > 0; j--) {
            if (sortedArr[j] < sortedArr[j - 1]) {
                swap(sortedArr, j, j - 1);
            }
        }
    }
    return sortedArr;
}

// console.log(arr1, insertSort(arr1));
// console.log(arr2, insertSort(arr2));
// console.log(arr3, insertSort(arr3));

// 快速排序
function quickSort(arr) {
    if (!Array.isArray(arr)) return [];
    var sortedArr = arr.concat(),
        len = sortedArr.length,
        value = sortedArr[0], left = 1, right = len - 1;
    if (len <= 1) return sortedArr;
    while (left < right) {
        while (sortedArr[left] < value && left < right) left++;
        while (sortedArr[right] >= value && left < right) right--;
        if (left !== right) swap(sortedArr, left, right);
    }
    if (sortedArr[left] >= value) left--;
    if (left !== 0) swap(sortedArr, 0, left);
    return quickSort(sortedArr.slice(0, left)).concat([sortedArr[left]]).concat(quickSort(sortedArr.slice(left + 1, len)));
}

console.log(arr1, quickSort(arr1));
console.log(arr2, quickSort(arr2));
console.log(arr3, quickSort(arr3));

