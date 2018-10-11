function swap(arr, start, end) {
    if (!Array.isArray(arr) || arr.length<=start || arr.length <= end) return;
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
}

var quickSort = function (arr, start, end) {
    if (arr === null || start >= end || arr.length <= 1) return;
    var left = start;
    var right = end;
    var value = arr[start++];
    while (start<end){
        while (start<end && arr[start] < value) start++;
        while (start<end && arr[end] >= value) end--;
        swap(arr, start, end);
    }
    if (arr[start]>=value) {start--;}
    swap(arr, left, start);
    quickSort(arr, left, start - 1);
    quickSort(arr, start+1, right);
}

var arr = [3,1,4,2,11,7,5,9,0];
quickSort(arr, 0, arr.length-1);
console.log(arr);