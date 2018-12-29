var arr = [1 ,4, 2, 7, 11, 5, 8]
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

        console.log(quickSort(arr))
        