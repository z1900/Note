var arr = [1 ,4, 2, 7, 11, 5, 8]

// 冒泡排序
function bubbleSort(arr) {
    // 第一轮就可以选出一个最大的
    var max = arr.length - 1
    for (var i = 0; i < max; i++) {
        // 判断是否已经完成了排序
        var done = true
        // 找到最大的放到最后，下一次遍历的时候不用在遍历最大的，所以是 max - i
        for (var j = 0; j < max - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
                done = false
            }
        }

        if (done) break
    }

    return arr
}



// 快速排序
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }

    var mid = Math.ceil(arr.length / 2),
        midItem = arr.splice(mid, 1)[0],
        left = [],
        right = []

    arr.forEach(function(item) {
        if (item <= midItem) {
            left.push(item)
        } else {
            right.push(item)
        }
    })

    var _left = quickSort(left),
        _right = quickSort(right)

    return _left.concat(midItem, _right)
}
